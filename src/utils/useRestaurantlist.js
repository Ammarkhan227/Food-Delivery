import { useEffect, useState } from "react";

const useRestaurantlist = (restaurantId) => {
    const [Newrestaurants, setNewrestaurants] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7883075&lng=83.3856162&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setNewrestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return Newrestaurants
};

export default useRestaurantlist;