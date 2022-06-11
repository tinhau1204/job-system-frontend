import User from "../User";
import { Menu } from "@mantine/core";
import { FaCogs, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { useRouter } from "next/router";
import { logout } from "@/redux/user";

export default function UserMenu() {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(logout());
        router.push("/");
    };

    const handleOnClick = () => {
        router.push("/userInformation");
    };

    return (
        <Menu control={<User />} placement="end">
            <Menu.Item icon={<FaCogs />} onClick={handleOnClick}>
                Profile
            </Menu.Item>
            <Menu.Item
                color="red"
                onClick={handleLogout}
                icon={<FaSignOutAlt />}
            >
                Logout
            </Menu.Item>
        </Menu>
    );
}
