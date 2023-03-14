import Button from '@Components/Button/Button'
import TextInput from '@Components/TextInput/TextInput'
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Typography,
    useTheme
} from '@mui/material'
import { useForm } from 'react-hook-form'
import cls from 'classnames';
import { useRouter } from 'next/router';
import { useRegisterMutation } from './Services/authApi';
import { emailRegex } from '@Config/constants';
import toast from 'react-hot-toast';

const Register = () => {

    let emailValidation: any = {
        required: true,
        pattern: {
            value: emailRegex
        }
    }

    const defaultValues = {
        fullName: null,
        email: null,
    }

    const router = useRouter()

    const {
        palette: {
            text: { grey }
        }
    }: any = useTheme()

    const [
        registerUser,
        { isLoading }
    ] = useRegisterMutation()

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

    const handleRegister = handleSubmit(async data => {

        let response
            = await registerUser(data)

        console.log("response===>", response)

        const {
            error,
            data: respData,
        }: any = response || {}

        if (respData) {

            toast.success("Registered successfully, please check your email")
            router.push('/login')
        } else if (error)
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
                    {"Register to continue"}
                </Typography>
                <Box sx={{ mb: 3 }}>
                    <TextInput
                        register={register("fullName", {
                            required: true,
                        })}
                        name="fullName"
                        error={errors.fullName}
                    />
                </Box>
                <Box sx={{ mb: 3 }}>
                    <TextInput
                        register={register("email",
                            emailValidation
                        )}
                        name="email"
                        error={errors.email}
                        message="Enter valid email"
                    />
                </Box>
                <Button
                    onClick={handleRegister}
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
                    {"Register"}
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
                        {"Already a user?"}
                    </Typography>
                    <Typography
                        onClick={() =>
                            router.push('/login')
                        }
                        color="text.link"
                        variant='subtitle2'
                        sx={{
                            mt: 1,
                            cursor: 'pointer',
                        }}
                    >
                        {"Login"}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Register