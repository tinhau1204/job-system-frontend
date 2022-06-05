import {
    Modal,
    Button,
    Text,
    Stack,
    Title,
    Divider,
    Textarea,
} from "@mantine/core";
import styles from "./styles.module.scss";
import Header from "../Header";
import { useState } from "react";

export default function AboutMe() {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Modal
                size={500}
                opened={opened}
                onClose={() => setOpened(false)}
                title={<Title order={3}>ABOUT ME</Title>}
            >
                <Divider />
                <form className={styles.form}>
                    <Text>
                        Telling them about yourself will help them understand
                        you.
                    </Text>
                    <Textarea
                        label="Add an introduction about yourself"
                        minRows={5}
                    />
                    <div className={styles.btn}>
                        <Button type="submit">SAVE</Button>
                    </div>
                </form>
            </Modal>
            <Stack className={styles.container}>
                <Header title="about me" onEditClick={() => setOpened(true)} />
                <Divider size="md" />
                <Text>
                    Love to learn and work with every modern languages that has
                    beautiful syntax in my eyes. Especially, Rust and Swift.
                </Text>
            </Stack>
        </>
    );
}
