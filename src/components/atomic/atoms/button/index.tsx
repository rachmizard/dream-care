import { ComponentProps, FC } from "react";

import { StyledButton, ButtonSpinnerIcon } from "./button.styled";

interface ButtonProps extends ComponentProps<typeof StyledButton> {
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
	children,
	leftIcon,
	rightIcon,
	loading,
	...props
}) => {
	const isLoading = loading as boolean;
	const isDisabled = isLoading || props.disabled;

	return (
		<StyledButton loading={loading} disabled={isDisabled} {...props}>
			{isLoading ? (
				<ButtonSpinnerIcon />
			) : (
				<>
					{leftIcon}
					{children}
					{rightIcon}
				</>
			)}
		</StyledButton>
	);
};
