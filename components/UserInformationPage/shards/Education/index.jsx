import {
    Button,
    Stack,
    Timeline,
    Title,
    Group,
    Divider,
    TimelineItem,
    Text,
    Skeleton,
} from "@mantine/core";
import * as fa from "react-icons/fa";
import styles from "./styles.module.scss";
import * as ri from "react-icons/ri";

export default function Education() {
    return (
        <Stack className={styles.container}>
            <Group position="apart" className={styles.header}>
                <Title order={3}>EDUCATION</Title>
                <Button
                    leftIcon={<fa.FaPlusCircle />}
                    variant="subtle"
                    sx={() => ({
                        color: "rgb(1, 126, 183)",
                    })}
                >
                    Add EDUCATION
                </Button>
            </Group>
            <Divider size="md" />
            <div className={styles.body}>
                <Timeline active={2} bulletSize={20} lineWidth={4}>
                    <TimelineItem
                        className={styles.timeline}
                        lineActive={false}
                        title={
                            <Skeleton
                                visible={false}
                                className={styles.timeLineTitle}
                            >
                                <Title order={4}>
                                    HCMC University of Technology and Education
                                    (HCMUTE)
                                </Title>
                            </Skeleton>
                        }
                    >
                        <Text size="md" weight={400}>
                            Software Engineering
                        </Text>
                        <Text size="md" color="dimmed">
                            August 2019 - Present (3 years)
                        </Text>
                        <Button
                            variant="subtle"
                            size="md"
                            leftIcon={<ri.RiPencilFill />}
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
                    </TimelineItem>
                    <TimelineItem title={<Text>Comming</Text>}></TimelineItem>
                </Timeline>
            </div>
        </Stack>
    );
}
