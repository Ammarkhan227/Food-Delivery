import Card from './Card'
import { useState } from "react";
import { useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import Useroffline from './Useroffline';
import useOnlineStatus from '../utils/useOnlineStatus';
import useRestaurantlist from '../utils/useRestaurantlist';



const Body = () => {


    //Using useState below to render the filtered returants
    const listofResturants = useRestaurantlist();

    // This below copy of returants will be used for showing the filtered resturants !!!
    const [filterResturant, setfilterResturant] = useState([]);

    useEffect(() => {

        setfilterResturant(listofResturants)
    }, [listofResturants]);




    // Using useSate for generating the Searching of Resturants !!!
    const [inputData, setinputData] = useState("");


    //For checking user Online/Offline Status !!!
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <Useroffline />
            // <h1>You are Offline</h1>
        );

    // Until API is loading the Data  will be displayed as shimmer UI which is used latestly.
    //This below concept is known as Conditional Rendering



    if (filterResturant?.length === 0) {
        return (
            <Shimmer />
        )
    };

    if (listofResturants?.length === 0) {
        return (
            <Shimmer />
        )
    };



    //Another way of writing this conditional rendering is  by using ternary operator ?

    // return listofResturants.length === 0 ? (<Shimmer />) : 
    return (

        <div>
            <div className='flex justify-around py-3 bg-slate-100'>
                {/* Search filter */}
                <div className='px-8'>
                    <input className='ml-48 px-40 py-2 rounded-md border-solid bg-orange-200' type="text" placeholder="Search For Foods..." value={inputData} onChange={(e) => {
                        setinputData(e.target.value)
                    }} />
                    <button className='rounded-md bg-green-500 px-4 py-1 mt-3 ml-10 shadow-md' onClick={() => {
                        const filRest = listofResturants.filter(
                            // to lowercase() funstion will help for not getting stuck the search if someone typed in capital
                            (res) => res?.info?.name?.toLowerCase()?.includes(inputData.toLowerCase())
                        );
                        setfilterResturant(filRest);
                    }}>Search</button>
                </div>

                {/* Creating the filter button */}
                <div>
                    <button className='rounded-md bg-blue-400 p-2 my-3 shadow-md' onClick={() => {
                        const filterlist = listofResturants.filter((res) => res.info.avgRating > 4.3);
                        setfilterResturant(filterlist);
                    }}>Top Rated Restaurant</button>
                </div>

            </div>
            {/* Resturant Cards */}

            <div className='bg-slate-100'>
                <div className='flex flex-wrap justify-around shadow-l'>

                    {
                        filterResturant?.map((restaurant) => (<Link className="cardlink" key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><Card restData={restaurant} /></Link>))
                    }
                </div>
            </div>
        </div >
    );
};


export default Body;