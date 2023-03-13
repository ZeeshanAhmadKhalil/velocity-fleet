import useWidth from '@Hooks/useWidth';
import { Button as MuiButton, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import cls from 'classnames';
import styles from './Buttom.module.scss';

function Button(props: any) {


    const {
        color,
        style,
        onClick,
        endIcon,
        children,
        startIcon,
        iconOnSmall,
        match = "md1",
        size = 'medium',
        isLoading=false,
        disableElevation,
        variant = "contained",
    } = props || {}

    const matches = useWidth(`${match} <`)

    return (
        <Stack direction="row" spacing={2}>
            {(iconOnSmall && matches) ?
                <IconButton
                    onClick={onClick}
                    className={cls(
                        ...styles.customButton,
                    )}
                    color={`text`}
                    style={{ ...style, }}
                    sx={{
                        "&:hover": {
                            backgroundColor: `${color}.hovered`,
                        },
                        backgroundColor: `${color}.main`,
                        textTransform: `none`,
                    }}
                    {...{
                        variant,
                        startIcon,
                        endIcon,
                        disableElevation
                    }}
                >
                    {(iconOnSmall && matches) ? iconOnSmall : children}
                </IconButton>
                :
                <MuiButton
                    disabled={isLoading}
                    size={size}
                    variant={variant}
                    onClick={onClick}
                    disableElevation={disableElevation}
                    className={cls(
                        ...styles.customButton,
                    )}
                    color={color}
                    startIcon={startIcon}
                    endIcon={endIcon}
                    style={{ ...style, }}
                    sx={{
                        "&:hover": {
                            backgroundColor: `${color}.hovered`,
                        },
                        textTransform: `none`
                    }}
                >
                    {(iconOnSmall && matches) ?
                        iconOnSmall
                        :
                        children
                    }
                </MuiButton>
            }
        </Stack>
    );
}

export default Button
