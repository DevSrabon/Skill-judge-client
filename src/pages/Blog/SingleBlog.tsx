import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import { useUser } from "../../contexts/UserProvider";
const SingleBlog = () => {
  const { user }: any = useAuth();

  console.log(user);
  const { dbUser }: any = useUser();
  console.log(dbUser);

  const params = useParams();

  const [blogData, setBlogData] = useState<any>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/blog/${params.id}`)
      .then((response) => response.json())
      .then((data) => setBlogData(data));
  }, [params]);

  console.log(blogData);

  const submitComment = (e) => {
    e?.preventDefault();
    if (e.target.comment.value) {
      fetch(`${process.env.REACT_APP_API_URL}/blog/comment`, {
        method: "PATCH",
        body: JSON.stringify({
          blogId: blogData[0]._id,
          name: dbUser.name,
          userId: dbUser._id,
          userImage: dbUser.photo,
          comment: e.target.comment.value,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          fetch(`${process.env.REACT_APP_API_URL}/blog/${params.id}`)
            .then((response) => response.json())
            .then((data) => {
              setBlogData(data);
              e.target.reset();
            });
        });
    }
  };
  const removeComment = (data) => {
    console.log(data);
  };
  return (
    <div className="px-5 md:px-20 bg-[#232427] text-white">
      {blogData.map((data: any) => (
        <div key={data._id} className="grid md:grid-cols-3 gap-3 py-5">
          <div className="md:col-span-2 dark:text-white ">
            <h1 className="text-3xl mb-3">{data.blogTitle}</h1>
            <div className="flex gap-6">
              <div className="flex gap-3">
                <p>by</p>
                <h2 className="font-bold"> {data.authorName}</h2>
              </div>
              <div className="flex gap-3">
                <p>publish date : </p>
                <h2 className="font-bold">
                  {moment(data.timePost).fromNow()}
                </h2>
              </div>
            </div>
            <hr className="my-2"></hr>
            <p>{data.blogAbout}</p>
          </div>
          <div className="card shadow-md bg-cyan-900 md:col-span-1">
            <div className="flex md:flex-col gap-6 md:gap-0 items-center">
              <img
                className="w-24 h-24 my-3 md:w-52 md:h-52 rounded-full ml-5 md:m-0 md:my-5"
                src={data.authorPicture}
                alt={data.authorName}
              />

              <div className="bg-zinc-700 text-white w-full rounded-md">
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
                    {data.comment ? data.comment.length : 0}
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

      {blogData[0]?.comment && (
        <div>
          {blogData[0]?.comment?.map((comment) => (
            <div className="shadow-md rounded-xl p-3 bg-zinc-900 my-5">
              <div className="flex gap-5">
                <img
                  src={comment.userImage}
                  alt=""
                  className="object-cover object-center w-10 h-10 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
                />
                <div className="flex items-center justify-between gap-10">
                  <h2 className="text-sm font-semibold leading-none">
                    {comment.name}
                  </h2>
                  <label
                    onClick={() => removeComment(comment)}
                    htmlFor="my-modal-6"
                    className="bg-gradient-to-r from-slate-900 to-slate-700 py-1 px-3 rounded-xl"
                  >
                    Remove
                  </label>

                  <input
                    type="checkbox"
                    id="my-modal-6"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle text-black">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-6"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>

                      <p className="py-4 text-xl">
                        Are you sure you want to delete your comment?
                      </p>
                      <div className="modal-action">
                        <label
                          onClick={() => removeComment(comment)}
                          htmlFor="my-modal-6"
                          className="btn"
                        >
                          Yay!
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 ml-5">{comment.comment}</div>
            </div>
          ))}
        </div>
      )}

      {user && (
        <form onSubmit={submitComment}>
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="flex flex-col w-full">
              <label className="leading-loose">Your Name</label>
              <input
                defaultValue={dbUser.name}
                readOnly
                name="name"
                type="text"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 dark:text-white"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="leading-loose">Your Email</label>
              <input
                defaultValue={dbUser.email}
                readOnly
                name="email"
                type="email"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 dark:text-white"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="flex justify-center gap-10 pb-10 pt-5">
            <input
              type="text"
              name="comment"
              placeholder="Your Comment"
              className="dark:text-white text-black border border-blue-500 p-2 rounded-md text-xs w-full ransition ease-in-out hover:-translate-x-1 hover:scale-105 focus:-translate-y-1 focus:scale-105 duration-75"
            />

            <input
              type="submit"
              className="border border-sky-700 active:bg-slate-300 rounded-xl p-1 text-xl cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default SingleBlog;
