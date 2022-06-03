import { Button, Divider, Group, Stack, Text, Title } from "@mantine/core";
import * as ri from "react-icons/ri";
import * as md from "react-icons/md";
import styles from "./styles.module.scss";
import Header from "../Header";

export default function Resume() {
    return (
        <Stack className={styles.container}>
            <Header title="resume" />
            <Divider size="md" />
            <Group>
                <md.MdPictureAsPdf color="#85b6ce" size={20} />
                <Text
                    target="_blank"
                    component="a"
                    variant="link"
                    href="https://s3-ap-southeast-1.amazonaws.com/glints-dashboard/resume/6a38bac73623f2e07dc1b9b3d284f602.pdf"
                >
                    3626d09a6e2b3ce3dd1e3655e4b5a4dd.pdf
                </Text>
            </Group>
            <div className={styles.body}></div>
        </Stack>
    );
}
