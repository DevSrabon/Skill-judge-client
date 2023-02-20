import moment from "moment";
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
  const blogData: any = useLoaderData();
  console.log(blogData);
  console.log(Date());
  return (
    <div className="m-10">
      <h1 className="text-4xl text-center dark:text-white my-3">Developer Blog</h1>
      <hr />
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {blogData?.map((data: any) => (
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
            <div className="card-body p-3 ml-4">
              <div className="dark:text-slate-100">
                <p>
                  <span className="font-bold text-red-600">Category : </span>
                  {data.category}
                </p>
                <h2 className="card-title dark:text-slate-100">
                  {data.blogTitle}
                </h2>
                <p className="dark:text-slate-100">
                  {data.blogAbout.slice(0, 200) + "......."}
                </p>
              </div>
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
                    <span className="font-bold text-teal-600">Time Post :</span>
                    {moment(data.timePost).fromNow()}
                  </p>
                  <p>
                    <span className="font-bold text-sky-600"> Comment: </span>
                    {data.comment ? data.comment.length : 0}
                  </p>
                </div>
              </div>

              <button className="card-actions justify-end">
                <Link
                  to={data._id}
                  className="flex gap-3 text-black bg-white hover:bg-gray-500 hover:text-white rounded-xl px-5 py-2 m-1"
                >
                  Continuing Reading ...
                  <BsBoxArrowUpRight className="w-5 h-5"></BsBoxArrowUpRight>
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
