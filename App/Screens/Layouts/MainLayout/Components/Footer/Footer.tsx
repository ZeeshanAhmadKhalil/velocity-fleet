import Button from '@Components/Button/Button'
import DropDown from '@Components/DropDown/DropDown'
import { darkTheme } from '@Config/theme'
import CopyrightIcon from '@mui/icons-material/Copyright'
import {
    Typography,
    useTheme
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'

function Footer() {

    const priorityList = [
        { label: "English", value: 1 },
        { label: "Spanish", value: 2 },
        { label: "French", value: 3 },
    ]

    const {
        palette: {
            borders,
            text,
        }
    }: any = useTheme()

    const [language, setLanguage] = useState(1)

    return (

        <Box
            sx={{
                border: '0px solid red',
                marginTop: 1,
            }}
            display="flex"
            flexDirection="row"
            alignItems="center"
        >

            <Button
                color={"white"}
                variant="outlined"
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                {"Velocity Fleet"}
            </Button>
            <Box sx={{ marginLeft: "1rem" }}>
                <Typography>
                    <CopyrightIcon />
                    2023 Velocity Fleet
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer