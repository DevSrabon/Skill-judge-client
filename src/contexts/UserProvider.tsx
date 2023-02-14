import { useQuery } from "@tanstack/react-query";
import {
	createContext,
	ReactElement,
	useContext,
	useEffect,
	useState,
} from "react";
import { useAuth } from "./AuthProvider";

const USER_CONTEXT = createContext<unknown>(null);

const UserProvider = ({ children }: { children: ReactElement }) => {
	const { user }: any = useAuth();
	const [dbUser, setDbUser]: any = useState({});

	const { isLoading, error, refetch, data }: any = useQuery({
		queryKey: ["user", user?.email],
		queryFn: () =>
			fetch(`${process.env.REACT_APP_API_URL}/user?email=${user?.email}`, {
				headers: {
					authorization: `bearer ${localStorage.getItem('token')}`
				},
			}).then((res) => res.json()),
	});

	useEffect(() => {
		if (data?.length) {
			setDbUser(data[0]);
		}
	}, [data]);
	const userInfo = {
		isLoading,
		error,
		refetch,
		dbUser,
	};

	return (
		<USER_CONTEXT.Provider value={userInfo}>{children}</USER_CONTEXT.Provider>
	);
};
export const useUser = () => {
	const context = useContext(USER_CONTEXT);
	return context;
};

export default UserProvider;
