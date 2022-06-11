import { Box, Group, Image, Stack, Text } from "@mantine/core";
import * as md from "react-icons/md";
import * as bs from "react-icons/bs";
import styles from "./styles.module.scss";
import * as clx from "classnames";
import Link from "next/link";

export default function BussinessBox() {
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
                    <Image
                        src="https://images.glints.com/unsafe/60x0/glints-dashboard.s3.amazonaws.com/company-logo/2b4685b27d1a643dd0c06d1853bcb11f.jpg"
                        width="50px"
                        height="50px"
                    />
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
                            business intern
                        </Text>
                        <Text
                            variant="link"
                            transform="uppercase"
                            component="a"
                            lineClamp={1}
                            href="https://images.glints.com/unsafe/60x0/glints-dashboard.s3.amazonaws.com/company-logo/2b4685b27d1a643dd0c06d1853bcb11f.jpg"
                        >
                            công ty tnhh bảo hiểm nhân thọ chubb việt nam
                        </Text>
                    </Stack>
                </Group>
                <Stack className={styles.body}>
                    <Stack spacing="xs" className={styles.infoContainer}>
                        <div className={styles.info}>
                            <md.MdPlace className={styles.icon} />
                            <Text> Quận 1, HO CHI Minh City</Text>
                        </div>
                        <div className={styles.info}>
                            <bs.BsCurrencyDollar className={styles.icon} />
                            <Text>VND 2,000,000 - 4,000,000</Text>
                        </div>
                        <div className={styles.info}>
                            <md.MdOutlineWork className={styles.icon} />
                            <Text>Less than a year</Text>
                        </div>
                    </Stack>
                </Stack>
                <div className={clx(styles.info, styles.footer)}>
                    <md.MdAccessTime className={styles.icon} />
                    <Text size="xs" color="gray">
                        Created 9 years ago
                    </Text>
                </div>
            </Box>
        </Link>
    );
}
