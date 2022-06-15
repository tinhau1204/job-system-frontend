import { Text, Paper, Stack, Group, Button } from "@mantine/core";
import FormAddJob from "./shards/FormAddJob";
import styles from "./style.module.scss";

export default function AddJobsPage() {
    return (
        <Paper
            shadow="md"
            p="xl"
            m="xl"
            withBorder
            className={styles.fullHeight}
        >
            <Stack className={styles.fullHeight}>
                <Group position="apart">
                    <Text weight="bold" size="xl">
                        Add Job
                    </Text>
                    <Button
                        variant="outline"
                        uppercase
                        type="submit"
                        form="add-job-form"
                    >
                        Submit job information
                    </Button>
                </Group>
                <FormAddJob />
            </Stack>
        </Paper>
    );
}
