import { useEffect} from 'react'

function Movie({
    Title,Actors, Director, onDelete, onSelect, selected
}){

    useEffect(() => {
        console.log('mounted')

        return() => {
            console.log('unmounted')
        }
    }, [])

   
    useEffect(() => {
        
        
        
    }, [])
   

    return(
        <div>
            {selected && <h3>Selected</h3>}
            <h3>{Title}</h3>
            <p>Actors: {Actors}</p>
            <h2>director: {Director}</h2>
            <button onClick={() => onDelete(Title)}>Delete</button>
            <button onClick={() => onSelect(Title)}>Select</button>
        </div>
    )
}

export default Movie
