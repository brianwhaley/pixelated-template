import type { MetadataRoute } from 'next';
 
export default function manifest(): MetadataRoute.Manifest {
	return {
		// @ts-expect-error - Object literal may only specify known properties, and 'author' does not exist in type 'Manifest'.ts(2353)
		author: "Pixelated Template", 
		background_color: "#ffffff",
		default_locale: "en",
		description: "Pixelated Template",
		developer: {
			name: "Brian Whaley",
			url: "https://www.pixelated.tech"
		}, 
		display: "standalone",
		homepage_url: "https://www.pixelated.tech",
		icons: [{
			src: "/images/favicon.ico",
			sizes: "64x64 32x32 24x24 16x16",
			type: "image/x-icon"
		}],
		name: "Pixelated Template",
		short_name: "Pixelated",
		start_url: ".",
		theme_color: "#000000",
	};
}
