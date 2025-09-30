import { useState } from 'react'; 
import ClaudeRecipe from './components/ClaudeRecipe'
import Header from './components/Header'
import IngredientsList from './components/IngredientsList'
import Main from './components/Main'
import './styles/global.css'

function App() {
  const [ingredients, setIngredients] = useState([])

  function addIngredient(formData) {
    const ingredient = formData.get('ingredient');
    setIngredients(prevIngredients => [...prevIngredients, ingredient]);
  }

  const items = ingredients.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <>
      <Header />
      <Main />
      <div className='add-ingredients'>
        <form onSubmit={e => {
          e.preventDefault();
          addIngredient(new FormData(e.target));
          e.target.reset();
        }}>
          <input 
            aria-label='Add ingredient' 
            type="text" 
            placeholder='e.g Eggs' 
            name='ingredient'
          />
          <button type="submit">+ Add Ingredient</button>
        </form>

        {ingredients.length ? (
          <section>
            <h2>Ingredients on hand:</h2>
            <ul className='ingredients-list' aria-live='polite'>{items}</ul>

            {ingredients.length >= 4 && (
              <div className='get-recipe-container'>
                <div>
                  <h3>Ready for a recipe?</h3>
                  <p>Generate a recipe from your list of ingredients</p>
                  <button>Get Recipe</button>
                </div>
              </div>
            )}
          </section>
        ) : null}
      </div>
      <IngredientsList />
      <ClaudeRecipe />
    </>
  )
}

export default App
