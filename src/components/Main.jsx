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
            
            <h1>Ingredients on hand:</h1>

            <ul>
                {items}
            </ul>
        </main>
    )
}

export default Main;