import { toast } from "react-hot-toast";
import { useUser } from "../../contexts/UserProvider";

const ProfileUpdateModal: any = ({ profile, refetch, setIsModalOpen }) => {
	const imgHostKey = process.env.REACT_APP_imgbb_key;

	const { name, email, occupation, mobile, address, photo: dbPhoto } = profile;
	const { refetch: myfetch, isLoading }: any = useUser();

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const occupation = form.occupation.value;
		const mobile = form.mobile.value;
		const address = form.address.value;
		const photo = form.photo.files[0];

		//Function for updating user info
		const userDataUpdate = (userInfo) => {
			fetch(
				`${process.env.REACT_APP_API_URL}/user/updateUser?email=${profile?.email}`,
				{
					method: "PATCH",
					headers: {
						"content-type": "application/json",
						authorization: `bearer ${localStorage.getItem('token')}`
					},
					body: JSON.stringify(userInfo),
				}
			)
				.then((res) => res.json())
				.then((data) => {
					toast.success("Your information updated successfully");
					refetch();
					// navigate('/my-profile');
					setIsModalOpen(false);
					myfetch();
				});

		}

		if (photo) {
			//photo hosting system to imgbb
			const formData = new FormData();
			formData.append("image", photo);
			const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
			fetch(url, {
				method: "POST",
				body: formData,
			})
				.then((res) => res.json())
				.then((imgData) => {
					if (imgData.success) {
						const userInfo: any = {
							name,
							email,
							occupation,
							photo: imgData.data.url,
							mobile,
							address,
						};

						// function for updating user info
						userDataUpdate(userInfo);
					}
				});
		}
		else {
			const userInfo: any = {
				name,
				email,
				occupation,
				mobile,
				address,
				photo: dbPhoto
			};

			// function for updating user
			userDataUpdate(userInfo);

		}


	};

	return (
		<div>
			<input type="checkbox" id="profile-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative">
					<label
						htmlFor="profile-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2">
						✕
					</label>
					<h3 className="text-lg font-bold">Update your profile info</h3>
					<form onSubmit={handleSubmit}>
						{/* Name */}
						<div className="form-control w-full max-w-lg">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								name="name"
								defaultValue={name}
								required
								placeholder="Your Name"
								className="input input-bordered w-full max-w-lg"
							/>
						</div>

						{/* Email */}
						<div className="form-control w-full max-w-lg">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								defaultValue={email}
								readOnly
								className="input input-bordered w-full max-w-lg"
							/>
						</div>

						{/* Occupation */}
						<div className="form-control">
							<label className="label">
								<span className="label-text">Occupation</span>
							</label>
							<input
								type="text"
								name="occupation"
								defaultValue={occupation}
								placeholder="Your Occupation"
								className="input input-bordered w-full max-w-lg"
							/>
						</div>

						{/* Mobile */}
						<div className="form-control">
							<label className="label">
								<span className="label-text">Mobile</span>
							</label>
							<input
								type="tel"
								name="mobile"
								defaultValue={mobile}
								placeholder="Your Mobile Number"
								className="input input-bordered w-full max-w-lg"
							/>
						</div>

						{/* Address */}
						<div className="form-control w-full max-w-lg">
							<label className="label">
								<span className="label-text">Address</span>
							</label>
							<input
								type="text"
								name="address"
								defaultValue={address}
								placeholder="Your Address"
								className="input input-bordered w-full max-w-lg"
							/>
						</div>

						{/* Photo */}
						<div className="form-control">
							<label className="label">
								<span className="label-text">Photo</span>
							</label>
							<input
								type="file"
								name="photo"
								className="file-input file-input-bordered w-full max-w-lg"
							/>
						</div>

						<button type="submit" disabled={isLoading} className="btn btn-info my-4 w-full">
							Save Changes
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ProfileUpdateModal;
