import { Tabs } from "@mantine/core";
import Job from "./shards/Job";
import styles from "./styles.module.scss";
import useSWR from "swr";
import { getAllStudentByJob } from "@/lib/api/job";
import { useSelector } from "react-redux";
import { getUser } from "@/redux/user";

export default function ApplicationsPage() {
    const user = useSelector(getUser);

    const { data } = useSWR(`/job/student/${user.id}`, getAllStudentByJob);

    const loading = !data;

    return (
        <div className={styles.container}>
            <div className={styles.boxContent}>
                <Tabs
                    orientation="vertical"
                    styles={{
                        tabLabel: { fontWeight: 700 },
                        tabsListWrapper: { width: 150 },
                        body: { width: "100%", margin: "10px" },
                        tabControl: { marginTop: 10, marginBottom: 10 },
                    }}
                >
                    <Tabs.Tab label="ALL">
                        <Job data={data} loading={loading} />
                    </Tabs.Tab>
                    <Tabs.Tab label="WAITING">
                        {
                            <Job
                                data={data?.filter(
                                    (job) => job.status === "Waiting",
                                )}
                                loading={loading}
                            />
                        }
                    </Tabs.Tab>
                    <Tabs.Tab label="PENDING">
                        {
                            <Job
                                data={data?.filter(
                                    (job) => job.status === "Pending",
                                )}
                                loading={loading}
                            />
                        }
                    </Tabs.Tab>
                    <Tabs.Tab label="ACCEPTED">
                        {
                            <Job
                                data={data?.filter(
                                    (job) => job.status === "Accept",
                                )}
                                loading={loading}
                            />
                        }
                    </Tabs.Tab>
                    <Tabs.Tab label="REFUSED">
                        {
                            <Job
                                data={data?.filter(
                                    (job) => job.status === "Refused",
                                )}
                                loading={loading}
                            />
                        }
                    </Tabs.Tab>
                </Tabs>
            </div>
        </div>
    );
}
