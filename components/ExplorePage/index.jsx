import Header from "./shards/Header";
import BussinessBox from "./shards/BusinessBox";
import styles from "./styles.module.scss";
import Filter from "./shards/Filter";

export default function ExplorePage() {
    return (
        <>
            <div className={styles.container}>
                <Header />
                <div className={styles.body}>
                    <div className={styles.filter}>
                        <Filter />
                    </div>
                    <div className={styles.business}>
                        {[...Array(10)].map((_, index) => (
                            <BussinessBox key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
