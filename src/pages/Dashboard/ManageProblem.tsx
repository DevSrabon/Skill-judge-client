import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React from 'react';
import { toast } from 'react-hot-toast';
import ErrorSpinner from '../../SharedComponent/Spinner/ErrorSpinner';
import Spinner from '../../SharedComponent/Spinner/Spinner';

const ManageProblem = () => {
    const { isLoading, error, refetch, data }: any = useQuery({
			queryKey: ["problems"],
			queryFn: () =>
				fetch(`${process.env.REACT_APP_API_URL}/problems`, {
					headers: {
						authorization: `bearer ${localStorage.getItem("token")}`,
					},
				}).then((res) => res.json()),
    });
		React.useEffect(() => {
			window.scrollTo(0, 0);
		}, []);
console.log(data)
		if (isLoading) {
			return <Spinner />;
		}
		if (error) {
			return <ErrorSpinner />;
    }
    const handleDeleteProblem = (problem: string) => {
				fetch(`${process.env.REACT_APP_API_URL}/deleteProblem/${problem}`, {
					method: "DELETE",
				})
					.then((res) => {
						res.json();
					})
					.then((data) => {
						toast.success("Problm mdeleted successfully");
						refetch();
					});
			};
		
    return (
			<div className="overflow-x-auto lg:ml-64 mt-14">
				<table className="table table-zebra w-full">
					<thead>
						<tr className="text-center">
							<th>SL.</th>
							<th>Problem Name</th>
							<th>Admin Name</th>
							<th>Email Address</th>
							<th>Date</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{data?.map((problem: any, i: number) => (
							<tr className="text-center" key={problem?._id}>
								<th>{i + 1}</th>
								<td>{problem?.title}</td>
								<td>{problem?.name}</td>
								<td>{problem?.email}</td>
								<td>{moment(problem?.date).format("LLL")}</td>
								<td>
									<button
										onClick={() => handleDeleteProblem(problem._id)}
										className="btn btn-xs btn-outline">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
};

export default ManageProblem;