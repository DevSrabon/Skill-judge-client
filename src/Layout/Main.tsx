import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponent/Footer';
import Nav from '../SharedComponent/Nav';

const Main = () => {
	return (
		<div>
			<div className='pb-[4.5rem]'>
				<Nav></Nav>
			</div>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;