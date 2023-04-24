import { Typography } from "@/components/atomic/atoms";
import { styled } from "@/stitches.config";
import { FC, PropsWithChildren } from "react";

const StyledCategoryIcon = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	transition: "all 0.2s ease-in-out",

	gap: "0.8rem",

	flex: "calc(100% / 4 - 2rem)",
	flexShrink: "0",

	backgroundColor: "$gray100",

	cursor: "pointer",

	"&:hover": {
		transform: "translateY(-2px)",
		backgroundColor: "$gray50",

		"& > svg": {
			fill: "$secondary",
		},
	},

	px: "1rem",
	py: "1.4rem",

	br: "$xl",

	"& > svg": {
		fill: "$primary",

		width: "2rem",
		height: "2rem",

		transition: "fill 0.2s ease-in-out",
	},

	"& > p": {
		fontSize: "$md",
		fontWeight: "$semibold",
		color: "$primaryDark",
		letterSpacing: "0.075em",
	},
});

export const CategoryIcon: FC<PropsWithChildren<{ label: string }>> = ({
	children,
	label,
}) => {
	return (
		<StyledCategoryIcon>
			{children}
			<Typography.Text>{label}</Typography.Text>
		</StyledCategoryIcon>
	);
};
