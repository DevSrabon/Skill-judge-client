import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';

const Nav = () => {
	const { user, signOutUser }: any = useAuth();
	const [isOpen, setIsOpen] = useState<Boolean>(false);

	const handleLogout = () => {
		signOutUser()
			.then(() => {

			})
			.catch(err => {
				console.log(err);
			})
	}

	const navItems = <>
		<li><Link to={'/'}>Home</Link></li>
		<li><Link to={'qna'}>QnA</Link></li>
		<li><Link to={''}>Categories</Link></li>
		<li><Link to={''}>Quiz</Link></li>
		<li><Link to={''}>About Us</Link></li>
		{
			user?.uid ? <>
				<li><Link onClick={handleLogout} to="">Logout</Link></li>
				<li><Link to="my-profile">
					{
						user.photoURL ? <img className='w-10 rounded-full' src={user.photoURL} alt='user' />
							:
							<FaUserAlt className='w-10 rounded-full' />
					}

				</Link></li>
			</>
				:
				<li><Link to={'/login'}>Login</Link></li>
		}
	</>

	return (
		<nav className="fixed bg-[#faf7f5] bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-md  z-50 w-full px-6 py-3 flex justify-between items-center right-0 top-0 mb-20">
			<div className="navbar-start flex">
				<div className="dropdown">
					<label
						onClick={() => setIsOpen(!isOpen)}
						tabIndex={0}
						className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block w-5 h-5 stroke-current">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</label>
					{isOpen && (
						<ul
							onClick={() => setIsOpen(!isOpen)}
							tabIndex={1}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							{navItems}
						</ul>
					)}
				</div>
				<Link
					to="/"
					className="btn btn-ghost normal-case text-slate-400 text-3xl">
					Skill Judge
				</Link>
			</div>
			<div className="navbar-end hidden  font-bold lg:flex">
				<ul className="menu menu-horizontal p-0 text-slate-400">
					{navItems}
				</ul>
			</div>
		</nav>
	);
};

export default Nav;