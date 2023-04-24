import { Input, Space, Typography } from "@/components/atomic/atoms";
import { Children, FC, cloneElement } from "react";

interface FormGroupProps {
	label: string;
	children: React.ReactNode;
	isInvalid?: boolean;
}

export const FormGroup: FC<FormGroupProps> = ({
	children,
	label,
	isInvalid,
}) => {
	return (
		<Space size="md" direction="vertical" align="start">
			<Typography.Text
				css={{
					color: isInvalid ? "$danger" : "$gray900",
				}}>
				{label}
			</Typography.Text>

			{Children.map(children, (child) => {
				return cloneElement(child as React.ReactElement, {
					isInvalid,
				});
			})}
		</Space>
	);
};
