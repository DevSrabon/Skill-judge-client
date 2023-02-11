import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponent/Footer';
import Nav from '../SharedComponent/Nav';
import { useAuth } from '../contexts/AuthProvider';
import Spinner from '../SharedComponent/Spinner/Spinner';



const Main = () => {
		const { loading }: any = useAuth();
		if (loading) {
			return <Spinner/>;
		}
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