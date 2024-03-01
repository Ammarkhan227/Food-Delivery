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
    console.log(abj);

    return (
        <div className='restcard'>
            <img className='cardimg' src={CND_URL + cloudinaryImageId} />
            <div className='Cardtitle'>
                <h3 className='cardheading'>{name}</h3>
                <div className="cardsub">
                    <h4><span style={{ fontSize: '16px', color: '#ff213f' }}>Cuisines :</span> {cuisines.join(", ")}</h4>
                    <h4><span style={{ fontSize: '16px', color: '#ff213f' }}>Cost : </span>{abj / 2} /Person</h4>
                    <h4><span style={{ fontSize: '16px', color: '#ff213f' }}>Avg. Rating : </span>{avgRating}*</h4>
                    <h4><span style={{ fontSize: '16px', color: '#ff213f' }}>Delivery Time :</span> {restData.info.sla.deliveryTime} Minutes</h4>
                </div>
            </div>
        </div>
    );
};

export default Card;