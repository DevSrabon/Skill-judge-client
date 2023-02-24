import moment from "moment";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
  const blogData: any = useLoaderData();
  console.log(blogData);
  console.log(Date());
  return (
    <div className="m-10">
      <h1 className="text-4xl text-center dark:text-white my-3">
        Developer Blog
      </h1>
      <hr />
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {blogData
          ?.slice(0)
          .reverse()
          .map((data: any) => (
            <div
              key={data._id}
              className="card items-center rounded-md shadow-2xl bg-[#232427] mt-3 text-white"
            >
              <figure className="w-96">
                <img
                  className="m-2 rounded-md"
                  src={data.authorPicture}
                  alt="Movie"
                />
              </figure>
              <div className="card-body p-5 h-72 w-full">
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
                <div className="flex gap-3 items-center">
                  <img
                    src={data.authorPicture}
                    className="w-14 h-14 rounded-full"
                    alt=""
                  />
                  <div>
                    <p>
                      <span className="font-bold text-lime-600">Author : </span>
                      {data.authorName}
                    </p>
                    <p>
                      <span className="font-bold text-teal-600">
                        Time Post :
                      </span>
                      {moment(data.timePost).fromNow()}
                    </p>
                    <p>
                      <span className="font-bold text-sky-600"> Comment: </span>
                      {data.comment ? data.comment.length : 0}
                    </p>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <Link
                    to={data._id}
                    className="flex bg-slate-500 hover:bg-slate-800 text-white p-2 gap-4 rounded-md"
                  >
                    READ MORE <AiOutlinePlus />
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
