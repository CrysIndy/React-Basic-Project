import {data} from "../../utils/data";
import {useState, useEffect} from "react";
import {Input} from "@chakra-ui/react";

export const RecipeSearch = ({onSearch}) => {
	const [searchRecipe, setSearchRecipe] = useState("");

	useEffect(() => {
		const filteredRecipes = data.hits.filter((hit) => {
			const {label, healthLabels} = hit.recipe;
			const searchLower = searchRecipe.toLowerCase();

			return (
				label.toLowerCase().includes(searchLower) ||
				healthLabels.some((healthLabel) =>
					healthLabel.toLowerCase().includes(searchLower),
				)
			);
		});

		onSearch(filteredRecipes);
	}, [searchRecipe]);

	return (
		<Input
			w="80"
			bgColor="white"
			color="black"
			type="text"
			placeholder="Search a recipe..."
			value={searchRecipe}
			onChange={(event) => setSearchRecipe(event.target.value)}
		/>
	);
};
