import CollapsableForm from '@Components/CollapsableForm/CollapsableForm';
import DropDown from '@Components/DropDown/DropDown';
import TextInput from '@Components/TextInput/TextInput';
import {
    Grid,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import cls from 'classnames';
import { useSelector } from 'react-redux';

const Label = styled(Typography)(({ theme }) => {

    const {
        text: { xxxGrey },
    }: any = theme.palette

    return {
        color: xxxGrey,
        fontWeight: 500,
    }
})

function CreditMonitoringInformation(props: any) {

    const {
        register,
        errors,
        watch,
    } = props || {}

    const {
        palette: {
            tableSeparator: { light }
        }
    }: any = useTheme()

    const {
    } = useSelector((state: any) => state.clients)

    let providers = [
        { label: 'Zeeshan Ahmad', value: 1 },
        { label: 'Rafay', value: 2 },
        { label: 'Ali', value: 3 },
        { label: 'Usman', value: 4 },
        { label: 'Mudasir', value: 5 },
    ]

    return (
        <CollapsableForm
            title="Credit Monitoring Information"
        >
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
                        Select Provider
                    </Label>
                </Grid>
                <Grid item xl={4} md={6} xs={12}>
                    <DropDown
                        watch={watch}
                        register={register("provider")}
                        list={providers}
                        name="provider"
                        error={errors.provider}
                    />

                </Grid>
                <Grid item xl={2} md={6} xs={12}>
                    <Label
                        variant="subtitle1"
                    >
                        Username
                    </Label>
                </Grid>
                <Grid item xl={4} md={6} xs={12}>
                    <TextInput
                        register={register("username")}
                        name="username"
                        error={errors.username}
                    />
                </Grid>
                <Grid item xl={2} md={6} xs={12}>
                    <Label
                        variant="subtitle1"
                    >
                        Password
                    </Label>
                </Grid>
                <Grid item xl={4} md={6} xs={12}>
                    <TextInput
                        register={register("password")}
                        name="password"
                        error={errors.password}
                        placeholder="****"
                    />
                </Grid>
                <Grid item xl={2} md={6} xs={12}>
                    <Label
                        variant="subtitle1"
                    >
                        SSN
                    </Label>
                </Grid>
                <Grid item xl={4} md={6} xs={12}>
                    <TextInput
                        register={register("ssn")}
                        name="ssn"
                        error={errors.ssn}
                        placeholder="last 4 digits of ssn"
                    />
                </Grid>
            </Grid>
        </CollapsableForm >
    )
}

export default CreditMonitoringInformation