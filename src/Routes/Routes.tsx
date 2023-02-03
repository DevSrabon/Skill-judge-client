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
                path: "qna",
                loader: () =>
                    fetch("https://skill-judge-server.vercel.app/qna"),
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
                    fetch(
                        `${process.env.REACT_APP_API_URL}/qnasingle/${params.id}`
                    ),
                element: <SingleQnA></SingleQnA>,
            },
            {
                path: "/free",

                element: <Complier />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound></NotFound>,
    },
]);
