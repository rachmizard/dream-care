import { styled } from "@/stitches.config";
import { RiFacebookLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import { IconWrapper, Space, Typography } from "../atoms";
import { PRODUCT_CATEGORIES } from "@/constants/product.constant";

const LEGAL_LIST_ITEMS = [
	{
		title: "Privacy Policy",
		href: "/",
	},
	{
		title: "Terms of Service",
		href: "/",
	},
	{
		title: "Return Policy",
		href: "/",
	},
	{
		title: "Shipping",
		href: "/",
	},
	{
		title: "Data Protection",
		href: "/",
	},
];

const COMPANY_LIST_ITEMS = [
	{
		title: "About Us",
		href: "/",
	},
	{
		title: "Contact Us",
		href: "/",
	},
	{
		title: "Careers",
		href: "/",
	},
	{
		title: "Vision",
		href: "/",
	},
	{
		title: "Mission",
		href: "/",
	},
	{
		title: "FAQ",
		href: "/",
	},
];

export const FooterSection = () => {
	return (
		<FooterWrapper>
			<FooterContent>
				<Space direction="vertical" align="start">
					<FooterContentTitle>DreamCare</FooterContentTitle>

					<Typography.Text>
						© 2023 - All rights reserved
					</Typography.Text>
				</Space>

				<Space
					size="lg"
					css={{
						mt: "2rem",
					}}>
					<Typography.Link href="/">
						<IconWrapper rounded>
							<RiFacebookLine />
						</IconWrapper>
					</Typography.Link>

					<Typography.Link href="/">
						<IconWrapper rounded>
							<RiInstagramLine />
						</IconWrapper>
					</Typography.Link>

					<Typography.Link href="/">
						<IconWrapper rounded>
							<RiTwitterLine />
						</IconWrapper>
					</Typography.Link>
				</Space>
			</FooterContent>

			<FooterContent>
				<FooterContentTitle>Categories</FooterContentTitle>

				<FooterContentList>
					{PRODUCT_CATEGORIES.map(({ title }) => (
						<FooterContentListItem key={title}>
							<Typography.Link href="/">{title}</Typography.Link>
						</FooterContentListItem>
					))}
				</FooterContentList>
			</FooterContent>

			<FooterContent>
				<FooterContentTitle>Legal</FooterContentTitle>

				<FooterContentList>
					{LEGAL_LIST_ITEMS.map(({ title, href }) => (
						<FooterContentListItem key={title}>
							<Typography.Link href={href}>
								{title}
							</Typography.Link>
						</FooterContentListItem>
					))}
				</FooterContentList>
			</FooterContent>

			<FooterContent>
				<FooterContentTitle>Company</FooterContentTitle>

				<FooterContentList>
					{COMPANY_LIST_ITEMS.map(({ title, href }) => (
						<FooterContentListItem key={title}>
							<Typography.Link href={href}>
								{title}
							</Typography.Link>
						</FooterContentListItem>
					))}
				</FooterContentList>
			</FooterContent>
		</FooterWrapper>
	);
};

const FooterWrapper = styled("footer", {
	display: "flex",
	flexWrap: "wrap",
	gap: "4em",

	width: "100%",

	"@bp2": {
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "nowrap",
	},

	// give border left for second child and so on
	"& > *:not(:first-child)": {
		borderLeft: "1px solid $primary",
		padding: "$4",
	},
});

const FooterContent = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
});

const FooterContentTitle = styled(Typography.Heading, {
	color: "$primaryDark",
});

const FooterContentList = styled("ul", {
	listStyle: "none",
	padding: 0,
	margin: 0,

	"& > li": {
		mb: "0.5rem",
	},
});

const FooterContentListItem = styled("li", {
	"& > a": {
		color: "$primaryDark",
		textDecoration: "none",
	},
});
