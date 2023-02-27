import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Booking from "../pages/Home/Booking/Booking";
import Login from "../pages/login/Login";
import Signup from "../pages/login/Signup";
import PrivateRoute from "./PrivateRoute";
import TopQuestion from "../pages/Home/TopQuestion/TopQuestion";
import QuestionAns from "../pages/QuestionAns/QuestionAns";
import NotFound from "../pages/404";
import SingleQnA from "../pages/QuestionAns/SingleQnA";
import AllUsers from "../pages/Dashboard/AllUsers";
import MyProfile from "../pages/MyProfile/MyProfile";
import QuizTopicCards from "../pages/Quiz/QuizTopicCards/QuizTopicCards";
import QuizQuesCards from "../pages/Quiz/QuizQuesCards/QuizQuesCards";
import AboutUs from "../pages/Home/AboutUs/AboutUs";
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
import CommunityHome from "../pages/Community/CommunityHome";
import PostProvider from "../contexts/PostProvider";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import DashboardV2 from "../pages/Dashboard/DashboardV2";
import DashboardLayout from "../Layout/DashboardLayout";
import AddProblems from "../pages/Dashboard/AddProblems";
import ManageProblem from "../pages/Dashboard/ManageProblem";

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
                path: "/terms-of-use",
                element: <TermsOfUse></TermsOfUse>,
            },
            {
				path: "/privacy-policy",
				element: <PrivacyPolicy />,
			},
            {
                path: "contact-us",
                element: <Form></Form>,
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
                element: (
                    <PrivateRoute>
                        <QuestionAns />
                    </PrivateRoute>
                ),
            },
            {
                path: "/singleqna/:id",
                loader: ({ params }) =>
                    fetch(
                        `${process.env.REACT_APP_API_URL}/qnasingle/${params.id}`
                    ),
                element: <SingleQnA></SingleQnA>,
            },
            {
				    path: '/community-home',
				    element: <PrivateRoute><PostProvider><CommunityHome></CommunityHome></PostProvider></PrivateRoute>
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
                    fetch(
                        `${process.env.REACT_APP_API_URL}/quiz/${params.name}`
                    ),
                element: <QuizQuesCards />,
            },
            {
                path: "/singleqna/:id",
                loader: ({ params }) =>
                    fetch(
                        `${process.env.REACT_APP_API_URL}/qnasingle/${params.id}`
                    ),
                element: (
                    <PrivateRoute>
                        <SingleQnA></SingleQnA>
                    </PrivateRoute>
                ),
            },
            {
                path: "/userDashboard",
                element: (
                    <PrivateRoute>
                        <UserDashboard />
                    </PrivateRoute>
                ),
                children: [
                    {
                        path: "/userDashboard",
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
                    fetch(
                        `${process.env.REACT_APP_API_URL}/problems/${params.id}`
                    ),
                element: (
                    <PrivateRoute>
                        <ProblemDetails></ProblemDetails>
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: <DashboardV2 />,
            },
            {
                path: "/dashboard/allUsers",
                element: <AllUsers />,
            },
            {
                path: "/dashboard/paidUsers",
                element: <PaidUser />,
            },
            {
                path: "/dashboard/allQuiz",
                element: <Quiz />,
            },
            {
                path: "/dashboard/allSubmission",
                element: <AllSubmission />,
            },
            {
                path: "/dashboard/addProblem",
                element: <AddProblems/>,
            },
            {
                path: "/dashboard/manageProblems",
                element: <ManageProblem/>,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound></NotFound>,
    },
]);
