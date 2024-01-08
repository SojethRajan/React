export const RestaurantCard = ({imgSource,name,price,cusine,dish,rating}) => {   
    return(
        <div className="menuCards">
            <img src= {imgSource} className="images"/>
            <h2>{name}</h2>
            <h3>Cost : {price}</h3>
            <p>Cusine : {cusine.join(', ')}</p>
            <p>Item : {dish}</p>
            <p>Ratings : {rating}</p>
        </div>
    )
}