import styles from "./styles.module.scss";
import { Card, Image, Text, Grid, Stack, Group, Button } from "@mantine/core";
import clx from "classnames";

// interface HeaderCardProps = {
//     images: String,
//     name: String,
//     desc: String,
//     address: String,
//     website: String,
//     area: String,
//     scale: String,
// };

export default function HeaderCard({
    images,
    name,
    desc,
    location,
    website,
    area,
    scale,
}) {
    return (
        <div
            style={{
                width: 1140,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "60px",
                marginBottom: "60px",
            }}
        >
            <Card shadow="sm" p="xl">
                <Card.Section>
                    <Image
                        height={200}
                        src="https://images.glints.com/unsafe/1920x0/glints-dashboard.s3.amazonaws.com/company-banner-pic/f1eee804aaf645dfc2dfb855f118a9b4.jpg"
                        alt="Backgourd Image"
                    />
                </Card.Section>
                <div
                    style={{
                        width: 1140,
                        marginLeft: "-24px",
                        padding: "25px",
                    }}
                >
                    <Card>
                        <Grid grow gutter="xs" justify="center">
                            <Grid.Col span={2}>
                                <Image src={images} width={180} height={180} />
                            </Grid.Col>

                            <Grid.Col span={9}>
                                <Stack>
                                    <Text
                                        weight={700}
                                        className={styles.companyName}
                                    >
                                        {name}
                                    </Text>
                                </Stack>
                                <Stack>
                                    <Text
                                        size="xl"
                                        className={styles.cardDescription}
                                    >
                                        {desc}
                                    </Text>
                                </Stack>
                                <Stack>
                                    <Grid grow gutter="xl">
                                        <Grid.Col span={6}>
                                            <Group>
                                                <Text size="md" color="gray">
                                                    Location
                                                </Text>
                                                <Text size="md" weight={500}>
                                                    {location}
                                                </Text>
                                            </Group>
                                        </Grid.Col>
                                        <Grid.Col span={6}>
                                            <Group>
                                                <Text size="md" color="gray">
                                                    Website
                                                </Text>
                                                <Text
                                                    size="md"
                                                    weight={500}
                                                    variant="link"
                                                    component="a"
                                                    href="http://aroma.vn"
                                                >
                                                    {website}
                                                </Text>
                                            </Group>
                                        </Grid.Col>
                                        <Grid.Col span={6}>
                                            <Group>
                                                <Text size="md" color="gray">
                                                    Business Areas
                                                </Text>
                                                <Text size="md" weight={500}>
                                                    {area}
                                                </Text>
                                            </Group>
                                        </Grid.Col>
                                        <Grid.Col span={6}>
                                            <Group>
                                                <Text size="md" color="gray">
                                                    Company Scale
                                                </Text>
                                                <Text size="md" weight={500}>
                                                    {scale}
                                                </Text>
                                            </Group>
                                        </Grid.Col>
                                    </Grid>
                                </Stack>
                            </Grid.Col>
                        </Grid>
                    </Card>
                    <div className={styles.cardFooter}>
                        <Grid justify="flex-end">
                            <Button
                                size="lg"
                                variant="gradient"
                                gradient={{ from: "teal", to: "blue", deg: 60 }}
                                className={styles.buttonApply}
                            >
                                View current job vacancies
                            </Button>
                        </Grid>
                    </div>
                </div>
            </Card>
        </div>
    );
}
