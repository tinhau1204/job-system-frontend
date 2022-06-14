import styles from "./style.module.scss";
import { Text, Paper, Stack, Group, Button } from "@mantine/core";
import FormAddJob from "./shards/FormAddJob";
export default function AddJobsPage() {
    return (
        <>
            <Paper shadow="md" p="md" withBorder className={styles.header}>
                <Stack>
                    <Group position="apart">
                        <Text weight="bold" size="xl">
                            {" "}
                            Add Job{" "}
                        </Text>
                        <Button variant="outline" uppercase>
                            Submit job information
                        </Button>
                    </Group>
                    <FormAddJob></FormAddJob>
                </Stack>
            </Paper>
        </>
    );
}
