import Button from '@Components/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { setAddCarDialog } from '../Store/carSlice';

function CarActions(props: any) {

    const dispatch = useDispatch()

    const {
        selectedCars
    } = props || {}

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
            {selectedCars?.length > 0 &&
                <>
                    <Button
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
                        iconOnSmall={<DeleteIcon />}
                        color={"warning"}
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
        </>
    )
}

export default CarActions