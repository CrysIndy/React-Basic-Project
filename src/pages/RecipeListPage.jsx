import {
	Box,
	Card,
	CardBody,
	Center,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	Tag,
	TagLabel,
	HStack,
	VStack,
} from "@chakra-ui/react";
import {useState, useCallback} from "react";
import {RecipeSearch} from "../components/ui/RecipeSearch";

export const RecipeListPage = ({recipes, onSelectRecipe}) => {
	const [filteredRecipes, setFilteredRecipes] = useState(recipes);

	const handleSearch = useCallback((filtered) => {
		setFilteredRecipes(filtered);
	}, []);

	return (
		<div>
			<Center
				bgColor="blue.600"
				h="25vh"
				flexDir={{base: "column", sm: "row"}}
				color="gray.300"
			>
				<Heading p="1rem">Winc recipe finder</Heading>
				<RecipeSearch onSearch={handleSearch} />
			</Center>

			<Flex
				pt="0.75rem"
				bgColor="blue.100"
				wrap="wrap"
				gap="4"
				justify="center"
			>
				{filteredRecipes.map((hit) => (
					<Card
						key={hit.recipe.label}
						bg="blue.300"
						color="gray.300"
						borderRadius="xl"
						cursor="pointer"
						_hover={{transform: "scale(1.04)"}}
						onClick={() => onSelectRecipe(hit.recipe)}
						maxW="lg"
						w="250px"
						h="400px"
						display="flex"
						flexDirection="column"
					>
						<Stack
							mt="0"
							spacing="3"
							flex="1"
						>
							<CardBody
								overflow="hidden"
								justify="center"
							>
								<Image
									src={hit.recipe.image}
									alt={hit.recipe.label}
									h="150px"
									w="100%"
									objectFit="cover"
									borderTopRadius="xl"
								/>

								<Box
									mt={1}
									display="flex"
									flexDirection="column"
									gap={0.25}
									textAlign="center"
								>
									<Heading size="sm">{hit.recipe.label}</Heading>
									<Text>{hit.recipe.mealType}</Text>
									<Text>{hit.recipe.dishType}</Text>

									<VStack
										mt="1rem"
										spacing={1}
										align="center"
									>
										<HStack
											spacing={1}
											wrap="wrap"
											justify="center"
										>
											{hit.recipe.cautions.map((label, index) => (
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
											spacing={1}
											wrap="wrap"
											justify="center"
										>
											{hit.recipe.healthLabels
												.filter(
													(label) =>
														label === "Vegan" ||
														label === "Vegetarian" ||
														label === "Pescatarian",
												)
												.map((label, index) => (
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
											spacing={1}
											wrap="wrap"
											justify="center"
										>
											{hit.recipe.dietLabels.map((label, index) => (
												<Tag
													key={index}
													bgColor="green.200"
													borderRadius="full"
												>
													<TagLabel>{label}</TagLabel>
												</Tag>
											))}
										</HStack>
									</VStack>
								</Box>
							</CardBody>
						</Stack>
					</Card>
				))}
			</Flex>
		</div>
	);
};
