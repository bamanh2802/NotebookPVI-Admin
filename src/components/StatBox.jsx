
import { Box, useTheme, Typography } from '@mui/material'
import { tokens } from "../theme"

const StatBox = ({ title, subtitle, icon, increase}) =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)



    return (
        <Box height='128px' width="100%" m="0 30px" display="flex" alignItems="center">
            <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                    {icon}
                    <Typography 
                        variant='h4' 
                        fontWeight="bold" 
                        sx={{ color: colors.grey[100]}}
                    >
                        {title}
                    </Typography>
                    <Typography 
                        variant='h5'  
                        sx={{ color: colors.greenAccent[500]}}
                    >
                        {subtitle}
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                   
                    <Typography 
                        variant='h5' 
                        fontStyle='itatlic'
                        sx={{ color: colors.greenAccent[600]}}
                    >
                        {increase}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default StatBox