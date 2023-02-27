import { Link } from "react-router-dom";

type SideBarItemPropType = {
    link: string;
    name: string;
    children: React.ReactNode;
};
const SideBarItem = (props: SideBarItemPropType) => {
    const { link, name, children } = props;
    return (
        <li className="group transition-all text-white">
            <Link
                to={link}
                className={`flex items-center p-2 text-base font-normal text-gray-500 rounded-lg focus:text-white focus:bg-gray-700 hover:text-white hover:bg-gray-700`}
            >
                {children}
                <span className="ml-3">{name}</span>
            </Link>
           
        </li>
    );
};

export default SideBarItem;
