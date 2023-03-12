import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { getId } from '@Config/helper';
import {
    useState
} from 'react';
import {
    useDispatch
} from 'react-redux';
import AddCarDialog from './Components/AddCar/AddCarDialog';
import CarActions from './Components/CarActions';
import {
    setAddCarDialog
} from './Store/carSlice';

let columns = [
    {
        field: 'id',
        headerName: 'Id',
        width: 0,
        hidable: true,
    },
    {
        field: 'color',
        headerName: 'Color',
        width: 200,
        headerClassName: 'separator-header',
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
    },
]

let cars = [
    {
        id: getId(),
        color: "Red",
        model: "Huracan",
        make: "Lamborghini",
        registrationNo: "",
        topSpeed: "260 kph ",
        category: 1,
    },
    {
        id: getId(),
        color: "Red",
        model: "Huracan",
        make: "Lamborghini",
        registrationNo: "",
        topSpeed: "260 kph ",
        category: 1,
    },
    {
        id: getId(),
        color: "Red",
        model: "Huracan",
        make: "Lamborghini",
        registrationNo: "",
        topSpeed: "260 kph ",
        category: 1,
    },
]

function Car() {

    const dispatch = useDispatch()

    const [selectedCars, setSelectedCars] = useState([])
    const [selectedCategory, setSelectedCategory] = useState([])

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
                title="Cars"
                onRowSelectionModelChange={(selected: any) =>
                    setSelectedCars(selected)
                }
                noRowsAction={() =>
                    dispatch(setAddCarDialog(true))
                }
                columns={columns}
                rows={cars}
            />
            <AddCarDialog />
        </>
    )
}

export default Car