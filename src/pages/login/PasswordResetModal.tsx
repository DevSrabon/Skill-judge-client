import React, { useContext, useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';



const PasswordResetModal = () => {
    type FormValue = {
        email: string
    }

    const [error, setError] = useState('');
    const { passwordReset }: any = useContext(AuthContext);
    const { register, handleSubmit } = useForm<FormValue>();

    const resetPassword: SubmitHandler<FormValue> = data => {
        setError('');
        passwordReset(data.email)
            .then(() => {
                toast.success('Password reset email sent!');
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
            })
    };
    return (
        <div>
            <input type="checkbox" id="resetPassword" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="resetPassword" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-start">Password Assistance</h3>
                    <p className="py-4 text-start">Enter the email address associated with your account, then click Send. We'll email you a link to reset your password.</p>
                    <form onSubmit={handleSubmit(resetPassword)}>
                        <input type="email" {...register("email")} placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        {error && <p className='text-red-700'>{error}</p>}
                        <input type="submit" value="Send" className="btn w-full max-w-xs mt-4" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PasswordResetModal;