import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

interface Iuser{
    name: string;
    email: string;
    _id: string;
}

const AllUsers = () => {

    const { data: allUsres = [], refetch } = useQuery({
			queryKey: ["user"],
			queryFn: async () => {
				const res = await fetch(`${process.env.REACT_APP_API_URL}/all-users`);
				const data = await res.json();
				return data;
			},
		});
    
    const handleDeleteUser = (userId: string) => { 
        fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
					method: "DELETE",
				})  
					.then((res) => {
						res.json();
					})
            .then((data) => {
                toast.success("User deleted successfully");
                refetch();
            });
    }
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
    return (
			<div className="overflow-x-auto p-4 lg:ml-64 mt-10">
				<table className="table table-zebra w-full">
					<thead>
						<tr>
							<th>SL.</th>
							<th>Name</th>
							<th>Email Address</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{allUsres.map((usr: Iuser, i: number) => (
							<tr key={usr._id}>
								<th>{i + 1}</th>
								<td>{usr.name}</td>
								<td>{usr.email}</td>
								<td>
									<button
										onClick={() => handleDeleteUser(usr._id)}
										className="btn btn-sm bg-black">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
}

export default AllUsers;