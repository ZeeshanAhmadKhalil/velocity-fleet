import Avatar from '@Components/Avatar/Avatar';
import Button from '@Components/Button/Button';
import { setThemesDialog } from '@Layouts/Store/layoutSlice';
import {
    DialogContent,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import Box from '@mui/material/Box';
import MuiDialog from '@mui/material/Dialog';
import { setProfileDialog } from '@Screens/Shared/Store/sharedSlice';
import cls from 'classnames';
import BellGray from 'public/Assets/Svgs/bell-gray.svg';
import CloudScape from 'public/Assets/Svgs/cloud-scape.svg';
import Following from 'public/Assets/Svgs/following.svg';
import Letters from 'public/Assets/Svgs/letters.svg';
import Loader from 'public/Assets/Svgs/loader.svg';
import LoginHistory from 'public/Assets/Svgs/login-history.svg';
import Logout from 'public/Assets/Svgs/logout.svg';
import MyDisputeNetwork from 'public/Assets/Svgs/my-dispute-network.svg';
import New from 'public/Assets/Svgs/new.svg';
import RectangleRightArrow from 'public/Assets/Svgs/rectangle-right-arrow.svg';
import Tasks from 'public/Assets/Svgs/tasks.svg';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProfileDialog.module.scss';

const Dialog = styled(MuiDialog)(({ theme }) => {

    const {
        text,
        dialog,
    }: any = theme.palette

    return {
        '& .MuiPaper-root': {
            backgroundColor: dialog.off,
            color: text.contrastText,
            borderRadius: 20,
        },
        '& .MuiDialogContent-root': {
            padding: 15,
        },
        '& .MuiDialog-container': {
            justifyContent: "flex-end",
            alignItems: "flex-start",
            paddingTop: 30,
            paddingRight: 10,
        },
    }
})

const StyledBox = styled(Box)(({ theme }) => {
    const {
        shadow
    }: any = theme.palette

    return {
        borderRadius: 10,
        padding: 10,
        boxShadow: `0px 2px 7px -3px ${shadow.main}`,
        marginBottom: 15,
    }

})

function ProfileDialog() {

    const dispatch = useDispatch()
    const {
        palette: {
            borders: {
                secondary,
            },
            shadow: {
                main: mainShadow,
            },
            dialog: {
                main: mainDialog,
                xxOff,
            },
            text: {
                xGrey,
            },
            active: {
                main: mainActive
            },
            cancelled: {
                main: mainCancelled
            },
        }
    }: any = useTheme()

    const {
        profileDialog
    } = useSelector((state: any) => state.shared)
    const {
        themes,
        selectedTheme,
    } = useSelector((state: any) => state.theme)

    let selectedImagePath
        = themes
            .find((obj: any) => obj.id == selectedTheme)
            ?.imagePath

    return (
        <Dialog
            onClose={() => dispatch(setProfileDialog(false))}
            open={profileDialog}
            fullWidth={true}
            maxWidth="xs"
            hideBackdrop
        >
            <DialogContent
                sx={{
                    border: '0px solid red'
                }}
            >
                <StyledBox
                    sx={{
                        display: 'flex',
                        backgroundColor: "dialog.main",
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar
                            styles={{
                                height: 35,
                                width: 35,
                            }}
                        />
                        <Box
                            sx={{
                                ml: 1,
                            }}
                        >
                            <Typography
                                variant="body2"
                                component="div"
                                sx={{
                                    fontWeight: 'bold',
                                }}
                            >
                                D Luffy
                            </Typography>
                        </Box>
                    </Box>
                </StyledBox>
                <Box
                    sx={{
                        display: 'flex'
                    }}
                >
                    <StyledBox
                        sx={{
                            flex: 1,
                            mr: 1,
                            background: `url('${selectedImagePath}')`,
                            backgroundSize: 'cover',
                        }}
                        className={cls(
                            `bg-cover`,
                            `items-center`,
                            `flex`,
                            `flex-col`,
                        )}
                    >
                        <Box
                            className={cls(
                                `border-red-700`,
                                `border-0`,
                                `items-center`,
                                `flex`,
                                `w-full`,
                                `mb-3`,
                                `mt-2`,
                            )}
                        >
                            <CloudScape
                                height={25}
                                width={25}
                            />
                            <Typography
                                color="text.main"
                                variant="body2"
                                component="div"
                                sx={{
                                    ml: 1,
                                }}
                            >
                                Cloudscape view
                            </Typography>
                        </Box>
                        <Button
                            onClick={() => {
                                dispatch(setThemesDialog(true))
                                dispatch(setProfileDialog(false))
                            }}
                            color={"textOff"}
                            variant="text"
                            style={{
                                height: 25,
                                width: 80,
                                borderRadius: 50,
                                boxShadow: `0px 2px 7px -3px ${mainShadow}`,
                                backgroundColor: mainDialog,
                            }}
                        >
                            {"Change"}
                        </Button>
                    </StyledBox>
                </Box>
                <StyledBox
                    className={cls(
                        'cursor-pointer',
                    )}
                    sx={{
                        display: 'flex',
                        backgroundColor: "dialog.xOff",
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Logout
                            height={25}
                            width={25}
                        />
                        <Typography
                            variant="body2"
                            component="div"
                            sx={{
                                ml: 1,
                            }}
                        >
                            Logout
                        </Typography>
                    </Box>
                </StyledBox>
            </DialogContent >
        </Dialog >
    );
}

export default ProfileDialog