import ProfileUpdateModal from "./ProfileUpdateModal";
import { useUser } from "../../contexts/UserProvider";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import Spinner from "../../SharedComponent/Spinner/Spinner";

const MyProfile = () => {
	const [isModalOpen, setIsModalOpen]: any = useState(true);

	const { dbUser: profileData, refetch }: any = useUser();
	const { user, loading }: any = useAuth()

	if (loading) return <Spinner />;

	return (
		<div className="w-full dark:bg-white max-w-xl mx-auto border rounded-lg my-20">
			<div className="flex justify-between">
				<h2 className="text-xl font-bold px-4">My Profile</h2>
				<div className="avatar">
					<div className="w-24 rounded">
						{profileData?.photo ? (
							<img src={profileData?.photo} alt="user" />
						) : (
							<img src={user?.photoURL} alt="user" />
						)}
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
			<label
				htmlFor="profile-modal"
				className="btn btn-outline btn-primary w-full">
				Update Info
			</label>
			{isModalOpen && (
				<ProfileUpdateModal
					profile={profileData}
					refetch={refetch}
					setIsModalOpen={setIsModalOpen}></ProfileUpdateModal>
			)}
		</div>
	);
};

export default MyProfile;
