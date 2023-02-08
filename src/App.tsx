import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import UserProvider from "./contexts/UserProvider";

function App() {
	return (
		<div className="dark:bg-black">
			<UserProvider>
				<RouterProvider router={router}></RouterProvider>
			</UserProvider>
			<Toaster />
		</div>
	);
}

export default App;
