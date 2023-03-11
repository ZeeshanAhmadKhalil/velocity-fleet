import {
    ListItem,
    ListItemButton,
    ListItemIcon
} from '@mui/material';

function RightBarItem(props: any) {

    const {
        icon
    } = props

    return (
        <ListItem disablePadding sx={{ display: 'block', mt: 1 }}>
            <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: 'center',
                    px: 2.5,
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: 'auto',
                        justifyContent: 'center',
                    }}
                >
                    {icon}
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    )
}

export default RightBarItem