import { baseApi } from "./baseApi";


export const categoryApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        getCategory:build.query({
            query: ()=>({
                url:`api/v1/category`,
                method: "GET"
            })
        }),

        


    }),

    

})


export const {
    useGetCategoryQuery
} =categoryApi