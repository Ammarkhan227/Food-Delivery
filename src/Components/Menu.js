import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenuitems from '../utils/useMenuitems'


const ResturantMenu = () => {

    const { resId } = useParams();

    const resInfo = useMenuitems(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;


    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div>
            <h1 className="cardheading">{name}</h1>
            <div style={{ color: 'white' }}>
                <p className="cardsub">Cuisines : {cuisines.join(" , ")}</p>
                <p className="cardsub">{costForTwoMessage}</p>
                <h2 className="cardheading"> Menu</h2>
                <ul className="cardsub">
                    {itemCards?.map((item) => (
                        <li key={item?.card?.info?.id}> {item?.card?.info?.name} -
                            {item?.card?.info?.price / 100}rs / Person
                        </li>))}
                </ul>
            </div>
        </div>
    )
}

export default ResturantMenu;