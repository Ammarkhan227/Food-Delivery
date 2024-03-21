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
        <div className='w-60 h-96 p-2 rounded-lg my-3 bg-yellow-50 shadow-lg hover:bg-blue-100'>
            <img className='w-60 h-40 rounded-lg' src={CND_URL + cloudinaryImageId} />
            <div className='pt-5'>
                <h3 className='font-bold font-sans text-red-600'>{name}</h3>
                <div className='p-1'>
                    <h4><span className="font-bold">Cuisines :</span> {cuisines.join(", ")}</h4>
                    <h4><span className='font-bold'>Cost : </span>{abj / 2} /Person</h4>
                    <h4><span className='font-bold'>Avg. Rating : </span>{avgRating} Stars</h4>
                    <h4><span className='font-bold'>Delivery Time :</span> {restData.info.sla.deliveryTime} Minutes</h4>
                </div>
            </div>
        </div>
    );
};

export default Card;