import { Button, Image } from "@mantine/core";
import styles from "./styles.module.scss";

const GoogleButton = () => {
    return (
        <Button
            className={styles.button}
            sx={(themes) => ({
                "&:hover": {
                    backgroundColor:
                        themes.colorScheme === "dark"
                            ? themes.colors.gray[1]
                            : themes.colors.gray[0],
                },
            })}
            variant="white"
            color="dark"
            size="lg"
            radius="md"
            leftIcon={
                <Image
                    pr={40}
                    src="/google_icon.png"
                    alt="Google Icon"
                    width={30}
                />
            }
            onClick={() => {}}
            fullWidth
        >
            Signin with Google
        </Button>
    );
};

export default GoogleButton;
