import React from "react";
import { useUser } from "../../contexts/UserProvider";

const AddBlog = () => {
  const { dbUser }: any = useUser();
  console.log(dbUser);
  const publishBlog = (e) => {
    e?.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/blog`, {
      method: "POST",
      body: JSON.stringify({
        authorPicture: dbUser.photo,
        authorName: dbUser.name,
        authorEmail: dbUser.email,
        //    blogImage: dbUser.photo,
        blogTitle: e.target.blogTitle.value,
        blogAbout: e.target.blogAbout.value,
        category: "Tech",
        timePost: new Date(),
        like: 0,
        comment: [],
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <form onSubmit={publishBlog} className="mx-10">
      <div className="flex gap-5 w-full">
        <div className="flex flex-col w-full">
          <label className="leading-loose">Your Name</label>
          <input
            defaultValue={dbUser.name}
            readOnly
            name="name"
            type="text"
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
            placeholder="Your Name"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="leading-loose">Your Email</label>
          <input
            defaultValue={dbUser.email}
            readOnly
            name="email"
            type="text"
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
            placeholder="Your Email"
          />
        </div>
      </div>
      <div>
        <textarea
          name="blogTitle"
          className="w-full p-3 rounded-lg mt-5 border-black outline-blue-900 bg-gray-100"
          placeholder="Blog Tile"
        ></textarea>
      </div>
      <div>
        <textarea
          name="blogAbout"
          className="w-full p-3 rounded-lg mt-5 border-black outline-blue-900 bg-gray-100"
          placeholder="Blog Text"
        ></textarea>
      </div>
      <input
        type="submit"
        className="border border-sky-700 active:bg-slate-300 rounded-xl p-1 text-xl cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75"
      />
    </form>
  );
};

export default AddBlog;
