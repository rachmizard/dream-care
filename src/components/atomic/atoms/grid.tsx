import { styled } from "@/stitches.config";
import { ComponentProps, FC } from "react";

const BaseRow = styled("div", {
	display: "flex",
	alignItems: "stretch",

	defaultVariants: {
		wrap: false,
		direction: "row",
		justify: "start",
		align: "start",
	},
	variants: {
		direction: {
			row: {
				flexDirection: "row",
			},
			rowReverse: {
				flexDirection: "row-reverse",
			},
			column: {
				flexDirection: "column",
			},
			columnReverse: {
				flexDirection: "column-reverse",
			},

			vertical: {
				flexDirection: "column",
			},

			horizontal: {
				flexDirection: "row",
			},
		},
		justify: {
			start: {
				justifyContent: "flex-start",
			},
			center: {
				justifyContent: "center",
			},
			end: {
				justifyContent: "flex-end",
			},
			between: {
				justifyContent: "space-between",
			},
			around: {
				justifyContent: "space-around",
			},

			evenly: {
				justifyContent: "space-evenly",
			},
		},
		align: {
			start: {
				alignItems: "flex-start",
			},
			center: {
				alignItems: "center",
			},

			end: {
				alignItems: "flex-end",
			},

			stretch: {
				alignItems: "stretch",
			},

			baseline: {
				alignItems: "baseline",
			},
		},
		wrap: {
			true: {
				flexWrap: "wrap",
			},
			false: {
				flexWrap: "nowrap",
			},
		},
	},
});

export const Col = styled("div", {
	defaultVariants: {
		span: "auto",
	},
	variants: {
		span: {
			auto: {
				flex: 1,
			},
			1: {
				flex: "0 0 8.333333%",
			},
			2: {
				flex: "0 0 16.666667%",
			},
			3: {
				flex: "0 0 25%",
			},
			4: {
				flex: "0 0 33.333333%",
			},
			5: {
				flex: "0 0 41.666667%",
			},
		},
	},
});

interface RowProps extends ComponentProps<typeof BaseRow> {
	children: React.ReactNode;
	gap?: string | number;
}

export const Row: FC<RowProps> = ({ children, gap, ...props }) => {
	return (
		<BaseRow
			css={{
				gap: gap || "$8",
			}}
			{...props}>
			{children}
		</BaseRow>
	);
};
