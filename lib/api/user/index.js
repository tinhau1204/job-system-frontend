import axiosClient from "@/lib/axiosClient";

export async function assignUser(url, payload) {
    try {
        const res = await axiosClient.post(url, payload);

        return [res.data, null];
    } catch (error) {
        if (error.response) {
            return [null, error.response.data];
        }
    }
}
