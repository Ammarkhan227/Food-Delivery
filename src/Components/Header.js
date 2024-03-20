import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();


    return (
        <div className='flex justify-between bg-transparent bg-green-200'>
            <Link to='/'><img className='w-20 h-20 mx-10 my-1' src={LOGO_URL} /></Link>
            <h5 className='my-8'>
                Internet Status : {onlineStatus ? "🟢 Online" : "🔴 Offline"}
            </h5>
            <div className='flex p-5 my-1'>
                <ul className="flex pt-3 px-8" >
                    <li className="px-4 font-bold text-2xl text-red-700"><Link to="/" className="pr-3">Home</Link></li>
                    <li className="px-4 font-bold text-2xl text-red-700"><Link to="/about" className="pr-3">About</Link></li>
                    <li className="px-4 font-bold text-2xl text-red-700"><Link to="/contact" className="pr-3">Contact</Link></li>
                    <li className="px-4 font-bold text-2xl text-red-700"><Link to="/grocery" className="pr-3">Grocery</Link></li>
                    <li className="px-4 font-bold text-2xl text-red-700"><Link to="#" className="pr-3">Cart</Link></li>
                </ul>
                <button className='bg-orange-400 rounded-md px-8 hover: px-13' onClick={() => {
                    // Here we have writtent below that is btnnamereact is login then we can change it to logout otherwise it sould be login !!!
                    btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login")
                }}>{btnNameReact}</button>
            </div>
        </div>
    )
}

export default Header;