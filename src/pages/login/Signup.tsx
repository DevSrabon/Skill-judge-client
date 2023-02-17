import { useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { Player } from '@lottiefiles/react-lottie-player';
import useToken from '../../hooks/useToken';
import Spinner from '../../SharedComponent/Spinner/Spinner';

const Signup = () => {
	type FormValues = {
		name: string;
		email: string;
		password: string;
	};
	const { createUser, createUserWithGoogle, updateUser, loading, setLoading }: any = useContext(AuthContext);
	const [error, setError] = useState<string>('');
	const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
	const [userEmail, setUserEmail] = useState<string>('');
	const [token] = useToken(userEmail);
	const navigate = useNavigate();

	if (token) {
		navigate('/');
	}


	const saveUser = (name: string, email: string) => {
		const user = { name, email };
		fetch(`${process.env.REACT_APP_API_URL}/user`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setUserEmail(email);
			})
			.catch(error => console.error(error));
	};

	const handleSignup: SubmitHandler<FormValues> = data => {
		setError('');
		createUser(data.email, data.password)
			.then(result => {
				const user = result.user;
				updateUser({ displayName: data.name })
					.then(() => {
						saveUser(data.name, data.email);
						toast.success('SignUp Successful');
						// navigate('/');
						setLoading(false);
					})
					.catch(err => console.log(err))
				console.log(user);
			})
			.catch(err => {
				console.log(err);
				setError(err.message);
				setLoading(false);
			})
	};

	const handleGoogleLogin = () => {
		setError('');
		createUserWithGoogle()
			.then(result => {
				const user = result.user;
				console.log(user);
				saveUser(user.displayName, user.email);
				toast.success('SignUp Successful');
				setLoading(false);
				// navigate('/');
			})
			.catch(err => {
				console.log(err)
				setError(err.message);
				setLoading(false);
			})
	}

	if (loading) {
		return <Spinner></Spinner>
	}

	return (
		<div className="grid grid-cols-1 items-center md:grid-cols-2  gap-4 md:gap-5 pt-5 lg:pt-10 mb-5">
			<div className=" flex justify-end">
				<Player
					autoplay
					loop
					className='w-96'
					src="https://assets7.lottiefiles.com/packages/lf20_qmvs7uqa.json"></Player>
			</div>
			<div className="">
				<div className="w-full max-w-sm mx-auto shadow-xl p-8 rounded-md">
					<h2 className="text-xl">Sign Up</h2>
					<form onSubmit={handleSubmit(handleSignup)} className="form-control">
						{/* Name */}
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input
							type="text"
							{...register("name", { required: "Name is required" })}
							className="input input-bordered w-full max-w-sm"
						/>
						{errors.name && (
							<p className="text-red-700">{errors.name?.message}</p>
						)}

						{/* Email */}
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input
							type="email"
							{...register("email", { required: "Email is required" })}
							className="input input-bordered w-full max-w-sm"
						/>
						{errors.email && (
							<p className="text-red-700">{errors.email?.message}</p>
						)}

						{/* Password */}
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							{...register("password", {
								required: "Password is required",
								minLength: {
									value: 6,
									message: "Password must be at least 6 characters",
								},
							})}
							className="input input-bordered w-full max-w-sm"
						/>
						{errors.password && (
							<p className="text-red-700">{errors.password?.message}</p>
						)}

						{/* Submit button */}
						{error && <p className="text-red-700">{error}</p>}
						<input
							type="submit"
							disabled={loading}
							value="Sign Up"
							className="btn btn-accent text-white w-full max-w-sm mt-5"
						/>
						<p>
							Already have an account?{" "}
							<Link to={"/login"} className="text-primary">
								Login
							</Link>
						</p>
						<div className="divider">OR</div>
					</form>
					<button
						onClick={handleGoogleLogin}
						disabled={loading}
						className="btn btn-outline w-full max-w-sm">
						SignUp With Google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Signup;