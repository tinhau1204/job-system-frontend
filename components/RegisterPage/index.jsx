import {
    TextInput,
    PasswordInput,
    Center,
    Button,
    Anchor,
    LoadingOverlay,
    Title,
    Stack,
    RadioGroup,
    Radio,
    SimpleGrid,
} from "@mantine/core";
import { joiResolver, useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { HiLockClosed } from "react-icons/hi";
import PasswordStrength from "./shards/PasswordStrength";
import { MdPerson, MdPhone } from "react-icons/md";
import registerSchema from "./validate";
import styles from "./styles.module.scss";
import { TiTick } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";
import { assignUser } from "@/lib/api/user";
import { showNotification } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";

const RegisterPage = () => {
    const [isLoading, isLoadingHandlers] = useDisclosure(false);
    const router = useRouter();

    const form = useForm({
        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
            role: "student",
            phoneNumber: "",
        },
        schema: joiResolver(registerSchema),
    });

    const handleToLogin = () => {
        router.replace("/login");
    };

    const handleSubmit = async (values) => {
        isLoadingHandlers.open();
        const [data, error] = await assignUser("/user/register", values);

        if (data) {
            showNotification({
                title: "Register success",
                message: "Welcome to Jobable 🚀",
                color: "green",
                icon: <TiTick color="white" />,
            });
            router.push("/login");
        }

        if (error) {
            showNotification({
                title: "Register error",
                color: "red",
                message: error.message,
                icon: <MdOutlineClose color="white" />,
            });
        }

        isLoadingHandlers.close();
    };

    return (
        <form
            className={styles.container}
            onSubmit={form.onSubmit(handleSubmit)}
        >
            <Stack spacing="xl" className={styles.stack}>
                <Title>🚀 Register</Title>
                <TextInput
                    label="Email"
                    size="md"
                    icon={<MdPerson />}
                    placeholder="Email"
                    required
                    {...form.getInputProps("email")}
                />
                <SimpleGrid
                    cols={2}
                    spacing="xl"
                    breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                >
                    <TextInput
                        label="First name"
                        size="md"
                        icon={<MdPerson />}
                        placeholder="First name"
                        required
                        {...form.getInputProps("firstName")}
                    />
                    <TextInput
                        label="Last name"
                        size="md"
                        icon={<MdPerson />}
                        placeholder="Last name"
                        required
                        {...form.getInputProps("lastName")}
                    />
                    <PasswordStrength {...form.getInputProps("password")} />
                    <PasswordInput
                        label="Confirm password"
                        size="md"
                        icon={<HiLockClosed />}
                        placeholder="Confirm password"
                        required
                        {...form.getInputProps("confirmPassword")}
                    />
                    <RadioGroup
                        defaultValue="Student"
                        label="What is your role?"
                        size="md"
                        required
                        {...form.getInputProps("role")}
                    >
                        <Radio value="Student" label="Student" />
                        <Radio value="Employer" label="Employer" />
                    </RadioGroup>
                    <TextInput
                        label="Phone number"
                        type="tel"
                        size="md"
                        icon={<MdPhone />}
                        placeholder="Phone number"
                        required
                        {...form.getInputProps("phoneNumber")}
                    />
                    <Button size="md" type="submit">
                        Register
                    </Button>
                    <Center>
                        Already have an account?
                        <Anchor onClick={handleToLogin} ml="xs">
                            Login
                        </Anchor>
                    </Center>
                </SimpleGrid>
                <LoadingOverlay visible={isLoading} />
            </Stack>
        </form>
    );
};

export default RegisterPage;
