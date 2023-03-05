import NavOption from "./NavOption"


function NavContent({
    options
}){


    return(
        options.map(option => 
            <NavOption nameOfOption = {option.name} />
        )
    );
}

export default NavContent