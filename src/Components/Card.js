/// Taking out the data from Local API through props and destructuring there values
import { CND_URL } from "../utils/constants";

const Card = (props) => {
    const { restData } = props;
    /// Destructuring
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
    } = restData?.info;

    // As the cost of 2 was in string form so we have taken our the int value and converted it to number type
    let arr = costForTwo?.split(" ")
    let abj = Number(arr[0]?.substring(1))
    return (
        <div className='w-52 h-auto border-solid m-5 p-2 bg-slate-200 rounded-r-md'>
            <img className='rounded-md' src={CND_URL + cloudinaryImageId} />
            <div className='Cardtitle'>
                <h3 className='cardheading'>{name}</h3>
                <div className="cardsub">
                    <h4><span>Cuisines :</span> {cuisines.join(", ")}</h4>
                    <h4><span>Cost : </span>{abj / 2} /Person</h4>
                    <h4><span>Avg. Rating : </span>{avgRating}*</h4>
                    <h4><span>Delivery Time :</span> {restData.info.sla.deliveryTime} Minutes</h4>
                </div>
            </div>
        </div>
    );
};

export default Card;