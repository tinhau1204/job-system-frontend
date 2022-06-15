import User from "../User";
import { Menu } from "@mantine/core";
import { FaCogs, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/router";
import { getUser, logout } from "@/redux/user";
import { BiPaperclip, BiPlus } from "react-icons/bi";

export default function UserMenu() {
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(logout());
        router.push("/");
    };

    const handleToInformation = () => {
        router.push("/userInformation");
    };

    const handleToApplication = () => {
        router.push("/applications");
    };

    const handleToAddJob = () => {
        router.push("/addJob");
    };

    return (
        <Menu control={<User />} placement="end">
            {user.role == "Student" ? (
                <>
                    <Menu.Item icon={<FaCogs />} onClick={handleToInformation}>
                        Profile
                    </Menu.Item>
                    <Menu.Item
                        icon={<BiPaperclip />}
                        onClick={handleToApplication}
                    >
                        Application
                    </Menu.Item>
                </>
            ) : (
                <Menu.Item icon={<BiPlus />} onClick={handleToAddJob}>
                    Add Job
                </Menu.Item>
            )}

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
