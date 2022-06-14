import { Tabs } from "@mantine/core";
import Company from "./shards/Company";
import styles from "./styles.module.scss";

export default function ApplicationsPage() {
    return (
        <>
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
                            <Company />
                        </Tabs.Tab>
                        <Tabs.Tab label="WAITING"></Tabs.Tab>
                        <Tabs.Tab label="PENDING"></Tabs.Tab>
                        <Tabs.Tab label="ACCEPTED"></Tabs.Tab>
                        <Tabs.Tab label="REFUSED"></Tabs.Tab>
                    </Tabs>
                </div>
            </div>
        </>
    );
}
