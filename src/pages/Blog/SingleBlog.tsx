import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBlog = () => {
  	const blogData: any = useLoaderData();
console.log(blogData);
    return (
      <div className="mx-5 md:mx-20">
        {blogData.map((data: any) => (
          <div key={data._id} className="grid md:grid-cols-3 gap-3 my-5">
            <div className="md:col-span-2">
              <h1 className="text-3xl mb-3">{data.blogTitle}</h1>
              <div className="flex gap-6">
                <div className="flex gap-3">
                  <p>by</p>
                  <h2 className="font-bold"> {data.authorName}</h2>
                </div>
                <div className="flex gap-3">
                  <p>publish date : </p>
                  <h2 className="font-bold"> {data.timePost}</h2>
                </div>
              </div>
              <hr className="my-2"></hr>
              <p>{data.blogAbout}</p>
            </div>
            <div className="card shadow-md bg-slate-200 md:col-span-1">
              <div className="flex md:flex-col gap-6 md:gap-0 items-center">
                <img
                  className="w-24 h-24 my-3 md:w-52 md:h-52 rounded-full ml-5 md:m-0 md:my-5"
                  src={data.authorPicture}
                  alt=""
                />

                <div className="bg-slate-300 w-full rounded-md">
                  <h1 className="font-semibold text-center">
                    About Author & Post
                  </h1>
                  <hr></hr>
                  <div className="m-5">
                    <p>
                      <span className="font-bold">Author Name: </span>
                      {data.authorName}
                    </p>
                    <p>
                      <span className="font-bold">Category : </span>
                      {data.category}
                    </p>

                    <p>
                      <span className="font-bold"> Time Post : </span>
                      {data.timePost}
                    </p>
                    <p>
                      <span className="font-bold"> Comment: </span>{" "}
                      {data.comment}
                    </p>
                    <p>
                      <span className="font-bold">Like : </span> {data.like}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default SingleBlog;