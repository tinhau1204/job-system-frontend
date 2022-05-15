import {
    TextInput,
    PasswordInput,
    Center,
    Button,
    Anchor,
    LoadingOverlay,
    Title,
    Divider,
    Stack,
    Checkbox,
} from "@mantine/core";
import { joiResolver, useForm } from "@mantine/form";
import GoogleButton from "./shards/GoogleButton";
import { HiLockClosed } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";
import loginSchema from "./validate";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const LoginPage = () => {
    const router = useRouter();

    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },
        schema: joiResolver(loginSchema),
    });

    const handleToRegister = () => {
        router.replace("/register");
    };

    const handleSubmit = async (values) => {
        console.log(values);
    };

    return (
        <form
            className={styles.container}
            onSubmit={form.onSubmit(handleSubmit)}
        >
            <Stack spacing="xl" className={styles.stack}>
                <Title>Login</Title>
                <TextInput
                    label="Email"
                    size="md"
                    icon={<BsPersonCircle />}
                    placeholder="Email"
                    required
                    {...form.getInputProps("email")}
                />
                <PasswordInput
                    label="Password"
                    size="md"
                    icon={<HiLockClosed />}
                    placeholder="Password"
                    required
                    {...form.getInputProps("password")}
                />
                <Checkbox label="Remember me" />
                <Anchor>Forgot password?</Anchor>
                <Button size="md" type="submit">
                    Login
                </Button>
                <Center>
                    Doesn&apos;t have an account?
                    <Anchor onClick={handleToRegister} ml="xs">
                        Register
                    </Anchor>
                </Center>
                <LoadingOverlay visible={false} />
                <Divider label="OR" labelPosition="center" />
                <GoogleButton />
            </Stack>
        </form>
    );
};

export default LoginPage;
