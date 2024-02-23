import Card from './Card'
import resList from '../utils/Data';
import { useState } from "react";



const Body = () => {
    const [listofResturants, setlistofResturants] = useState(resList);
    return (
        <div className='body'>

            {/* Filter button  */}
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