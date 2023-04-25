import { styled } from "@/stitches.config";

export const NavbarContainer = styled("nav", {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	flexDirection: "row-reverse",

	fontFamily: "$main",

	width: "100%",
	height: "90px",

	color: "$gray600",

	transition: "all 0.3s ease-in-out",

	"@bp2": {
		display: "flex",
		flexDirection: "row",

		transition: "all 0.3s ease-in-out",
	},
});

export const NavbarBrand = styled("h4", {
	display: "flex",
	alignItems: "center",
	height: "100%",
});

export const NavbarMenu = styled("ul", {
	display: "none",
	listStyle: "none",
	"@bp2": {
		display: "flex",
		alignItems: "center",
	},

	"& > *": {
		marginLeft: "20px",

		"@bp3": {
			marginLeft: "24px",
		},
	},

	"& > *:first-child": {
		marginLeft: 0,
	},
});

export const NavbarMenuItem = styled("li", {
	position: "relative",

	"&:hover": {
		"& > ul": {
			opacity: 1,
		},
	},
});

export const NavbarMenuLink = styled("a", {
	transition: "all 0.1s ease-in-out",

	display: "inline-block",
	height: "100%",

	padding: "$2",

	cursor: "pointer",

	textDecoration: "none",

	"&:hover": {
		color: "$primary",
	},

	"&:focus": {
		color: "$primary",
	},

	"&:active": {
		color: "$primary",
	},

	"&:visited": {
		color: "$primary",
	},

	"&:link": {
		color: "$primary",
	},

	"&:disabled": {
		color: "$primary",
	},
});

export const NavbarDropdownIconButton = styled("button", {
	all: "unset",
	appearance: "none",
	fontFamily: "inherit",
	borderRadius: "100%",
	height: 35,
	width: 35,
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	color: "black",
	backgroundColor: "white",
	"&:hover": { backgroundColor: "$primary", color: "white" },

	willChange: "transform, opacity",

	transition: "all 0.3s ease-in-out",

	"@bp2": {
		display: "none",
	},

	'&[aria-expanded="true"]': {
		transform: "rotate(180deg)",

		"&:hover": {
			backgroundColor: "$primary",
		},
	},
});

export const NavbarDropdownArea = styled("div", {
	position: "relative",

	"&:hover": {
		"& [data-navbar-dropdown-section]": {
			opacity: 1,
			visibility: "visible",
			transform: "translateY(0)",
		},

		"& [data-navbar-menu-link]": {
			color: "$primary",
		},
	},
});

export const NavbarDropdownSection = styled("div", {
	transition:
		"opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, transform 0.2s ease-in-out",
	position: "absolute",
	top: 40,
	right: -42,
	zIndex: 1,

	minWidth: "10rem",

	px: "$8",
	py: "$4",

	backgroundColor: "white",

	border: "2px solid $secondaryLight",

	visibility: "hidden",
	opacity: 0,

	transform: "translateY(-10px)",

	br: "$3xl",
});
