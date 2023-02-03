import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthProvider';
import ProfileUpdateModal from './ProfileUpdateModal';



const MyProfile = () => {
    const { user }: any = useAuth();
    const [profileData, setProfileData]: any = useState({});
    const [isModalOpen, setIsModalOpen]: any = useState(true);

    // console.log(user);
    // const url = `http://localhost:5000/user?email=${user?.email}`

    const { isLoading, error, refetch, data }: any = useQuery({
        queryKey: ['user', user?.email],
        queryFn: () =>
            fetch(`http://localhost:5000/user?email=${user?.email}`, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('token')}`
                }
            }).then(res => res.json())
    })

    useEffect(() => {
        if (data?.length) {
            setProfileData(data[0]);
        }

    }, [data])


    // console.log("data", data);

    if (isLoading) return <p>Loading...</p>
    // if (error) return 'An error has occurred: ' + error.message
    if (error) return <p>An error has occurred</p>

    // const { name, email, occupation, mobile, address } = data[0];

    return (
        <div className="w-full max-w-xl mx-auto border rounded-lg my-20">
            <div className='flex justify-between'>
                <h2 className='text-xl font-bold px-4'>My Profile</h2>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={profileData?.photo} alt="user" />
                    </div>
                </div>
            </div>
            <hr />
            <table className="table w-full">
                <tbody>

                    <tr>
                        <th>Name</th>
                        <td>{profileData?.name}</td>
                    </tr>

                    <tr>
                        <th>Email</th>
                        <td>{profileData?.email}</td>
                    </tr>

                    <tr>
                        <th>Occupation</th>
                        <td>{profileData?.occupation}</td>
                    </tr>

                    <tr>
                        <th>Mobile</th>
                        <td>{profileData?.mobile}</td>
                    </tr>

                    <tr>
                        <th>Address</th>
                        <td>{profileData?.address}</td>
                    </tr>
                </tbody>
            </table>
            <label htmlFor="profile-modal" className="btn btn-outline btn-primary w-full">Update Info</label>
            {
                isModalOpen &&
                <ProfileUpdateModal
                    profile={profileData}
                    refetch={refetch}
                    setIsModalOpen={setIsModalOpen}>
                </ProfileUpdateModal>
            }
        </div>
    );
};

export default MyProfile;