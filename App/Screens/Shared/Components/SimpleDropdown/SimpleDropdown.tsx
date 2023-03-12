import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SimpleDropDown({
    value,
    list,
    onChange,
    label,
}: any) {

    const handleChange = (event: any) => {
        onChange(event.target.value);
    };

    const renderList = list.map(({
        label,
        value,
    }: any) => (
        <MenuItem
            key={value}
            value={value}
        >
            {label}
        </MenuItem>
    ))

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    {label}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    {renderList}
                </Select>
            </FormControl>
        </Box>
    );
}