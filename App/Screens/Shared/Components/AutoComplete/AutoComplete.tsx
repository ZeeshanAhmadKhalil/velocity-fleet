import * as React from 'react';
import MuiAutocomplete from '@mui/material/Autocomplete';
import { alpha, InputBase, styled, ThemeProvider, Typography, useTheme, } from '@mui/material';
import { lightTheme } from '@Config/theme';
import { Controller } from 'react-hook-form';
import { camelToTitle } from '@Config/helper';

const TextField
    = styled(InputBase)(({
        theme: {
            spacing,
            palette: {
                dialog,
                text,
                tableSeparator,
                primary,
            },
            transitions,
        },
        width
    }: any) => ({
        'label + &': {
            marginTop: spacing(3),
        },
        '& .MuiInputBase-input': {
            position: 'relative',
            backgroundColor: dialog.main,
            color: text.contrastText,
            border: `1px solid ${tableSeparator.dark}`,
            fontSize: 14,
            width: width ? width : 250,
            height: 10,
            padding: '10px 12px',
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

export default function AutoComplete({
    name,
    error,
    options,
    watch,
    styles,
    control,
    customChange,
    hideTextField,
    theme = lightTheme,
    handleEnter = null,
}: any) {

    const {
        palette: {
            cancelled,
        }
    }: any = useTheme()

    const [inputValue, setInputValue] = React.useState('');

    return (
        <div
            style={{
                position: 'relative',
                border: '0px solid red'
            }}
        >
            <ThemeProvider theme={theme}>
                <Controller
                    control={control}
                    name={name}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => {


                        return (
                            <MuiAutocomplete
                                noOptionsText="Press enter to add"
                                value={value ? value : ''}
                                onChange={(event, newValue) => {
                                    onChange(newValue)
                                }
                                }
                                inputValue={inputValue}
                                onInputChange={(event, newInputValue) => {
                                    setInputValue(newInputValue);
                                }}
                                options={options}
                                sx={{ width: 305 }}
                                renderInput={(params) => {


                                    const {
                                        InputLabelProps,
                                        InputProps,
                                        ...rest
                                    } = params

                                    return (
                                        <TextField
                                            {...params.InputProps}
                                            {...rest}
                                            onKeyUp={(event) => {
                                                if (event.key == "Enter")
                                                    handleEnter(inputValue)
                                            }}
                                        />
                                    )
                                }
                                }
                            />
                        )
                    }}
                />
            </ThemeProvider>
            {error &&
                <div
                    style={{
                        height: 15,
                        display: 'flex',
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: -15,
                    }}
                >
                    <Typography
                        color={cancelled.main}
                        lineHeight={0}
                        variant="caption"
                        component="div"
                    >
                        {`${camelToTitle(name)} is required`}
                    </Typography>
                </div>
            }
        </div>
    )
}