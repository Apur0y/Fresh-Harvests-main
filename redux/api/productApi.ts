import { baseApi } from "./baseApi";


export const categoryApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        getProducts:build.query({
            query: ()=>({
                url:`api/v1/products`,
                method: "GET"
            })
        }),
       getProductById: build.query({
           query: (id) => ({
        url: `api/v1/products/${id}`,
        method: "GET",
      }),
 
    }),
        addProduct: build.mutation({
      query: (productData) => ({
        url: "api/v1/products",
        method: "POST",
        data: productData,
      })
    }),

     updateProduct: build.mutation({
      query: ({ productId, productData }) => ({
        url: `api/v1/products/${productId}`,
        method: "PUT",
        data: productData,
      })
    }),

    deleteProduct: build.mutation({
      query: (productId) => ({
        url: `/api/v1/products/${productId}`,
        method: "DELETE",
      })
    })
  })
})


export const {

} =categoryApi