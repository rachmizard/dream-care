import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronRightIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { IoCartOutline, IoPerson, IoSearch } from "react-icons/io5";
import {
	useHref,
	useLocation,
	useNavigate,
	useNavigation,
} from "react-router-dom";

import {
	CardDropdownProductImageWrapper,
	CartDropdown,
	Flex,
	Typography,
} from "@/components";
import {
	NavbarBrand,
	NavbarContainer,
	NavbarDropdownArea,
	NavbarDropdownIconButton,
	NavbarDropdownSection,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuLink,
} from "./navbar.styled";

import { useGetCarts, useGetIsCartEmpty, useRemoveCart } from "@/hooks";

import { keyframes, styled } from "@/stitches.config";
import { toUSDCurrency } from "@/utils";
import { ROUTES_CONSTANT } from "@/constants/routes.constant";

export const Navbar = () => {
	const isCartEmpty = useGetIsCartEmpty();
	const carts = useGetCarts();
	const removeCart = useRemoveCart();

	const navigate = useNavigate();
	const location = useLocation();

	const hideEditCartButton = location.pathname === ROUTES_CONSTANT.CART;

	return (
		<NavbarContainer>
			<NavbarBrand>
				<Typography.Link
					to={ROUTES_CONSTANT.HOME}
					css={{
						color: "$primary",
						fontSize: "$3xl",
					}}>
					DreamCare
				</Typography.Link>
			</NavbarBrand>

			<NavbarMenu>
				<NavbarMenuItem>
					<NavbarMenuLink to="/search">
						<IoSearch size={24} />
					</NavbarMenuLink>
				</NavbarMenuItem>
				<NavbarDropdownArea>
					<NavbarMenuItem>
						<NavbarMenuLink to="/carts" data-navbar-menu-link>
							<IoCartOutline size={24} />
						</NavbarMenuLink>

						<NavbarDropdownSection data-navbar-dropdown-section>
							<CartDropdown
								carts={carts || []}
								hideEditCartButton={hideEditCartButton}
								onRemoveCart={(index) => removeCart(index)}
								onEditCart={() =>
									navigate(ROUTES_CONSTANT.CART)
								}
								renderItem={(cart, index) => (
									<Flex
										key={index}
										css={{
											alignItems: "center",
											gap: "$4",
										}}>
										<CardDropdownProductImageWrapper>
											<img
												src={cart.image}
												alt={cart.name}
											/>
										</CardDropdownProductImageWrapper>
										<Flex
											css={{
												flexDirection: "column",
												gap: "$2",
											}}>
											<Typography.Heading
												css={{
													fontWeight: "$normal",
												}}
												level="5">
												{cart.name}
											</Typography.Heading>

											<Typography.Heading
												css={{
													fontWeight: "$normal",
												}}
												level="5">
												{toUSDCurrency(cart.price)}
											</Typography.Heading>
										</Flex>
									</Flex>
								)}
							/>
						</NavbarDropdownSection>
						{!isCartEmpty && <CartDot data-cart-dot />}
					</NavbarMenuItem>
				</NavbarDropdownArea>
				<NavbarMenuItem>
					<NavbarMenuLink to="/auth">
						<IoPerson size={24} />
					</NavbarMenuLink>
				</NavbarMenuItem>
			</NavbarMenu>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild>
					<NavbarDropdownIconButton aria-label="Customise options">
						<HamburgerMenuIcon width={24} height={24} />
					</NavbarDropdownIconButton>
				</DropdownMenu.Trigger>

				<DropdownMenu.Portal>
					<DropdownMenuContent side="bottom">
						<DropdownMenuItem>Home</DropdownMenuItem>
						<DropdownMenu.Sub>
							<DropdownMenuSubTrigger>
								Browse our Products
								<RightSlot>
									<ChevronRightIcon />
								</RightSlot>
							</DropdownMenuSubTrigger>

							<DropdownMenu.Portal>
								<DropdownMenuSubContent>
									<DropdownSubMenuItem>
										Bedding
									</DropdownSubMenuItem>
									<DropdownSubMenuItem>
										Bedroom
									</DropdownSubMenuItem>
									<DropdownSubMenuItem>
										Living Room
									</DropdownSubMenuItem>
									<DropdownMenuArrow />
								</DropdownMenuSubContent>
							</DropdownMenu.Portal>
						</DropdownMenu.Sub>
						<DropdownMenuItem>Contact</DropdownMenuItem>
						<DropdownMenuArrow />
					</DropdownMenuContent>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</NavbarContainer>
	);
};

const slideUpAndFade = keyframes({
	"0%": { opacity: 0, transform: "translateY(2px)" },
	"100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
	"0%": { opacity: 0, transform: "translateX(-2px)" },
	"100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
	"0%": { opacity: 0, transform: "translateY(-2px)" },
	"100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
	"0%": { opacity: 0, transform: "translateX(2px)" },
	"100%": { opacity: 1, transform: "translateX(0)" },
});

const contentStyles = {
	display: "flex",
	flexDirection: "column",
	background: "rgba(255, 255, 255, 0.90)",
	borderRadius: "16px",
	boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
	backdropFilter: "blur(12.7px)",
	"-webkit-backdrop-filter": "blur(12.7px)",
	border: "1px solid rgba(255, 255, 255, 0.51)",
	padding: 5,
	animationDuration: "400ms",
	animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
	willChange: "transform, opacity",
	'&[data-state="open"]': {
		'&[data-side="top"]': { animationName: slideDownAndFade },
		'&[data-side="right"]': { animationName: slideLeftAndFade },
		'&[data-side="bottom"]': { animationName: slideUpAndFade },
		'&[data-side="left"]': { animationName: slideRightAndFade },
	},
};

const DropdownMenuContent = styled(DropdownMenu.Content, contentStyles);
const DropdownMenuSubContent = styled(DropdownMenu.SubContent, {
	// height: 380,

	padding: 10,

	background: "white",
	boxShadow: "$5",

	br: "$2xl",

	animationDuration: "400ms",
	animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
	willChange: "transform, opacity",
	'&[data-state="open"]': {
		'&[data-side="top"]': { animationName: slideDownAndFade },
		'&[data-side="right"]': { animationName: slideLeftAndFade },
		'&[data-side="bottom"]': { animationName: slideUpAndFade },
		'&[data-side="left"]': { animationName: slideRightAndFade },
	},
});

const DropdownMenuArrow = styled(DropdownMenu.Arrow, {
	fill: "white",
	width: 10,
	height: 10,
});

const itemStyles = {
	all: "unset",
	position: "relative",

	display: "flex",

	fontSize: "$xl",
	lineHeight: 1,
	borderRadius: 3,
	padding: "10px",
	userSelect: "none",

	color: "$primaryDark",

	"&[data-disabled]": {
		color: "$gray300",
		pointerEvents: "none",
	},

	"&[data-highlighted]": {
		color: "$primary",
	},
};

const itemSubStyles = {
	...itemStyles,
	fontSize: "$lg",
};

const DropdownMenuSubTrigger = styled(DropdownMenu.SubTrigger, {
	'&[data-state="open"]': {
		color: "$primary",
	},
	...itemStyles,
});

const DropdownMenuItem = styled(DropdownMenu.Item, itemStyles);

const DropdownSubMenuItem = styled(DropdownMenu.Item, itemSubStyles);

const RightSlot = styled("div", {
	marginLeft: "auto",
	paddingLeft: 20,
	color: "$primaryDark",
	"[data-highlighted] > &": { color: "$primary" },
	"[data-disabled] &": { color: "$gray300" },
});

const CartDot = styled("span", {
	position: "absolute",
	top: 6,
	right: 7,
	width: 10,
	height: 10,
	borderRadius: "50%",
	backgroundColor: "$primary",
	zIndex: 1,
});
