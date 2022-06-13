import { Image, Grid } from "@mantine/core";
import styles from "./styles.module.scss";
import HeaderCard from "./shards/HeaderCard";
import DetailContent from "./shards/DetailContent";
import Gallery from "./shards/Gallery";
import JobList from "./shards/JobList";
export default function CompaniesDetailPage() {
    const CardData = [
        {
            images: "https://images.glints.com/unsafe/180x0/glints-dashboard.s3.amazonaws.com/company-logo/25269889aca0f9e5c3dfc970fb2854b2.jpg",
            name: "Công ty TNHH Aroma",
            desc: "- Thành lập từ năm 2009, AROMA là công ty tiên phong và duy nhất tại Việt Nam chuyên sâu cung cấp chương trình đào tạo Tiếng Anh Cho Người Đi Làm & Doanh Nghiệp.",
            location: "Vietnam",
            website: "http://aroma.vn",
            area: "Education Management",
            scale: "51-200 nhân viên",
        },
    ];

    const ImageData = [
        {
            mainImage:
                "https://images.glints.com/unsafe/1440x0/glints-dashboard.s3.amazonaws.com/company-photos/b78eedfdd4435836e86effdf1fee7314.jpg",
            image1: "https://s3-ap-southeast-1.amazonaws.com/glints-dashboard/company-photos/b78eedfdd4435836e86effdf1fee7314.jpg",
            image2: "https://s3-ap-southeast-1.amazonaws.com/glints-dashboard/company-photos/7746bef7452110de5b6cf6195e488ca9.jpg",
            image3: "https://s3-ap-southeast-1.amazonaws.com/glints-dashboard/company-photos/e98276ea8d27f86e4fbb42339bcdf203.jpg",
        },
    ];

    return (
        <>
            <HeaderCard {...CardData[0]} />

            <Grid
                gutter="xl"
                justify="space-between"
                className={styles.contentContainer}
            >
                <Grid.Col span={8}>
                    <DetailContent />
                </Grid.Col>
                <Grid.Col span={4} lg={4}>
                    <Gallery {...ImageData[0]} />
                </Grid.Col>

                <Grid.Col span={8}>
                    <JobList></JobList>
                </Grid.Col>
            </Grid>
        </>
    );
}
