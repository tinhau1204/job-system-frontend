import { Stack } from "@mantine/core";
import Navbar from "../Navbar";
import styles from "./styles.module.scss";

export default function Layout({ children }) {
    return (
        <Stack className={styles.layout}>
            <Navbar />
            <main className={styles.main}>{children}</main>
        </Stack>
    );
}
