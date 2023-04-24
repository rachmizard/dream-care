import { Box, Button, Flex, Input, Typography } from "../atoms";

export const NewsletterInputSection = () => {
	return (
		<Flex
			css={{
				flexDirection: "column",

				py: "4rem",
				width: "100%",

				br: "$xl",
			}}>
			<Typography.Heading
				level={{
					"@initial": 3,
					"@bp3": 1,
				}}
				css={{
					color: "$primaryDark",
					textAlign: "center",
				}}>
				Sign Up to our Newsletter
			</Typography.Heading>

			<form>
				<Flex
					css={{
						alignItems: "center",
						gap: "1rem",

						maxWidth: "40rem",
						width: "100%",

						mt: "2rem",
						mx: "auto",
					}}>
					<Box
						css={{
							flexGrow: 1,
						}}>
						<Input
							type="email"
							fullWidth
							placeholder="Your Email"
							size={{
								"@initial": "md",
								"@bp2": "xl",
							}}
							required
							name="email"
						/>
					</Box>

					<Box
						css={{
							flexShrink: 0,
						}}>
						<Button
							rounded
							size={{
								"@bp2": "xl",
							}}
							css={{
								boxShadow: "none",
							}}>
							Sign Up
						</Button>
					</Box>
				</Flex>
			</form>
		</Flex>
	);
};
