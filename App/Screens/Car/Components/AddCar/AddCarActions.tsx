import Button from '@Components/Button/Button';
import { useTheme } from '@mui/material';
import { useAddCarMutation, useGetCarQuery, useUpdateCarMutation } from '@Screens/Car/Services/carApi';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

function AddCarActions(props: any) {

    const {
        reset,
        onClose,
        categories,
        handleSubmit,
        defaultValues,
    } = props || {}

    const [
        addCar,
        { isLoading: isAdding }
    ] = useAddCarMutation()

    const [
        updateCar,
        { isLoading: isEditing }
    ] = useUpdateCarMutation()

    const {
        palette: {
            text: { grey }
        }
    }: any = useTheme()

    const {
        editCarId
    } = useSelector((state: any) => state.car)

    var {
        data: editCarData = null,
        isFetching
    }: any = useGetCarQuery(editCarId, {
        skip: !editCarId
    })

    const handleAddCar = handleSubmit(async (data: any) => {

        let categoryId
            = categories.find((obj: any) =>
                obj.name == data?.category
            )?._id

        let response 
            = await addCar({
                ...data,
                categoryId
            })

        const {
            error,
            data: respData
        }: any = response || {}

        if (respData) {

            toast.success("Car added successfully.")
            reset(defaultValues)
            onClose()

        } else if (error)
            toast.error(error?.data?.message)
    })

    const handleEditCar = handleSubmit(async (data: any) => {

        let categoryId
            = categories.find((obj: any) =>
                obj.name == data?.category
            )?._id

        let {
            category,
            ...carData
        } = data

        let response
            = await updateCar({
                id: editCarId,
                body: {
                    ...carData,
                    categoryId
                },
            })

        const {
            error,
            data: respData
        }: any = response || {}

        if (respData) {

            toast.success("Car updated successfully.")
            reset(defaultValues)
            onClose()

        } else if (error)
            toast.error(error?.data?.message)
    })

    useEffect(() => {

        if (editCarData) {

            let category
                = categories.find((obj: any) =>
                    obj._id == editCarData?.category
                )?.name

            console.log("editCarData===>", editCarData)

            reset({
                ...editCarData,
                category,
            })
        } else
            reset(defaultValues)

    }, [editCarData])

    return (
        <>
            <Button
                onClick={editCarId ?
                    handleEditCar
                    :
                    handleAddCar
                }
                isLoading={isAdding || isEditing}
                color={"primary"}
                style={{
                    borderRadius: 3,
                    paddingLeft: 20,
                    paddingRight: 20,
                    color: grey,
                    fontWeight: 'bold',
                }}
            >
                {`${editCarId ? "EDIT" : "ADD"} CAR`}
            </Button>
            <Button
                color={"text"}
                onClick={onClose}
                disableElevation
                style={{
                    color: grey,
                    fontWeight: 'bold',
                    marginLeft: 10,
                }}
            >
                CANCEL
            </Button>
        </>
    )
}

export default AddCarActions