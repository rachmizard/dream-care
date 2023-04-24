import { Box, Button, Col, Row, Space, Typography } from "../atoms";

import { ImagesConstant } from "@/constants/images.constant";
import { styled } from "@/stitches.config";

export const HeroSection = () => {
	return (
		<HeroContainer>
			<Row
				direction={{
					"@initial": "columnReverse",

					"@bp3": "row",
				}}
				align="center">
				<Col>
					<Box
						css={{
							maxWidth: "100%",
						}}>
						<Space
							direction="vertical"
							size="lg"
							align={{
								"@initial": "center",

								"@bp3": "start",
							}}>
							<Typography.Heading
								css={{
									fontSize: "$3xl",
									color: "$primaryDark",
									"@bp3": {
										fontSize: "$4xl",
									},
								}}>
								Discover Your Best Skin Yet
							</Typography.Heading>

							<Typography.Text
								css={{
									color: "$primaryDark",

									fontSize: "$md",
									lineHeight: "1.5em",
									letterSpacing: "0.0420rem",
									textAlign: "justify",

									"@bp3": {
										lineHeight: "1.5em",
										letterSpacing: "0.0550em",
										fontSize: "$lg",
									},
								}}>
								We believe in the power of natural ingredients
								to help you look and feel your best.
							</Typography.Text>

							<HeroButton size="lg" rounded>
								Shop Now
							</HeroButton>
						</Space>
					</Box>
				</Col>
				<Col>
					<Space align="center" direction="vertical">
						<HeroImage src={ImagesConstant.skinCareGirl0} />
					</Space>
				</Col>
			</Row>
		</HeroContainer>
	);
};

const HeroButton = styled(Button, {
	backgroundColor: "$gray100",
	fontWeight: "$bold",
	minWidth: "100%",

	letterSpacing: "0.1em",

	"@bp3": {
		minWidth: "12rem",
	},

	boxShadow: "$5",
	height: "3.2em",
});

const HeroContainer = styled("section", {
	width: "100%",
});

const HeroImage = styled("img", {
	transition: "all 0.3s ease-in-out",

	width: "200px",
	height: "200px",

	"@bp3": {
		width: "400px",
		height: "400px",
	},

	borderRadius: "$full",

	objectFit: "cover",

	objectPosition: "center",
});
