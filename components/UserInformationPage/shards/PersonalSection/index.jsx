import {
    Group,
    Skeleton,
    Image,
    Stack,
    Text,
    Button,
    Title,
    Paper,
} from "@mantine/core";
import styles from "./styles.module.scss";
import * as ri from "react-icons/ri";

export default function PersonalSection({ isLoading = true }) {
    return (
        <Paper className={styles.container}>
            <Skeleton
                visible={isLoading}
                radius={50}
                width="135px"
                height="135px"
            >
                <Image
                    radius={60}
                    width="120px"
                    height="120px"
                    src="https://images.glints.com/unsafe/140x140/glints-dashboard.s3.amazonaws.com/profile-picture-default/13.jpg"
                />
            </Skeleton>
            <Stack>
                <div className={styles.header}>
                    <Skeleton
                        visible={isLoading}
                        width="150px"
                        className={styles.nameContainer}
                    >
                        <Title order={3}>Đỗ Viên</Title>
                    </Skeleton>
                    <Button
                        leftIcon={<ri.RiPencilFill size={14} />}
                        variant="subtle"
                        loading={isLoading}
                        className={styles.editInfoBtn}
                        sx={() => ({
                            backgroundColor: "transparent",
                            "&:hover": {
                                backgroundColor: "transparent",
                            },
                        })}
                    >
                        Edit basic Infor
                    </Button>
                </div>
                <Group className={styles.infoContainer}>
                    <Stack>
                        <div className={styles.line}>
                            <Title order={6}>PHONE</Title>
                            <Skeleton visible={isLoading}>
                                <Text size="25px" weight={400}>
                                    01234567891
                                </Text>
                            </Skeleton>
                        </div>

                        <div className={styles.line}>
                            <Title order={6}>LOCATION</Title>
                            <Skeleton visible={isLoading}>
                                <Text>Da lat</Text>
                            </Skeleton>
                        </div>

                        <div className={styles.line}>
                            <Title order={6}>RESIDENTAL STATUS</Title>
                            <Skeleton visible={isLoading}>
                                <Text>Citizen</Text>
                            </Skeleton>
                        </div>
                    </Stack>
                    <Stack>
                        <div className={styles.line}>
                            <Title order={6}>EMAIL</Title>
                            <Skeleton visible={isLoading}>
                                <Text>cpea2506@gmail.com</Text>
                            </Skeleton>
                        </div>

                        <div className={styles.line}>
                            <Title order={6}>AGE, GENDER</Title>
                            <Skeleton visible={isLoading}>
                                <Text>21 years old, Female</Text>
                            </Skeleton>
                        </div>

                        <div className={styles.line}>
                            <Title order={6}>NATIONALITY</Title>
                            <Skeleton visible={isLoading}>
                                <Text>Vietnamese, Vietnam</Text>
                            </Skeleton>
                        </div>
                    </Stack>
                </Group>
            </Stack>
        </Paper>
    );
}
