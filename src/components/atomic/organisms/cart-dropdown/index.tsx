import { FC } from "react";
import { RiCloseLine } from "react-icons/ri";

import {
	Box,
	Button,
	CartDropdownActions,
	CartDropdownContainer,
	CartDropdownInfo,
	CartDropdownProductList,
	CartDropdownProductListItem,
	ScrollArea,
	Typography,
} from "@/components";

import { ProductInterface } from "@/interfaces/product.interface";
import { toUSDCurrency } from "@/utils";

interface CartDropdownProps {
	carts: Partial<ProductInterface>[];
	renderItem?: (
		cart: Partial<ProductInterface>,
		index: number
	) => JSX.Element;
	onRemoveCart?: (index: number) => void;
}

export const CartDropdown: FC<CartDropdownProps> = (props) => {
	const { carts = [], renderItem, onRemoveCart } = props;

	return (
		<CartDropdownContainer>
			<ScrollArea viewPortHeight={225}>
				<CartDropdownProductList>
					{carts.map((cart, index) => (
						<CartDropdownProductListItem key={cart.name}>
							{renderItem?.(cart, index)}

							<Button
								css={{
									boxShadow: "none",
								}}
								size="sm"
								color="secondary"
								outlined
								rounded
								onClick={() => onRemoveCart?.(index)}>
								<RiCloseLine fontSize={24} />
							</Button>
						</CartDropdownProductListItem>
					))}
				</CartDropdownProductList>
			</ScrollArea>
			<CartDropdownInfo>
				<Typography.Heading level="5">Total:</Typography.Heading>
				<Typography.Heading level="5">
					{toUSDCurrency(0)}
				</Typography.Heading>
			</CartDropdownInfo>

			<CartDropdownActions>
				<Box
					css={{
						flexShrink: 0,
					}}>
					<Button
						css={{
							boxShadow: "none",
						}}
						size="lg"
						rounded>
						Checkout
					</Button>
				</Box>

				<Box
					css={{
						flexShrink: 0,
					}}>
					<Button
						css={{
							boxShadow: "none",
						}}
						size="lg"
						rounded
						outlined
						color="secondary">
						Edit Cart
					</Button>
				</Box>
			</CartDropdownActions>
		</CartDropdownContainer>
	);
};
