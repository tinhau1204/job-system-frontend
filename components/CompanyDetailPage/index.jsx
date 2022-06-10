import Content from "./shards/Content";
import Header from "./shards/Header";
import styles from "./styles.module.scss";

export default function CompanyDetailPage() {
    return (
        <>
            <div className={styles.container}>
                <Header></Header>
                <Content />
            </div>
        </>
    );
}
