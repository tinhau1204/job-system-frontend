import { Stack, Text } from "@mantine/core";
import styles from "./styles.module.scss";

const Statistic = ({ semiLabel, number, label }) => {
    return (
        <Stack style={{ gap: 0 }}>
            <Text>{semiLabel}</Text>
            <Text className={styles.number} color="red">
                {number}
            </Text>
            <Text className={styles.label}>{label}</Text>
        </Stack>
    );
};

export default Statistic;
