
import moviesData from "../Film"
import Movie from "./Movie";
import {useState, useEffect} from 'react'


function  MovieList(
){

    const [movies, setMovies] = useState(moviesData)

    const onDelete = (Title) =>{
        setMovies(state => state.filter(x => x.Title !== Title))
    }

    const onSelect = (Title) =>{
        setMovies(state => state.map(x => ({ ...x , selected: x.Title === Title})))
    }
    
    //let reactElements

    return(
        movies.map(movie => 
            <li key = {movie.Title}><Movie {...movie}  onDelete = {onDelete} onSelect = {onSelect}/></li>
        )
    );
}
/*
{Title: 'Avatar', Year: '2009', Rated: 'PG-13', Released: '18 Dec 2009', Runtime: '162 min', …}
Actors
: 
"Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang"
Awards
: 
"Won 3 Oscars. Another 80 wins & 121 nominations."
Country
: 
"USA, UK"
Director
: 
"James Cameron"
Genre
: 
"Action, Adventure, Fantasy"
Images
: 
(5) ['https://images-na.ssl-images-amazon.com/images/M/M…TcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg', 'https://images-na.ssl-images-amazon.com/images/M/M…TcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg', 'https://images-na.ssl-images-amazon.com/images/M/M…TcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg', 'https://images-na.ssl-images-amazon.com/images/M/M…TcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg', 'https://images-na.ssl-images-amazon.com/images/M/M…TcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg']
Language
: 
"English, Spanish"
Metascore
: 
"83"
Plot
: 
"A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
Poster
: 
"http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg"
Rated
: 
"PG-13"
Released
: 
"18 Dec 2009"
Response
: 
"True"
Runtime
: 
"162 min"
Title
: 
"Avatar"
Type
: 
"movie"
Writer
: 
"James Cameron"
Year
: 
"2009"
imdbID
: 
"tt0499549"
imdbRating
: 
"7.9"
imdbVotes
: 
"890,617"
*/
export default MovieList