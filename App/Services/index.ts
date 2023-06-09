import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import { baseUrl } from 'App/Config/baseUrl'

export const api = createApi({
    tagTypes: [
        'Car',
        'Category',
    ],
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (
            headers,
            { getState }: any
        ) => {
            const token = getState().auth.user?.access_token

            if (token)
                headers.set('authorization', `Bearer ${token}`)

            return headers
        },
    }),
    endpoints: () => ({}),
})