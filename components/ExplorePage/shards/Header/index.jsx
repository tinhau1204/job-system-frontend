import { Button, Input } from "@mantine/core";
import styles from "./styles.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { MdPlace } from "react-icons/md";

export default function Header() {
    return (
        <form className={styles.header}>
            <Input
                icon={<AiOutlineSearch />}
                placeholder="Search for jobs"
                size="md"
                className={styles.input}
            />
            <Input
                icon={<MdPlace />}
                placeholder="Add a country or a city"
                size="md"
                className={styles.input}
            />
            <Button type="submit" size="md">
                SEARCH
            </Button>
        </form>
    );
}
