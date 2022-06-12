import styles from "./styles.module.scss";
import { Card, Image, Text, Stack, Group } from "@mantine/core";

export default function Gallery({ mainImage, image1, image2, image3 }) {
    return (
        <Card shadow="sm" p="xl">
            <Text weight="bold" size="lg">
                Library
            </Text>
            <Stack className={styles.imageContainer}>
                <div
                    style={{
                        width: 290,
                        height: 193.33,
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    <Image src={mainImage} />
                </div>
                <Group>
                    <Image width={70} height={70} src={image1} />
                    <Image width={70} height={70} src={image2} />
                    <Image width={70} height={70} src={image3} />
                </Group>
            </Stack>
        </Card>
    );
}
