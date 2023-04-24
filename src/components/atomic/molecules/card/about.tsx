import { FC } from "react";

import { IconWrapper, Typography } from "../../atoms";

import { styled } from "@/stitches.config";

interface AboutCardProps {
	title?: string;
	subtitle?: string;
	icon?: React.ReactNode;
}

export const AboutCard: FC<AboutCardProps> = (props) => {
	const { icon, subtitle, title } = props;

	return (
		<Wrapper>
			<IconWrapper data-icon-wrapper rounded>
				{icon}
			</IconWrapper>

			<Typography.Heading>{title}</Typography.Heading>

			<Typography.Text>{subtitle}</Typography.Text>
		</Wrapper>
	);
};

const Wrapper = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",

	maxWidth: "20rem",

	transition: "all 0.3s ease-in-out",

	"& > *": {
		marginBottom: "0.80rem",
		textAlign: "center",
	},

	"&:hover": {
		"& > [data-icon-wrapper]": {
			backgroundColor: "$primary",
			"& > svg": {
				color: "$primaryLight",
			},
		},
	},
});
