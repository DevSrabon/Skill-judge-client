import { useQuery } from "@tanstack/react-query";

interface Iuser{
    name: string;
    email: string;
    _id: string;
}

const AllUsers = () => {

    const {data: allUsres = []} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
           const res = await fetch('http://localhost:5000/all-users')
           const data = await res.json()
           return data; 
        }
    })
    
    const handleDeleteUser = (userId: string) => { 
        fetch(`http://localhost:5000/user/${userId}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div className="overflow-x-auto">
         <table className="table table-zebra w-full"> 
          <thead>
           <tr>
            <th></th>
            <th>Name</th>
            <th>Email Address</th>
            <th>Delete</th>
           </tr>
          </thead>
          <tbody> 
            {
                allUsres.map((usr: Iuser, i: number) => <tr key={usr._id}>
                    <th>{i+1}</th>
                    <td>{usr.name}</td>
                    <td>{usr.email}</td>
                    <td><button onClick={() => handleDeleteUser(usr._id)} className="btn btn-sm bg-black">Delete</button></td>
                </tr>)
            }  
          </tbody>
         </table>
        </div>
    )
}

export default AllUsers;