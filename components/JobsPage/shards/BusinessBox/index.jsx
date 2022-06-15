import { Box, Group, Image, Stack, Text, Skeleton } from "@mantine/core";
import * as md from "react-icons/md";
import * as bs from "react-icons/bs";
import styles from "./styles.module.scss";
import * as clx from "classnames";
import Link from "next/link";

export default function BussinessBox({
    id,
    name,
    field,
    salary,
    place,
    experienceNeeded,
    imageUrl,
    employmentStatus,
    createdAt,
    loading,
    description,
}) {
    return (
        <Link
            href={{
                pathname: "/jobDetail",
                query: {
                    id,
                    name,
                    salary,
                    place,
                    field,
                    experienceNeeded,
                    imageUrl,
                    employmentStatus,
                    createdAt,
                    loading,
                    description,
                },
            }}
            target="_blank"
            className={styles.container}
            passHref
        >
            <Box
                className={styles.boxContainer}
                sx={(theme) => ({
                    textAlign: "center",
                    textDecoration: "none",
                    borderRadius: theme.radius.md,
                    cursor: "pointer",
                })}
            >
                <Group className={styles.header}>
                    <Skeleton width="auto" visible={loading}>
                        <Image
                            alt="image"
                            src={imageUrl ?? ""}
                            width="50px"
                            height="50px"
                        />
                    </Skeleton>
                    <Skeleton width="auto" visible={loading}>
                        <Text
                            transform="uppercase"
                            weight="bold"
                            align="left"
                            style={{
                                whiteSpace: "nowrap",
                                width: "300px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {name ?? "loremSent"}
                        </Text>
                    </Skeleton>
                </Group>
                <Stack className={styles.body}>
                    <Stack spacing="xs" className={styles.infoContainer}>
                        <Skeleton visible={loading}>
                            <div className={styles.info}>
                                <md.MdPlace className={styles.icon} />
                                <Text> {place}</Text>
                            </div>
                        </Skeleton>
                        <Skeleton visible={loading}>
                            <div className={styles.info}>
                                <bs.BsCurrencyDollar className={styles.icon} />
                                <Text>{salary}</Text>
                            </div>
                        </Skeleton>
                        <Skeleton visible={loading}>
                            <div className={styles.info}>
                                <md.MdOutlineWork className={styles.icon} />
                                <Text>{experienceNeeded}</Text>
                            </div>
                        </Skeleton>
                    </Stack>
                </Stack>
                <Skeleton visible={loading}>
                    <div className={clx(styles.info, styles.footer)}>
                        <md.MdAccessTime className={styles.icon} />
                        <Text size="xs" color="gray">
                            Created at {createdAt}
                        </Text>
                    </div>
                </Skeleton>
            </Box>
        </Link>
    );
}
