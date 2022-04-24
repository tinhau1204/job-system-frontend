import { forwardRef } from "react";
import { UnstyledButton, Group, Avatar, Text } from "@mantine/core";

const User = ({ ...buttonProps }, ref) => {
    const user = {
        displayName: "CPea",
        photoURL:
            "https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg",
    };

    return (
        <UnstyledButton ref={ref} {...buttonProps}>
            <Group>
                <div>
                    <Text>{user?.displayName ?? ""}</Text>
                </div>
                {!user?.photoURL ? (
                    <Avatar
                        radius="lg"
                        src={user?.photoURL}
                        alt={`${user?.displayName} avatar`}
                    >
                        {user?.displayName[0].toUpperCase()}
                    </Avatar>
                ) : (
                    <Avatar
                        radius="xl"
                        src={user.photoURL}
                        alt={`${user.displayName} avatar`}
                    />
                )}
            </Group>
        </UnstyledButton>
    );
};

export default forwardRef(User);
