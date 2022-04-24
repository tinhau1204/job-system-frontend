import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { CgMoon, CgSun } from "react-icons/cg";

export default function ThemeSwitch() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    const changeColorScheme = () => {
        toggleColorScheme();
    };

    return (
        <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={changeColorScheme}
            title="Toggle color scheme"
        >
            {dark ? <CgSun size={18} /> : <CgMoon size={18} />}
        </ActionIcon>
    );
}
