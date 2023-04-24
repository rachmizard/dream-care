import { styled } from "@/stitches.config";

export const Text = styled("p", {
	fontSize: "$md",
	color: "$gray",
	defaultVariants: {
		fontSize: "md",
	},
	variants: {
		fontSize: {
			sm: {
				fontSize: "$xs",
			},
			md: {
				fontSize: "$sm",
			},
			lg: {
				fontSize: "$md",
			},
		},
	},
});

export const Heading = styled("h1", {
	color: "$gray",
	defaultVariants: {
		level: "4",
	},
	variants: {
		level: {
			1: {
				fontSize: "$4xl",
			},
			2: {
				fontSize: "$3xl",
			},
			3: {
				fontSize: "$2xl",
			},
			4: {
				fontSize: "$xl",
			},
			5: {
				fontSize: "$lg",
			},
		},
	},
});

export const Link = styled("a", {
	fontSize: "$md",
	color: "$gray",
	defaultVariants: {
		fontSize: "md",
	},
	variants: {
		fontSize: {
			sm: {
				fontSize: "$xs",
			},
			md: {
				fontSize: "$sm",
			},
			lg: {
				fontSize: "$md",
			},
		},
	},
});
