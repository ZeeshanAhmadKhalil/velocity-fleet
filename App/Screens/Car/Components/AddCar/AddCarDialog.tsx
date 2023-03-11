import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box, Divider,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import { setAddCarDialog } from '@Screens/Car/Store/carSlice';
import cls from 'classnames';
import { useForm } from 'react-hook-form';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import AddCarActions from './AddCarActions';
import styles from './AddCarDialog.module.scss';

const Container = styled(Box)(({ theme }) => {

    const {
        dialog: {
            main
        }
    }: any = theme.palette || {}

    return {
        backgroundColor: main,
        padding: 20,
        marginTop: 10,
    }
})

function AddCarDialog() {

    const defaultValues = {
        firstName: null,
        lastName: null,
        ssnNumber: null,
        emailId: null,
        mobileNo: null,
        phoneNo: null,
        website: null,
        address: null,
        city: null,
        state: null,
        country: null,
        zipCode: null,
        hasPreviousAddress: null,
        previousAddress: null,
        previousCity: null,
        previousState: null,
        previousCountry: null,
        previousZipCode: null,
        provider: null,
        username: null,
        password: null,
        ssn: null,
        hasAttachmentAgreement: null,
        attachmentAgreement: null,
        requiredDocuments: [],
        otherRequiredDocument: null
    }

    const dispatch = useDispatch()
    const {
        palette: {
            tableSeparator
        }
    }: any = useTheme()

    const {
    } = useSelector((state: any) => state.shared)
    const {
        addCarDialog
    } = useSelector((state: any) => state.Cars)

    const {
        register,
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    return (
        <RightDialogLayout
            onClose={() => dispatch(setAddCarDialog(false))}
            actionButtons={
                <AddCarActions
                    handleSubmit={handleSubmit}
                    onClose={() =>
                        dispatch(setAddCarDialog(false))
                    }
                />
            }
            open={addCarDialog}
            closeBtnText="Car"
            title={"Add Car"}
        >
            <Container>
                <Typography
                    color="text.xxGrey"
                    variant='subtitle2'
                    className={cls(
                        styles.formDesc
                    )}
                >
                    {"You can add car here."}
                </Typography>
                <Divider
                    sx={{
                        backgroundColor: tableSeparator?.light
                    }}
                />
            </Container>
        </RightDialogLayout >
    );
}

export default AddCarDialog