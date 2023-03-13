import { api } from '@Services/index'

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => {
                return {
                    url: `/auth/login`,
                    method: 'POST',
                    body,
                }
            },
        }),
        register: builder.mutation({
            query: (body) => {
                return {
                    url: `/auth/register`,
                    method: 'POST',
                    body,
                }
            },
        }),
    }),
})

export const {
    useLoginMutation,
    useRegisterMutation,
} = authApi