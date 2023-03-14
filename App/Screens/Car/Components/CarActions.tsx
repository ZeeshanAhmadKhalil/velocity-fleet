import Button from '@Components/Button/Button';
import SimpleDropDown from '@Components/SimpleDropdown/SimpleDropdown';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useGetAllCategoriesQuery } from '@Screens/Category/categoryApi';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useDeleteCarMutation } from '../Services/carApi';
import { editAddCarDialog, setAddCarDialog } from '../Store/carSlice';

function CarActions(props: any) {

    var {
        data = [],
        isFetching
    }: any = useGetAllCategoriesQuery(null)

    const [
        deleteCar,
        { isLoading }
    ] = useDeleteCarMutation()

    const categoryList = data.map((item: any) => ({
        label: item.name,
        value: item._id,
    }))

    const dispatch = useDispatch()

    const {
        selectedCars,
        setSelectedCategory,
        selectedCategory,
    } = props || {}

    const handleDelete = async () => {

        let response
            = await deleteCar(selectedCars[0])

        const {
            error,
            data: respData
        }: any = response || {}

        if (respData)
            toast.success("Car deleted successfully.")
        else if (error)
            toast.error(error?.data?.message)
    }

    return (
        <>
            <Button
                onClick={() => dispatch(setAddCarDialog(true))}
                iconOnSmall={<AddIcon />}
                color={"lightPink"}
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                NEW CAR
            </Button>
            {selectedCars?.length == 1 &&
                <>
                    <Button
                        onClick={handleDelete}
                        isLoading={isLoading}
                        iconOnSmall={<DeleteIcon />}
                        color={"warning"}
                        startIcon={null}
                        style={{
                            borderRadius: 3,
                            marginRight: 10
                        }}
                    >
                        DELETE
                    </Button>
                    <Button
                        onClick={() => dispatch(editAddCarDialog({
                            addCarDialog: true,
                            editCarId: selectedCars[0]
                        }))}
                        iconOnSmall={<EditIcon />}
                        color={"pink"}
                        startIcon={null}
                        style={{
                            borderRadius: 3,
                            marginRight: 10
                        }}
                    >
                        Edit
                    </Button>
                </>
            }
            <SimpleDropDown
                value={selectedCategory}
                list={categoryList}
                onChange={setSelectedCategory}
                label="Category"
            />
        </>
    )
}

export default CarActions