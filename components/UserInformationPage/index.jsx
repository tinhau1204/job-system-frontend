import AboutMe from "./shards/AboutMe";
import BodySection from "./shards/BodySection";
import PersonalSection from "./shards/PersonalSection";
import styles from "./styles.module.scss";
export default function UserInformationPage() {
    return (
        <div className={styles.container}>
            <PersonalSection isLoading={false} />
            <BodySection />
        </div>
    );
}
