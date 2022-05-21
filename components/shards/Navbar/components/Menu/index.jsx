import Link from "next/link";
import { Container, Group, Text } from "@mantine/core";
import styles from "./styles.module.scss";

export default function Menu({ data }) {
    return (
        <Group>
            {data.map((item, index) => (
                <Container key={index}>
                    <Link href={item.path} passHref>
                        <Text
                            sx={(theme) => ({
                                "&:hover:after": {
                                    backgroundColor:
                                        theme.colorScheme == "dark"
                                            ? "#fff"
                                            : theme.colors.dark,
                                },
                            })}
                            className={styles.text}
                            weight={600}
                        >
                            {item.title}
                        </Text>
                    </Link>
                </Container>
            ))}
        </Group>
    );
}
