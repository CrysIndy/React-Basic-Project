import {useState} from "react";
import {RecipeListPage} from "./pages/RecipeListPage";
import {RecipePage} from "./components/RecipePage";
import {data} from "./utils/data";

export const App = () => {
	const [selectedRecipe, setSelectedRecipe] = useState();

	// recept selecteren
	const handleSelectRecipe = (recipe) => {
		setSelectedRecipe(recipe);
	};

	const handleBack = () => {
		setSelectedRecipe(null);
	};

	return (
		<div>
			{selectedRecipe ? (
				<RecipePage
					recipe={selectedRecipe}
					onBack={handleBack}
				/>
			) : (
				<RecipeListPage
					recipes={data.hits}
					onSelectRecipe={handleSelectRecipe}
				/>
			)}
		</div>
	);
};
