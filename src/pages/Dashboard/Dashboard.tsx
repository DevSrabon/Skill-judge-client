import { Link, Outlet } from "react-router-dom";
import { useUser } from "../../contexts/UserProvider";

const Dashboard = () => {
  const {dbUser}:any = useUser()
    return (
			<div className="drawer drawer-mobile">
				<input
					id="dashboard-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content">
					<Outlet />
				</div>
				<div className="drawer-side">
					<label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
					<ul className="menu gap-y-2 font-bold p-4 w-80">
						{dbUser?.role === "admin" ? (
							<>
								<li className="border rounded-md">
									<Link
										className="bg-emerald-500 focus:bg-black focus:text-white"
										to={"/dashboard/all-users"}>
										All Users
									</Link>
								</li>
								<li className="border rounded-md">
									<Link
										className="bg-emerald-500 focus:bg-black focus:text-white"
										to={"/dashboard/paiduser"}>
										Paid User
									</Link>
								</li>
								<li className="border rounded-md">
									<Link
										className="bg-emerald-500 focus:bg-black focus:text-white"
										to={"/dashboard/quiz"}>
										All Quiz
									</Link>
								</li>
								<li className="border rounded-md">
									<Link
										className="bg-emerald-500 focus:bg-black focus:text-white"
										to={"/dashboard/allsubmission"}>
										All Submission
									</Link>
								</li>
							</>
						) : (
							<>
							</>
						)}
					</ul>
				</div>
			</div>
		);
}

export default Dashboard;