import { RESTAURANTS_LIST_URL } from "../config";
import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";

const onSearch = (searchText,Menu) => {
    let filteredData = Menu.filter((menu) => 
        menu?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
    )
    return filteredData;
}

const Body = () => {
    const [searchText, setSearchText] = useState();
    const [Menu, setMenu] = useState([]);
    const [filteredMenu, setfilteredMenu] = useState();

    useEffect(() => {
        getRestaurantsList();
    },[])

    async function getRestaurantsList(){
        const data = await fetch(RESTAURANTS_LIST_URL);
        const json = await data.json();
        setMenu(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredMenu(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    if(filteredMenu?.length === 0){
        console.log('here')
        return <h2>NO restaurants Found</h2>
    }
    
    return (Menu?.length === 0) ? <ShimmerUi/> : (
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
                        setfilteredMenu(filteredData);
                    }}
                    >search</button>
            </div>
            <div className="restaurantCard">
            {
                filteredMenu.map(menuCard => {
                    return<RestaurantCard {...menuCard.info} key={menuCard.info.id}/>
                })
            }
            </div>
        </>
    )
}

export default Body;