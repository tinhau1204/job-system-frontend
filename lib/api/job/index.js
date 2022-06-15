import AxiosCLient from "@/lib/axiosClient";

export const getAllJob = async function (url) {
    return await AxiosCLient.fetching("get", url);
};

export const createJob = async function (url, data) {
    return await AxiosCLient.fetchingWithData("post", url, data);
};

export const getAllStudentByJob = async function (url) {
    return await AxiosCLient.fetching("get", url);
};

export const applyJob = async function (url, data) {
    return await AxiosCLient.fetchingWithData("post", url, data);
};

export const changeAppliedStatus = async function (url, data) {
    return await AxiosCLient.fetchingWithData("put", url, data);
};
