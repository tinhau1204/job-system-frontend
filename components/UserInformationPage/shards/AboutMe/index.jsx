import { Text, Group, Stack, Title, Button, Divider } from "@mantine/core";
import styles from "./styles.module.scss";
import * as ri from "react-icons/ri";
import Header from "../Header";

export default function AboutMe() {
    return (
        <Stack className={styles.container}>
            <Header title="about me" />
            <Divider size="md" />
            <Text>
                Love to learn and work with every modern languages that has
                beautiful syntax in my eyes. Especially, Rust and Swift.
            </Text>
        </Stack>
    );
}
