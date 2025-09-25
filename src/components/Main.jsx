import '../styles/global.css'
import { useState } from 'react';

function Main(){

   const [ingredients, setIngredients] = useState([])

    function addIngredient(formData){
        const ingredient = formData.get('ingredient');
        setIngredients(prevIngredients => [...prevIngredients, ingredient]);
        
    }

    const items = ingredients.map((item, index) => (
        <li key={index}>{item}</li>
    ));
    
    return(
        <main className='add-ingredients'>
            <form action={addIngredient}>
                <input 
                    aria-label='Add ingredient' 
                    type="text" 
                    placeholder='e.g Eggs' 
                    name='ingredient'
                />
                <button>+ Add Ingredient</button>
            </form>
            
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className='ingredients-list' aria-live='polite'>{items}</ul>
            <div className='get-recipe-container'>
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                    <button>Get Recipe</button>
                </div>
            </div>
        </section>                

        </main>
    )
}

export default Main;