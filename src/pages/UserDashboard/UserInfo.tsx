import {AiOutlineUser} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import {HiAcademicCap, HiBriefcase, HiLocationMarker} from "react-icons/hi"; 
import { useUser } from "../../contexts/UserProvider";

const UserInfo = () => { 

    const {dbUser}: any = useUser()
    console.log(dbUser)

    const handleEditInfo = () => {

    }

    return (
        <section className="w-96 md:w-3/4 lg:w-1/2 mx-auto mt-3 border rounded-md">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">My Profile</h1>
            <div className="divider"></div>
            <div>
              <div className="avatar flex flex-col items-center">
                <div className="w-12 md:w-14 lg:w-24 rounded-full">
                  <img src={"https://i.ibb.co/gT62BnG/318630484-903583857716019-4250342091159913037-n.jpg"} alt="" />
                </div>
                <p className="flex flex-row items-center"><HiBriefcase className="mr-2"/> Front-end Developer</p>
                <p className="flex flex-row items-center"><HiLocationMarker className="mr-2" /> Front-end Developer</p>
              </div>
              <div className="flex justify-center mt-2">
                <button onClick={handleEditInfo} className="bg-emerald-400 hover:bg-emerald-700 hover:text-white px-5 py-2 rounded font-semibold">Edit Info</button>
              </div>
              <div className="flex flex-col gap-y-4 px-5 py-4">
                <h1 className="flex items-center text-sm lg:text-xl font-semibold"><AiOutlineUser className="mr-2"/> Full Name: Afzal Sharif</h1>
                <h1 className="flex items-center text-sm lg:text-xl font-semibold"><MdEmail className="mr-2"/> Email: khan@gmail.com</h1> 
                <h1 className="flex items-center text-sm lg:text-xl font-semibold"><HiAcademicCap className="mr-2"/> Education: Bechelor of Computer Scince</h1> 
              </div>
            </div> 
        </section>
    );
};
 
export default UserInfo;