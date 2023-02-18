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
import Dashboard from "../pages/Dashboard/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers";
import MyProfile from "../pages/MyProfile/MyProfile";
import QuizTopicCards from "../pages/Quiz/QuizTopicCards/QuizTopicCards";
import QuizQuesCards from "../pages/Quiz/QuizQuesCards/QuizQuesCards";
import AboutUs from "../pages/AboutUs/AboutUs";
import BasicProblem from "../pages/BasicProblem/BasicProblem";
import Blog from "../pages/Blog/Blog";
import SingleBlog from "../pages/Blog/SingleBlog";
import ProblemDetails from "../pages/BasicProblem/ProblemDetails";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import Compiler from "../components/shared/Compiler/components/Compiler/Compiler";
import PaidUser from "../pages/Dashboard/PaidUser";
import Quiz from "../pages/Dashboard/Quiz";
import SingleQuiz from "../pages/UserDashboard/SingleQuiz";
import AllSubmission from "../pages/Dashboard/AllSubmission";
import SingleSubmission from "../pages/UserDashboard/SingleSubmission";
import TermsOfUse from "../SharedComponent/TermsOfUse";
import Form from "../pages/Home/Form/Form";


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
				path: '/terms-of-use',
				element: <TermsOfUse></TermsOfUse>
			},
			{
				path: 'contact-us',
				element: <Form></Form>
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
				element: <Compiler />,
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
						path: "/dashboard/paiduser",
						element: <PaidUser />,
					},
					{
						path: "/dashboard/quiz",
						element: <Quiz />,
					},
					{
						path: "/dashboard/allsubmission",
						element: <AllSubmission />,
					},
				],
			},
			{
				path: "/userDashboard",
				element: <UserDashboard />,
				children: [
					{
						path: "/userDashboard/quiz",
						element: <SingleQuiz />,
					},
					{
						path: "/userDashboard/singlesubmission",
						element: <SingleSubmission />,
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
				loader: () => fetch(`${process.env.REACT_APP_API_URL}/blog`),
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
