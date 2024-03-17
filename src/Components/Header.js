import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();


    return (
        <div className='flex justify-between bg-blue-100 shadow-lg mb-2 w-100% height-30'>
            <img className='w-24 h-25 mx-1' src={LOGO_URL} />
            <h5 className='my-8 from-neutral-400'>
                Internet Status : {onlineStatus ? "🟢 Online" : "🔴 Offline"}
            </h5>
            <div className='flex p-5 my-1'>
                <ul className="flex pt-3" >
                    <li><Link to="/" className="pr-3">Home</Link></li>
                    <li><Link to="/about" className="pr-3">About</Link></li>
                    <li><Link to="/contact" className="pr-3">Contact</Link></li>
                    <li><Link to="/grocery" className="pr-3">Grocery</Link></li>
                    <li><Link to="#" className="pr-3">Cart</Link></li>
                </ul>
                <button className='pink' onClick={() => {
                    // Here we have writtent below that is btnnamereact is login then we can change it to logout otherwise it sould be login !!!
                    btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login")
                }}>{btnNameReact}</button>
            </div>
        </div>
    )
}

export default Header;