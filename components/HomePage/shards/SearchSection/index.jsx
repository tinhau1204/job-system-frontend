import { TextInput, Group, Button, Text } from "@mantine/core";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { useMantineColorScheme } from "@mantine/core";
import clx from "classnames";
import styles from "./styles.module.scss";

export default function SearchSection() {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    return (
        <div
            className={clx(styles.container, { [styles.containerDark]: dark })}
        >
            <Text mb={30} weight={500} color="dark" className={styles.caption}>
                Explore{" "}
                <Text
                    component="span"
                    weight="bolder"
                    className={styles.caption}
                >
                    5000+
                </Text>{" "}
                of new jobs posted monthly!
            </Text>
            <Group className={styles.buttonContainer}>
                <Group grow className={styles.inputContainer}>
                    <TextInput
                        icon={<AiOutlineSearch className={styles.icon} />}
                        variant="filled"
                        radius="md"
                        type="search"
                        placeholder="Search for job"
                    />
                    <TextInput
                        icon={<MdLocationOn className={styles.icon} />}
                        variant="filled"
                        type="search"
                        radius="md"
                        defaultValue="Vietnam"
                    />
                </Group>
                <Button className={styles.button} radius="md">
                    Search
                </Button>
            </Group>
        </div>
    );
}
