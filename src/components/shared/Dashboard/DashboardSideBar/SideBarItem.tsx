import { NavLink } from "react-router-dom";

type SideBarItemPropType = {
    link: string;
    name: string;
    children: React.ReactNode;
};
const SideBarItem = (props: SideBarItemPropType) => {
    const { link, name, children } = props;
    return (
        <li>
            <NavLink
                to={link}
                className={(navData) =>
                    navData.isActive
                        ? "flex items-center p-2 text-base font-normal text-white bg-gray-700 rounded-lg"
                        : `flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  hover:text-white hover:bg-gray-700`
                }
            >
                {children}
                <span className="ml-3">{name}</span>
            </NavLink>
        </li>
    );
};

export default SideBarItem;
