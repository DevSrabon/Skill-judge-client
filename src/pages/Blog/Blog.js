import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
      <div className="mx-10">
        <div className="card md:card-side rounded-md shadow-2xl bg-slate-200 mt-3">
          <figure>
            <img
              className="md:w-52 h-60 m-2 rounded-md"
              src="https://cdn.pixabay.com/photo/2023/02/03/15/27/bird-7765384_960_720.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body p-3 ml-4">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-3">
              <p>
                <span className="font-bold">Category : </span>
                tech
              </p>
              <p>
                <span className="font-bold">Author : </span>
                biplob
              </p>
              <p>
                <span className="font-bold"> Time Post : </span>
                1h ago
              </p>
              <p>
                <span className="font-bold"> Comment: </span>0
              </p>
              <p>
                <span className="font-bold">LIke : </span>  0
              </p>
              <Link to="/blog/d" className="bg-gray-400 text-center rounded-xl">
                Continuing Reading ...
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;