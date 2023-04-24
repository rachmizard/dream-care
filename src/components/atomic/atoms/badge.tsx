import { styled } from "@/stitches.config";

export const BaseBadge = styled("span", {
	all: "unset",

	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",

	borderRadius: "$full",

	textTransform: "uppercase",

	fontWeight: "$bold",
	fontSize: "$sm",

	minWidth: "4rem",
	minHeight: "2rem",

	px: "1rem",
});

export const Badge = styled(BaseBadge, {
	defaultVariants: {
		variant: "solid",
		colorScheme: "primary",
		size: "md",
	},

	$$subtleTextColor: "$white",
	$$subtleBackgroundColor: "$primary",

	$$solidTextColor: "$white",
	$$solidBackgroundColor: "$primary",

	variants: {
		size: {
			sm: {
				fontSize: "$xs",
				px: "0.5rem",
				minHeight: "1rem",
			},
			md: {
				fontSize: "$sm",
				px: "1rem",
				minHeight: "1.5rem",
			},
			lg: {
				fontSize: "$md",
				px: "1.5rem",
				minHeight: "2rem",
			},
		},
		variant: {
			subtle: {
				backgroundColor: "$$subtleBackgroundColor",
				color: "$$subtleTextColor",
			},
			solid: {
				backgroundColor: "$$solidBackgroundColor",
				color: "$$solidTextColor",
			},
		},
		colorScheme: {
			primary: {
				$$subtleBackgroundColor: "$colors$primaryHoverLight",
				$$solidBackgroundColor: "$colors$primary",

				$$subtleTextColor: "$colors$primaryHoverDark",
				$$solidTextColor: "$colors$white",
			},
			secondary: {
				$$subtleBackgroundColor: "$colors$secondaryHoverLight",
				$$solidBackgroundColor: "$colors$secondary",

				$$subtleTextColor: "$colors$secondaryHoverDark",
				$$solidTextColor: "$colors$white",
			},
			danger: {
				$$subtleBackgroundColor: "$colors$dangerHoverLight",
				$$solidBackgroundColor: "$colors$danger",

				$$subtleTextColor: "$colors$dangerHoverDark",
				$$solidTextColor: "$colors$white",
			},
			info: {
				$$subtleBackgroundColor: "$colors$blue200",
				$$solidBackgroundColor: "$colors$blue400",

				$$subtleTextColor: "$colors$blue700",
				$$solidTextColor: "$colors$white",
			},
			warning: {
				$$subtleBackgroundColor: "$colors$yellow100",
				$$solidBackgroundColor: "$colors$yellow300",

				$$subtleTextColor: "$colors$yellow600",
				$$solidTextColor: "$colors$white",
			},
			pinky: {
				$$subtleBackgroundColor: "$colors$pink100",
				$$solidBackgroundColor: "$colors$pink300",

				$$subtleTextColor: "$colors$pink600",
				$$solidTextColor: "$colors$white",
			},
		},
	},
});
