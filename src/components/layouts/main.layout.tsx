import { FC, PropsWithChildren } from "react";
import { Helmet } from "react-helmet";

import { Container, FooterSection, Navbar } from "@/components";
import { ScrollRestoration } from "react-router-dom";

interface MainLayoutProps {
	title?: string;
	shouldScrollRestoration?: boolean;
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
	children,
	title,
	shouldScrollRestoration,
}) => {
	return (
		<Container
			size="xl"
			css={{
				px: "2rem",

				"@bp2": {
					px: "3rem",
				},
			}}>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{title}</title>
				<link rel="canonical" href="https://www.dreamcare.com.au/" />
			</Helmet>

			<Navbar />

			<div
				style={{
					minHeight: "calc(100vh - 100px)",
				}}>
				{children}
			</div>

			<FooterSection />

			{shouldScrollRestoration && <ScrollRestoration />}
		</Container>
	);
};
