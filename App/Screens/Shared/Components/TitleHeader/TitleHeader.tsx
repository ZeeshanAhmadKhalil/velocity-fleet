import { Box, Divider, Typography } from '@mui/material';
import cls from 'classnames';
import styles from './TitleHeader.module.scss';


function TitleHeader(props: any) {

    const {
        actionButtons,
        title,
    } = props || {}

    return (
        <>
            <Box
                className={cls(
                    `border-red-700`, `border-0`,
                    `pl-5 pt-3 pb-6`,
                    `flex`,
                    `items-center`,
                    `justify-between`,
                )}
            >
                <Box
                    className={cls(
                        `border-red-700`, `border-0`,
                        `items-center`,
                        `flex`
                    )}
                >
                    <Box
                        sx={{
                            display: { md: 'flex', xs: 'none' },
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            variant="h4"
                            className={cls(
                                `border-red-700`, `border-0`,
                                `pr-3`,
                                `text-[#F1F4F8]`,
                                styles.heading,
                            )}
                        >
                            {title}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    className={cls(
                        `border-red-700`, `border-0`,
                        `flex`,
                        `items-center`
                    )}
                >
                    {actionButtons}
                </Box>
            </Box>
            <Divider
                sx={{
                    borderWidth: 0.5,
                    borderColor: 'borders.main',
                    backgroundColor: 'borders.main',
                }} />
        </>
    )
}

export default TitleHeader