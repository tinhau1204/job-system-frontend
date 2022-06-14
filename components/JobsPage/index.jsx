import Header from "./shards/Header";
import BussinessBox from "./shards/BusinessBox";
import styles from "./styles.module.scss";
import Filter from "./shards/Filter";
import { useSelector } from "react-redux";
import { getUser } from "@/redux/user";
import { getAllJob } from "@/lib/api/job";
import useSWR from "swr";
import { Skeleton } from "@mantine/core";

export default function JobsPage() {
    let user = useSelector(getUser);
    const { data } = useSWR("Student" ? "/job" : `/job/${user.id}`, getAllJob);

    return (
        <>
            <div className={styles.container}>
                <Header />
                <div className={styles.body}>
                    <div className={styles.filter}>
                        <Filter />
                    </div>
                    {!data ? (
                        <div className={styles.business}>
                            {[...Array(10)].map((_, index) => (
                                <Skeleton key={index} visible>
                                    {" "}
                                    <BussinessBox />
                                </Skeleton>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.business}>
                            {data.map((job, index) => (
                                <BussinessBox key={index} {...job} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
