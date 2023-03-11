import Button from '@Components/Button/Button';
import { useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';

function AddCarActions(props: any) {

    const {
        onClose,
        handleSubmit,
    } = props || {}

    const dispatch = useDispatch()
    const {
        palette: {
            text: { grey }
        }
    }: any = useTheme()

    const handleAddCar = handleSubmit((data: any) => {
        console.log("data===>", data)
    })


    return (
        <>
            <Button
                onClick={handleAddCar}
                color={"primary"}
                style={{
                    borderRadius: 3,
                    paddingLeft: 20,
                    paddingRight: 20,
                    color: grey,
                    fontWeight: 'bold',
                }}
            >
                {"ADD Car"}
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