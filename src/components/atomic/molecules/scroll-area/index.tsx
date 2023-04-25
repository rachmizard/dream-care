import { FC, PropsWithChildren } from "react";

import {
	ScrollAreaCorner,
	ScrollAreaRoot,
	ScrollAreaScrollbar,
	ScrollAreaThumb,
	ScrollAreaViewport,
} from "./scroll-area.styled";

interface ScrollAreaProps {
	viewPortHeight: number;
}

export const ScrollArea: FC<PropsWithChildren<ScrollAreaProps>> = ({
	children,
	viewPortHeight,
}) => {
	return (
		<ScrollAreaRoot
			scrollHideDelay={400}
			css={{
				height: viewPortHeight,
			}}>
			<ScrollAreaViewport>{children}</ScrollAreaViewport>

			<ScrollAreaScrollbar orientation="vertical">
				<ScrollAreaThumb />
			</ScrollAreaScrollbar>

			<ScrollAreaScrollbar orientation="horizontal">
				<ScrollAreaThumb />
			</ScrollAreaScrollbar>

			<ScrollAreaCorner />
		</ScrollAreaRoot>
	);
};
