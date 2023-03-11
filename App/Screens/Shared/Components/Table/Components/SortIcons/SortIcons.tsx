import { Box, useTheme } from '@mui/material';
import SortAsc from 'public/Assets/Svgs/SortAsc.svg';
import SortDes from 'public/Assets/Svgs/SortDes.svg';

function SortIcons(props: any) {

    const {
        asc,
        des,
    } = props || {}

    const {
        palette: {
            icon: {
                active,
                inactive,
            },
        }
    }: any = useTheme()

    return (
        <Box
            sx={{
                display: 'flex',
            }}
        >
            <Box
                sx={{
                    opacity: asc ? 1 : 0.63,
                }}
            >
                <SortDes
                    width={7}
                    color={asc ? active : inactive}
                />
            </Box>
            <Box
                sx={{
                    opacity: des ? 1 : 0.63,
                }}
            >
                <SortAsc
                    width={7}
                    color={des ? active : inactive}
                />
            </Box>
        </Box>
    )
}

export default SortIcons