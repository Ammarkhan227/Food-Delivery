import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Menu from './Components/Menu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div style={{ backgroundColor: '#161934', height: 'auto' }}>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/About',
                element: <About />,
            },
            {
                path: '/Contact',
                element: <Contact />
            },
            {
                path:'/restaurant/:resId',
                element: <Menu />
            }

        ],
        errorElement: <Error />
    },

])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);