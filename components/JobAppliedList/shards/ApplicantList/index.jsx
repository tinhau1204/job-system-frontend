import styles from "./style.module.scss";
import { Card, Text, Group, Burger, Badge, Stack } from "@mantine/core";
import { AiOutlineMore } from "react-icons/ai";
import { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";

export default function ApplicantList({
    id,
    name,
    workingExperience,
    jobAppliedStatus,
}) {
    const [opened, setOpened] = useState(false);
    const title = opened ? "Close navigation" : "Open navigation";

    return (
        <Card className={styles.container}>
            <Stack spacing="sm">
                <Group position="apart">
                    <Text weight="bold" size="xl">
                        Karemm Leplant{name}
                    </Text>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        title={title}
                    />
                </Group>

                <Group>
                    <Badge color="cyan" size="lg" radius="xs">
                        Information Technology{workingExperience}
                    </Badge>
                </Group>

                <Group>
                    <GoPrimitiveDot className={styles.icons} />
                    <Text>PENDING{jobAppliedStatus}</Text>
                </Group>
            </Stack>
        </Card>
    );
}
