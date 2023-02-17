import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthProvider';

const SingleQuiz = () => {
    const {user}:any=useAuth()

    	// console.log("🚀 ~ file: SingleQuiz.tsx:8 ~ SingleQuiz ~ quiz", quiz)

			const { data:quiz }: any = useQuery({
				queryKey: ["userquiz", user?.email],
				queryFn: () =>
					fetch(
						`${process.env.REACT_APP_API_URL}/singlequiz?email=${user?.email}`,
						{
							headers: {
								authorization: `bearer ${localStorage.getItem("token")}`,
							},
						}
					).then((res) => res.json()),
			});

    return (
			<div className="overflow-x-auto">
				<table className="table table-zebra w-full">
					<thead>
						<tr className="text-center">
							<th>Attempt</th>
							<th>Quiz Name</th>
							<th>Email Address</th>
							<th>Total Mark</th>
							<th>Score</th>
							<th>Wrong</th>
							<th>Accuracy</th>
						</tr>
					</thead>
					<tbody>
						{quiz?.map((user: any, i: number) => (
							<tr className="text-center" key={user?._id}>
								<th>{i + 1}</th>
								<td>{user?.name}</td>
								<td>{user?.email}</td>
								<td>{user?.score + user?.wrong}</td>
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

export default SingleQuiz;