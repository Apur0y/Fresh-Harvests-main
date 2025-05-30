
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: () => ({
        url: "api/v1/users",
        method: "GET",
      }),
      
    }),
    registerUser: build.mutation({
      query: (userData) => ({
        url: "api/v1/users/register",
        method: "POST",
        data: userData
      }),
      
    }),

    UpdateUserProfile: build.mutation({
      query: (userData) => ({
        url: "api/v1/users/profile",
        method: "PUT",
        data: userData,
      }),
    
    }),
    UpdateUserById: build.mutation({
      query: ({ userId, updatedData }) => ({
        url: `api/v1/users/${userId}`,
        method: "PUT",
        data: updatedData,
      }),
    
    })
   
  }),
});

export const {
  useGetAllUserQuery,
  useRegisterUserMutation,
  useUpdateUserProfileMutation,
 useUpdateUserByIdMutation,
} = userApi;