import React from "react";
import { FaUser } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
const SingleBlog = () => {
  const blogData: any = useLoaderData();
  const { user }: any = useAuth();
console.log(blogData[0]._id);
  console.log(user);

  const submitComment = (e) => {
    e?.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/blog/comment`, {
      method: "PATCH",
      body: JSON.stringify({
        id: blogData[0]._id,
        name: user.displayName,
        uid: user.uid,
        userImage: user.photoURL,
        comment: e.target.comment.value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="mx-5 md:px-20 dark:bg-slate-600">
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
                <h2 className="font-bold"> {data.timePost}</h2>
              </div>
            </div>
            <hr className="my-2"></hr>
            <p>{data.blogAbout}</p>
          </div>
          <div className="card shadow-md bg-slate-200 dark:bg-cyan-900 md:col-span-1">
            <div className="flex md:flex-col gap-6 md:gap-0 items-center">
              <img
                className="w-24 h-24 my-3 md:w-52 md:h-52 rounded-full ml-5 md:m-0 md:my-5"
                src={data.authorPicture}
                alt={data.authorName}
              />

              <div className="bg-slate-300 dark:bg-zinc-700 dark:text-white w-full rounded-md">
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
            <div className="shadow-md p-5 my-5">
              <div className="flex gap-5">
                <img
                  src={comment.userImage ? comment.userImage : <FaUser />}
                  alt=""
                  className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
                />
                <h2 className="text-sm font-semibold leading-none">
                  {comment.name}
                </h2>
              </div>
              <div>{comment.comment}</div>
            </div>
          ))}
        </div>
      )}

{
  user &&
        <form
        onSubmit={submitComment}
        className="flex justify-center gap-10 my-10"
      >
        <input
          type="text"
          name="comment"
          placeholder="Your Comment"
          className="border border-blue-500 p-2 rounded-md text-xs w-full ransition ease-in-out hover:-translate-y-1 hover:scale-110 focus:-translate-y-1 focus:scale-110 duration-75"
        />

        <input
          type="submit"
          className="border border-sky-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl p-1 text-xl cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75"
        />
      </form>
}
    </div>
  );
};

export default SingleBlog;
