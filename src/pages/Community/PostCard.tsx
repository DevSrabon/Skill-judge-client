import { AiFillLike } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { HiThumbUp } from 'react-icons/hi';
import { GoComment } from 'react-icons/go';
import moment from 'moment';
import { toast } from 'react-hot-toast';
import { useUser } from '../../contexts/UserProvider';
import { useState } from 'react';
import PostComments from './PostComments';

const PostCard = ({ post, refetch }) => {
    const { _id, userId, userPhoto, name, text, date, photo, likes, comments } = post;
    const { dbUser }: any = useUser();
    const [loading, setLoading] = useState(false); // for like button
    const [showCommentBox, setShowCommentBox] = useState(false); // for opening comment box    
    const [comment, setComment] = useState('');
    const isLiked = likes?.includes(dbUser?._id);

    const makeLike = () => {
        setLoading(true);
        const info = {
            postId: _id,
            userId: dbUser?._id
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
            userId: dbUser?._id
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

    const checkEnter = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddComment();
        }
    }

    const handleAddComment = () => {
        const commentInfo = {
            postId: _id,
            userId: dbUser?._id,
            userPhoto: dbUser?.photo,
            userName: dbUser?.name,
            comment,
            date: new Date()
        }
        fetch(`${process.env.REACT_APP_API_URL}/community/post/comment`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(commentInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    toast.success('You made a comment successfully');
                    setShowCommentBox(false);
                    refetch();
                }
            })
    }

    return (
        <div className="card w-full max-w-lg mx-auto bg-base-100 dark:bg-gray-900 shadow-2xl my-8">
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
                        <p className="font-bold">{name}</p>
                        <p>{moment(date).fromNow()}</p>
                    </div>
                </div>
                <p>{text}</p>
            </div>

            {/* photo */}
            <figure><img src={photo} alt="" /></figure>

            {/* number of likes and comments */}
            <div className='flex justify-between p-4'>
                <p><HiThumbUp className='bg-blue-600 text-white w-6 h-6 p-[2px] border rounded-full inline-block mr-1' />{likes?.length}</p>
                <p>{comments?.length} <GoComment className='w-5 h-5 inline-block' /></p>
            </div>
            <hr />

            {/* Like and Comment Button */}
            <div className='flex justify-evenly py-4'>
                <button disabled={loading} onClick={makeLikeOrUnlike} className={`btn btn-xs btn-ghost dark:hover:bg-gray-600 ${isLiked ? 'text-blue-600' : 'text-black dark:text-white'} gap-2`}>
                    <HiThumbUp className={`text-xl ${isLiked ? 'text-blue-600' : 'text-black dark:text-white'}`} />
                    Like
                </button>
                <button onClick={() => setShowCommentBox(true)} className="btn btn-xs btn-ghost dark:hover:bg-gray-600 gap-2">
                    <GoComment className='text-lg mt-1' />
                    Comment
                </button>
            </div>
            <hr />

            {/* Comment Box */}
            {
                showCommentBox && (
                    <div className='flex items-center p-4'>
                        <div className="avatar">
                            <div className="w-12 h-12 rounded-full mr-3">
                                {
                                    dbUser?._id ? <img src={dbUser?.photo} alt={dbUser?.name} /> : <FaUser className='w-full h-full text-blue-500' />
                                }
                            </div>
                        </div>
                        <textarea onChange={(e) => setComment(e.target.value)} onKeyDown={checkEnter} placeholder='Write a comment...' className="textarea h-12 bg-gray-100 hover:bg-gray-200 dark:bg-zinc-600 dark:hover:bg-zinc-500 text-lg dark:text-white rounded-lg w-full">

                        </textarea>
                    </div>
                )
            }

            {/* Comments */}
            <div className='p-4'>
                {
                    comments?.slice(0).reverse().map((singleComment, idx) => <PostComments key={idx} singleComment={singleComment}></PostComments>)
                }
            </div>
        </div>
    );
};

export default PostCard;