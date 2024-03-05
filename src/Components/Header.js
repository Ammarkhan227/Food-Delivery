import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    
    return (
        <div className='header'>
            <img className='headlogo' src={LOGO_URL} />
            <div className='navlink'>
                <ul>
                    <li><Link to="/" className="navitemlink">Home</Link></li>
                    <li><Link to="/about" className="navitemlink">About</Link></li>
                    <li><Link to="/contact" className="navitemlink">Contact</Link></li>
                    <li><Link to="#" className="navitemlink">Cart</Link></li>
                    <button className="login" onClick={() => {
                        // Here we have writtent below that is btnnamereact is login then we can change it to logout otherwise it sould be login !!!
                        btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;