import { AiFillLike } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { HiThumbUp } from 'react-icons/hi';
import { GoComment } from 'react-icons/go';
import moment from 'moment';
import { toast } from 'react-hot-toast';
import { useUser } from '../../contexts/UserProvider';
import { useState } from 'react';

const PostCard = ({ post, refetch }) => {
    const { _id, email, userPhoto, name, text, date, photo, likes } = post;
    const { dbUser }: any = useUser();
    const [loading, setLoading] = useState(false);

    const isLiked = likes?.includes(dbUser._id);

    const makeLike = () => {
        setLoading(true);
        const info = {
            postId: _id,
            userId: dbUser._id
        }
        fetch(`${process.env.REACT_APP_API_URL}/community/post/like`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    toast.success('You liked the post');
                    setLoading(false);
                    refetch();
                }
            })
    }

    const makeUnlike = () => {
        setLoading(true);
        const info = {
            postId: _id,
            userId: dbUser._id
        }
        fetch(`${process.env.REACT_APP_API_URL}/community/post/unlike`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    toast.success('You unliked the post');
                    setLoading(false);
                    refetch();
                }
            })
    }

    const makeLikeOrUnlike = () => {

        if (isLiked) {
            makeUnlike();
        }
        else {
            makeLike();
        }
    }

    return (
        <div className="card w-full max-w-lg mx-auto bg-base-100 shadow-2xl my-8">
            <div className="card-body">
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                userPhoto ? <img src={userPhoto} alt='' /> : <FaUser className='w-full h-full text-blue-500' />
                            }

                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold">{name}</h3>
                        <p>{moment(date).fromNow()}</p>
                    </div>
                </div>
                <p>{text}</p>
            </div>
            <figure><img src={photo} alt="" /></figure>
            <div className='flex justify-between p-4'>
                <p><AiFillLike className='bg-blue-600 text-white w-6 h-6 p-1 border rounded-full inline-block mr-1' />{likes?.length}</p>
                <p>0 comments</p>
            </div>
            <hr />
            <div className='flex justify-evenly py-4'>
                <button disabled={loading} onClick={makeLikeOrUnlike} className={`btn btn-xs btn-ghost ${isLiked ? 'text-blue-600' : 'text-black'} gap-2`}>
                    <HiThumbUp className={`text-xl ${isLiked ? 'text-blue-600' : 'text-black'}`} />
                    Like
                </button>
                <button className="btn btn-xs btn-ghost gap-2">
                    <GoComment className='text-lg mt-1' />
                    Comment
                </button>
            </div>
            <hr />
            <div>
            </div>
        </div>
    );
};

export default PostCard;