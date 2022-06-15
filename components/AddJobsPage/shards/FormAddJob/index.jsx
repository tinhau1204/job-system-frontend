import styles from "./style.module.scss";
import {
    TextInput,
    Textarea,
    Group,
    Stack,
    RadioGroup,
    Radio,
} from "@mantine/core";
import { HiOfficeBuilding } from "react-icons/hi";
import {
    MdAttachMoney,
    MdPlace,
    MdTask,
    MdDescription,
    MdOutlineClose,
} from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaBusinessTime } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getUser } from "@/redux/user";
import { useForm } from "@mantine/hooks";
import { createJob } from "@/lib/api/job";
import { showNotification } from "@mantine/notifications";

export default function FormAddJob() {
    const user = useSelector(getUser);

    const form = useForm({
        initialValues: {
            name: "",
            salary: "",
            place: "",
            field: "",
            imageUrl: "",
            experienceNeeded: "",
            employmentStatus: "",
            description: "",
        },
    });

    const handleSubmit = async (values) => {
        const [data, error] = await createJob("/job", {
            employerId: user.id,
            ...values,
        });

        if (data) {
            showNotification({
                title: "Job",
                message: "Create Job Successfully 🚀",
                color: "green",
                icon: <TiTick color="white" />,
            });
        }

        if (error) {
            showNotification({
                title: "Error",
                message: error.message,
                icon: <MdOutlineClose color="white" />,
                color: "red",
            });
        }

        form.reset();
    };

    return (
        <form
            id="add-job-form"
            className={styles.container}
            onSubmit={form.onSubmit(handleSubmit)}
        >
            <Stack spacing="xl">
                <TextInput
                    placeholder="Name"
                    label="Name"
                    required
                    rightSection={<HiOfficeBuilding />}
                    {...form.getInputProps("name")}
                />
                <Group spacing="xl">
                    <TextInput
                        placeholder="Salary"
                        label="Salary"
                        required
                        rightSection={<MdAttachMoney />}
                        {...form.getInputProps("salary")}
                    />
                    <TextInput
                        placeholder="Place"
                        label="Place"
                        required
                        rightSection={<MdPlace />}
                        {...form.getInputProps("place")}
                    />
                </Group>
                <Group spacing="xl">
                    <TextInput
                        placeholder="Field"
                        label="Field"
                        required
                        rightSection={<MdTask />}
                        {...form.getInputProps("field")}
                    />
                    <TextInput
                        placeholder="Image"
                        label="Image url"
                        required
                        rightSection={<MdTask />}
                        {...form.getInputProps("imageUrl")}
                    />
                </Group>
                <Group spacing="xl" grow>
                    <RadioGroup
                        label="Select the time you can work!"
                        required
                        {...form.getInputProps("employmentStatus")}
                    >
                        <Radio value="FullTime" label="FullTime" />
                        <Radio value="PartTime" label="PartTime" />
                    </RadioGroup>
                    <TextInput
                        placeholder="Experience"
                        label="Experience"
                        required
                        rightSection={<FaBusinessTime />}
                        {...form.getInputProps("experienceNeeded")}
                    />
                </Group>
                <Textarea
                    placeholder="Description"
                    label="Description"
                    required
                    minRows={5}
                    rightSection={<MdDescription />}
                    {...form.getInputProps("description")}
                />
            </Stack>
        </form>
    );
}
