import "./App.css";
import Header from "./componenets/Header";
import MovieList from "./componenets/MovieList";
import styles from "./componenets/MovieList.module.css"
import NavContent from "./componenets/NavContent";

function App() {


    const options = [
        {
            "name": "test",
        },
        {
            "name": "test2"
        }
    ]


    return(
        <div>
            <div>
                <Header isSelected></Header>
                <Header></Header>
            </div>
            <div >
                <ul className= {styles['options-ul']}>
                <NavContent options = {options}/>
                </ul>
            </div>
            

            <ul className = {styles['movies-list']}>
                <MovieList />
            </ul>

            
            
        </div>
    )
}

export default App;
