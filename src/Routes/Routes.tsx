import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Booking from "../pages/Home/Booking/Booking";
import Login from "../pages/login/Login";
import Signup from "../pages/login/Signup";
import PrivateRoute from "./PrivateRoute";
import TopQuestion from "../components/shared/TopQuestion/TopQuestion";
import QuestionAns from "../pages/QuestionAns/QuestionAns";
import NotFound from "../pages/404";
import SingleQnA from "../pages/QuestionAns/SingleQnA";
import Complier from "../pages/Complier/Complier";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddContents from "../pages/Dashboard/AddContents";
import MyProfile from "../pages/MyProfile/MyProfile";
import QuizTopicCards from "../pages/Quiz/QuizTopicCards/QuizTopicCards";
import QuizQuesCards from "../pages/Quiz/QuizQuesCards/QuizQuesCards";
import AboutUs from "../pages/AboutUs/AboutUs";
import BasicProblem from "../pages/BasicProblem/BasicProblem";
import Blog from "../pages/Blog/Blog";
import SingleBlog from "../pages/Blog/SingleBlog";
import ProblemDetails from "../pages/BasicProblem/ProblemDetails";

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
				path: "/top-questions/:id",
				element: <TopQuestion />,
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
				path: "/my-profile",
				element: <MyProfile></MyProfile>,
			},

			{
				path: "/qna",
				loader: () => fetch(`${process.env.REACT_APP_API_URL}/qna`),
				element: <QuestionAns />,
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
				path: "/quiz",
				element: <QuizTopicCards />,
			},
			{
				path: "/quiz/:name",
				loader: ({ params }) =>
					fetch(`${process.env.REACT_APP_API_URL}/quiz/${params.name}`),
				element: <QuizQuesCards />,
			},

			{
				path: "/singleqna/:id",
				loader: ({ params }) =>
					fetch(`${process.env.REACT_APP_API_URL}/qnasingle/${params.id}`),
				element: <SingleQnA></SingleQnA>,
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
				children: [
					{
						path: "/dashboard/all-users",
						element: <AllUsers />,
					},
					{
						path: "/dashboard/add-contents",
						element: <AddContents />,
					},
				],
			},
			{
				path: "/about-us",
				element: <AboutUs />,
			},
			{
				path: "/basic",
				element: <BasicProblem />,
			},
			{
				path: "/blog",
				loader: () =>
					fetch(`${process.env.REACT_APP_API_URL}/blog`),
				element: <Blog></Blog>,
			},
			{
				path: "/blog/:id",
				loader: ({ params }) =>
					fetch(`${process.env.REACT_APP_API_URL}/blog/${params.id}`),
				element: <SingleBlog></SingleBlog>,
			},
			{
				path: "/problems/:id",
				loader: ({ params }) =>
					fetch(`${process.env.REACT_APP_API_URL}/problems/${params.id}`),
				element: <ProblemDetails></ProblemDetails>,
			},
		],
	},
	{
		path: "*",
		element: <NotFound></NotFound>,
	},
]);
