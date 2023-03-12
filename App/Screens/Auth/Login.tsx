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
                    onClick={null}
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