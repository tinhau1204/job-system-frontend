import styles from "./styles.module.scss";
import { Text, Table, Card, Stack } from "@mantine/core";

const elements = [
    { name: "Course Consultants", location: "Ha Noi", time: 3 },
    { name: "Course Managers", location: "Ha Noi", time: 2 },
    { name: "Course Assistants", location: "Ho Chi Minh city", time: 3 },
];

export default function JobList() {
    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>
                <Stack spacing="none">
                    <Text
                        weight={500}
                        size="lg"
                        variant="link"
                        component="a"
                        href=""
                    >
                        {element.name}{" "}
                    </Text>

                    <Text size="md" color="#777777">
                        {element.location}
                    </Text>

                    <Text size="xs" color="#777777">
                        Created {element.time} days ago
                    </Text>
                </Stack>
            </td>
        </tr>
    ));

    return (
        <Card shadow="sm" p="xl">
            <Text weight="bold" size="xl" className={styles.listHeader}>
                Job List
            </Text>
            <Table>
                <tbody>{rows}</tbody>
            </Table>
        </Card>
    );
}
