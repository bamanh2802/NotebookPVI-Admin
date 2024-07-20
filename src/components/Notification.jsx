import React from "react";
import { tokens } from "../theme";
import { Typography, Box, Button, IconButton, useTheme } from "@mui/material";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';


const Notification = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);



    return (
        <Box 
            position='absolute' 
            height='400px' 
            width='360px' 
            backgroundColor={colors.primary[600]}
            top='36px' 
            right='12px'
            zIndex='10000'
            boxShadow='0px 4px 10px rgba(0, 0, 0, 0.25)'
        >
            <Box p='12px' >
                <Box 
                    display='flex' 
                    justifyContent='space-between' 
                    alignItems='center' 
                    borderBottom='1px solid #ccc'
                    padding='12px 0'
                >
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h4"
                    >
                        Notification
                    </Typography>
                    <Typography display='flex' justifyContent='center' alignContent='center'>
                        <DoneOutlinedIcon fontSize="small"/>
                        Mark all as read
                    </Typography>
                </Box>

            </Box>
            
         </Box>
    )
}


export default Notification;