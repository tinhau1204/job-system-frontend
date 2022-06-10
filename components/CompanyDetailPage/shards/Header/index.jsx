import styles from "./styles.module.scss";
import * as clx from "classnames";
import { Button, Divider, Group, Image, Stack, Text } from "@mantine/core";
import * as md from "react-icons/md";
import * as bs from "react-icons/bs";

export default function Header() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="https://images.glints.com/unsafe/160x0/glints-dashboard.s3.amazonaws.com/company-logo/2b4685b27d1a643dd0c06d1853bcb11f.jpg"
                            width={65}
                            height={65}
                        />
                    </div>
                    <Stack>
                        <Text weight={700} size="lg" transform="uppercase">
                            business intern{" "}
                        </Text>
                        <Text
                            variant="link"
                            transform="uppercase"
                            component="a"
                            lineClamp={2}
                            href="https://images.glints.com/unsafe/160x0/glints-dashboard.s3.amazonaws.com/company-logo/2b4685b27d1a643dd0c06d1853bcb11f.jpg"
                        >
                            công ty tnhh bảo hiểm nhân thọ chubb việt nam
                        </Text>
                        <Stack>
                            <div className={styles.info}>
                                <md.MdPlace className={styles.icon} />
                                <Text> Quận 1, HO CHI Minh City</Text>
                            </div>
                            <div className={styles.info}>
                                <md.MdBusiness className={styles.icon} />
                                <Text> Business Developer / Sales</Text>
                            </div>
                            <div className={styles.info}>
                                <bs.BsHourglassSplit className={styles.icon} />
                                <Text> Intership</Text>
                            </div>
                            <div className={styles.info}>
                                <md.MdOutlineWork className={styles.icon} />
                                <Text>Less than a year</Text>
                            </div>
                        </Stack>
                        <div className={clx(styles.info, styles.footer)}>
                            <md.MdAccessTime className={styles.icon} />
                            <Text size="xs" color="gray">
                                Created 9 years ago
                            </Text>
                        </div>
                        <Button>EASY APPLY</Button>
                    </Stack>
                </div>
                <Divider mt="30px" />
            </div>
        </>
    );
}
