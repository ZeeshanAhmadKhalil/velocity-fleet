import { api } from '@Services/index'

export const categoryApi = api.injectEndpoints({
    endpoints: (builder: any) => ({

        addCategory: builder.mutation({
            query: (body: any) => {
                return {
                    url: `category`,
                    method: 'POST',
                    body,
                }
            },
            invalidatesTags: ['Category']
        }),
        getAllCategories: builder.query({
            query: () => ({
                url: `category`
            }),
            providesTags: ['Category'],
        }),
        getCategory: builder.query({
            query: (id: any) => ({
                url: `category/${id}`
            }),
        }),
        updateCategory: builder.mutation({
            query: (body: any) => {
                return {
                    url: `category`,
                    method: 'PATCH',
                    body,
                }
            },
            invalidatesTags: ['Category']
        }),
        deleteCategory: builder.mutation({
            query: (id: any) => {
                return {
                    url: `category/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Category']
        }),
    }),
})

export const {
    useGetCategoryQuery,
    useAddCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
    useGetAllCategoriesQuery,
} = categoryApi