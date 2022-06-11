import {
    Group,
    Skeleton,
    Image,
    Stack,
    Text,
    Button,
    Title,
    Paper,
    Modal,
    TextInput,
    Divider,
    Select,
} from "@mantine/core";
import styles from "./styles.module.scss";
import * as ri from "react-icons/ri";
import { useState } from "react";
import * as bi from "react-icons/bi";
import * as ti from "react-icons/ti";
import { useSelector } from "react-redux";
import { getUser } from "@/redux/user";

export default function PersonalSection({ isLoading = true }) {
    const user = useSelector(getUser);
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title={<Title order={3}>BASIC INFORMATION</Title>}
            >
                <Divider />
                <form>
                    <Group position="apart" className={styles.space}>
                        <TextInput
                            label="First Name"
                            defaultValue={user.firstName}
                        />
                        <TextInput
                            label="Last Name"
                            defaultValue={user.lastName}
                        />
                    </Group>
                    <TextInput
                        label="Phone Number"
                        defaultValue={user.phoneNumber}
                    />
                    <Text>Example: +0912345678</Text>
                    <Text color="gray" weight={500} className={styles.space}>
                        Email
                    </Text>
                    <Text weight={700}>{user.email}</Text>
                    <Text>
                        <ti.TiTickOutline color="green" />
                        Your email address is verified.
                    </Text>
                    <TextInput label="Update New Email" />
                    <Select
                        label="Location"
                        searchable
                        className={styles.space}
                        nothingfound="No options"
                        rightSection={
                            <bi.BiChevronDown size={25} color="gray" />
                        }
                        styles={{ rightSection: { pointerEvents: "none" } }}
                        rightSectionWidth={30}
                        data={["React", "Angular", "Svelte", "Vue"]}
                    />

                    <Select
                        label="Gender"
                        className={styles.space}
                        rightSection={
                            <bi.BiChevronDown size={25} color="gray" />
                        }
                        styles={{ rightSection: { pointerEvents: "none" } }}
                        data={["Male", "Female", "Prefer Not To Say", "Other"]}
                    />

                    <TextInput
                        className={styles.space}
                        label="Resident Status"
                    />

                    <TextInput className={styles.space} label="Nationality" />

                    <div className={styles.btn}>
                        <Button>SAVE</Button>
                    </div>
                </form>
            </Modal>
            <Paper className={styles.container}>
                <Skeleton
                    visible={isLoading}
                    radius={50}
                    width="135px"
                    height="135px"
                >
                    <Image
                        alt="user avatar"
                        radius={60}
                        width="120px"
                        height="120px"
                        src="https://images.glints.com/unsafe/140x140/glints-dashboard.s3.amazonaws.com/profile-picture-default/13.jpg"
                    />
                </Skeleton>
                <Stack>
                    <Group>
                        <Skeleton width="auto" pl={30} visible={isLoading}>
                            <Title
                                order={3}
                            >{`${user.firstName} ${user.lastName}`}</Title>
                        </Skeleton>
                        <Button
                            leftIcon={<ri.RiPencilFill size={14} />}
                            variant="subtle"
                            loading={isLoading}
                            className={styles.editInfoBtn}
                            onClick={() => setOpened(true)}
                            sx={() => ({
                                backgroundColor: "transparent",

                                "&:hover": {
                                    backgroundColor: "transparent",
                                },
                            })}
                        >
                            Edit basic Information
                        </Button>
                    </Group>
                    <Group pl={30} pr={10}>
                        <Stack>
                            <div className={styles.line}>
                                <Title order={6}>PHONE</Title>
                                <Skeleton visible={isLoading}>
                                    <Text size="25px" weight={400}>
                                        {user.phoneNumber}
                                    </Text>
                                </Skeleton>
                            </div>

                            <div className={styles.line}>
                                <Title order={6}>LOCATION</Title>
                                <Skeleton visible={isLoading}>
                                    <Text>Unknown</Text>
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
                                    <Text>{user.email}</Text>
                                </Skeleton>
                            </div>

                            <div className={styles.line}>
                                <Title order={6}>AGE, GENDER</Title>
                                <Skeleton visible={isLoading}>
                                    <Text>Unknown</Text>
                                </Skeleton>
                            </div>

                            <div className={styles.line}>
                                <Title order={6}>NATIONALITY</Title>
                                <Skeleton visible={isLoading}>
                                    <Text>Vietnam</Text>
                                </Skeleton>
                            </div>
                        </Stack>
                    </Group>
                </Stack>
            </Paper>
        </>
    );
}
