import Card from './Card'
import resList from '../utils/Data';
import { useState } from "react";
import { useEffect } from 'react';



const Body = () => {

    //Using useState below to render the filtered returants
    const [listofResturants, setlistofResturants] = useState([]);

    //fetching the API from Swiggy website we use useEffect !!!
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
        setlistofResturants(json.data.cards[2].card.card);
    };



    return (
        <div className='body'>
            {/* Creating the folter button */}
            <div className='resfilter'>
                <button onClick={() => {
                    const filterlist = listofResturants.filter((res) => res.info.avgRating > 4);
                    setlistofResturants(filterlist);
                }}>Top Rated Restaurant</button>

                {/* Resturant Cards */}
                <div className='main'>
                    <div className='carddisplay'>
                        {
                            listofResturants.map((restaurant) => (<Card key={restaurant.info.id} restData={restaurant} />))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Body;