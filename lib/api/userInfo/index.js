import { fakeData } from "./fakeDataUserInfo";
export const delay = (ms) => {
    new Promise((resolve) => setTimeout(resolve, ms));
};

export async function getUserInformation(url, id) {
    await delay(3000);
    const res = {
        status: 200,
        error: "loi me roi",
        data: fakeData.find((data) => (data.id = id)),
    };
    if (res.status === 500) {
        throw new Error(res.error);
    }
    return res.data;
}
