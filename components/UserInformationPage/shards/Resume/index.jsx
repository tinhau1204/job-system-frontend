import {
    Modal,
    Button,
    Title,
    Divider,
    Group,
    Stack,
    Text,
} from "@mantine/core";
import * as md from "react-icons/md";
import * as ri from "react-icons/ri";
import * as fa from "react-icons/fa";
import styles from "./styles.module.scss";
import Header from "../Header";
import { useState } from "react";

export default function Resume() {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Modal
                opened={opened}
                size={500}
                onClose={() => setOpened(false)}
                title={<Title order={3}>RESUME</Title>}
            >
                <Divider />
                <form className={styles.formBody}>
                    <Text>
                        77.4% of employers consider resumes to be very important
                        in job applications.
                    </Text>
                    <div className={styles.content}>
                        <Text> 3626d09a6e2b3ce3dd1e3655e4b5a4dd.pdf</Text>
                        <Group>
                            <Button
                                leftIcon={<ri.RiPencilFill size={14} />}
                                variant="subtle"
                            >
                                EDIT
                            </Button>
                            <Button
                                variant="subtle"
                                color="red"
                                size="md"
                                leftIcon={<fa.FaTrashAlt />}
                            >
                                DELETE
                            </Button>
                        </Group>
                    </div>
                    <Text color="grey">
                        Protip! Please upload your resume in PDF format (max
                        5MB) to get a better first impression and boost your
                        chances as employers prefer that!
                    </Text>
                    <div className={styles.btnContainer}>
                        <Button type="submit">SAVE</Button>
                    </div>
                </form>
            </Modal>
            <Stack className={styles.container}>
                <Header title="resume" onEditClick={() => setOpened(true)} />
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
        </>
    );
}
