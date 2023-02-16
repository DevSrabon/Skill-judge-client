import { Link, Outlet } from "react-router-dom"; 
import { CgProfile } from "react-icons/cg"; 
import { MdQuiz } from "react-icons/md";
import { HiAcademicCap, HiLocationMarker } from "react-icons/hi";  
import { HiLightBulb } from "react-icons/hi"; 


const UserDashboard = () => {  
       

    return (
        <div className="drawer drawer-mobile">
         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content flex flex-col items-center">
           <Outlet/>  
           <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> 
         </div> 
         <div className="drawer-side"> 
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
           <ul className="menu flex flex-col gap-y-3 p-4 w-80 bg-base-100 font-semibold border">
             <h1 className="text-4xl text-center font-semibold mb-2">Dashboard</h1>  
             <li><Link className="bg-emerald-400 rounded focus:bg-black focus:text-white" to="/userDashboard"><CgProfile/>My Profile</Link></li>
             <li><Link className="bg-emerald-400 rounded focus:bg-black focus:text-white" to=""><HiLightBulb/>Skills</Link></li>
             <li><Link className="bg-emerald-400 rounded focus:bg-black focus:text-white" to=""><MdQuiz/>Quiz Marks</Link></li>
             <li><Link className="bg-emerald-400 rounded focus:bg-black focus:text-white" to=""><HiLocationMarker/>Address</Link></li>
             <li><Link className="bg-emerald-400 rounded focus:bg-black focus:text-white" to=""><HiAcademicCap/>Education</Link></li>
           </ul> 
         </div>
        </div>
    )   
}

export default UserDashboard;