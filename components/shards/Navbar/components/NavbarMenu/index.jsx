import Link from "next/link";
import { Container, Group, Text } from "@mantine/core";
import navbarData from "./data";
import styles from "./styles.module.scss";

export default function NavbarMenu() {
    return (
        <Group>
            {navbarData.map((item, index) => (
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
