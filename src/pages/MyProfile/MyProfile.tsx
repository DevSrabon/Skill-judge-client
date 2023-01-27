import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthProvider';

const MyProfile = () => {
    const { user }: any = useAuth();
    const { register, handleSubmit } = useForm();

    const userEmail = user?.email;
    const url = `${process.env.REACT_APP_API_URL}/user?email=${userEmail}`

    const { isLoading, error, refetch, data } = useQuery({
        queryKey: ['user'],
        queryFn: () =>
            fetch(url, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('token')}`
                }
            }).then(res => res.json())
    })

    if (isLoading) return <p>Loading...</p>
    // if (error) return 'An error has occurred: ' + error.message
    if (error) return <p>An error has occurred</p>

    const { name, email, mobile, address } = data[0];


    const saveChanges = (data, e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <div className='my-12 w-full max-w-lg mx-auto text-center border rounded-lg p-10'>
            <h2 className='text-3xl font-bold'>My Profile</h2>
            <form onSubmit={handleSubmit(saveChanges)}>
                {/* Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register('name')} defaultValue={name} required className="input input-bordered w-full max-w-lg" />
                </div>

                {/* Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register('email')} defaultValue={email} readOnly className="input input-bordered w-full max-w-lg" />
                </div>

                {/* Mobile */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Mobile</span>
                    </label>
                    <input type="tel" {...register('mobile')} placeholder="Your Mobile Number" defaultValue={mobile} required className="input input-bordered w-full max-w-lg" />
                </div>

                {/* Address */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input type="text" {...register('address')} placeholder="Your Address" defaultValue={address} required className="input input-bordered w-full max-w-lg" />
                </div>

                {/* Photo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" {...register('photo')} placeholder="Your Address" required className="file-input file-input-bordered w-full max-w-lg" />
                </div>
                <button type='submit' className="btn btn-info btn-sm my-4">Save Changes</button>
            </form>
        </div>
    );
};

export default MyProfile;