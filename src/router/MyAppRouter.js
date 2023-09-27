import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Donation from '../pages/Donation';
import Statistics from '../pages/Statistics';


const MyAppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/donation',
                element: <Donation />
            },
            {
                path: '/stat',
                element: <Statistics />
            }
        ]
    }
])

export default MyAppRouter;