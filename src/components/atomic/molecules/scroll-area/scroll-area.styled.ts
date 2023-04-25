import * as BaseScrollArea from "@radix-ui/react-scroll-area";

import { styled } from "@/stitches.config";

const SCROLLBAR_SIZE = 10;

export const ScrollAreaRoot = styled(BaseScrollArea.Root, {
	overflow: "hidden",
});

export const ScrollAreaViewport = styled(BaseScrollArea.Viewport, {
	height: "100%",
});

export const ScrollAreaScrollbar = styled(BaseScrollArea.Scrollbar, {
	display: "flex",
	userSelect: "none",
	touchAction: "none",
	padding: 2,
	background: "$gray50",
	transition: "background 160ms ease-out",
	"&:hover": { background: "$gray200" },
	'&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
	'&[data-orientation="horizontal"]': {
		flexDirection: "column",
		height: SCROLLBAR_SIZE,
	},
});

export const ScrollAreaThumb = styled(BaseScrollArea.Thumb, {
	flex: 1,
	background: "$primary",
	borderRadius: SCROLLBAR_SIZE,
	// increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
	position: "relative",
	"&::before": {
		content: '""',
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "100%",
		height: "100%",
		minWidth: 44,
		minHeight: 44,
	},
});

export const ScrollAreaCorner = styled(BaseScrollArea.Corner, {
	background: "$secondaryLight",
});
