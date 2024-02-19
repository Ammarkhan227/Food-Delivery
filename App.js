import React from 'react';
import ReactDOM from 'react-dom/client';

///Header
const Header = () => {
    return (
        <div className='header'>
            <div>
                <img className='headlogo' src='https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png' />
            </div>
            <div className='navlink'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
// Data from API

const resData = 

///Body
const Body = () => {
    return (
        <div className='main'>
            <div className='search'>
                <input className='searchbar' type="text" placeholder="Search For Foods..." /><br />
                <button className='searchbtn'>Search</button>
            </div>
            <div className='cardholder'>
                <div className='card'>
                    <img className='cardimg' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png" alt='resimg' />
                    <h3>Rest Name</h3>
                    <h4>cusines</h4>
                    <h4>Rating</h4>
                    <h4>Delivery Time</h4>
                </div>
            </div>
        </div>
    )
}
const App = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);