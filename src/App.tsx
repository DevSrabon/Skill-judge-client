import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import UserProvider from "./contexts/UserProvider";
import PaidUserProvider from "./contexts/PaidUserProvider";

function App() {
	return (
		<div className="dark:bg-black">
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
