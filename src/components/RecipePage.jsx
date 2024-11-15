import {
	Button,
	Box,
	Center,
	Heading,
	Image,
	Text,
	Flex,
	Tag,
	TagLabel,
	VStack,
	HStack,
} from "@chakra-ui/react";
import {IoReturnUpBackSharp} from "react-icons/io5";

export const RecipePage = ({recipe, onBack}) => {
	const cautions = Array.isArray(recipe.cautions)
		? recipe.cautions
		: recipe.cautions.split(", ");
	const healthLabels = Array.isArray(recipe.healthLabels)
		? [...new Set(recipe.healthLabels)]
		: recipe.healthLabels.split(", ");
	const dietLabels = Array.isArray(recipe.dietLabels)
		? recipe.dietLabels
		: recipe.dietLabels.split(", ");

	return (
		<div>
			<Center bgColor="blue.600">
				<Box
					flexDirection={{base: "column", sm: "row"}}
					w={{base: "100%", sm: "75%"}}
					pb="2rem"
					bg="blue.300"
					color="gray.300"
				>
					<Image
						h="200px"
						w="100%"
						objectFit="cover"
						src={recipe.image}
						alt={recipe.label}
					/>

					<Flex
						mt="4"
						h="100%"
						direction={{base: "column", sm: "row"}}
						gap="4"
					>
						<Box flex="1">
							<Box mb="0.25rem">
								<Text
									mt={0}
									color="white"
									fontSize={18}
									textAlign="center"
								>
									{recipe.mealType}
								</Text>

								<Heading textAlign="center">{recipe.label}</Heading>
								<Text
									fontSize={20}
									color="white"
									fontWeight="bold"
									textAlign="center"
								>
									{recipe.dishType}
								</Text>
							</Box>
							<Center>
								<Text>
									Total Cooking Time: <strong>{recipe.totalTime}</strong> minutes
								</Text>
							</Center>
							<Center>
								<Text>
									Servings: <strong>{recipe.yield}</strong>
								</Text>
							</Center>
							<Box>
								<Text
									mt="2rem"
									color="white"
									fontWeight="bold"
								>
									Ingredients:
								</Text>
								<Box>
									{recipe.ingredientLines.map((ingredient, index) => (
										<Text
											key={index}
											ml={4}
											mt={1}
										>
											- {ingredient}
										</Text>
									))}
								</Box>
							</Box>
						</Box>

						<Box flex="1">
							<VStack
								spacing={4}
								align="center"
							>
								<HStack
									spacing={2}
									wrap="wrap"
									justify="center"
								>
									{cautions.map((label, index) => (
										<Tag
											key={index}
											bgColor="red.200"
											borderRadius="full"
										>
											<TagLabel>{label}</TagLabel>
										</Tag>
									))}
								</HStack>

								<HStack
									spacing={2}
									wrap="wrap"
									justify="center"
								>
									{healthLabels.map((label, index) => (
										<Tag
											key={index}
											bgColor="yellow.200"
											borderRadius="full"
										>
											<TagLabel>{label}</TagLabel>
										</Tag>
									))}
								</HStack>

								<HStack
									spacing={2}
									wrap="wrap"
									justify="center"
								>
									{dietLabels.map((label, index) => (
										<Tag
											key={index}
											bgColor="green.200"
											borderRadius="full"
										>
											<TagLabel>{label}</TagLabel>
										</Tag>
									))}
								</HStack>

								<Box
									mt="2rem"
									textAlign="center"
								>
									<Text
										color="white"
										fontWeight="bold"
									>
										Nutrition Information:
									</Text>
									<HStack
										spacing={1}
										wrap="wrap"
										justify="center"
									>
										{Object.entries(recipe.totalNutrients)
											.filter(
												([key]) =>
													key === "ENERC_KCAL" ||
													key === "PROCNT" ||
													key === "FAT" ||
													key === "CHOCDF" ||
													key === "CHOLE" ||
													key === "NA",
											)
											.map(([, nutrient], index) => (
												<Box
													key={index}
													fontSize="md"
												>
													<Text>
														{nutrient.label}: {nutrient.quantity.toFixed(0)}{" "}
														{nutrient.unit}
													</Text>
												</Box>
											))}
									</HStack>
									<Box
										mt="2rem"
										align="center"
									>
										<Button
											color="black"
											flexDirection="row"
											borderRadius="xl"
											onClick={onBack}
										>
											<IoReturnUpBackSharp />
											Back to Recipe List
										</Button>
									</Box>
								</Box>
							</VStack>
						</Box>
					</Flex>
				</Box>
			</Center>
		</div>
	);
};
