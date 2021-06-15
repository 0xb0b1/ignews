import axios from "axios";

export const api = axios.create({
  baseURL: "https://pvcent-ignews.vercel.app/api",
});
