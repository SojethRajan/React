import { MenuCards, RESTAURANTS_LIST } from "../config";
import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";

const onSearch = (searchText,Menu) => {
    let filteredData = Menu.filter((menu) => 
        menu.info.name.toLowerCase().includes(searchText.toLowerCase())
    )
    return filteredData;
}

const Body = () => {
    const [searchText, setSearchText] = useState();
    const [Menu, setMenu] = useState(MenuCards);

    useEffect(() => {
        getRestaurantsList();
    },[])

    async function getRestaurantsList(){
        const data = await fetch(RESTAURANTS_LIST);
        const json = await data.json();
        setMenu(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        return json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    }

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
                    return<RestaurantCard {...menuCard.info} key={menuCard.info.id}/>
                })
            }
            </div>
        </>
    )
}

export default Body;