
import { axiosBaseQuery } from "@/components/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseUrl =process.env.MY_BASE_API || process.env.NEXT_PUBLIC_BASE_API || "http://localhost:3000/";



export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl,
  }),
  endpoints: () => ({})

});