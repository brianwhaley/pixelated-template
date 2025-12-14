#!/usr/bin/env node
/*
 * Small setup script invoked after degit or clone to rename package.json, set repository, optional author, license, and update values.
 * Usage: node scripts/setup.js <projectName> [gitRepoUrl]
 */
const fs = require('fs')
const path = require('path')

function readJSON(file) {
	return JSON.parse(fs.readFileSync(file, 'utf8'))
}
function writeJSON(file, data) {
	fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n",
		'utf8')
}

const projectName = process.argv[2] || path.basename(process.cwd())
const gitRepoUrl = process.argv[3] || ''

const pkgFile = path.join(process.cwd(), 'package.json')
if (!fs.existsSync(pkgFile)) {
	console.error('package.json not found; aborting.')
	process.exit(1)
}
const pkg = readJSON(pkgFile)
pkg.name = projectName
pkg.version = '0.1.0'
if (gitRepoUrl) {
	pkg.repository = { type: 'git', url: gitRepoUrl }
}

// Remove template-only fields, just in case
if (pkg.private === true) {
	// keep it private default false by template
}

writeJSON(pkgFile, pkg)

// Copy local example files if they don't exist
const localExample = path.join(process.cwd(), '.local', 'pixelated.config.json.example')
const localTarget = path.join(process.cwd(), '.local', 'pixelated.config.json')
try {
	if (fs.existsSync(localExample) && !fs.existsSync(localTarget)) {
		fs.mkdirSync(path.join(process.cwd(), '.local'), { recursive: true })
		fs.copyFileSync(localExample, localTarget)
		console.log('Created .local/pixelated.config.json from example')
	}
} catch (error) {
	console.log("Error:", error)
	/* Ignore copy errors */
}

const envExample = path.join(process.cwd(), '.env.local.example')
const envTarget = path.join(process.cwd(), '.env.local')
try {
	if (fs.existsSync(envExample) && !fs.existsSync(envTarget)) {
		fs.copyFileSync(envExample, envTarget)
		console.log('Created .env.local from .env.local.example')
	}
} catch (error) {
	console.log("Error:", error)
	/* Ignore copy errors */
}

console.log(`Setup complete. package.json updated with name=${pkg.name}`)
console.log(`Run: npm install && npm run dev`) 
