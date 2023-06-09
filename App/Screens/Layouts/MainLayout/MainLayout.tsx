import ScrollContainer from '@Components/ScrollContainer/ScrollContainer';
import {
    appBarHeight,
    drawerClosedWidth,
    drawerWidth,
    footerHeight,
    headerHeight
} from '@Config/constants';
import styled from '@emotion/styled';
import useWindowDimensions from '@Hooks/useWindowDimensions';
import { CssBaseline } from '@mui/material';
import MuiBox from '@mui/material/Box';
import { Box } from '@mui/system';
import cls from 'classnames';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HoverSidebar from './Components/Sidebar/HoverSidebar';
import Sidebar from './Components/Sidebar/Sidebar';
import styles from './MainLayout.module.scss';

let ContentBox = styled(MuiBox, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }: any) => ({
    marginTop: headerHeight,
    marginRight: drawerClosedWidth,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: open ? drawerWidth : drawerClosedWidth,
}))

function MainLayout(props: any) {

    const router = useRouter()

    const {
        height,
        width,
    } = useWindowDimensions()

    const {
        children
    } = props

    const {
        sidebar,
    } = useSelector((state: any) => state.layout)
    const {
        themes,
        selectedTheme,
    } = useSelector((state: any) => state.theme)
    const {
        user
    } = useSelector((state: any) => state.auth)

    if (!user?.access_token)
        router.push('/login')

    let selectedImagePath
        = themes
            .find((obj: any) => obj.id == selectedTheme)
            ?.imagePath

    if (user?.access_token)
        return (
            <MuiBox
                sx={{
                    display: 'flex',
                    background: `url('${selectedImagePath}')`,
                    backgroundSize: 'cover',
                }}
                className={cls(
                    styles.mainLayoutContainer,
                    `h-screen`,
                    `border-red-700`, `border-0 `,
                )}
            >
                <CssBaseline />
                <Header />
                <Sidebar />
                <HoverSidebar />
                <ContentBox
                    open={sidebar}
                    component="main"
                    sx={{ flexGrow: 1, }}
                    className={cls(
                        `border-red-700`, `border-0`,
                        `px-4`,
                    )}
                >
                    <ScrollContainer>
                        <Box
                            sx={{
                                border: '0px solid red',
                                minHeight: height
                                    - appBarHeight
                                    - footerHeight
                            }}
                        >
                            {children}
                        </Box>
                        <Footer />
                    </ScrollContainer>
                </ContentBox>
            </MuiBox>
        )
    else
        return null
}

export default MainLayout