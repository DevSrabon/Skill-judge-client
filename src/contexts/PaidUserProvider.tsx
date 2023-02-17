import { useQuery } from "@tanstack/react-query";
import {
	createContext,
	ReactElement,
	useContext,
	useEffect,
	useState,
} from "react";
import { useAuth } from "./AuthProvider";

const PAID_USER_CONTEXT = createContext<unknown>(null);

const PaidUserProvider = ({ children }: { children: ReactElement }) => {
	const { user }: any = useAuth();
	const [paidUser, setPaidUser]: any = useState({});

	const { isLoading, error, refetch, data }: any = useQuery({
		queryKey: ["paid"],
		queryFn: () =>
			fetch(`${process.env.REACT_APP_API_URL}/paid`, {
				headers: {
					authorization: `bearer ${localStorage.getItem("token")}`,
				},
			}).then((res) => res.json()),
	});
console.log(paidUser)
	useEffect(() => {
		if (data?.length) {
			setPaidUser(data);
		}
	}, [data]);
	const userInfo = {
		isLoading,
		error,
		refetch,
		paidUser,
	};

	return (
		<PAID_USER_CONTEXT.Provider value={userInfo}>{children}</PAID_USER_CONTEXT.Provider>
	);
};
export const usePaidUser = () => {
	const context = useContext(PAID_USER_CONTEXT);
	return context;
};

export default PaidUserProvider;
