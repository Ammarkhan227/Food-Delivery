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
        <div className=' justify-center text-center rounded-lg shadow-lg bg-slate-100'>
            <div className='bg-transparent w-4/4 pt-8 px-10'>
                <div className="flex justify-between">
                    <div>
                        <h1 className='font-extrabold pt-20 text-5xl pl-44 '>{name}</h1>
                        <p className=" text-2xl my-10 pl-44"><span className='font-bold text-4xl text-red-500'>Cuisines : </span>{cuisines.join(" , ")}</p>
                        <p className=" text-2xl pl-44"><span className='font-bold text-4xl text-red-500'>Price : </span>{costForTwoMessage}</p>
                    </div>
                    <div>
                        <img className='w-[600px] h-[400px] rounded-lg objectfit-cover shadow-xl' src={CND_URL + cloudinaryImageId} />

                    </div>
                </div>
                <div className="text-left px-[350px] py-7">

                    <h2 className='font-extrabold text-4xl pb-2'> Menu</h2>
                    <ul>
                        {itemCards?.map((item) => (
                            <li className="flex justify-between py-5" key={item?.card?.info?.id}> {item?.card?.info?.name} -
                                <span className="font-bold text-red-500 mr-42 pr-64">{item?.card?.info?.price / 100} /-</span>
                                <img className='w-20 h-14 rounded-md cursor-pointer objectfit-cover shadow-lg' src={MENU_URL + item?.card?.info?.imageId} />

                            </li>))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ResturantMenu;