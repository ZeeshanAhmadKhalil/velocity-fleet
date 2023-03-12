import AutoComplete from '@Components/AutoComplete/AutoComplete';
import DatePicker from '@Components/DatePicker/DatePicker';
import DropDown from '@Components/DropDown/DropDown';
import TextInput from '@Components/TextInput/TextInput';
import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box, Divider,
    Grid,
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

const Label = styled(Typography)(({ theme }) => {

    const {
        text: { xxxGrey },
    }: any = theme.palette

    return {
        color: xxxGrey,
        fontWeight: 500,
    }
})

function AddCarDialog() {

    let categories = [
        "Super Car",
        "Hyper Car",
        "Sports Car",
    ]

    const defaultValues = {
        color: null,
        model: null,
        make: null,
        registrationNo: null,
        topSpeed: null,
        category: categories[0],
    }

    const {
        palette: {
            tableSeparator: { light }
        }
    }: any = useTheme()

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
    } = useSelector((state: any) => state.car)

    const {
        register,
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
        setValue,
    } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    const handleEnter = (value: any) => {
        console.log("value===>", value)
        categories.push(value)
        setValue('category', value)
    }

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
                        backgroundColor: tableSeparator?.light,
                        mb: 2,
                    }}
                />
                <Grid
                    container
                    rowSpacing={3}
                    className={cls(
                        'border-red-700',
                        'border-0',
                        'flex',
                        'items-center',
                    )}
                >
                    <Grid item xl={2} md={6} xs={12}>
                        <Label
                            variant="subtitle1"
                        >
                            Color
                        </Label>
                    </Grid>
                    <Grid item xl={4} md={6} xs={12}>
                        <TextInput
                            register={register("color", {
                                required: true,
                            })}
                            name="color"
                            error={errors.color}
                        />
                    </Grid>
                    <Grid item xl={2} md={6} xs={12}>
                        <Label
                            variant="subtitle1"
                        >
                            Model
                        </Label>
                    </Grid>
                    <Grid item xl={4} md={6} xs={12}>
                        <TextInput
                            register={register("model", {
                                required: true,
                            })}
                            name="model"
                            error={errors.model}
                        />
                    </Grid>
                    <Grid item xl={2} md={6} xs={12}>
                        <Label
                            variant="subtitle1"
                        >
                            Make
                        </Label>
                    </Grid>
                    <Grid item xl={4} md={6} xs={12}>
                        <TextInput
                            register={register("make", {
                                required: true,
                            })}
                            name="make"
                            error={errors.make}
                        />
                    </Grid>
                    <Grid item xl={2} md={6} xs={12}>
                        <Label
                            variant="subtitle1"
                        >
                            Registration No.
                        </Label>
                    </Grid>
                    <Grid item xl={4} md={6} xs={12}>
                        <TextInput
                            register={register("registrationNo", {
                                required: true,
                            })}
                            name="registrationNo"
                            error={errors.registrationNo}
                        />
                    </Grid>
                    <Grid item xl={2} md={6} xs={12}>
                        <Label
                            variant="subtitle1"
                        >
                            Top Speed
                        </Label>
                    </Grid>
                    <Grid item xl={4} md={6} xs={12}>
                        <TextInput
                            register={register("topSpeed", {
                                required: true,
                            })}
                            name="topSpeed"
                            error={errors.topSpeed}
                        />
                    </Grid>
                    <Grid item xl={2} md={6} xs={12}>
                        <Label
                            variant="subtitle1"
                        >
                            Category
                        </Label>
                    </Grid>
                    <Grid item xl={4} md={6} xs={12}>
                        <AutoComplete
                            watch={watch}
                            name="category"
                            control={control}
                            options={categories}
                            error={errors.category}
                            handleEnter={handleEnter}
                        />
                    </Grid>
                </Grid>
            </Container>
        </RightDialogLayout >
    );
}

export default AddCarDialog