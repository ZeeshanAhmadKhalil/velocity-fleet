import { lightTheme } from '@Config/theme';
import {
    Box,
    ThemeProvider
} from '@mui/material';
import cls from 'classnames';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

function AuthLayout({
    children,
}: any) {

    const router = useRouter()

    const {
        user
    } = useSelector((state: any) => state.auth)

    if (user?.access_token)
        router.push('/')

    if (!user?.access_token)
        return (
            <ThemeProvider theme={lightTheme}>
                <Box
                    className={cls(
                        `border-red-700`, `border-0`,
                        'flex',
                        'justify-center',
                        'items-center',
                        'h-screen',
                    )}
                    sx={{
                        backgroundImage: `url(/Assets/Images/auth-background.jpg)`
                    }}
                >
                    {children}
                </Box>
            </ThemeProvider>
        )
    else
        return null
}

export default AuthLayout