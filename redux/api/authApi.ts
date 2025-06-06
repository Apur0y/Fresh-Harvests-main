import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (loginData) => ({
        url: "api/v1/auth/login",
        method: "POST",
        data:loginData
      }),
       invalidatesTags: ['UserProfile'], 
    }),

    getUserProfile: build.query({
      query: () => ({
        url: "api/v1/auth/profile",
        method: "GET",
         headers: {
      'Authorization': localStorage.getItem('token')
    }
      }),
       providesTags: ['UserProfile' ],
    }),
     changePassword: build.mutation({
      query: (passwordData) => ({
        url: `api/v1/auth/change-password`,
        method: "PUT",
        data: passwordData,
      }),
    
    }),
  })
})

export const {
    useGetUserProfileQuery,
    useLoginUserMutation,
    useChangePasswordMutation
} =authApi;