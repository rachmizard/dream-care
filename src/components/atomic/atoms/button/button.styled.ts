import { ImSpinner2 } from "react-icons/im";

import { styled, keyframes } from "@/stitches.config";

const spinAnimation = keyframes({
	"0%": { transform: "rotate(0deg)" },
	"100%": { transform: "rotate(360deg)" },
});

export const ButtonSpinnerIcon = styled(ImSpinner2, {
	animation: `${spinAnimation} 1s linear infinite`,
});

export const BaseButton = styled("button", {
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "8px",
	backgroundColor: "transparent",
	border: "none",
	appearance: "none",
	cursor: "pointer",
	transition: "all 0.2s ease-in-out",
	br: "$md",
	boxShadow: "$5",
	fontWeight: "$semibold",
	fontFamily: "$main",
	"&:disabled": {
		opacity: 0.5,
		cursor: "not-allowed",
	},
});

export const StyledButton = styled(BaseButton, {
	defaultVariants: {
		size: "md",
		color: "primary",
		rounded: false,
		outlined: false,
		fullWidth: false,
	},
	letterSpacing: "$normal",
	$$backgroundColor: "transparent",
	$$color: "white",
	compoundVariants: [
		{
			outlined: true,
			css: {
				backgroundColor: "transparent",
				boxShadow: "0 0 0 1px $$backgroundColor",
				color: "$$backgroundColor",
				"&:hover": {
					backgroundColor: "$$backgroundColor",
					color: "$$color",
				},
			},
		},
	],
	variants: {
		outlined: {
			true: {},
		},
		fullWidth: {
			true: {
				width: "100%",
			},
		},
		loading: {
			true: {
				opacity: 0.5,
				cursor: "not-allowed",
			},
		},
		size: {
			sm: {
				fontSize: "$xs",
				py: "4px",
				px: "8px",
			},
			md: {
				fontSize: "$sm",
				py: "8px",
				px: "14px",
			},
			lg: {
				fontSize: "$md",
				py: "12px",
				px: "24px",
			},
			xl: {
				fontSize: "$lg",
				py: "16px",
				px: "32px",
			},
		},
		rounded: {
			true: {
				br: "99999px",
			},
		},
		color: {
			default: {
				$$backgroundColor: "$colors$gray300",
				$$color: "$colors$gray600",
				backgroundColor: "$$backgroundColor",
				color: "$$color",
				"&:hover": {
					$$backgroundColor: "$colors$gray400",
					backgroundColor: "$$backgroundColor",
				},
			},
			primary: {
				$$backgroundColor: "$colors$primary",
				backgroundColor: "$$backgroundColor",
				color: "$$color",
				"&:hover": {
					$$backgroundColor: "$colors$primaryHover",
					backgroundColor: "$$backgroundColor",
				},
				"&:focus": {
					outline: "none",
					boxShadow: "0 0 0 3px $colors$primaryFocus",
				},
			},
			secondary: {
				$$backgroundColor: "$colors$secondary",
				backgroundColor: "$$backgroundColor",
				color: "$$color",
				"&:hover": {
					$$backgroundColor: "$colors$secondaryHover",
					backgroundColor: "$$backgroundColor",
				},
				"&:focus": {
					outline: "none",
					boxShadow: "0 0 0 3px $colors$secondaryFocus",
				},
			},
			danger: {
				$$backgroundColor: "$colors$danger",
				backgroundColor: "$$backgroundColor",
				color: "$$color",
				"&:hover": {
					$$backgroundColor: "$colors$dangerHover",
					backgroundColor: "$$backgroundColor",
				},
				"&:focus": {
					outline: "none",
					boxShadow: "0 0 0 3px $colors$dangerFocus",
				},
			},
		},
	},
});
