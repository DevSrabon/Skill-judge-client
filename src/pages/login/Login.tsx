import { useContext, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import PasswordResetModal from './PasswordResetModal';
import { Player } from '@lottiefiles/react-lottie-player';
import useToken from '../../hooks/useToken';
import Spinner from '../../SharedComponent/Spinner/Spinner';

const Login = () => {

	type FormValues = {
		email: string;
		password: string;
	};

	const { loginUser, createUserWithGoogle, loading, setLoading }: any = useContext(AuthContext);
	const [error, setError] = useState('');
	const { register, formState: { errors }, handleSubmit } = useForm<FormValues>();

	const [userEmail, setUserEmail] = useState<string>('');
	const [token] = useToken(userEmail);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	if (token) {
		navigate(from, { replace: true });
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
				setUserEmail(email);
			})
	};

	const handleLogin: SubmitHandler<FormValues> = (data) => {
		setError('');
		loginUser(data.email, data.password)
			.then(result => {
				toast.success('Login Successful');
				setUserEmail(data.email);
				setLoading(false);
				// navigate(from, { replace: true });
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
				saveUser(user.displayName, user.email);
				toast.success('Login Successful');
				// navigate(from, { replace: true });
			})
			.catch(err => {
				console.log(err);
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
					className="w-96"
					src="https://assets10.lottiefiles.com/packages/lf20_JNfP0LIyMH.json"></Player>
			</div>
			<div className="w-full max-w-sm mx-auto shadow-xl p-8 rounded-md">
				<h2 className="text-xl">Login</h2>
				<form onSubmit={handleSubmit(handleLogin)} className="form-control">
					{/* Email */}
					<label className="label">
						<span className="label-text">Email</span>
					</label>
					<input
						type="email"
						{...register("email", { required: true })}
						className="input input-bordered w-full max-w-sm"
					/>
					{errors.email?.type === "required" && (
						<p role="alert" className="text-red-700">
							Email is required
						</p>
					)}

					{/* Password */}
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<input
						type="password"
						{...register("password", {
							required: true,
							minLength: {
								value: 6,
								message: "Password must be at least 6 characters",
							},
						})}
						className="input input-bordered w-full max-w-sm"
					/>
					<p className="text-red-700">{errors?.password?.message}</p>
					{errors.password?.type === "required" && (
						<p role="alert" className="text-red-700">
							Password is required
						</p>
					)}

					{/* Password Reset Button */}
					<label className="label">
						<label
							className="label-text-alt btn btn-xs btn-link no-underline"
							htmlFor="resetPassword">
							Forgot Password?
						</label>
					</label>

					{/* Submit */}
					{error && <p className="text-red-700">{error}</p>}
					<input
						type="submit"
						value="Login"
						disabled={loading}
						className="bg-emerald-400 hover:bg-emerald-600 text-white focus:ring-2 font-medium rounded-lg text-sm px-5 py-3 text-center dark:text-white"
					/>
					<p>
						New to Skill-Judge?{" "}
						<Link to={"/signup"} className="text-primary">
							Create a new account
						</Link>
					</p>
					<div className="divider">OR</div>
				</form>
				<button
					onClick={handleGoogleLogin}
					disabled={loading}
					className="btn btn-outline w-full max-w-sm">
					Continue With Google
				</button>
				<PasswordResetModal></PasswordResetModal>
			</div>
		</div>
	);
};

export default Login;