import { AiFillLike } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { GrLike } from 'react-icons/gr';
import { GoComment } from 'react-icons/go';
import moment from 'moment';

const PostCard = ({ post }) => {
    const { _id, email, userPhoto, name, text, date, photo } = post;

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
                <p><AiFillLike className='bg-blue-600 text-white w-6 h-6 p-1 border rounded-full inline-block mr-1' />0</p>
                <p>0 comments</p>
            </div>
            <hr />
            <div className='flex justify-evenly py-4'>
                <button className="btn btn-xs btn-ghost gap-2">
                    <GrLike className='text-lg' />
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