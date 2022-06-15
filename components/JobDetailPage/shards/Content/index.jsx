import { Badge, Group, List, Stack, Text, Title } from "@mantine/core";
import styles from "./styles.module.scss";
import * as md from "react-icons/md";

export default function Content({ description }) {
    return (
        <>
            <div className={styles.container}>
                <Stack>
                    <Stack className={styles.jobBenefits}>
                        <Title order={3}>Job benefits</Title>
                        <div className={styles.jobBenefitList}>
                            <div className={styles.jobBenefitsItems}>
                                <md.MdOutlineDownloadDone
                                    className={styles.icon}
                                />
                                <Text>Flexible work hours</Text>
                            </div>
                            <div className={styles.jobBenefitsItems}>
                                <md.MdOutlineDownloadDone
                                    className={styles.icon}
                                />
                                <Text>Flexible work hours</Text>
                            </div>
                            <div className={styles.jobBenefitsItems}>
                                <md.MdOutlineDownloadDone
                                    className={styles.icon}
                                />
                                <Text>Flexible work hours</Text>
                            </div>
                            <div className={styles.jobBenefitsItems}>
                                <md.MdOutlineDownloadDone
                                    className={styles.icon}
                                />
                                <Text>Flexible work hours</Text>
                            </div>
                            <div className={styles.jobBenefitsItems}>
                                <md.MdOutlineDownloadDone
                                    className={styles.icon}
                                />
                                <Text>Flexible work hours</Text>
                            </div>
                            <div className={styles.jobBenefitsItems}>
                                <md.MdOutlineDownloadDone
                                    className={styles.icon}
                                />
                                <Text>Flexible work hours</Text>
                            </div>
                            <div className={styles.jobBenefitsItems}>
                                <md.MdOutlineDownloadDone
                                    className={styles.icon}
                                />
                                <Text>Flexible work hours</Text>
                            </div>
                            <div className={styles.jobBenefitsItems}>
                                <md.MdOutlineDownloadDone
                                    className={styles.icon}
                                />
                                <Text>Flexible work hours</Text>
                            </div>
                            <div className={styles.jobBenefitsItems}>
                                <md.MdOutlineDownloadDone
                                    className={styles.icon}
                                />
                                <Text>Flexible work hours</Text>
                            </div>
                        </div>
                    </Stack>
                    <Stack>
                        <Title order={3}>Job description</Title>
                        {description}
                        <List>
                            <List.Item>
                                Research and generate lists of potential
                                customers. Provide input on customer briefs,
                                presentations, and sales literature
                            </List.Item>
                            <List.Item>
                                Help develop client relationships and retain
                                existing accounts. Learn and apply sales
                                techniques and maintain sales records
                            </List.Item>
                            <List.Item>
                                Reviewing sales performance against sales
                                targets.
                            </List.Item>
                            <List.Item>
                                Identify potential weaknesses and offer
                                improvement suggestions.
                            </List.Item>
                        </List>
                        <Text weight={500}>Candidate Requirements</Text>
                        <List>
                            <List.Item>
                                Age 22 or older, majoring in business
                                administration, economics, human resources... is
                                an advantage. Or similar industries., majoring
                                in business administration, economics, human
                                resources... is an advantage. Or similar
                                industries.
                            </List.Item>
                            <List.Item>
                                Experience is an advantage (No experience will
                                be trained).
                            </List.Item>
                            <List.Item>
                                Good communication skills, dynamic, willing to
                                learn, teamwork skills.
                            </List.Item>
                        </List>
                        <Text weight={500}>Candidate benefits:</Text>
                        <List>
                            <List.Item>
                                Take a FREE professional development course
                            </List.Item>
                            <List.Item>
                                Young, dynamic environment, dedicated and
                                professional guidance
                            </List.Item>
                            <List.Item>
                                There are more soft skills that help life.
                                Salary policy will be discussed in detail during
                                the interview.
                            </List.Item>
                            <List.Item>
                                Receive many other bonuses from management and
                                company if working effectively
                            </List.Item>
                            <List.Item>
                                Participate in the programs of festivals, team
                                building, and general events of the company.
                            </List.Item>
                        </List>
                    </Stack>
                </Stack>
            </div>
        </>
    );
}
