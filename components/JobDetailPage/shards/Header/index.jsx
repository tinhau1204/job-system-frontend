import styles from "./styles.module.scss";
import * as clx from "classnames";
import * as md from "react-icons/md";
import * as ti from "react-icons/ti";
import * as bs from "react-icons/bs";
import { applyJob } from "@/lib/api/job";
import { useSelector } from "react-redux";
import { getUser } from "@/redux/user";
import { Button, Divider, Image, Stack, Text } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";

export default function Header({
    id,
    imageUrl,
    name,
    place,
    field,
    salary,
    employmentStatus,
    companyName,
    createdAt,
    experienceNeeded,
}) {
    const router = useRouter();
    const user = useSelector(getUser);

    const handleApplyClick = async () => {
        const [data, error] = await applyJob("/job/apply", {
            jobId: id,
            studentId: user.id,
        });

        if (data) {
            showNotification({
                title: "Job apply",
                message: "Apply success 🚀",
                color: "green",
                icon: <ti.TiTick color="white" />,
            });
        }

        if (error) {
            showNotification({
                title: "Error",
                message: error.message,
                icon: <md.MdOutlineClose color="white" />,
                color: "red",
            });
        }
    };

    const handleSeeListApplyClick = async () => {
        router.push({
            pathname: "/jobAppliedList",
            query: {
                id,
            },
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <div className={styles.imageContainer}>
                    <Image
                        alt="image"
                        src={imageUrl ?? ""}
                        width={65}
                        height={65}
                    />
                </div>
                <Stack>
                    <Text weight={700} size="lg" transform="uppercase">
                        {name}
                    </Text>
                    <Text
                        variant="link"
                        transform="uppercase"
                        component="a"
                        lineClamp={2}
                        href="https://images.glints.com/unsafe/160x0/glints-dashboard.s3.amazonaws.com/company-logo/2b4685b27d1a643dd0c06d1853bcb11f.jpg"
                    >
                        {companyName}
                    </Text>
                    <Stack>
                        <div className={styles.info}>
                            <md.MdPlace className={styles.icon} />
                            <Text>{place}</Text>
                        </div>
                        <div className={styles.info}>
                            <md.MdOutlineAttachMoney className={styles.icon} />
                            <Text>{salary}</Text>
                        </div>
                        <div className={styles.info}>
                            <md.MdBusiness className={styles.icon} />
                            <Text>{field}</Text>
                        </div>
                        <div className={styles.info}>
                            <bs.BsHourglassSplit className={styles.icon} />
                            <Text>{employmentStatus}</Text>
                        </div>
                        <div className={styles.info}>
                            <md.MdOutlineWork className={styles.icon} />
                            <Text>{experienceNeeded}</Text>
                        </div>
                    </Stack>
                    <div className={clx(styles.info, styles.footer)}>
                        <md.MdAccessTime className={styles.icon} />
                        <Text size="xs" color="gray">
                            Create at {createdAt}
                        </Text>
                    </div>
                    {user.role == "Student" ? (
                        <Button onClick={handleApplyClick}>EASY APPLY</Button>
                    ) : (
                        <Button onClick={handleSeeListApplyClick}>
                            SEE LIST APPLICANT
                        </Button>
                    )}
                </Stack>
            </div>
            <Divider mt="30px" />
        </div>
    );
}
