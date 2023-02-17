import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const Quiz = () => {

    	const { data:quiz }: any = useQuery({
				queryKey: ["allquiz"],
				queryFn: () =>
					fetch(`${process.env.REACT_APP_API_URL}/allquiz`, {
						headers: {
							authorization: `bearer ${localStorage.getItem("token")}`,
						},
					}).then((res) => res.json()),
			});
			console.log(quiz);
;
   return (
			<div className="overflow-x-auto">
				<table className="table table-zebra w-full">
					<thead>
						<tr>
							<th>Attempt</th>
							<th>Quiz Name</th>
							<th>Email Address</th>
							<th>Score</th>
							<th>Wrong</th>
							<th>Accuracy</th>
						</tr>
					</thead>
					<tbody>
						{quiz?.map((user: any, i: number) => (
							<tr key={user?._id}>
								<th>{i + 1}</th>
								<td>{user?.name}</td>
								<td>{user?.email}</td>
								<td>{user?.score}</td>
								<td>{user?.wrong}</td>
								<td>{user?.percentage}%</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
};

export default Quiz;