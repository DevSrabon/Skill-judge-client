import React from 'react';
import { Link } from 'react-router-dom';
export { };

const NotFound = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-2xl text-center'>Sorry! <br /> The requested URL was not found on this server. <br /> Error 404</h1>
            <img className='mx-auto' src="https://i.ibb.co/71f2kXc/notFound.png" alt="sad for not found" />
            <h3 className='text-center text-2xl font-bold'>Go to <Link to={'/'}><span className='text-blue-700 underline'>Home</span></Link></h3>
        </div>
    );
};

export default NotFound;