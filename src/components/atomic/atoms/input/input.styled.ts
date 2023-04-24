import { styled } from "@/stitches.config";

export const BaseInput = styled("input", {
	appearance: "none",
	border: "none",
	outline: "none",
	fontSize: "$md",
	fontWeight: "$normal",
	fontFamily: "$main",
	transition: "all 0.1s ease-in-out",
	br: "$md",
});

export const StyledInput = styled(BaseInput, {
	defaultVariants: {
		size: "md",
		variant: "outlined",
		color: "primary",
		fullWidth: false,
		isInvalid: false,
		rounded: true,
	},

	compoundVariants: [
		{
			variant: "outlined",
			isInvalid: true,
			css: {
				outline: "1px solid $colors$red500",
			},
		},
		{
			variant: "filled",
			isInvalid: true,
			css: {
				backgroundColor: "$colors$red100",
				outline: "1px solid $danger",

				"&:focus": {
					boxShadow: "0 0 0 2px $colors$danger",
				},
			},
		},
		{
			variant: "flushed",
			isInvalid: true,
			css: {
				outline: "none",
				borderBottom: "1px solid $colors$red500",
			},
		},
	],

	variants: {
		rounded: {
			true: {
				br: "$full",
			},
		},
		color: {
			primary: {
				$$outlineColor: "$colors$primaryLight",
				$$outlineFocusColor: "$colors$primary",

				$$filledBgColor: "$colors$primaryLight",

				$$flushedBorderColor: "$colors$gray400",
				$$flushedFocusBorderColor: "$colors$primary",
			},
			secondary: {
				$$outlineColor: "$colors$secondary",
				$$outlineFocusColor: "$colors$secondary",

				$$filledBgColor: "$colors$gray100",

				$$flushedBorderColor: "$colors$secondary",
				$$flushedFocusBorderColor: "$colors$secondary",
			},
		},
		isInvalid: {
			true: {
				$$outlineColor: "$colors$danger",
				$$flushedBorderColor: "$colors$danger",
			},
		},
		fullWidth: {
			true: {
				width: "100%",
			},
			false: {
				width: "auto",
			},
		},
		variant: {
			outlined: {
				outline: "1px solid $$outlineColor",
				"&:focus": {
					outline: "2px solid $$outlineFocusColor",
				},
			},
			filled: {
				backgroundColor: "$$filledBgColor",
				"&:focus": {
					boxShadow: "0 0 0 2px $colors$primary",
				},
			},
			flushed: {
				outline: "none",
				borderBottom: "1px solid $$flushedBorderColor",
				br: "$none",
				"&:focus": {
					outline: "none",

					borderBottom: "2px solid $$flushedFocusBorderColor",
				},
			},
		},
		size: {
			sm: {
				fontSize: "$sm",
				py: "$1",
				px: "$1",
			},
			md: {
				fontSize: "$sm",
				px: "$4",
				py: "$2",
			},
			lg: {
				fontSize: "$md",
				px: "$4",
				py: "$3",
			},
			xl: {
				fontSize: "$lg",
				px: "$4",
				py: "$4",
			},
		},
	},
});
