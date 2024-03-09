import Card from './Card'
import { useState } from "react";
import { useEffect } from 'react';
import Shimmer from './Shimmer';
import Blank from './Blank';
import { Link } from 'react-router-dom';
import Useroffline from './Useroffline';
import useOnlineStatus from '../utils/useOnlineStatus';
// import  useRestaurantlist  from '../utils/useRestaurantlist';



const Body = () => {
    

    //Using useState below to render the filtered returants
    const [listofResturants, setlistofResturants] = useState([]);

    // This below copy of returants will be used for showing the filtered resturants !!!
    const [filterResturant, setfilterResturant] = useState("");



    // Using useSate for generating the filtering of Resturants !!!
    const [inputData, setinputData] = useState("");

    // fetching the API from Swiggy website we use useEffect !!!
    useEffect(() => {
        fetchData();
    }, []);

    // creating function to fetch Data from API !!!
    const fetchData = async () => {
        // fetching data from original swiggy API !!!
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7883075&lng=83.3856162&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        //Now we convert the Data which we have got from API to  JSON format.!!!
        const json = await data.json();

        //Now we put  this in our listofResturants using set !!!
        setlistofResturants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // Filter useState
        setfilterResturant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    };

    //For checking user Online/Offline Status !!!
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <Useroffline />
            // <h1>You are Offline</h1>
        );

    // Until API is loading the Data  will be displayed as shimmer UI which is used latestly.
    //This below concept is known as Conditional Rendering
    if (listofResturants?.length === 0) {
        return (
            <Shimmer />
        )
    };

    if (filterResturant?.length === 0) {
        return (
            <Blank />
        )
    };



    //Another way of writing this conditional rendering is  by using ternary operator ?

    // return listofResturants.length === 0 ? (<Shimmer />) : 
    return (
        <div className='body'>
            <div className='filter'>
                {/* Search filter */}
                <div className='search'>
                    <input className='searchbar' type="text" placeholder="Search For Foods..." value={inputData} onChange={(e) => {
                        setinputData(e.target.value)
                    }} />
                    <button className='searchbtn' onClick={() => {
                        const filRest = listofResturants.filter(
                            // to lowercase() funstion will help for not getting stuck the search if someone typed in capital
                            (res) => res?.info?.name?.toLowerCase()?.includes(inputData.toLowerCase())
                        );
                        setfilterResturant(filRest);
                    }}>Search</button>
                </div>

                {/* Creating the filter button */}
                <div className='resfilter'>
                    <button onClick={() => {
                        const filterlist = listofResturants.filter((res) => res.info.avgRating > 4.3);
                        setfilterResturant(filterlist);
                        console.log(filterlist)
                    }}>Top Rated Restaurant</button>
                </div>

            </div>
            {/* Resturant Cards */}
            <div className='main'>
                <div className='carddisplay'>
                    {
                        filterResturant?.map((restaurant) => (<Link className="cardlink" key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><Card restData={restaurant} /></Link>))
                    }
                </div>
            </div>
        </div >
    );
};


export default Body;