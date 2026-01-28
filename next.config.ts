 
import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {

	reactStrictMode: true,

	experimental: {
    	optimizeCss: false,
  	},
	transpilePackages: ['@pixelated-tech/components'],
	trailingSlash: false,
	typescript: {
		ignoreBuildErrors: true,
	},
	env: {
		PIXELATED_CONFIG_KEY: process.env.PIXELATED_CONFIG_KEY,
	},

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
				port: "",
				pathname: "**",
			},
		],
	},

	async redirects() {
		return [];
	},

	turbopack: {},

	webpack: (config: any) => {
		config.resolve.fallback = {
			fs: false,
			path: false
		};
		if (!config.resolve) config.resolve = {};
		if (!config.resolve.alias) config.resolve.alias = {};
		config.resolve.alias['@'] = path.resolve(__dirname, 'src');
		return config;
	},
	
};

export default nextConfig;
