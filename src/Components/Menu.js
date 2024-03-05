import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const ResturantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
        console.log(json);
    };

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;


    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // const { carousel } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[0]?.dish?.info;


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