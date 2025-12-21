import { headers } from 'next/headers';
import { getRouteByKey } from '@pixelated-tech/components/server';
import { generateMetaTags } from "@pixelated-tech/components/server";
import { LocalBusinessSchema } from '@pixelated-tech/components/server';
import { PixelatedServerConfigProvider } from '@pixelated-tech/components/server';
import LayoutClient from '@/app/elements/layout-client';
import Header from '@/app/elements/header';
import Nav from '@/app/elements/nav';
import Footer from '@/app/elements/footer';
import myRoutes from "@/app/data/routes.json";
import "@pixelated-tech/components/css/pixelated.global.css";
import "@pixelated-tech/components/css/pixelated.grid.scss";
import "@pixelated-tech/components/css/pixelated.font.scss";
import './styles/globals.css';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

	const reqHeaders: Headers = await (headers() as Promise<Headers>);
	const path = reqHeaders.get("x-path") ?? "/";
	const origin = reqHeaders.get("x-origin");
	const url = reqHeaders.get("x-url") ?? `${origin}${path}`;
	const pathname = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
	const metadata = getRouteByKey(myRoutes.routes, "path", pathname);

  return (
    <html lang="en">
			<LayoutClient />
			<head>
				{ generateMetaTags({
					title: metadata?.title ?? "",
					description: metadata?.description ?? "",
					keywords: metadata?.keywords ?? "",
					site_name: "Pixelated Template",
					email: "info@pixelated.tech",
					origin: origin ?? "",
					url: url ?? "",
					image: "/images/pix/pix-bg-512.gif",
					image_height: "512",
					image_width: "512",
					favicon: "/images/favicon.ico"
				}) }
				<LocalBusinessSchema
					name="Pixelated Technologies"
					streetAddress="Denver, CO"
					addressLocality="Denver"
					addressRegion="CO"
					postalCode="80202"
					telephone="+1-720-555-0001"
					url="https://pixelated.tech"
					email="info@pixelated.tech"
					image="/images/pix/pix-bg-512.gif"
					priceRange="$"
					description="Web development and digital solutions using Next.js, TypeScript, and modern technologies."
					sameAs={[
						"https://www.linkedin.com/company/pixelated-technologies",
						"https://github.com/brianwhaley/pixelated"
					]}
				/>
			</head>
			<body>
				<PixelatedServerConfigProvider>
					<header>
						<Header />
					</header>
					<nav>
						<Nav />
					</nav>
					<main>
						{children}
					</main>
					<footer>
						<Footer />
					</footer>
				</PixelatedServerConfigProvider>
			</body>
		</html>
  );
}
