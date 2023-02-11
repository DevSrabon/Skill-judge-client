import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useUser } from '../../contexts/UserProvider';

const UserDashboard = () => {
    const {dbUser}: any = useUser()

    const {data: savedQuiz} = useQuery({
        queryKey: ['savedQuiz', dbUser?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/savedQuiz?email=${dbUser?.email}`)
            const data = await res.json()
            return data;
        }
    })

    console.log(savedQuiz)

    return (
        <div>
            <h1>This is user dashboard</h1>
        </div>
    );
};

export default UserDashboard;