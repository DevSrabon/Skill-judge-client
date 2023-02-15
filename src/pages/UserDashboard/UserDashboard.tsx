import { useQuery } from '@tanstack/react-query'; 
import { useUser as useAuth } from '../../contexts/UserProvider';

const UserDashboard = () => {
    const {user}: any = useAuth()
    console.log(user?.email) 

    const {data: savedQuiz} = useQuery({
        queryKey: ['savedQuiz', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/savedQuiz?email=${user?.email}`)
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