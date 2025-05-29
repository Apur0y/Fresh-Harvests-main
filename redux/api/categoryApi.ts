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
      query: (data) => ({
        url: "/booking-applications",
        method: "POST",
        data: data,
      })
    }),

    

        


    }),

    

})


export const {
    useGetCategoryQuery
} =categoryApi