import styles from "./Header.module.css"

export default ({isSelected}) =>{
    return(
        <header >
        <center>
        <h1>Teachnigo</h1>
        {isSelected && <p>This is selected</p>}
        </center>
        </header>
    )
}