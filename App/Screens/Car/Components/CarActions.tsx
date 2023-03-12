import Button from '@Components/Button/Button';
import SimpleDropDown from '@Components/SimpleDropdown/SimpleDropdown';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { setAddCarDialog } from '../Store/carSlice';

function CarActions(props: any) {

    const categoryList = [
        { label: "Super Car", value: 1 },
        { label: "Hyper Car", value: 2 },
        { label: "Sports Car", value: 3 },
    ]

    const dispatch = useDispatch()

    const {
        selectedCars,
        setSelectedCategory,
        selectedCategory,
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
            {selectedCars?.length == 1 &&
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
            {selectedCars?.length > 1 &&
                <Button
                    iconOnSmall={<DeleteIcon />}
                    color={"warning"}
                    startIcon={null}
                    style={{
                        borderRadius: 3,
                        marginRight: 10
                    }}
                >
                    DELETE SELECTED
                </Button>
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