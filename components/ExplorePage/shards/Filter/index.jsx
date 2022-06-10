import styles from "./styles.module.scss";
import {
    Accordion,
    Checkbox,
    CheckboxGroup,
    Divider,
    ScrollArea,
    Title,
} from "@mantine/core";

export default function Filter() {
    return (
        <div className={styles.container}>
            <ScrollArea style={{ height: 470 }}>
                <Title className={styles.title} order={4}>
                    Filter your search
                </Title>
                <Divider />
                <Accordion iconPosition="right">
                    <Accordion.Item label="Sort By">
                        <div className={styles.sortContainer}>
                            <div className={styles.badge}>Relevancy</div>
                            <div className={styles.badge}>Newest</div>
                        </div>
                    </Accordion.Item>
                    <Accordion.Item label="Job Type">
                        <CheckboxGroup orientation="vertical">
                            <Checkbox value={"intership"} label="Intership" />
                            <Checkbox value={"full-time"} label="Full-time" />
                            <Checkbox value={"part-time"} label="Part-time" />
                            <Checkbox value="freelance" label="Free-lance" />
                        </CheckboxGroup>
                    </Accordion.Item>

                    <Accordion.Item label="Experience">
                        <CheckboxGroup orientation="vertical">
                            <Checkbox value={"<1"} label="Less Than One Year" />
                            <Checkbox value={"1-3"} label="1 - 3 years" />
                            <Checkbox value={"3-5"} label="3 - 5 years" />
                            <Checkbox value={"5-10"} label="5 - 10 years" />
                            <Checkbox
                                value={">10"}
                                label="More than 10 years"
                            />
                        </CheckboxGroup>
                    </Accordion.Item>
                    <Accordion.Item label="Cities">
                        <CheckboxGroup orientation="vertical">
                            <Checkbox value="HCM" label="Ho Chi Minh City" />
                            <Checkbox value="HN" label="Ha Noi" />
                            <Checkbox value="DaNang" label="Da Nang" />
                        </CheckboxGroup>
                    </Accordion.Item>
                </Accordion>
            </ScrollArea>
        </div>
    );
}
