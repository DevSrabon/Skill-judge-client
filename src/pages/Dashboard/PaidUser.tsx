import React from 'react';
import { usePaidUser } from '../../contexts/PaidUserProvider';
interface IUser {
	price: string;
	email?: string;
	_id: string;
	transactionId: string;
    paymentId: string;
    name: string;

}
const PaidUser = () => {
    const { paidUser }: any = usePaidUser()
    console.log(paidUser)
    
    return (
			<div className="overflow-x-auto">
				<table className="table table-zebra w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email Address</th>
							<th>Paid</th>
						</tr>
					</thead>
					<tbody>
						{paidUser?.map((user: IUser, i: number) => (
							<tr key={user._id}>
								<th>{i + 1}</th>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>${user.price}</td>
								
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
};

export default PaidUser;