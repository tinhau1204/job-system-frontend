import { Button, Group, Title } from "@mantine/core";
import * as ri from "react-icons/ri";
import styles from "./styles.module.scss";

export default function Header({ title, onEditClick }) {
    return (
        <>
            <Group position="apart" className={styles.header}>
                <Title className={styles.title} order={3}>
                    {title}
                </Title>
                <Button
                    leftIcon={<ri.RiPencilFill size={14} />}
                    onClick={() => onEditClick()}
                    variant="subtle"
                >
                    EDIT
                </Button>
            </Group>
        </>
    );
}
