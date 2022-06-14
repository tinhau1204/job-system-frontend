import styles from "./style.module.scss";
import {
    Text,
    TextInput,
    Textarea,
    Group,
    Stack,
    RadioGroup,
    Radio,
    Grid,
} from "@mantine/core";
import { HiOfficeBuilding } from "react-icons/hi";
import { MdAttachMoney, MdPlace, MdTask, MdDescription } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
export default function FormAddJob() {
    return (
        <div className={styles.formContainer}>
            <Grid justify="center">
                <Stack spacing="xl">
                    <Group spacing="xl">
                        <TextInput
                            placeholder="Company Name"
                            label="Company Name"
                            required
                            rightSection={<HiOfficeBuilding />}
                        />

                        <TextInput
                            placeholder="Salary"
                            label="Salary"
                            required
                            rightSection={<MdAttachMoney />}
                        />
                    </Group>
                    <Group spacing="xl">
                        <TextInput
                            placeholder="Placement"
                            label="Placement"
                            required
                            rightSection={<MdPlace />}
                        />

                        <TextInput
                            placeholder="Field"
                            label="Field"
                            required
                            rightSection={<MdTask />}
                        />
                    </Group>
                    <Group spacing="xl">
                        <RadioGroup
                            label="Select the time you can work!"
                            required
                        >
                            <Radio value="FullTime" label="Full Time" />
                            <Radio value="PartTime" label="Part Time" />
                        </RadioGroup>

                        <TextInput
                            placeholder="Experience"
                            label="Experience"
                            required
                            rightSection={<FaBusinessTime />}
                        />
                    </Group>
                    <Textarea
                        placeholder="Job Description"
                        label="Job Description"
                        required
                        rightSection={<MdDescription />}
                    />
                </Stack>
            </Grid>
        </div>
    );
}
