import { styled } from "@/stitches.config";

export const IconWrapper = styled("span", {
	transition: "all 0.3s ease-in-out",

	display: "inline-flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "$primaryLight",

	defaultVariants: {
		size: "md",
		rounded: true,
	},
	variants: {
		size: {
			sm: {
				padding: "0.25rem",

				"& > svg": {
					width: "1.2rem",
					height: "1.2rem",
				},
			},
			md: {
				padding: "0.5rem",

				"& > svg": {
					width: "1.5rem",
					height: "1.5rem",
				},
			},
			lg: {
				padding: "0.75rem",

				"& > svg": {
					width: "2rem",
					height: "2rem",
				},
			},
		},
		rounded: {
			true: {
				borderRadius: "$full",
			},
		},
	},

	"& > svg": {
		color: "$primary",
	},
});
