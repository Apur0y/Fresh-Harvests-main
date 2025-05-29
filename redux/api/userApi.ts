
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: () => ({
        url: "api/v1/users",
        method: "GET",
      }),
      
    }),
    getSingleUser: build.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      
    }),

    UpdateUserProfile: build.mutation({
      query: (userData) => ({
        url: "/api/v1/users/profile",
        method: "PUT",
        data: userData,
      }),
    
    }),
    UpdateUserStatus: build.mutation({
      query: ({ userId, updatedData }) => ({
        url: `/api/v1/users/${userId}`,
        method: "PUT",
        data: updatedData,
      }),
    
    }),
    changePassword: build.mutation({
      query: (passwordData) => ({
        url: `/change-password`,
        method: "POST",
        data: passwordData,
      }),
    
    }),
  }),
});

export const {
  useGetSingleUserQuery,
  useGetUserWithProfileQuery,
  useGetAllUserQuery,
  useUpdateUserProfileMutation,
  useUpdateUserStatusMutation,
  useChangePasswordMutation,
} = userApi;