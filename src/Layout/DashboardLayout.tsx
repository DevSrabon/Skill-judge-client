import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/shared/Dashboard/DashboardNavbar/DashboardNavbar";
import DashboardSideBar from "../components/shared/Dashboard/DashboardSideBar/DashboardSideBar";
import { useAuth } from "../contexts/AuthProvider";
// import useAdmin from "../hooks/useAdmin";
import DashboardMobileSideBar from './../components/shared/Dashboard/DashboardSideBar/DashboardMobileSideBar';

const DashboardLayout = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
        const { user }: any = useAuth();
				// const [isAdmin] = useAdmin(user?.email);
    return (
			<>
				
					<header>
						{" "}
						<DashboardNavbar
							setOpenSideBar={setOpenSideBar}
							openSideBar={openSideBar}
						/>
						<DashboardSideBar />
						<DashboardMobileSideBar openSideBar={openSideBar} />
						
					</header>
					<main>
						<Outlet />
					</main>
			
			</>
		);
};

export default DashboardLayout;
