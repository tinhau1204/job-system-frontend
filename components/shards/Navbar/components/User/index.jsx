import { forwardRef } from "react";
import { UnstyledButton, Group, Avatar, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import { getUser } from "@/redux/user";
const User = ({ ...buttonProps }, ref) => {
    let user = useSelector(getUser);

    user = {
        displayName: `${user.firstName} ${user.lastName}`,
        photoURL:
            "https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41chttps://images.glints.com/unsafe/140x140/glints-dashboard.s3.amazonaws.com/profile-picture-default/13.jpg",
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
