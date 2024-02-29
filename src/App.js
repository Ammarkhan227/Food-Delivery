import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body'

const App = () => {
    return (
        <div style={{ backgroundColor: '#161934', height: 'auto' }}>
            <Header />
            <Body />
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);