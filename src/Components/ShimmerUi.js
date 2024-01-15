const ShimmerMenuCard = () => {
    return (
        <div className="shimmer-menu-cards">
            <div className="shimmer-image-card"></div>
            <div className="shimmer-content-card"></div>
            <div className="shimmer-content-card-2"></div>
        </div>
    )
}


const ShimmerUi = () => {
    return (
        <div className="restaurantCard">
            <ShimmerMenuCard/>
            <ShimmerMenuCard/>
            <ShimmerMenuCard/>
            <ShimmerMenuCard/>
            <ShimmerMenuCard/>
            <ShimmerMenuCard/>
            <ShimmerMenuCard/>
            <ShimmerMenuCard/>
            <ShimmerMenuCard/>
            <ShimmerMenuCard/>

        </div>
    )
}



export default ShimmerUi;