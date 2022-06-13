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
import { login } from "@/redux/user";
import { useDispatch } from "react-redux";
import { joiResolver, useForm } from "@mantine/form";
import GoogleButton from "./shards/GoogleButton";
import { HiLockClosed } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";
import loginSchema from "./validate";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { TiTick } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";
import { assignUser } from "@/lib/api/user";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";

const LoginPage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
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
        setLoading(true);
        const [data, error] = await assignUser("/user/login", values);

        if (data) {
            showNotification({
                title: "Login success",
                message: "Welcome to Jobable 🚀",
                color: "green",
                icon: <TiTick color="white" />,
            });

            dispatch(login({ ...data.message }));

            router.push("/");
        }

        if (error) {
            showNotification({
                title: "Login error",
                message: error.message,
                icon: <MdOutlineClose color="white" />,
                color: "red",
            });
        }

        setLoading(false);
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
                <LoadingOverlay visible={loading} />
                <Divider label="OR" labelPosition="center" />
                <GoogleButton />
            </Stack>
        </form>
    );
};

export default LoginPage;
