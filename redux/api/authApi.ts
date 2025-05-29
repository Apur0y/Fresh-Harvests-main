import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addUser: build.mutation({
      query: () => ({
        url: "api/v1/auth/login",
        method: "POST",
      }),
      
    }),

    getUserProfile: build.query({
      query: () => ({
        url: "api/v1/auth/profile",
        method: "GET",
      }),
      
    }),
     changePassword: build.mutation({
      query: (passwordData) => ({
        url: `/change-password`,
        method: "POST",
        data: passwordData,
      }),
    
    }),
  })
})

export const {
    useGetUserProfileQuery,
    useAddUserMutation,
    useChangePasswordMutation
} =authApi;