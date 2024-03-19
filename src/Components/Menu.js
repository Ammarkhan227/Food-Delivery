import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenuitems from '../utils/useMenuitems'
import { CND_URL } from "../utils/constants";
import { MENU_URL } from "../utils/constants";


const ResturantMenu = () => {

    const { resId } = useParams();

    const resInfo = useMenuitems(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, cloudinaryImageId } = resInfo?.cards[0]?.card?.card?.info;


    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className='ml-80 justify-center text-center rounded-lg mt-10'>
            <div className='bg-yellow-100 w-3/4 pt-8 pl-20'>
                <img className='w-[40rem] h-96 rounded-lg object-cover' src={CND_URL + cloudinaryImageId} />
                <h1 className='font-extrabold pt-5 text-5xl text-left'>{name}</h1>
                <div className="text-left px-6 py-7">
                    <p><span className='font-bold text-2xl'>Cuisines : </span>{cuisines.join(" , ")}</p>
                    <p><span className='font-bold text-2xl text-red-500'>Price : </span>{costForTwoMessage}</p>
                    <h2 className='font-extrabold text-3xl pb-2'> Menu</h2>
                    <ul className='list-disc'>
                        {itemCards?.map((item) => (
                            <li className="flex justify-between py-5" key={item?.card?.info?.id}> {item?.card?.info?.name} -
                                {item?.card?.info?.price / 100}rs / Person <img className="w-20 h-12 rounded-md cursor-pointer object-fill" src={MENU_URL + item?.card?.info?.imageId} />
                            </li>))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ResturantMenu;