import styles from "./style.module.scss";
import { Table, Text } from "@mantine/core";

export default function ApplicantComparison({
    id,
    name,
    workingExperience,
    cv,
    email,
}) {
    const rows = [...Array(5)].map((_, index) => (
        <tr key={index}>
            <td>
                <Text size="md" weight={600}>
                    1{id}
                </Text>
            </td>
            <td>
                <Text size="md" weight={600}>
                    Do Vien{name}
                </Text>
            </td>
            <td>
                <Text size="md" weight={600}>
                    Information Technology{workingExperience}
                </Text>
            </td>
            <td>
                <Text
                    size="md"
                    weight={600}
                    color="#03adfc"
                    variant="link"
                    component="a"
                    href={cv}
                >
                    linkedin.com/DoVien1{cv}
                </Text>
            </td>
            <td>
                <Text size="md" weight={600}>
                    dovien1@gmail.company{email}
                </Text>
            </td>
        </tr>
    ));
    return (
        <Table verticalSpacing="md" highlightOnHover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Student Name</th>
                    <th>Major</th>
                    <th>Portfolios</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
}
