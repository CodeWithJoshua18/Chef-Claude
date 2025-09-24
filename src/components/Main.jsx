import '../styles/global.css'

function Main(){

    return(
        <main className='add-ingredients'>
            <form>
                <input aria-label='Add ingredient' type="text" placeholder='e.g Eggs' />
                <button>+ Add Ingredient</button>
            </form>
        </main>
    )
}

export default Main