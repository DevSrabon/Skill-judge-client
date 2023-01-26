import React from 'react';
import { useAuth } from '../../contexts/AuthProvider';

const MyProfile = () => {
    const { user }: any = useAuth();
    console.log(user);
    return (
        <div>
            <form>
                <input type="text" defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" />
                <input type="email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder='Your Address' className="input input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default MyProfile;