import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { Chip } from '@mui/material';
import {
    useState
} from 'react';
import {
    useDispatch
} from 'react-redux';
import AddCarDialog from './Components/AddCar/AddCarDialog';
import CarActions from './Components/CarActions';
import { useGetAllCarsQuery } from './Services/carApi';
import {
    setAddCarDialog
} from './Store/carSlice';

let columns = [
    {
        field: '_id',
        headerName: 'Id',
        width: 0,
        hidable: true,
    },
    {
        field: 'model',
        headerName: 'Model',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
    },
    {
        field: 'make',
        headerName: 'Make',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
    },
    {
        field: 'color',
        headerName: 'Color',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        renderCell: ({
            value
        }: any) =>
            <Chip
                sx={{
                    width: 65,
                    bgcolor: value
                }}
            />
    },
    {
        field: 'registrationNo',
        headerName: 'Registration No',
        width: 200,
    },
    {
        field: 'topSpeed',
        headerName: 'Top Speed',
        width: 200,
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 200,
        valueFormatter: ({
            value
        }: any) =>
            value.name
    },
]

function Car() {

    const dispatch = useDispatch()

    const [selectedCars, setSelectedCars] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)

    var {
        data = [],
        isFetching
    } = useGetAllCarsQuery({
        categoryId: selectedCategory
    })

    return (
        <>
            <TitleHeader
                title="Cars"
                actionButtons={
                    <CarActions
                        selectedCars={selectedCars}
                        setSelectedCategory={setSelectedCategory}
                        selectedCategory={selectedCategory}
                    />
                }
            />
            <Table
                loading={isFetching}
                title="Cars"
                onRowSelectionModelChange={(selected: any) =>
                    setSelectedCars(selected)
                }
                noRowsAction={() =>
                    dispatch(setAddCarDialog(true))
                }
                columns={columns}
                rows={data}
            />
            <AddCarDialog />
        </>
    )
}

export default Car