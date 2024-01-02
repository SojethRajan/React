import React from "react";
import ReactDOM from "react-dom/client";          

const Title = () => {
    return(
        <h2>Food Villa</h2>
    )
}

const Links = () => {
    return(
        <p>Sign up</p>
    )
}

const MenuCards = [
    {
        imgSource : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2aE0hg7C5tir-WYOjuT4RxeW0ogcc43pLRhgYM_clbQ&s',
        name : 'Burger King',
        price : 12,
        cusine : ['American','Burger'],
        dish : 'Twisted Whooper',
        rating : 4.3
    },
    {
        name : 'MCD',
        imgSource : "https://blog.tipranks.com/wp-content/uploads/2023/11/shutterstock_2323787401-750x406.jpg",
        price : 10,
        cusine : ['American','Burger'],
        dish : 'McScpicy',
        rating : 4.2
    },
    {
        name : 'KFC',
        imgSource : 'https://www.mashed.com/img/gallery/this-is-why-kfcs-fried-chicken-is-so-delicious/intro-1560197518.jpg',
        price : 9,
        cusine : ['American','Fried Chicken'],
        dish : 'Chicken Bucket',
        rating : 4.3
    },
    {
        name : 'Dominos Pizza',
        imgSource : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZtn8RcPY5uOZYrSllHlDBV6uwxqjDyl-JA&usqp=CAU',
        price : 10,
        cusine : ['Italian','Pizza'],
        dish : 'Farmhouse pizza',
        rating : 3.3
    },
    {
        name : 'Jimis Burger',
        imgSource : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8gl6bviJ_udK6NP5p3cKzQOOharPxC1kzjQ&usqp=CAU ',
        price : 15,
        cusine : ['American','Burger'],
        dish : 'Hybrid burger',
        rating : 4.7
    },
    
]

const RestaurantCard = ({imgSource,name,price,cusine,dish,rating}) => {   
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

const Body = () => {
    return(
        <div className="restaurantCard">
            {
                MenuCards.map(menuCard => {
                    return<RestaurantCard {...menuCard}/>
                })
            }
        </div>
    )
}


const Footer = () => (
   <div className="footer">
         <Links/>
   </div>
)

const ApplyLayout = () => {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ApplyLayout/>);

