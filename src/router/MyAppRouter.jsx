import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Donation from '../pages/Donation';
import Statistics from '../pages/Statistics';
import DetailsPage from '../pages/DetailsPage'


const MyAppRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => fetch('./donate.json'),
			},
			{
				path: '/donation',
				element: <Donation />,
			},
			{
				path: '/stat',
				element: <Statistics />,
				loader: () => fetch('./donate.json'),
			},
			{
				path: '/:id',
				element: <DetailsPage />,
				loader: () => fetch('./donate.json'),
			},
		],
	},
])

export default MyAppRouter;