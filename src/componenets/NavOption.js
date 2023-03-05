import styles from './NavOption.module.css'

function NavOption({nameOfOption}){
    return(
        <li key={nameOfOption} className = {styles['option-li']}>{nameOfOption}</li>
    )
}

export default NavOption