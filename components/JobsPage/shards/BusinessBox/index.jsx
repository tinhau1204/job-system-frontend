import { Box, Group, Image, Stack, Text, Skeleton } from "@mantine/core";
import * as md from "react-icons/md";
import * as bs from "react-icons/bs";
import styles from "./styles.module.scss";
import * as clx from "classnames";
import Link from "next/link";

export default function BussinessBox({
    id,
    name,
    salary,
    place,
    experienceNeeded,
    imageURL,
    createdAt,
    companyName,
}) {
    return (
        <Link
            href="https://images.glints.com/unsafe/60x0/glints-dashboard.s3.amazonaws.com/company-logo/2b4685b27d1a643dd0c06d1853bcb11f.jpg"
            target="_blank"
            className={styles.container}
        >
            <Box
                className={styles.boxContainer}
                sx={(theme) => ({
                    textAlign: "center",
                    textDecoration: "none",
                    borderRadius: theme.radius.md,
                    cursor: "pointer",
                    width: "360px",
                })}
            >
                <Group noWrap className={styles.header}>
                    <Image src={imageURL} width="50px" height="50px" />
                    <Stack
                        spacing="xs"
                        justify="flex-start"
                        className={styles.contentHeader}
                    >
                        <Text
                            transform="uppercase"
                            weight={600}
                            width="212px"
                            lineClamp={2}
                        >
                            {name}
                        </Text>
                        <Text
                            variant="link"
                            transform="uppercase"
                            component="a"
                            lineClamp={1}
                            href="https://images.glints.com/unsafe/60x0/glints-dashboard.s3.amazonaws.com/company-logo/2b4685b27d1a643dd0c06d1853bcb11f.jpg"
                        >
                            {companyName}
                        </Text>
                    </Stack>
                </Group>
                <Stack className={styles.body}>
                    <Stack spacing="xs" className={styles.infoContainer}>
                        <div className={styles.info}>
                            <md.MdPlace className={styles.icon} />
                            <Text> {place}</Text>
                        </div>
                        <div className={styles.info}>
                            <bs.BsCurrencyDollar className={styles.icon} />
                            <Text>$ {salary}</Text>
                        </div>
                        <div className={styles.info}>
                            <md.MdOutlineWork className={styles.icon} />
                            <Text>{experienceNeeded}</Text>
                        </div>
                    </Stack>
                </Stack>
                <div className={clx(styles.info, styles.footer)}>
                    <md.MdAccessTime className={styles.icon} />
                    <Text size="xs" color="gray">
                        {createdAt}
                    </Text>
                </div>
            </Box>
        </Link>
    );
}
