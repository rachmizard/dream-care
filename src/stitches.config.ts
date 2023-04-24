// stitches.config.ts
import { createStitches } from "@stitches/react";

interface ThemeRecord extends Record<string, string | number | boolean> {}
interface ThemeRecord extends Record<number, string | number | boolean> {}

const baseColors: ThemeRecord = {
	black: "#000",
	white: "#fff",
	blackAlpha: "rgba(0, 0, 0, 0.04)",
	whiteAlpha: "rgba(255, 255, 255, 0.04)",

	gray50: "#f9fafb",
	gray100: "#f3f4f6",
	gray200: "#e5e7eb",
	gray300: "#d1d5db",
	gray400: "#9ca3af",
	gray500: "#6b7280",
	gray600: "#4b5563",
	gray700: "#374151",
	gray800: "#1f2937",
	gray900: "#111827",

	red50: "#fef2f2",
	red100: "#fee2e2",
	red200: "#fecaca",
	red300: "#fca5a5",
	red400: "#f87171",
	red500: "#ef4444",
	red600: "#dc2626",
	red700: "#b91c1c",
	red800: "#991b1b",
	red900: "#7f1d1d",

	yellow50: "#fffbeb",
	yellow100: "#fef3c7",
	yellow200: "#fde68a",
	yellow300: "#fcd34d",
	yellow400: "#fbbf24",
	yellow500: "#f59e0b",
	yellow600: "#d97706",
	yellow700: "#b45309",
	yellow800: "#92400e",
	yellow900: "#78350f",

	green50: "#ecfdf5",
	green100: "#d1fae5",
	green200: "#a7f3d0",
	green300: "#6ee7b7",
	green400: "#34d399",
	green500: "#10b981",
	green600: "#059669",
	green700: "#047857",
	green800: "#065f46",
	green900: "#064e3b",

	blue50: "#eff6ff",
	blue100: "#dbeafe",
	blue200: "#bfdbfe",
	blue300: "#93c5fd",
	blue400: "#60a5fa",
	blue500: "#3b82f6",
	blue600: "#2563eb",
	blue700: "#1d4ed8",
	blue800: "#1e40af",
	blue900: "#1e3a8a",

	indigo50: "#eef2ff",
	indigo100: "#e0e7ff",
	indigo200: "#c7d2fe",
	indigo300: "#a5b4fc",
	indigo400: "#818cf8",
	indigo500: "#6366f1",
	indigo600: "#4f46e5",
	indigo700: "#4338ca",
	indigo800: "#3730a3",
	indigo900: "#312e81",

	purple50: "#f5f3ff",
	purple100: "#ede9fe",
	purple200: "#ddd6fe",
	purple300: "#c4b5fd",
	purple400: "#a78bfa",
	purple500: "#8b5cf6",
	purple600: "#7c3aed",
	purple700: "#6d28d9",
	purple800: "#5b21b6",
	purple900: "#4c1d95",

	pink50: "#fdf2f8",
	pink100: "#fce7f3",
	pink200: "#fbcfe8",
	pink300: "#f9a8d4",
	pink400: "#f472b6",
	pink500: "#ec4899",
	pink600: "#db2777",
	pink700: "#be185d",
	pink800: "#9d174d",
	pink900: "#831843",
};

const baseSizes: ThemeRecord = {
	max: "max-content",
	min: "min-content",
	full: "100%",
	"3xs": "14rem",
	"2xs": "16rem",
	xs: "20rem",
	sm: "24rem",
	md: "28rem",
	lg: "32rem",
	xl: "36rem",
	"2xl": "42rem",
	"3xl": "48rem",
	"4xl": "56rem",
	"5xl": "64rem",
	"6xl": "72rem",
	"7xl": "80rem",
	"8xl": "90rem",
};

const baseSpace: ThemeRecord = {
	px: "1px",
	0.5: "0.125rem",
	1: "0.25rem",
	1.5: "0.375rem",
	2: "0.5rem",
	2.5: "0.625rem",
	3: "0.75rem",
	3.5: "0.875rem",
	4: "1rem",
	5: "1.25rem",
	6: "1.5rem",
	7: "1.75rem",
	8: "2rem",
	9: "2.25rem",
	10: "2.5rem",
	12: "3rem",
	14: "3.5rem",
	16: "4rem",
	20: "5rem",
	24: "6rem",
	28: "7rem",
	32: "8rem",
	36: "9rem",
	40: "10rem",
	44: "11rem",
	48: "12rem",
	52: "13rem",
	56: "14rem",
	60: "15rem",
	64: "16rem",
	72: "18rem",
	80: "20rem",
	96: "24rem",
};

const semanticColors: ThemeRecord = {
	primary: "$green400",
	secondary: "$gray500",
	tertiary: "$gray400",
	accent: "$green500",
	accentSecondary: "$green400",
	accentTertiary: "$green300",

	background: "$gray50",

	primaryLight: "$green100",
	secondaryLight: "$gray100",

	primaryDark: "$green900",
	secondaryDark: "$gray900",

	primaryText: "$gray900",
	secondaryText: "$gray800",

	primaryTextLight: "$gray100",
	secondaryTextLight: "$gray200",

	primaryTextDark: "$gray700",
	secondaryTextDark: "$gray600",

	primaryBackground: "$gray100",
	secondaryBackground: "$gray200",

	primaryBackgroundLight: "$gray50",
	secondaryBackgroundLight: "$gray100",

	primaryBackgroundDark: "$gray900",
	secondaryBackgroundDark: "$gray800",

	primaryBorder: "$gray300",
	secondaryBorder: "$gray400",

	primaryBorderLight: "$gray200",
	secondaryBorderLight: "$gray300",

	primaryBorderDark: "$gray500",
	secondaryBorderDark: "$gray600",

	primaryHover: "$green600",
	secondaryHover: "$gray600",

	primaryHoverLight: "$green200",
	secondaryHoverLight: "$gray200",

	primaryHoverDark: "$green800",
	secondaryHoverDark: "$gray800",

	primaryActive: "$green700",
	secondaryActive: "$gray700",

	primaryActiveLight: "$green300",
	secondaryActiveLight: "$gray300",

	primaryActiveDark: "$green900",
	secondaryActiveDark: "$gray900",

	primaryFocus: "$green300",
	secondaryFocus: "$gray300",

	primaryFocusLight: "$green200",
	secondaryFocusLight: "$gray200",

	primaryFocusDark: "$green900",
	secondaryFocusDark: "$gray900",

	primaryDisabled: "$gray300",
	secondaryDisabled: "$gray400",

	primaryDisabledLight: "$gray200",
	secondaryDisabledLight: "$gray300",

	primaryDisabledDark: "$gray500",
	secondaryDisabledDark: "$gray600",

	primaryDisabledText: "$gray500",
	secondaryDisabledText: "$gray600",

	primaryDisabledTextLight: "$gray400",
	secondaryDisabledTextLight: "$gray500",

	primaryDisabledTextDark: "$gray700",
	secondaryDisabledTextDark: "$gray800",

	primaryDisabledBackground: "$gray200",
	primaryDisabledBackgroundLight: "$gray100",

	primaryDisabledBackgroundDark: "$gray500",
	secondaryDisabledBackgroundDark: "$gray600",

	danger: "$red500",

	dangerLight: "$red100",
	dangerDark: "$red900",

	dangerText: "$gray900",

	dangerTextLight: "$gray100",
	dangerTextDark: "$gray700",

	dangerBackground: "$gray100",

	dangerBackgroundLight: "$gray50",
	dangerBackgroundDark: "$gray900",

	dangerBorder: "$gray300",

	dangerBorderLight: "$gray200",
	dangerBorderDark: "$gray500",

	dangerHover: "$red600",

	dangerHoverLight: "$red200",
	dangerHoverDark: "$red800",

	dangerActive: "$red700",

	dangerActiveLight: "$red300",
	dangerActiveDark: "$red900",

	dangerFocus: "$red300",

	dangerFocusLight: "$red200",
	dangerFocusDark: "$red900",
};

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	theme: {
		colors: {
			...baseColors,
			...semanticColors,
		},
		sizes: baseSizes,
		space: baseSpace,
		shadows: {
			1: "0 0 0 1px rgba(0, 0, 0, 0.05)",
			2: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
			3: "0 1px 3px 1px rgba(0, 0, 0, 0.1)",
			4: "0 1px 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
			5: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
		},
		fonts: {
			main: "Montserrat, sans-serif",
			secondary: "Ubuntu, sans-serif",
		},
		fontSizes: {
			xs: "0.75rem",
			sm: "0.875rem",
			md: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "3.75rem",
			"7xl": "4.5rem",
			"8xl": "6rem",
			"9xl": "8rem",
		},
		fontWeights: {
			hairline: 100,
			thin: 200,
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
			black: 900,
		},
		lineHeights: {
			normal: "normal",
			none: 1,
			shorter: 1.25,
			short: 1.375,
			base: 1.5,
			tall: 1.625,
			taller: "2",
			"3": ".75rem",
			"4": "1rem",
			"5": "1.25rem",
			"6": "1.5rem",
			"7": "1.75rem",
			"8": "2rem",
			"9": "2.25rem",
			"10": "2.5rem",
		},
		letterSpacings: {
			tighter: "-0.05em",
			tight: "-0.025em",
			normal: "0",
			wide: "0.025em",
			wider: "0.05em",
			widest: "0.1em",
		},
		radii: {
			none: "0",
			sm: "0.125rem",
			base: "0.25rem",
			md: "0.375rem",
			lg: "0.5rem",
			xl: "0.75rem",
			"2xl": "1rem",
			"3xl": "1.5rem",
			"4xl": "2rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
			"8xl": "6rem",
			full: "9999px",
		},
		zIndices: {
			"1": 1,
			"2": 2,
			"3": 3,
			"4": 4,
			"5": 5,
			min: -2147483648,
			max: 2147483647,
		},
	},
	media: {
		bp1: "(min-width: 380px)",
		bp2: "(min-width: 798px)",
		bp3: "(min-width: 1024px)",
		bp4: "(min-width: 1280px)",
	},
	utils: {
		// Abbreviated margin properties
		m: (value: string) => ({
			margin: value,
		}),
		mt: (value: string) => ({
			marginTop: value,
		}),
		mr: (value: string) => ({
			marginRight: value,
		}),
		mb: (value: string) => ({
			marginBottom: value,
		}),
		ml: (value: string) => ({
			marginLeft: value,
		}),
		mx: (value: string) => ({
			marginLeft: value,
			marginRight: value,
		}),
		my: (value: string) => ({
			marginTop: value,
			marginBottom: value,
		}),
		// A property for applying width/height together
		size: (value: string) => ({
			width: value,
			height: value,
		}),
		// A property to apply linear gradient
		linearGradient: (value: string) => ({
			backgroundImage: `linear-gradient(${value})`,
		}),
		// An abbreviated property for border-radius
		br: (value: string) => ({
			borderRadius: value,
		}),

		// Abbreviated padding properties
		px: (value: string) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		// Abbreviated padding properties
		py: (value: string) => ({
			paddingTop: value,
			paddingBottom: value,
		}),
	},
});

globalCss({
	"@font-face": [
		{
			fontFamily: "Ubuntu",
			src: "url('/assets/fonts/Ubuntu-Regular.ttf') format('truetype')",
		},
		{
			fontFamily: "Montserrat",
			src: "url('/assets/fonts/Montserrat-VariableFont_wght.ttf') format('truetype')",
		},
	],
	"*, *:before, *:after": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
		WebkitTapHighlightColor: "transparent",
	},
	body: {
		backgroundColor: "$background",
		fontFamily: "$main",
		scrollBehavior: "smooth",
		MozOsxFontSmoothing: "grayscale",
		WebkitFontSmoothing: "antialiased",
		textRendering: "optimizeLegibility",
	},
})();
