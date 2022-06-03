import { Divider, Stack, Group, Title, Text } from "@mantine/core";
import Header from "../Header";
import * as im from "react-icons/im";
import styles from "./styles.module.scss";
import React from "react";
import IconLinks from "@/components/shards/IconLinks";
import * as fa from "react-icons/fa";

export default function Portfolios() {
    return (
        <Stack className={styles.container}>
            <Header title="PORTFOLIOS, ATTACHMENTS, AND SOCIAL MEDIA" />
            <Divider size="md" />
            <div className={styles.body}>
                <Text className={styles.title} weight={700}>
                    Social Links
                </Text>
                <Stack>
                    <IconLinks
                        icon={<im.ImFacebook color="gray" size="20" />}
                        link=" https://www.facebook.com/cpea2506/"
                        title=" https://www.facebook.com/cpea2506/"
                    />

                    <IconLinks
                        icon={<im.ImLinkedin2 color="gray" size="20" />}
                        link="https://www.linkedin.com/in/do-vien-a29499230/"
                        title="https://www.linkedin.com/in/do-vien-a/"
                    />
                    <IconLinks
                        icon={<fa.FaGithub color="gray" size="20" />}
                        link="https://www.linkedin.com/in/do-vien-a29499230/"
                        title="https://www.linkedin.com/in/do-vien-a29499230/"
                    />
                </Stack>
            </div>
        </Stack>
    );
}
