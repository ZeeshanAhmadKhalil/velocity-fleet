import { lightTheme } from '@Config/theme';
import {
    Box,
    ThemeProvider
} from '@mui/material';
import cls from 'classnames';

function AuthLayout({
    children,
}: any) {

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
}

export default AuthLayout