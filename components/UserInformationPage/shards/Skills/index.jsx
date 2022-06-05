import { Badge, Divider, Stack } from "@mantine/core";
import Header from "../Header";
import styles from "./styles.module.scss";

export default function Skills({ skillList }) {
    return (
        <Stack className={styles.container}>
            <Header title="Skills" />
            <Divider size="md" />
            <div className={styles.skilllistContainer}>
                {/*User Map below this when Apply API*/}
                <Badge
                    size="lg"
                    className={styles.badge}
                    variant="outline"
                    styles={(theme) => ({
                        outline:
                            theme.colorScheme === "dark"
                                ? { color: "gray" }
                                : { color: "black" },
                        inner:
                            theme.colorScheme === "dark"
                                ? { color: "gray" }
                                : { color: "black" },
                        gradient: { color: "red" },
                    })}
                >
                    Swift (Programming Language)
                </Badge>
                <Badge
                    size="lg"
                    variant="outline"
                    className={styles.badge}
                    styles={(theme) => ({
                        outline:
                            theme.colorScheme === "dark"
                                ? { color: "gray" }
                                : { color: "black" },
                        inner:
                            theme.colorScheme === "dark"
                                ? { color: "gray" }
                                : { color: "black" },
                        gradient: { color: "red" },
                    })}
                >
                    JavaScript
                </Badge>
            </div>
        </Stack>
    );
}
