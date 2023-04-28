import { styled } from "@/stitches.config";

export const Wrapper = styled("div", {
	display: "flex",
});

export const Link = styled("a", {
	textDecoration: "none",
	color: "$gray900",
	fontSize: "$md",
	fontWeight: "$normal",

	variants: {
		active: {
			true: {
				color: "$primary900",
				fontWeight: "$bold",
			},
		},
	},
});

export const Item = styled("span", {
	display: "flex",
	alignItems: "center",
});
