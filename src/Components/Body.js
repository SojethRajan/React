import { MenuCards } from "../config";
import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";

const onSearch = (searchText,Menu) => {
    let filteredData = Menu.filter((menu) => 
        menu.name.includes(searchText)
    )
    return filteredData;
}

const Body = () => {
    const [searchText, setSearchText] = useState();
    const [Menu, setMenu] = useState(MenuCards);
    return(
        <>
            <div>
                <input 
                    type="text"
                    className="search-bar" 
                    placeholder="search" 
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                        setMenu(MenuCards)
                    }}
                    >
                </input>
                <button 
                    className="searh-btn"
                    onClick={() => {
                        const filteredData = onSearch(searchText,Menu);
                        setMenu(filteredData);
                    }}
                    >search</button>
            </div>
            <div className="restaurantCard">
            {
                Menu.map(menuCard => {
                    return<RestaurantCard {...menuCard} key={menuCard.id}/>
                })
            }
            </div>
        </>
    )
}

export default Body;