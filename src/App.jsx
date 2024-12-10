import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SiteLayout from './Layouts/SiteLayout.jsx';
import Home from './Pages/Home/Home.jsx';

const routes = createBrowserRouter([

    {path: '/' , element : <SiteLayout /> , children: [

        {path: '/' , element: <Home />}

    ]}

])

export default function App() {

    return <React.Fragment>

        <RouterProvider router={routes} />

    </React.Fragment>

}
