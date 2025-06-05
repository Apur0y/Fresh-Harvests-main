import axios, { AxiosRequestConfig, AxiosError } from "axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";

interface AxiosBaseQueryArgs {
  url: string;
  method?: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
  contentType?: string;
}

export const axiosBaseQuery =({ baseUrl }: { baseUrl: string } = { baseUrl: "" }): BaseQueryFn<AxiosBaseQueryArgs, unknown, unknown> =>
  async ({ url, method = "GET", data, params, headers, contentType }) => {
    try {
      const config: AxiosRequestConfig = {
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          ...(headers ?? {}),
          "Content-Type": contentType ?? "application/json",
        },
      };

      const result = await axios(config); 

      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data ?? err.message,
        },
      };
    }
  };
