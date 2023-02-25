import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllSubmission = () => {
	const { data: submission }: any = useQuery({
		queryKey: ["allsubmission"],
		queryFn: () =>
			fetch(`${process.env.REACT_APP_API_URL}/allsubmission`, {
				headers: {
					authorization: `bearer ${localStorage.getItem("token")}`,
				},
			}).then((res) => res.json()),
	});
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="overflow-x-auto lg:ml-64 mt-14">
			<table className="table table-zebra w-full">
				<thead>
					<tr className="text-center">
						<th>SL.</th>
						<th>submission Name</th>
						<th>User Name</th>
						<th>Email Address</th>

						<th>Result</th>
					</tr>
				</thead>
				<tbody>
					{submission?.map((user: any, i: number) => (
						<tr className="text-center" key={user?._id}>
							<th>{i + 1}</th>
							<td>{user?.title}</td>
							<td>{user?.userName}</td>
							<td>{user?.email}</td>
							{user?.correct ? (
								<>
									<td>Correct</td>
								</>
							) : (
								<td>Failed</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AllSubmission;
