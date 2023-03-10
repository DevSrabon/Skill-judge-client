import React from "react";
import { usePaidUser } from "../../contexts/PaidUserProvider";
interface IUser {
    price: string;
    email?: string;
    _id: string;
    transactionId: string;
    paymentId: string;
    name: string;
}
const PaidUser = () => {
    const { paidUser }: any = usePaidUser();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
            <div className="overflow-x-auto lg:ml-64 mb-10 mt-20 mx-5">
                <h2 className="text-gray-900 font-medium text-lg mb-2">All Paid User</h2>
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Payment</th>
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
