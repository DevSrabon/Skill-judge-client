import moment from 'moment';
import React from 'react';
import { FaUser } from 'react-icons/fa';

const PostComments: any = ({ singleComment }) => {
    const { postId, userId, userPhoto, userName, comment, date }: any = singleComment;
    return (
        <div className="flex mb-3">
            <div className="avatar">
                <div className="w-10 h-10 rounded-full mr-3">
                    {
                        userPhoto ? <img src={userPhoto} alt='' /> : <FaUser className='w-full h-full text-blue-500' />
                    }

                </div>
            </div>
            <div className='bg-gray-100 dark:bg-gray-600 p-2 rounded-lg'>
                <p><span className='font-semibold'>{userName}</span> <span className='ml-4 text-gray-400'>{moment(date).fromNow()}</span></p>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default PostComments;