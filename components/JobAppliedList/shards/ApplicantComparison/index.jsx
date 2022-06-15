import { changeAppliedStatus } from "@/lib/api/job";
import { Select, Table, Text } from "@mantine/core";
import { TiTick } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { showNotification } from "@mantine/notifications";

export default function ApplicantComparison({ data }) {
    const onStatusChange = async (value, id) => {
        const [fetchData, error] = await changeAppliedStatus("/job/apply", {
            status: value,
            jobAppliedId: id,
        });
        console.log(fetchData, error);

        if (fetchData) {
            showNotification({
                title: "Job change success",
                message: "Change successfully 🚀",
                color: "green",
                icon: <TiTick color="white" />,
            });
        }

        if (error) {
            showNotification({
                title: "Error",
                message: error.message,
                icon: <MdOutlineClose color="white" />,
                color: "red",
            });
        }
    };

    const rows = data.map(
        ({ id, firstName, lastName, email, status }, index) => (
            <tr key={index}>
                <td>
                    <Text size="md" weight={600}>
                        {`${firstName} ${lastName}`}
                    </Text>
                </td>
                <td>
                    <Text size="md" weight={600}>
                        Information Technology
                    </Text>
                </td>
                <td>
                    <Link
                        passHref
                        href="https://s3-ap-southeast-1.amazonaws.com/glints-dashboard/resume/3626d09a6e2b3ce3dd1e3655e4b5a4dd.pdf"
                    >
                        <Text
                            size="md"
                            weight={600}
                            color="#03adfc"
                            variant="link"
                            component="a"
                        >
                            3626d09a6e2b3ce3dd1e3655e4b5a4dd.pdf
                        </Text>
                    </Link>
                </td>
                <td>
                    <Text size="md" weight={600}>
                        {email}
                    </Text>
                </td>
                <td>
                    <Select
                        placeholder="Status"
                        data={[
                            { value: "Accept", label: "Accept" },
                            { value: "Refuse", label: "Refuse" },
                            { value: "Waiting", label: "Waiting" },
                            { value: "Pending", label: "Pending" },
                        ]}
                        onChange={(value) => onStatusChange(value, id)}
                        defaultValue={status}
                    />
                </td>
            </tr>
        ),
    );
    return (
        <Table verticalSpacing="md" highlightOnHover>
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Major</th>
                    <th>Portfolios</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
}
