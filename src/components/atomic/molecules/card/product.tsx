import { FC, useEffect, useState } from "react";

import { Badge, Button, Space, Typography } from "@/components/atomic/atoms";

import { toUSDCurrency } from "@/utils";
import { ProductInterface } from "@/interfaces/product.interface";
import { styled } from "@/stitches.config";

interface ProductCardProps {
	onAddToCart?: (product: ProductInterface) => void;
	product: ProductInterface;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
	const { product, onAddToCart } = props;
	const [isAddedToCart, setIsAddedToCart] = useState(false);

	const { category, discount = 0, image, name, price } = product;

	const isDiscounted = discount !== 0;

	useEffect(() => {
		if (isAddedToCart) {
			const timer = setTimeout(() => {
				setIsAddedToCart(false);
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, [isAddedToCart]);

	return (
		<ProductCardWrapper>
			<ProductCardView data-card-view>
				{isDiscounted && (
					<ProductCardBadge
						colorScheme="danger"
						size="lg"
						variant="solid">
						{discount}% Off
					</ProductCardBadge>
				)}
				<ProductCardImage data-card-image src={image} />

				<ProductCardActionButton
					data-add-to-cart-btn
					rounded
					size="lg"
					color="primary"
					loading={isAddedToCart}
					onClick={() => {
						if (onAddToCart) {
							setIsAddedToCart(true);
							onAddToCart(product);
						}
					}}>
					{isAddedToCart ? "Added" : "Add to Cart"}
				</ProductCardActionButton>
			</ProductCardView>

			<Typography.Heading
				level={4}
				css={{
					fontWeight: "$semibold",
				}}>
				{name}
			</Typography.Heading>

			<Space justify="between">
				{category && (
					<Badge size="lg" variant="subtle" colorScheme="pinky">
						{category}
					</Badge>
				)}

				{price && (
					<Typography.Heading
						level={4}
						css={{
							display: "inline-flex",
							alignItems: "center",
							gap: "0.5rem",
							fontWeight: "$semibold",
						}}>
						{isDiscounted && (
							<Typography.Text
								css={{
									textDecoration: "line-through",
									color: "$gray400",
								}}>
								{toUSDCurrency(price)}
							</Typography.Text>
						)}

						{isDiscounted
							? toUSDCurrency(price - (price * discount) / 100)
							: toUSDCurrency(price)}
					</Typography.Heading>
				)}
			</Space>
		</ProductCardWrapper>
	);
};

const ProductCardWrapper = styled("div", {
	position: "relative",
	transition: "all 0.2s ease-in-out",

	display: "flex",
	flexDirection: "column",

	flex: "1 1 0%",

	gap: "1rem",

	"&:hover": {
		transition: "all 0.2s ease-in-out",

		"& > [data-card-view] > [data-add-to-cart-btn]": {
			opacity: 1,
		},

		"& > [data-card-view] > [data-card-image]": {
			opacity: 0.8,
			top: -12,
			right: -12,
		},
	},
});

const ProductCardBadge = styled(Badge, {
	position: "absolute",
	top: 18,
	right: -14,
	zIndex: 1,
});

const ProductCardView = styled("div", {
	position: "relative",

	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",

	minWidth: "18rem",
	minHeight: "16rem",
	backgroundColor: "$gray200",
	br: "$5xl",
	// overflow: "hidden",
});

const ProductCardImage = styled("img", {
	position: "absolute",
	top: 0,
	right: 0,

	transition: "all 0.2s ease-in-out",

	br: "$5xl",
	width: "100%",
	height: "100%",
	objectFit: "cover",
});

const ProductCardActionButton = styled(Button, {
	position: "absolute",
	opacity: 0,
});
