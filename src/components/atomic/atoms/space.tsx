import { styled } from "@/stitches.config";

const BaseSpace = styled("div", {
	display: "flex",
	alignItems: "baseline",
});

export const Space = styled(BaseSpace, {
	defaultVariants: {
		size: "sm",
		direction: "horizontal",
		align: "center",
		justify: "start",
		wrap: false,
	},
	variants: {
		wrap: {
			true: {
				flexWrap: "wrap",
			},
		},
		align: {
			baseline: {
				alignItems: "baseline",
			},
			center: {
				alignItems: "center",
			},
			start: {
				alignItems: "flex-start",
			},
			end: {
				alignItems: "flex-end",
			},
		},
		justify: {
			baseline: {
				justifyContent: "baseline",
			},
			center: {
				justifyContent: "center",
			},
			start: {
				justifyContent: "flex-start",
			},
			end: {
				justifyContent: "flex-end",
			},
			around: {
				justifyContent: "space-around",
			},
			between: {
				justifyContent: "space-between",
			},
		},
		direction: {
			vertical: {
				flexDirection: "column",
			},
			horizontal: {
				flexDirection: "row",
			},
		},
		size: {
			sm: {
				gap: "$1",
			},
			md: {
				gap: "$2",
			},
			lg: {
				gap: "$4",
			},
		},
	},
});
