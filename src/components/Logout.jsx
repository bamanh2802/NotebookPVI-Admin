import React from "react";
import { tokens } from "../theme";
import { Typography, Box, useTheme } from "@mui/material";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { LogoutAdmin } from "../service/LoginService";
import { useNavigate } from "react-router";

const Logout = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
          const data = await LogoutAdmin();
          localStorage.removeItem("session")
          navigate('/login')
        } catch (error) {
          console.error('Error update notebooks:', error);
        }
      }

    return (
        <Box
            position='absolute'
            width='150px'
            height='60px'
            top='36px' 
            right='12px'
            backgroundColor={colors.primary[600]}
            zIndex='10000'
        >
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                width='100%'
                height='100%'
                onClick={handleLogout}
            >
                <LogoutOutlinedIcon />
                <Typography>
                    Logout
                </Typography>
            </Box>

        </Box>
    )
}

export default Logout;