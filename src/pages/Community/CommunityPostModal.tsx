import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { usePosts } from '../../contexts/PostProvider';
import { useUser } from '../../contexts/UserProvider';
import Spinner from '../../SharedComponent/Spinner/Spinner';

const CommunityPostModal = ({ setIsModalOpen }) => {
    const { dbUser }: any = useUser();
    const { register, handleSubmit, formState: { isDirty, isSubmitting } } = useForm({ mode: "onChange", defaultValues: { text: '', photo: {} } });
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const { refetch }: any = usePosts();

    const createPost = data => {
        const photo = data.photo[0];
        const formData = new FormData();
        formData.append('image', photo);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

        //Function for creating post in database
        const savePost = (post) => {
            fetch(`${process.env.REACT_APP_API_URL}/community/post`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(post)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('Your post added successfully');
                    refetch();
                    setIsModalOpen(false);
                })
        }

        if (photo) {
            //photo hosting system to imgbb
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imgData => {
                    if (imgData.success) {
                        const post = {
                            email: dbUser.email,
                            userPhoto: dbUser.photo,
                            name: dbUser.name,
                            text: data.text,
                            photo: imgData.data.url,
                            likes: [],
                            date: new Date()
                        }

                        savePost(post);
                    }
                })
        }
        else {
            const post = {
                email: dbUser.email,
                userPhoto: dbUser.photo,
                name: dbUser.name,
                text: data.text,
                likes: [],
                date: new Date()
            }

            savePost(post);
        }
    }

    if (isSubmitting) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative dark:bg-zinc-800">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl text-center font-bold dark:text-white">Create Post</h3>
                    <hr />
                    <form onSubmit={handleSubmit(createPost)}>
                        <textarea {...register("text")} className="textarea text-lg w-full h-52 my-4 dark:bg-zinc-800 dark:text-white" placeholder="Write something..."></textarea>
                        <label className="label">
                            <span className="label-text dark:text-white">Add Photo</span>
                        </label>
                        <input {...register("photo")} type="file" className="file-input file-input-bordered w-full dark:bg-slate-700 dark:text-white" />
                        <button disabled={!isDirty} type="submit" className='my-4 btn btn-primary w-full dark:text-white'>Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CommunityPostModal;