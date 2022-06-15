import styles from "./style.module.scss";
import { Text, Paper, Stack } from "@mantine/core";
import ApplicantComparison from "./shards/ApplicantComparison";
import { useRouter } from "next/router";
import useSWR from "swr";
import { getAllStudentByJob } from "@/lib/api/job";

export default function JobAppliedList() {
    const router = useRouter();
    const { id } = router.query;
    const { data } = useSWR(`/job/${id}`, getAllStudentByJob);

    if (data) {
        console.log(data);
    }

    return (
        <div className={styles.container}>
            <Paper mt={20}>
                <Stack>
                    <Text weight="bold" size="xl">
                        Applicant List
                    </Text>

                    {data && <ApplicantComparison data={data} />}
                </Stack>
            </Paper>
        </div>
    );
}
