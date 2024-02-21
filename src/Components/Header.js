import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className='header'>
            <img className='headlogo' src={LOGO_URL} />

            <div className='search'>
                <input className='searchbar' type="text" placeholder="Search For Foods..." /><br />
                <button className='searchbtn'>Search</button>
            </div>
            <div className='navlink'>
                <ul>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;