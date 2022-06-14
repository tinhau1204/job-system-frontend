import axiosClient from "@/lib/axiosClient";

export const getAllJob = async function (url) {
    const res = await axiosClient.get(url);
    return res.data;
};

// export const getAllJobByEmployerId = async function(url) {
//     const res = await axiosClient.get(url);
//     return res.data;
// }
