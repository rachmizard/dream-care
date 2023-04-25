import { styled } from "@/stitches.config";

export const CartDropdownProductList = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "$3",

	"& > *:last-child": {
		marginBottom: "auto",
	},
});

export const CartDropdownProductListItem = styled("div", {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",

	paddingRight: "$4",
});

export const CartDropdownContainer = styled("div", {
	display: "flex",
	flexDirection: "column",

	gap: "$5",

	width: "24rem",
});

export const CartDropdownInfo = styled("div", {
	display: "flex",
	justifyContent: "space-between",
});

export const CartDropdownActions = styled("div", {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
});

export const CardDropdownProductImageWrapper = styled("div", {
	position: "relative",

	width: "4rem",
	height: "4rem",

	br: "$2xl",

	overflow: "hidden",

	"& > img": {
		position: "absolute",
		top: 0,
		left: 0,

		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
});
