import { styled } from "@/stitches.config";

export const SectionWrapper = styled("section", {
	display: "flex",
	flexDirection: "column",

	gap: "2rem",

	width: "100%",

	defaultVariants: {
		alignCenter: false,
	},
	variants: {
		alignCenter: {
			true: {
				alignItems: "center",
			},
		},
	},
});
