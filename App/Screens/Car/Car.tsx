import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import {
    useState
} from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import AddCarDialog from './Components/AddCar/AddCarDialog';
import CarActions from './Components/CarActions';
import {
    setAddCarDialog
} from './Store/carSlice';

function Car() {

    let columns = [
        {
            field: 'id',
            headerName: 'Id',
            width: 50,
            hide: true,
            hidable: true,
        },
        {
            field: 'color',
            headerName: 'Client Name',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
        },
        {
            field: 'model',
            headerName: 'Email',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
        },
        {
            field: 'make',
            headerName: 'Mobile',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
        },
        {
            field: 'registrationNo',
            headerName: 'Assigned To Pfp',
            width: 200,
            hide: false,
        },
        {
            field: 'category',
            headerName: 'Assigned To Pfp',
            width: 200,
            hide: false,
        },
    ]

    let cars: any = []

    const dispatch = useDispatch()

    const [selectedCars, setSelectedCars] = useState([])

    return (
        <>
            <TitleHeader
                title="Cars"
                actionButtons={
                    <CarActions
                        selectedCars={selectedCars}
                    />
                }
            />
            <Table
                title="Cars"
                onSelectionModelChange={(selected: any) =>
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