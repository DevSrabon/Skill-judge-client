import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/shared/Dashboard/DashboardNavbar/DashboardNavbar";
import DashboardSideBar from "../components/shared/Dashboard/DashboardSideBar/DashboardSideBar";
import DashboardMobileSideBar from './../components/shared/Dashboard/DashboardSideBar/DashboardMobileSideBar';

const DashboardLayout = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    console.log(openSideBar);
    return (
        <>
            <DashboardNavbar
                setOpenSideBar={setOpenSideBar}
                openSideBar={openSideBar}
            />
            <DashboardSideBar />
            <DashboardMobileSideBar  openSideBar={openSideBar} />
            <Outlet />
           
        </>
    );
};

export default DashboardLayout;
