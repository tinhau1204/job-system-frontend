import Menu from "./components/Menu";
import ThemeSwitcher from "@/shards/ThemeSwitcher";
import Image from "next/image";
import { Group } from "@mantine/core";
import styles from "./styles.module.scss";

// import { MdNotifications } from "react-icons/md";
// import UserMenu from "./components/UserMenu";

export default function Navbar() {
    return (
        <Group position="apart" className={styles.navbar}>
            <Group>
                <Image
                    className={styles.image}
                    alt="Jobable Logo"
                    width={80}
                    height={40}
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

                {/* <UserMenu /> */}
                {/* <MdNotifications size={20} /> */}
                <Menu
                    data={[
                        { title: "Login", path: "/login" },
                        { title: "Register", path: "/register" },
                    ]}
                />
            </Group>
        </Group>
    );
}
