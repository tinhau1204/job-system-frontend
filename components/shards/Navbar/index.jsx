import Menu from "./components/Menu";
import ThemeSwitcher from "@/shards/ThemeSwitcher";
import UserMenu from "./components/UserMenu";
import Image from "next/image";
import { MdNotifications } from "react-icons/md";
import { Group } from "@mantine/core";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { getUser } from "@/redux/user";

export default function Navbar() {
    const user = useSelector(getUser);

    return (
        <Group position="apart" className={styles.navbar}>
            <Group>
                <Image
                    className={styles.image}
                    alt="Jobable Logo"
                    width={60}
                    height={30}
                    src="https://talkbitz.com/wp-content/uploads/2020/04/Best-Free-Online-Logo-Maker-Sites.png"
                />
                <Menu
                    data={[
                        { title: "Home", path: "/" },
                        { title: "Jobs", path: "/jobs" },
                        { title: "Companies", path: "/companies" },
                    ]}
                />
            </Group>
            <Group>
                <ThemeSwitcher />
                {user.id ? (
                    <>
                        <UserMenu />
                        <MdNotifications size={20} />
                    </>
                ) : (
                    <Menu
                        data={[
                            { title: "Login", path: "/login" },
                            { title: "Register", path: "/register" },
                        ]}
                    />
                )}
            </Group>
        </Group>
    );
}
