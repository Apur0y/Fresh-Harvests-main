import { baseApi } from "./baseApi";

export const flatsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllFlats: build.query({
      query: (params) => ({
        url: `/flats?${params}`,
        method: "GET",
      }),
 
    }),
    getFlatById: build.query({
      query: (id) => ({
        url: `/flats/${id}`,
        method: "GET",
      }),
 
    }),
    getMyFlats: build.query({
      query: () => ({
        url: `/my-flats`,
        method: "GET",
      }),
 
    }),
    createFlat: build.mutation({
      query: (flatData) => ({
        url: `/flats`,
        method: "POST",
        data: flatData,
      }),

    }),
    updateFlat: build.mutation({
      query: ({ flatId, flatData }) => ({
        url: `/flats/${flatId}`,
        method: "PUT",
        data: flatData,
      }),

    }),
    deleteFlat: build.mutation({
      query: (flatId) => ({
        url: `/flats/${flatId}`,
        method: "DELETE",
      }),

    }),
    GetAllUser:build.query({
      query: () => ({
        url: `users`,
        method: "GET",
      }),
 
    }),
  }),
});

export const {
  useGetAllFlatsQuery,
  useGetFlatByIdQuery,
  useGetMyFlatsQuery,
  useCreateFlatMutation,
  useUpdateFlatMutation,
  useDeleteFlatMutation,
  useGetAllUserQuery
} = flatsApi;