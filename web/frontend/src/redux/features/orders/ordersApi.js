import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseURL";


const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/api/orders`,
        credentials: 'include'
    }),
    tagTypes: ['Orders'],
    endpoints: (builder) => ({
        createOrder: (builder.mutation) ({
            query: (newOrder) => ({
                url: "/",
                method: "POST",
                body: newOrder,
                credentials: 'include',
            })
        }),
        getOrderByEmail: builder.query({
            query: (email) => {
              console.log("Fetching orders with email:", email); // Log the email to confirm it's being passed correctly
              return {
                url: `/email/${email}`
              };
            },
            providesTags: ['Orders']
        })
    })
})

export const {useCreateOrderMutation , useGetOrderByEmailQuery} = ordersApi;

export default ordersApi;