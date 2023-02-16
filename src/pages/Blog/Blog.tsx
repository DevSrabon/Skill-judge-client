import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
  const blogData: any = useLoaderData();
  console.log(blogData);
  console.log(Date());
  return (
    <div className="mx-10">
      {blogData?.map((data: any) => (
        <div
          key={data._id}
          className="card md:card-side rounded-md shadow-2xl dark:bg-slate-700 bg-slate-200 mt-3"
        >
          <figure className="w-96">
            <img
              className="m-2 rounded-md"
              src={data.authorPicture}
              alt="Movie"
            />
          </figure>
          <div className="card-body p-3 ml-4">
            <h2 className="card-title dark:text-slate-100">{data.blogTitle}</h2>
            <p className="dark:text-slate-100">
              {data.blogAbout.slice(0, 200) + "......."}
            </p>
            <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-3 dark:text-slate-100">
              <p>
                <span className="font-bold">Category : </span>
                {data.category}
              </p>
              <p>
                <span className="font-bold">Author : </span>
                {data.authorName}
              </p>
              <p>
                <span className="font-bold"> Time Post : </span>
                {data.timePost}
              </p>
              <p>
                <span className="font-bold"> Comment: </span>
                {data.comment ? data.comment.length : 0}
              </p>
              <p>
                <span className="font-bold">Like : </span> {data.like}
              </p>
              <Link
                to={data._id}
                className="bg-gray-400 hover:bg-gray-600 text-center rounded-xl flex items-center justify-center gap-2"
              >
                Continuing Reading ...
                <BsBoxArrowUpRight className="w-6 h-6"></BsBoxArrowUpRight>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
