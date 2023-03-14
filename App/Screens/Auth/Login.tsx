import Button from '@Components/Button/Button';
import TextInput from '@Components/TextInput/TextInput';
import {
    Box,
    Card,
    CardContent,
    Typography,
    useTheme
} from '@mui/material';
import cls from 'classnames';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLoginMutation } from './Services/authApi';

const Login = () => {

    const defaultValues = {
        email: null,
        password: null,
    }

    const router = useRouter()

    const {
        palette: {
            text: { grey }
        }
    }: any = useTheme()

    const [
        login,
        { isLoading }
    ] = useLoginMutation()

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

    const handleLogin = handleSubmit(async data => {


        let response
            = await login(data)

        const {
            error,
            data: respData
        }: any = response || {}

        if (respData)
            toast.success("Logged in successfully.")
        else if (error)
            toast.error(error?.data?.message)
    })

    return (
        <Card
            sx={{
                border: '0px solid red',
                maxWidth: 400,
                height: 'fit-content'
            }}
        >
            <CardContent>
                <Typography
                    color="text.contrastText"
                    variant='h6'
                    sx={{
                        mb: 2
                    }}
                >
                    {"Login to continue"}
                </Typography>
                <Box sx={{ mb: 3 }}>
                    <TextInput
                        register={register("email", {
                            required: true,
                        })}
                        name="email"
                        error={errors.email}
                    />
                </Box>
                <Box sx={{ mb: 3 }}>
                    <TextInput
                        register={register("password", {
                            required: true,
                        })}
                        name="password"
                        error={errors.password}
                    />
                </Box>
                <Button
                    onClick={handleLogin}
                    isLoading={isLoading}
                    color={"primary"}
                    style={{
                        borderRadius: 3,
                        paddingLeft: 20,
                        paddingRight: 20,
                        color: grey,
                        fontWeight: 'bold',
                    }}
                >
                    {"LOGIN"}
                </Button>
                <Box
                    className={cls(
                        'flex',
                    )}
                >
                    <Typography
                        color="text.xGrey"
                        variant='subtitle2'
                        sx={{
                            mt: 1,
                        }}
                    >
                        {"First time?"}
                    </Typography>
                    <Typography
                        onClick={() =>
                            router.push('/register')
                        }
                        color="text.link"
                        variant='subtitle2'
                        sx={{
                            mt: 1,
                            cursor: 'pointer',
                        }}
                    >
                        {"Register"}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Login