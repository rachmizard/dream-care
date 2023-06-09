import {
	RiEye2Line,
	RiLineChartLine,
	RiMoonLine,
	RiShareBoxLine,
	RiShieldLine,
	RiShoppingBag3Line,
	RiStackLine,
	RiStarLine,
	RiSunLine,
	RiUser2Line,
	RiWaterFlashLine,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import {
	AboutCard,
	Box,
	Button,
	CategoryIcon,
	Flex,
	HeroSection,
	MainLayout,
	NewsletterInputSection,
	ProductCard,
	SectionWrapper,
	Space,
	Typography,
} from "@/components";

import { ImagesConstant } from "@/constants/images.constant";
import { useAddCart } from "@/hooks";
import { ProductInterface } from "@/interfaces/product.interface";
import { ROUTES_CONSTANT } from "@/constants/routes.constant";

const categories = [
	{
		title: "On Sale",
		icon: <RiShoppingBag3Line />,
	},
	{
		title: "Featured",
		icon: <RiLineChartLine />,
	},
	{
		title: "Masks",
		icon: <RiStackLine />,
	},
	{
		title: "Eye Care",
		icon: <RiEye2Line />,
	},
	{
		title: "Moisturizers",
		icon: <RiWaterFlashLine />,
	},
	{
		title: "Treatments",
		icon: <RiShieldLine />,
	},
	{
		title: "Night Care",
		icon: <RiMoonLine />,
	},
	{
		title: "Sun Care",
		icon: <RiSunLine />,
	},
];

const PRODUCT_LIST_CONSTANT: ProductInterface[] = [
	{
		id: 1,
		name: "Sun Screen Thaipusam",
		image: ImagesConstant.skinCareYellow1,
		category: "suncare",
		price: 20,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		discount: 80,
	},
	{
		id: 2,
		name: "Night Eye Cream",
		image: ImagesConstant.skinCareYellow2,
		category: "eyecare",
		price: 10,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		discount: 10,
	},
	{
		id: 3,
		name: "Acne Skin Gel",
		image: ImagesConstant.skinCareYellow3,
		category: "treatments",
		price: 15,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		discount: 0,
	},
	{
		id: 4,
		name: "Anti Dry Skin",
		image: ImagesConstant.skinCareBlackWhite3,
		category: "moisturizers",
		price: 20,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		discount: 0,
	},
	{
		id: 5,
		name: "Body Protection",
		image: ImagesConstant.skinCareBlackWhite2,
		category: "treatments",
		price: 20,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		discount: 0,
	},
	{
		id: 6,
		name: "All In One Gel",
		image: ImagesConstant.skinCareBlackWhiteHd1,
		category: "featured",
		price: 20,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		discount: 0,
	},
	{
		id: 7,
		name: "Deep Treatment",
		image: ImagesConstant.skinCarePurple0,
		category: "onsale",
		price: 30,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		discount: 20,
	},
];

function HomePage() {
	const addCart = useAddCart();
	const navigate = useNavigate();

	return (
		<MainLayout title="Home Page">
			<Box
				css={{
					mt: "4rem",
				}}>
				<HeroSection />
			</Box>

			<Space
				css={{
					gap: "10vh",
					py: "4rem",
				}}
				direction="vertical"
				align="start"
				size="lg">
				<SectionWrapper>
					<Typography.Heading
						css={{
							color: "$primaryDark",
						}}
						level={{
							"@initial": 3,
							"@bp3": 1,
						}}>
						Browse By Category
					</Typography.Heading>

					<Space
						justify={{
							"@initial": "center",
							"@bp3": "start",
						}}
						size="lg"
						align="center"
						wrap>
						{categories.map(({ icon, title }, key) => (
							<CategoryIcon label={title} key={key}>
								{icon}
							</CategoryIcon>
						))}
					</Space>
				</SectionWrapper>

				<SectionWrapper>
					<Typography.Heading
						level={{
							"@initial": 3,
							"@bp3": 1,
						}}
						css={{
							color: "$primaryDark",
						}}>
						Explore our Products
					</Typography.Heading>
					<Flex
						css={{
							flexWrap: "wrap",
							gap: "4rem",
						}}>
						{PRODUCT_LIST_CONSTANT.map((product, key) => (
							<ProductCard
								key={key}
								product={product}
								onAddToCart={(item) => addCart(item)}
								onViewDetail={(item) =>
									navigate(
										`${ROUTES_CONSTANT.DETAIL_PRODUCT}/${item.id}`
									)
								}
							/>
						))}
					</Flex>

					<Flex
						css={{
							alignSelf: "center",
						}}>
						<Button rounded size="xl">
							View All
						</Button>
					</Flex>
				</SectionWrapper>

				<SectionWrapper alignCenter>
					<Typography.Heading
						level={{
							"@initial": 3,
							"@bp3": 1,
						}}
						css={{
							color: "$primaryDark",
						}}>
						Why People Choose Us
					</Typography.Heading>

					<Flex
						css={{
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",

							"@bp2": {
								flexDirection: "row",
							},
						}}>
						<AboutCard
							title="Easy Return"
							subtitle="Our return policy is simple and that is why customers love our shop."
							icon={<RiShareBoxLine />}
						/>
						<AboutCard
							title="Customer Service"
							subtitle="We offer amazing customer service no matter what happens."
							icon={<RiUser2Line />}
						/>
						<AboutCard
							title="High Quality"
							subtitle="All of our products go through very strict inspection before we dispatch them."
							icon={<RiStarLine />}
						/>
					</Flex>
				</SectionWrapper>

				<NewsletterInputSection />
			</Space>
		</MainLayout>
	);
}

export default HomePage;
