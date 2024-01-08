const Title = () => {
    return(
        <h2>Food Villa</h2>
    )
}

const Header = () => {
    return(
        <div className="header">
            <Title></Title>
            <ul className="menus">
                <li>Home</li>
                <li>About</li>
                <li>Help</li>
            </ul>
        </div>
    )
}
export default Header;
