import NavbarMenu from "./components/NavbarMenu";
import ThemeSwitcher from "@shards/ThemeSwitcher";
import Image from "next/image";
import { Group } from "@mantine/core";
import { MdNotifications } from "react-icons/md";
import UserMenu from "./components/UserMenu";
import styles from "./styles.module.scss";

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
                <NavbarMenu />
            </Group>
            <Group>
                <ThemeSwitcher />
                <MdNotifications size={20} />
                <UserMenu />
            </Group>
        </Group>
    );
}
