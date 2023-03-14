import { api } from '@Services/index'

export const carApi = api.injectEndpoints({
    endpoints: (builder: any) => ({

        addCar: builder.mutation({
            query: (body: any) => {
                return {
                    url: `car`,
                    method: 'POST',
                    body,
                }
            },
            invalidatesTags: ['Car']
        }),
        getAllCars: builder.query({
            query: ({
                categoryId
            }: any) => ({
                url: `car/${categoryId ? categoryId : "all"}`
            }),
            providesTags: ['Car'],
        }),
        getCar: builder.query({
            query: (id: any) => ({
                url: `car/car-by-id/${id}`
            }),
        }),
        updateCar: builder.mutation({
            query: ({
                id,
                body,
            }: any) => {
                return {
                    url: `car/${id}`,
                    method: 'PATCH',
                    body,
                }
            },
            invalidatesTags: ['Car']
        }),
        deleteCar: builder.mutation({
            query: (id: any) => {
                return {
                    url: `car/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Car']
        }),
    }),
})

export const {
    useGetCarQuery,
    useAddCarMutation,
    useGetAllCarsQuery,
    useUpdateCarMutation,
    useDeleteCarMutation,
} = carApi