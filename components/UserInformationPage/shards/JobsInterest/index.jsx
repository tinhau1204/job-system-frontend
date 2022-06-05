import { Group, Stack, Title, Button, Divider, Text } from "@mantine/core";
import styles from "./styles.module.scss";
import * as ri from "react-icons/ri";
import * as ti from "react-icons/ti";
import Header from "../Header";

export default function JobsInterest() {
    return (
        <Stack className={styles.container}>
            <Header title="JOB INTERESTS & PREFERENCES" />
            <Divider size="md" />
            <div className={styles.body}>
                <div className={styles.fieldOfInterest}>
                    <Text weight={700} className={styles.title}>
                        Fields of Interest
                    </Text>
                    <Stack spacing="xs">
                        <Text>Software Engineering</Text>
                        {/* Use Map  below this when apply API */}

                        <div className={styles.fieldItem}>
                            <Group space="xs" className={styles.item}>
                                <ti.TiTick />
                                <Text>Backend Developer</Text>
                            </Group>

                            <Group className={styles.item}>
                                <ti.TiTick />
                                <Text>Frontend Developer</Text>
                            </Group>

                            <Group className={styles.item}>
                                <ti.TiTick />
                                <Text>Mobile Developer</Text>
                            </Group>

                            <Group className={styles.item}>
                                <ti.TiTick />
                                <Text>Web Developer</Text>
                            </Group>

                            <Group className={styles.item}>
                                <ti.TiTick />
                                <Text>IOS Developer</Text>
                            </Group>
                        </div>
                    </Stack>
                </div>

                <div className={styles.line}>
                    <Text className={styles.title} weight={700}>
                        Type of Oppotunity
                    </Text>
                    <Group className={styles.item}>
                        <ti.TiTick />
                        <Text>Full-Time</Text>
                    </Group>
                </div>

                <div className={styles.line}>
                    <Title order={5} className={styles.title}>
                        Salary Expectation
                    </Title>
                    <Text>VND 5,000,000</Text>
                </div>

                <div className={styles.line}>
                    <Title order={5} className={styles.title}>
                        Work Location Preference
                    </Title>
                    <Group className={styles.item}>
                        <ti.TiTick />
                        <Text>Ho Chi Minh City, VietNam</Text>
                    </Group>
                </div>
            </div>
        </Stack>
    );
}
