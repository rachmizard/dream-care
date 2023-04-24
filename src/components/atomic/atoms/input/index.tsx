import React, { FC } from "react";
import { StyledInput } from "./input.styled";

export interface InputProps extends React.ComponentProps<typeof StyledInput> {}

export const Input: FC<InputProps> = React.forwardRef((props, ref) => {
	return <StyledInput ref={ref} {...props} />;
});
