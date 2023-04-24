import { styled } from "@/stitches.config";

export const Container = styled("div", {
	mx: "auto",
	defaultVariants: {
		size: "md",
	},
	variants: {
		size: {
			sm: {
				maxWidth: "640px",
			},
			md: {
				maxWidth: "768px",
			},
			lg: {
				maxWidth: "1024px",
			},
			xl: {
				maxWidth: "1280px",
			},
			"2xl": {
				maxWidth: "1536px",
			},

			"3xl": {
				maxWidth: "1792px",
			},
		},
	},
});
