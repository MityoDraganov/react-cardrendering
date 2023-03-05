import { useEffect} from 'react'
import styles from './Movie.module.css'
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
        <div className= {styles['movie-card']}>
            {selected && <h3>Selected</h3>}
            <h3>{Title}</h3>
            <p>Actors: {Actors}</p>
            <h2>director: {Director}</h2>
            <button className= {styles['card-button']}  onClick={() => onDelete(Title)}>Delete</button>
            <button className= {styles['card-button']} onClick={() => onSelect(Title)}>Select</button>
        </div>
    )
}

export default Movie
