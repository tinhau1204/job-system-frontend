import { useRouter } from "next/router";
import Content from "./shards/Content";
import Header from "./shards/Header";
import styles from "./styles.module.scss";

export default function JobDetailPage() {
    const router = useRouter();
    const query = router.query;

    return (
        <div className={styles.container}>
            <Header {...query} />
            <Content description={query.description} />
        </div>
    );
}
