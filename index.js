import React from "react";
import ReactDOM from "react-dom/client";          

const Header = () => {
    return(
        <div>
            <h1>This is the Header</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Help</li>
            </ul>
        </div>
    )
}

const Footer = () => (
    <h1>This is the Footer</h1>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([<Header/>, <Footer/>]);

