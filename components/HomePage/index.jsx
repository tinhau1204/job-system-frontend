import SearchSection from "./shards/SearchSection";
import Statistic from "./shards/Statistic";
import { Grid } from "@mantine/core";

export default function HomePage() {
    return (
        <>
            <SearchSection />
            <Grid justify="space-evenly" mt={90} cols={3}>
                <Statistic
                    semiLabel="We have helped"
                    number="2.850.990"
                    label="Student discover their dream job"
                />
                <Statistic
                    semiLabel="We have helped"
                    number="2.850.990"
                    label="Young discover dream job"
                />
                <Statistic
                    semiLabel="We have helped"
                    number="2.850.990"
                    label="Young discover dream job"
                />
            </Grid>
        </>
    );
}
