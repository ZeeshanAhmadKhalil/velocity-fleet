import StatsTile from '@Components/StatsTile/StatsTile';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Box, useTheme } from '@mui/material';
import { useGetAllCarsQuery } from '@Screens/Car/Services/carApi';
import cls from 'classnames';

function Dashboard() {

    const {
        palette: {
            icon,
            background,
            borders
        }
    }: any = useTheme()

    var {
        data = [],
        isFetching
    }: any = useGetAllCarsQuery({
        categoryId: null
    })

    return (
        <>
            <TitleHeader
                title="Dashboard"
                actionButtons={null}
            />
            <Box
                className={cls(
                    'flex',
                    'flex-wrap',
                    'mb-5'
                )}
            >
                <StatsTile
                    name="Total Cars"
                    nameColor={icon?.dark}
                    value={data.length}
                    valueColor={icon?.dark}
                    icon={
                        <Box
                            className={cls(
                                'h-[37px]',
                                'w-[37px]',
                                'rounded-full',
                                'p-[5px]',
                                'items-center',
                                'justify-center',
                                'flex'
                            )}
                            sx={{
                                border: `0.5px solid ${icon?.dark}`
                            }}
                        >
                            <ThunderstormIcon />
                        </Box>
                    }
                    styles={{
                        marginRight: 5,
                        background: background?.main + "2",
                        border: `0.5px solid ${borders.light}`
                    }}
                />
            </Box>
        </>
    )
}

export default Dashboard