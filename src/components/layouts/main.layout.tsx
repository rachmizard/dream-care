import { FC, PropsWithChildren } from "react";
import { Helmet } from "react-helmet";

import { Container, Navbar, FooterSection } from "@/components";

interface MainLayoutProps {
	title?: string;
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
	children,
	title,
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

			{children}

			<FooterSection />
		</Container>
	);
};
``;
