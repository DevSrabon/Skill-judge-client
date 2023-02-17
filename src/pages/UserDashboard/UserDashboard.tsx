import { Link, Outlet } from 'react-router-dom';
import { useUser } from '../../contexts/UserProvider';

const UserDashboard = () => {
    const {dbUser}:any=useUser()

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
						{dbUser?.role !== "admin" ? (
							<>

							</>
						) : (
							<>
								<li className="border rounded-md">
									<Link
										className="bg-emerald-500 focus:bg-black focus:text-white"
										to={"/userDashboard/quiz"}>
										Quiz
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		);
};

export default UserDashboard;