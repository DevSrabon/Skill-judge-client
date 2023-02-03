import { toast } from 'react-hot-toast';

const ProfileUpdateModal: any = ({ profile, refetch, setIsModalOpen }) => {
    const imgHostKey = process.env.REACT_APP_imgbb_key;

    const { name, email, occupation, mobile, address } = profile;

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const occupation = form.occupation.value;
        const mobile = form.mobile.value;
        const address = form.address.value;
        const photo = form.photo.files[0];
        console.log(name, email, occupation, mobile, address, photo);

        //photo hosting system to imgbb
        const formData = new FormData();
        formData.append('image', photo);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const userInfo = {
                        name,
                        email,
                        occupation,
                        photo: imgData.data.url,
                        mobile,
                        address,
                    }
                    console.log(userInfo);

                    //save post to the database
                    fetch(`http://localhost:5000/updateUser?email=${profile?.email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            toast.success('Your information updated successfully');
                            refetch();
                            // navigate('/my-profile');
                            setIsModalOpen(false);
                        })
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="profile-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="profile-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Update your profile info</h3>
                    <form onSubmit={handleSubmit}>

                        {/* Name */}
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={name} required placeholder="Your Name" className="input input-bordered w-full max-w-lg" />
                        </div>

                        {/* Email */}
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={email} readOnly className="input input-bordered w-full max-w-lg" />
                        </div>

                        {/* Occupation */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Occupation</span>
                            </label>
                            <input type="text" name='occupation' defaultValue={occupation} required placeholder='Your Occupation' className="input input-bordered w-full max-w-lg" />
                        </div>

                        {/* Mobile */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile</span>
                            </label>
                            <input type="tel" name='mobile' defaultValue={mobile} placeholder="Your Mobile Number" required className="input input-bordered w-full max-w-lg" />
                        </div>

                        {/* Address */}
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name='address' defaultValue={address} required placeholder="Your Address" className="input input-bordered w-full max-w-lg" />
                        </div>

                        {/* Photo */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" name='photo' required className="file-input file-input-bordered w-full max-w-lg" />
                        </div>

                        <button type='submit' className="btn btn-info my-4 w-full">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileUpdateModal;