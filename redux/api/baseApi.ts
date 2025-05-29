
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseUrl = process.env.NEXT_PUBLIC_BASE_API;

// const baseUrl = `http://localhost:5000/api`;https://eduquest-server-side.vercel.app/

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: () => ({}),
 
});