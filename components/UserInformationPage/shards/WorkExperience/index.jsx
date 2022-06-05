import { Divider, Stack, Title, Text, Button } from "@mantine/core";
import styles from "./styles.module.scss";
import * as fa from "react-icons/fa";

export default function WorkEperience() {
    return (
        <Stack className={styles.container}>
            <Title order={3}>WORK EXPERIENCE</Title>
            <Divider size="md" />
            <Text>
                77.9% of employers surveyed consider work experience to be a
                crucial data point in job applications. So be sure to fill up
                this section to raise your chances of securing an interview!
            </Text>
            <div className={styles.btnContainer}>
                <Button
                    leftIcon={<fa.FaPlusCircle />}
                    variant="subtle"
                    sx={() => ({
                        color: "rgb(1, 126, 183)",
                    })}
                >
                    ADD WORK EXPERIENCE
                </Button>
            </div>
        </Stack>
    );
}
