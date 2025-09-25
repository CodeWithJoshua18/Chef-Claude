import '../styles/global.css'
import { useState } from 'react';

function Main(){

   const [ingredients, setIngredients] = useState([])

    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const ingredient = formData.get('ingredient');
        setIngredients(prevIngredients => [...prevIngredients, ingredient]);
        e.currentTarget.reset();
        
    }

    const items = ingredients.map((item, index) => (
        <li key={index}>{item}</li>
    ));
    
    return(
        <main className='add-ingredients'>
            <form onSubmit={handleSubmit}>
                <input 
                aria-label='Add ingredient' 
                type="text" 
                placeholder='e.g Eggs' 
                name='ingredient'
                />
                <button>+ Add Ingredient</button>
            </form>

            <ul>
                {items}
            </ul>
        </main>
    )
}

export default Main