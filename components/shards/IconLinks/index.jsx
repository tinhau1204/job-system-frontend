import { Group, Text } from "@mantine/core";
import styles from "./styles.module.scss";

export default function IconLinks({ icon, title, link }) {
    return (
        <Group>
            {icon}
            <Text
                target="_blank"
                component="a"
                className={styles.text}
                variant="link"
                inline={true}
                lineClamp={2}
                href={link}
            >
                {title}
            </Text>
        </Group>
    );
}
