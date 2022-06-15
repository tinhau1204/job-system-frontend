import Menu from "./components/Menu";
import ThemeSwitcher from "@/shards/ThemeSwitcher";
import UserMenu from "./components/UserMenu";
import { MdNotifications } from "react-icons/md";
import { Indicator, Group, Popover, Image, Text } from "@mantine/core";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { getUser } from "@/redux/user";
import { getAllJob } from "@/lib/api/job";
import { useState } from "react";
import useSWR from "swr";

export default function Navbar() {
    const user = useSelector(getUser);
    const [opened, setOpened] = useState(false);
    let { data } = useSWR(`/job/student/${user.id}`, getAllJob);

    if (data) {
        data = data.filter((job) => job.status !== "Pending");
    }

    return (
        <Group position="apart" className={styles.navbar}>
            <Group>
                <Image
                    className={styles.image}
                    alt="Jobable Logo"
                    width={60}
                    height={30}
                    src="https://talkbitz.com/wp-content/uploads/2020/04/Best-Free-Online-Logo-Maker-Sites.png"
                />
                <Menu
                    data={[
                        { title: "Home", path: "/" },
                        { title: "Jobs", path: "/jobs" },
                    ]}
                />
            </Group>
            <Group>
                <ThemeSwitcher />
                {user.id ? (
                    <>
                        <UserMenu />
                        <Indicator label={data?.length ?? ""} color="red">
                            <Popover
                                opened={opened}
                                style={{ cursor: "pointer" }}
                                onClose={() => setOpened(false)}
                                withArrow
                                title="Notification"
                                transition="pop-top-left"
                                target={
                                    <MdNotifications
                                        onClick={() => setOpened((o) => !o)}
                                        size={20}
                                    />
                                }
                                position="bottom"
                                placement="start"
                            >
                                {data
                                    ? data.map((job, index) => (
                                          <Group
                                              key={index}
                                              mb="md"
                                              style={{
                                                  "&hover": {
                                                      backgroundColor:
                                                          "#aaaaaa",
                                                  },
                                              }}
                                          >
                                              <Image
                                                  alt="image"
                                                  src={job.imageUrl}
                                                  width={50}
                                                  height={50}
                                                  sx={{ minWidth: 30 }}
                                                  mr="md"
                                              />
                                              <Text size="sm">
                                                  Your application to
                                                  <b> {job.name} </b>
                                                  was{" "}
                                                  <b>
                                                      {" "}
                                                      {job.status === "Refuse"
                                                          ? "refused"
                                                          : `${job.status.toLowerCase()}ed`}
                                                  </b>
                                              </Text>
                                          </Group>
                                      ))
                                    : "There is no notification"}
                            </Popover>
                        </Indicator>
                    </>
                ) : (
                    <Menu
                        data={[
                            { title: "Login", path: "/login" },
                            { title: "Register", path: "/register" },
                        ]}
                    />
                )}
            </Group>
        </Group>
    );
}
