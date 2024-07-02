import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const styledBox = styled(Box)``;


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    console.log(theme.palette.mode)
    const colorMode = useContext(ColorModeContext);



    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* Search */}
            <styledBox 
                display="flex" 
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"/>
                <IconButton type="button" sx={{ p: 1 }}></IconButton>
            </styledBox>

        {/* ICON */}
        <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )}
                {/* <LightModeOutlinedIcon /> */}
            </IconButton>
            <IconButton>
                <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
                <PersonOutlineOutlinedIcon />
            </IconButton>
        </Box>
        </Box>
    )
}

export default Topbar; 