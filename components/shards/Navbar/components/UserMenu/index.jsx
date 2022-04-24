import User from "../User";
import { Menu } from "@mantine/core";
import { FaCogs, FaSignOutAlt } from "react-icons/fa";

export default function UserMenu() {
    return (
        <Menu control={<User />} placement="end">
            <Menu.Item icon={<FaCogs />}>Settings</Menu.Item>
            <Menu.Item color="red" icon={<FaSignOutAlt />}>
                Logout
            </Menu.Item>
        </Menu>
    );
}
