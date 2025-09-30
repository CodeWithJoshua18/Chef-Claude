import React, { useState } from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromChefClaude } from "../ai"
import '../styles/global.css'
export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")

 async function getRecipe() {
  try {
    const recipeMarkdown = await getRecipeFromBackend(ingredients);
    setRecipe(recipeMarkdown);
  } catch (err) {
    console.error(err);
    setRecipe("⚠️ Could not fetch recipe. Check the server logs.");
  }
}



    function addIngredient(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newIngredient = formData.get("ingredient")
        if (newIngredient.trim()) {
            setIngredients(prev => [...prev, newIngredient])
        }
        e.target.reset()
    }

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>

            {ingredients.length > 0 && (
                <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
            )}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}
