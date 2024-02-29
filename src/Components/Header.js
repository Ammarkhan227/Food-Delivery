import { LOGO_URL } from "../utils/constants";
import { useState } from "react";



const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
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
                    <button className="login" onClick={() => {
                        // Here we have writtent below that is btnnamereact is login then we can change it to logout otherwise it sould be login !!!
                        btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login")}}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;