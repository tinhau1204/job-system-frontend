import { Group, Stack, Text, Title, Image, Paper } from "@mantine/core";
import styles from "./styles.module.scss";
import { FaRegCalendarAlt } from "react-icons/fa";
export default function Company({ type, listCompany }) {
    // const filter = listCompany.filter(company => company.status === type)
    // const total = filter.length();
    return (
        <>
            <div className={styles.container}>
                <Title order={2}>2 Applications</Title>
                {[...Array(2)].map((company, index) => (
                    <Paper
                        sx={(theme) => ({
                            marginTop: theme.spacing.xs,
                            backgroundColor:
                                theme.colorScheme === "dark"
                                    ? theme.colors.dark[6]
                                    : theme.colors.gray[0],
                            textAlign: "center",
                            padding: theme.spacing.xs,
                            borderRadius: theme.radius.md,
                            cursor: "pointer",
                            "&:hover": {
                                backgroundColor:
                                    theme.colorScheme === "dark"
                                        ? theme.colors.dark[5]
                                        : theme.colors.gray[1],
                            },
                        })}
                        key={index}
                        withBorder
                    >
                        <Group
                            align="left"
                            noWrap
                            className={styles.companyContainer}
                        >
                            <Image
                                src="https://images.glints.com/unsafe/60x0/glints-dashboard.s3.amazonaws.com/company-logo/5a98a3f6322f6a5fdf0d55d182f3d683.png"
                                width={50}
                                height={50}
                            />
                            <Stack spacing="xs">
                                <Text weight={700} size="lg">
                                    Thực tập sinh CNTT (IT intership)
                                </Text>
                                <Text transform="capitalize">
                                    công ty cổ phần gcalls
                                </Text>
                                <Group spacing="xs" noWrap>
                                    <FaRegCalendarAlt />
                                    <Text>
                                        Submitted on March 1: 2022, 11:58 am
                                    </Text>
                                </Group>
                                <Text>Pending Review</Text>
                            </Stack>
                        </Group>
                    </Paper>
                ))}
            </div>
        </>
    );
}
