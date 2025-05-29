import { baseApi } from "./baseApi";


export const categoryApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        getCategory:build.query({
            query: ()=>({
                url:`api/v1/category`,
                method: "GET"
            })
        }),
       getCategoryById: build.query({
           query: (id) => ({
        url: `api/v1/category/${id}`,
        method: "GET",
      }),
 
    }),
        createCategory: build.mutation({
      query: (categoryData) => ({
        url: "api/v1/category",
        method: "POST",
        data: categoryData,
      })
    }),

     updateCategory: build.mutation({
      query: ({ categoryId, categoryData }) => ({
        url: `api/v1/category/${categoryId}`,
        method: "PUT",
        data: categoryData,
      })
    }),

    deleteCategory: build.mutation({
      query: (categoryId) => ({
        url: `api/v1/category/${categoryId}`,
        method: "DELETE",
      })
    })
  })
})


export const {
    useGetCategoryQuery,
    useGetCategoryByIdQuery,
    useCreateCategoryMutation,
    useDeleteCategoryMutation,
    useUpdateCategoryMutation
} =categoryApi