import styles from "./styles.module.scss";
import { Paper, Text, Stack, Card } from "@mantine/core";

export default function DetailContent() {
    return (
        <Card shadow="xs" p="xl">
            <Text weight={700} size="xl" className={styles.header}>
                {" "}
                Company Infomation
            </Text>
            <div className={styles.introduction}>
                <Text weight={700} size="md">
                    Introduction
                </Text>
                <hr className={styles.horizontal}></hr>
                <Text className={styles.contentText}>
                    {" "}
                    - Thành lập từ năm 2009, AROMA là công ty tiên phong và duy
                    nhất tại Việt Nam chuyên sâu cung cấp chương trình đào tạo
                    Tiếng Anh Cho Người Đi Làm & Doanh Nghiệp.{" "}
                </Text>
                <Text className={styles.contentText}>
                    - Với 3 cơ sở tại Hà Nội và TP. Hồ Chí Minh, AROMA đã hợp
                    tác với hơn 700 doanh nghiệp và tổ chức, đào tạo hơn 20.000
                    người đi làm.
                </Text>
                <Text className={styles.contentText}>
                    - Văn hóa AROMA là sự hòa hợp giữa quy trình, hệ thống quản
                    lý chuẩn mực và chuyên nghiệp với tinh thần cởi mở, tôn
                    trọng các giá trị cá nhân.
                </Text>
            </div>

            <div className={styles.corporateCulture}>
                <Text weight={700} size="md">
                    Corporate culture
                </Text>
                <hr className={styles.horizontal}></hr>
                <Text className={styles.contentText}></Text>
            </div>

            <div className={styles.corporateCulture}>
                <Text weight={700} size="md">
                    Office location
                </Text>
                <hr className={styles.horizontal}></hr>
                <Text className={styles.contentText}>
                    Số nhà 15A, ngõ 136 đường Trung Liệt, Phường Trung Liệt,
                    Quận Đống Đa, Thành phố Hà Nội, Việt Nam
                </Text>
            </div>
        </Card>
    );
}
