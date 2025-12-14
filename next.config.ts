 
import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {

	reactStrictMode: true,

	env: {
		PIXELATED_CONFIG_JSON: process.env.PIXELATED_CONFIG_JSON,
		PIXELATED_CONFIG_B64: process.env.PIXELATED_CONFIG_B64,
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
		return [

		];
	},

	turbopack: {},

	webpack: (config: any) => {
		if (!config.resolve) config.resolve = {};
		if (!config.resolve.alias) config.resolve.alias = {};
		config.resolve.alias['@'] = path.resolve(__dirname, 'src');
		return config;
	},
	
};

export default nextConfig;
