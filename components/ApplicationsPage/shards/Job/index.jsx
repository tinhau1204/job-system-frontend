import {
    Group,
    Stack,
    Text,
    Title,
    Image,
    Paper,
    Skeleton,
} from "@mantine/core";
import styles from "./styles.module.scss";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiStatusOnline } from "react-icons/hi";

export default function Job({ data, loading }) {
    return (
        <div className={styles.container}>
            <Title order={2}> {data ? data.length : "No"} Applications</Title>

            {loading
                ? [...Array(2)].map((_, index) => (
                      <Paper
                          sx={(theme) => ({
                              marginTop: theme.spacing.xs,
                              backgroundColor:
                                  theme.colorScheme === "dark"
                                      ? theme.colors.dark[6]
                                      : theme.colors.gray[0],
                              textAlign: "center",
                              padding: theme.spacing.xs,
                              borderRadius: theme.radius.md,
                              cursor: "pointer",
                              "&:hover": {
                                  backgroundColor:
                                      theme.colorScheme === "dark"
                                          ? theme.colors.dark[5]
                                          : theme.colors.gray[1],
                              },
                          })}
                          key={index}
                          withBorder
                      >
                          <Group
                              align="left"
                              noWrap
                              className={styles.companyContainer}
                          >
                              <Skeleton visible={loading} width="auto">
                                  <Image alt="image" width={50} height={50} />
                              </Skeleton>
                              <Stack spacing="xs">
                                  <Skeleton visible={loading} width="auto">
                                      <Text weight={700} size="lg">
                                          lmao
                                      </Text>
                                  </Skeleton>
                                  <Skeleton visible={loading} width="auto">
                                      <Text transform="capitalize">lmao</Text>
                                  </Skeleton>
                                  <Group spacing="xs" noWrap>
                                      <Skeleton visible={loading} width="auto">
                                          <FaRegCalendarAlt />
                                          <Text>lmao</Text>
                                      </Skeleton>
                                  </Group>
                                  <Skeleton visible={loading} width="auto">
                                      <Text>Pending Review</Text>
                                  </Skeleton>
                              </Stack>
                          </Group>
                      </Paper>
                  ))
                : data.map((job, index) => (
                      <Paper
                          sx={(theme) => ({
                              marginTop: theme.spacing.xs,
                              backgroundColor:
                                  theme.colorScheme === "dark"
                                      ? theme.colors.dark[6]
                                      : theme.colors.gray[0],
                              textAlign: "center",
                              padding: theme.spacing.xs,
                              borderRadius: theme.radius.md,
                              cursor: "pointer",
                              "&:hover": {
                                  backgroundColor:
                                      theme.colorScheme === "dark"
                                          ? theme.colors.dark[5]
                                          : theme.colors.gray[1],
                              },
                          })}
                          key={index}
                          withBorder
                      >
                          <Group
                              align="left"
                              noWrap
                              className={styles.companyContainer}
                          >
                              <Skeleton visible={loading} width="auto">
                                  <Image
                                      alt="image"
                                      src={job.imageUrl}
                                      width={50}
                                      height={50}
                                  />
                              </Skeleton>
                              <Stack spacing="xs">
                                  <Skeleton visible={loading} width="auto">
                                      <Text weight={700} size="lg">
                                          {job.name}
                                      </Text>
                                  </Skeleton>
                                  <Group spacing="xs" noWrap>
                                      <FaRegCalendarAlt />
                                      <Text>Applied at {job.appliedAt}</Text>
                                  </Group>
                                  <Group spacing="xs" noWrap>
                                      <HiStatusOnline />
                                      <Text>{job.status}</Text>
                                  </Group>
                              </Stack>
                          </Group>
                      </Paper>
                  ))}
        </div>
    );
}
