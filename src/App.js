import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
// import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Menu from './Components/Menu';
import Shimmer from './Components/Shimmer';
import Grocery from './Components/Grocery';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


//Below is the exapple of code splitting or cod chunking of the Grocery component.

const Grocery = lazy(() => import('./Components/Grocery'));
const About = lazy(() => import('./Components/About'));

const AppLayout = () => {
    return (
        <div>
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
                element: <Suspense fallback={<h1>Error on About us page</h1>}> <About /></Suspense>,
            },
            {
                path: '/Contact',
                element: <Contact />
            },
            {
                path: '/Grocery',
                element: <Suspense fallback={<h1>Loading.....</h1>}> <Grocery /> </Suspense>,
            },
            {
                path: '/restaurant/:resId',
                element: <Menu />
            }

        ],
        errorElement: <Error />
    },

])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);