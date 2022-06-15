import styles from "./style.module.scss";
import { Text, Paper, Group, Grid, Stack, Space } from "@mantine/core";
import { AiOutlineRollback } from "react-icons/ai";
import ApplicantList from "./shards/ApplicantList";
import ApplicantComparison from "./shards/ApplicantComparison";

export default function JobAppliedList() {
    return (
        <div className={styles.container}>
            <Group spacing="xs">
                <AiOutlineRollback className={styles.iconsBack} />
                <Text variant="link" component="a" href="" size="lg">
                    {" "}
                    Back{" "}
                </Text>
            </Group>

            <Paper>
                <Grid>
                    <Grid.Col md={12} lg={3}>
                        <Stack>
                            <Text weight="bold" size="xl">
                                Applicant List
                            </Text>
                            {[...Array(4)].map((_, index) => (
                                <ApplicantList key={index} />
                            ))}
                        </Stack>
                    </Grid.Col>
                    <Grid.Col md={12} lg={9}>
                        <Stack>
                            <Text weight="bold" size="xl">
                                Applicant Comparison
                            </Text>

                            <ApplicantComparison />
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Paper>
        </div>
    );
}
