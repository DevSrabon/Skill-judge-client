import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import UserProvider from "./contexts/UserProvider";
import PaidUserProvider from "./contexts/PaidUserProvider";
import ScrollToTop from "react-scroll-to-top";

function App() {
	return (
		<div className=" dark:bg-black dark:text-white">
			<ScrollToTop smooth color="#F87171" />
			<UserProvider>
				<PaidUserProvider>
					<RouterProvider router={router}></RouterProvider>
				</PaidUserProvider>
			</UserProvider>
			<Toaster />
		</div>
	);
}

export default App;
