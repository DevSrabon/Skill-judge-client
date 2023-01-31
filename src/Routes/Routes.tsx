import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../pages/Home/Home";
import Booking from "../pages/Home/Booking/Booking";
import Login from "../pages/login/Login";
import Signup from "../pages/login/Signup";
import PrivateRoute from "./PrivateRoute";
import TopQuestion from "../pages/Home/TopQuestions/TopQuestion";
import QuestionAns from "../pages/QuestionAns/QuestionAns";
import NotFound from "../pages/404";
import SingleQnA from "../pages/QuestionAns/SingleQnA";
import Complier from "../pages/Complier/Complier";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddContents from "../pages/Dashboard/AddContents";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/book/:id",
				element: (
					<PrivateRoute>
						<Booking />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`${process.env.REACT_APP_API_URL}/book/${params.id}`),
			},
			{
				path: "/questions/:id",
				element: (
					<PrivateRoute>
						<TopQuestion />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`${process.env.REACT_APP_API_URL}/questions/${params.id}`),
			},
			{
				path: "qna",
				loader: () => fetch("https://skill-judge-server.vercel.app/qna"),
				element: <QuestionAns></QuestionAns>,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",

				element: <Signup />,
			},
			{
				path: "/qna",
				loader: () => fetch(`${process.env.REACT_APP_API_URL}/qna`),
				element: <QuestionAns></QuestionAns>,
			},
			{
				path: "/singleqna/:id",
				loader: ({ params }) =>
					fetch(`${process.env.REACT_APP_API_URL}/qnasingle/${params.id}`),
				element: <SingleQnA></SingleQnA>,
			},
			{
				path: "/free", 
				element: <Complier />,
			},
			{
				path: '/dashboard',
				element: <Dashboard/>,
				children: [
					{
						path: '/dashboard/all-users',
						element: <AllUsers/>
					},
					{
						path: '/dashboard/add-contents',
						element: <AddContents/>
					}
				]
			}
		]
	},
	{
		path: "*",
		element: <NotFound></NotFound>,
	}
]);
