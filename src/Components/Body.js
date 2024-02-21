import Card from './Card'
import resList from '../utils/Data';

const Body = () => {
    return (
        <div className='main'>
            <div className='carddisplay'>
                {
                    resList.map(restaurant => <Card key={restaurant.info.id} restData={restaurant} />)
                }
            </div>
        </div>
    )
}


export default Body;