import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiCommentDots } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const HomeBlog = () => {
    const [blogData, setBlogData] = useState<any>([]);

    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}/blog`)
        .then((response) => response.json())
        .then((data) => setBlogData(data));
    }, []);
console.log(blogData);
    return (
      <div>
        <h1 className='text-3xl text-black dark:text-white text-center'>Our latest blogs</h1>
     <hr className='my-5' />
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
          {blogData.slice(-3).map((data) => (
            <div>
              <div className="card w-96 bg-base-100 dark:bg-slate-700 shadow-xl relative dark:text-white">
                <figure>
                  <img
                    src={data.authorPicture}
                    alt={data.authorName}
                    className="hover:scale-105 ease-in duration-100"
                  />
                </figure>
                <div className="absolute transform left-3 top-2/4">
                  <button className="bg-cyan-800 p-1 rounded-md">
                    {moment(data.timePost).fromNow()}
                  </button>
                </div>
                <div className="card-body p-5 h-60">
                  <div className="flex justify-start items-start gap-6">
                    <div className="flex gap-2 items-center">
                      <CgProfile />
                      {data.authorName}
                    </div>
                    <div className="flex gap-2 items-center">
                      <BiCommentDots />
                      {data.comment.length}
                    </div>
                  </div>
                  <hr />
                  <h2 className="card-title dark:text-slate-100">
                    {data.blogTitle}
                  </h2>
                  <p className="dark:text-slate-100">
                    {data.blogAbout.slice(0, 100) + "......."}
                  </p>
                  <div className="card-actions">
                    <Link
                      to={`blog/${data._id}`}
                      className="flex bg-slate-500 hover:bg-slate-800 text-white p-2 gap-4 rounded-md"
                    >
                      READ MORE <AiOutlinePlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default HomeBlog;