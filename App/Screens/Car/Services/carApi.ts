import { api } from '@Services/index'

export const sharedApi = api.injectEndpoints({
    endpoints: (builder: any) => ({

        add: builder.mutation({
            query: (body: any) => {
                return {
                    url: ``,
                    method: 'POST',
                    body,
                }
            },
            invalidatesTags: ['Shared']
        }),
        get: builder.query({
            query: () => ({
                url: ``
            }),
            providesTags: ['Shared'],
        }),

    }),
})

export const {
    useAddMutation,
    useGetQuery,
} = sharedApi