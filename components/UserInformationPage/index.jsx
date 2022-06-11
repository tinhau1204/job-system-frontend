import BodySection from "./shards/BodySection";
import PersonalSection from "./shards/PersonalSection";
import styles from "./styles.module.scss";
import Error from "next/error";
import { useSelector } from "react-redux";
import { getUser } from "@/redux/user";

export default function UserInformationPage() {
    const user = useSelector(getUser);

    return (
        <>
            {!user.id ? (
                <Error />
            ) : (
                <div className={styles.container}>
                    <PersonalSection isLoading={false} />
                    <BodySection />
                </div>
            )}
        </>
    );
}
