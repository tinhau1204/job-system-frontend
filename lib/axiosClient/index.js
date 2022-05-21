import axios from "axios";
import axiosConfig from "./config";

const axiosClient = axios.create(axiosConfig);

export default axiosClient;
