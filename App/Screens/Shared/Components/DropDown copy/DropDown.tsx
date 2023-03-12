import {
    camelToBreadcrumbs,
    camelToTitle
} from '@Config/helper';
import { lightTheme } from '@Config/theme';
import {
    alpha,
    Box,
    InputBase,
    styled,
    ThemeProvider,
    Typography
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';

const TextField
    = styled(InputBase)(({ theme: {
        spacing,
        palette: {
            dialog,
            text,
            tableSeparator,
            primary,
        },
        transitions,
    } }: any) => ({
        'label + &': {
            marginTop: spacing(3),
        },
        '& .MuiInputBase-input': {
            display: 'flex',
            alignItems: 'center',
            borderRadius: 0,
            backgroundColor: dialog.main,
            color: text.contrastText,
            border: `1px solid ${tableSeparator.dark}`,
            fontSize: 14,
            width: 250,
            minHeight: '0px !important',
            height: '30px !important',
            padding: '0px !important',
            paddingLeft: '12px !important',
            paddingRight: '12px !important',
            transition: transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
            ]),
            '&:focus': {
                boxShadow: `${alpha(primary.main, 0.25)} 0 0 0 0.2rem`,
                borderColor: primary.main,
            },
        },
    }));

const Placeholder = styled(Box)(({ theme }) => {

    const {
        palette: {
            text: {
                xGrey1
            }
        }
    }: any = theme

    return {
        position: 'absolute',
        top: 5,
        left: 10,
        color: xGrey1,
        cursor: 'pointer',
    }
})

function DropDown(props: any) {

    const {
        name,
        error,
        list,
        watch,
        styles,
        register,
        customChange,
        hideTextField,
        theme = lightTheme,
    } = props || {}

    const [open, setOpen] = useState(false)

    let customChangeProps = {}
    if (customChange)
        customChangeProps = {
            value: customChange.value,
            onChange: (event: any) => {
                customChange.onChange(
                    event.target.value
                )
            }
        }

    function RenderList() {
        return list?.map?.((item: any, key: any) => {

            const { label, value } = item || {}

            return (
                <MenuItem
                    key={key}
                    value={value}
                >
                    {label}
                </MenuItem>
            )
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <FormControl
                sx={{
                }}
                size="small"
            >
                <Select
                    sx={styles}
                    {...register}
                    {...customChangeProps}
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    labelId={camelToBreadcrumbs(name)}
                    id={camelToBreadcrumbs(name)}
                    input={hideTextField ?
                        undefined
                        :
                        <TextField />
                    }
                >
                    <MenuItem disabled value={""}>
                        <em>
                            {`Select ${camelToTitle(name)}`}
                        </em>
                    </MenuItem>
                    {RenderList()}
                </Select>
                {(
                    (watch && !watch?.(name)) ||
                    (customChange && !customChange?.value)
                ) &&
                    <Placeholder
                        onClick={() => setOpen(true)}
                    >
                        <Typography
                            variant='body2'
                        >
                            {`Select ${camelToTitle(name)}`}
                        </Typography>
                    </Placeholder>
                }
            </FormControl>
        </ThemeProvider >
    );
}

export default DropDown