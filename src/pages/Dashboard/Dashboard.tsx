import { Link, Outlet } from "react-router-dom";
import { useUser } from "../../contexts/UserProvider";
import { FaUserFriends } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { BsFillCursorFill } from "react-icons/bs";

const Dashboard = () => {
  const {dbUser}:any = useUser() 
  console.log(dbUser)

    return (
			<div>
				<h1 className="text-5xl">Dashboard</h1>
			</div>
		)
}

export default Dashboard;