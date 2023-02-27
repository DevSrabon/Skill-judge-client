import { useEffect, useState } from "react";

const useAdmin = (email:string) => {
	const [isAdmin, setIsAdmin] = useState<boolean>(false);
	const [isAdminLoading, setIsAdminLoading] = useState<boolean>(true);
	useEffect(() => {
		if (email) {
			fetch(`${process.env.REACT_APP_API_URL}/users/admin/${email}`)
				.then((res) => res.json())
				.then((data) => {
					setIsAdmin(data.isAdmin);
					setIsAdminLoading(false);
				});
		}
	}, [email]);
	return [isAdmin, isAdminLoading];
};

export default useAdmin;
