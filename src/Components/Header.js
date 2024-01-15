import { useState } from "react";

const Title = () => {
    return(
        <h2>Food Villa</h2>
    )
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    return(
        <div className="header">
            <Title></Title>
            <ul className="menus">
                <li>Home</li>
                <li>About</li>
                <li>Help</li>
            </ul>
            {
                (isLoggedIn) ? 
                    <button onClick={ () => setIsLoggedIn(false)}>Login</button> : 
                    <button onClick={ () => setIsLoggedIn(true)} >Logout</button>
            }
        </div>
    )
}
export default Header;
