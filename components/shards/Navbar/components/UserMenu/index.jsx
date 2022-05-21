import User from "../User";
import { Menu } from "@mantine/core";
import { login } from "@/redux/user";
import { FaCogs, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

export default function UserMenu() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(login({ id: undefined, role: undefined }));
    };

    return (
        <Menu control={<User />} placement="end">
            <Menu.Item icon={<FaCogs />}>Settings</Menu.Item>
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
