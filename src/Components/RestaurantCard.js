import { IMAGE_BASE_URL } from "../config"

export const RestaurantCard = ({cloudinaryImageId,name,cuisines,avgRating}) => {   
    return(
        <div className="menuCards">
            <img src= {IMAGE_BASE_URL + cloudinaryImageId} className="images"/>
            <h2>{name}</h2>
            <p>Cusine : {cuisines.join(', ')}</p>
            <p>Ratings : {avgRating}</p>
        </div>
    )
}