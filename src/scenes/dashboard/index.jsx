import Header from "../../components/Header";
import { Typography, Box, Button, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import StatBox from "../../components/StatBox";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import LineChart from "../../components/LineChart";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette)



    return(
    <Box m="20px">
        <Box height="100%" display="flex" justifyContent="space-between" alignItems="center">
        <Header title='DASHBOARD' subtitle='Admin Dashboard Surface'/>
        <Button 
                sx={{ 
                    backgroundColor: colors.blueAccent[700], 
                    color: colors.grey[100], 
                    fontSize:"14px",
                    fontWeight: "bold",
                    padding: "7px 20px",
                    
                }}
            >
                <DownloadOutlinedIcon sx={{ mr:"10px"}}/>
                Download Report
            </Button>
        </Box>

        {/* GRID */}
        <Box
            height="100%"
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoFlow="140px"
            gap="20px"
            marginTop="24px"
        >
            {/* Row 1 */}
            <Box
                gridColumn="span 3" 
                backgroundColor={colors.primary[400]} 
                display="flex" 
                alignItems="center"
                justifyContent="center"
                >

                    <StatBox
                        title="230"
                        subtitle="Notebooks"
                        increase="+12%"
                        icon = {
                            <BookOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}}/>
                        }
                    />
            </Box>
            <Box 
                gridColumn="span 3" 
                backgroundColor={colors.primary[400]} 
                display="flex" 
                alignItems="center"
                justifyContent="center"
                >

                    <StatBox
                        title="1000"
                        subtitle="Notes"
                        increase="+7%"
                        icon = {
                            <NoteAltOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}}/>
                        }
                    />
            </Box>
            <Box 
                gridColumn="span 3" 
                backgroundColor={colors.primary[400]} 
                display="flex" 
                alignItems="center"
                justifyContent="center"
                >

                    <StatBox
                        title="720.4"
                        subtitle="Time Usage"
                        increase="+16%"
                        icon = {
                            <AccessTimeOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}}/>
                        }
                    />
            </Box>
            <Box 
                gridColumn="span 3" 
                backgroundColor={colors.primary[400]} 
                display="flex" 
                alignItems="center"
                justifyContent="center"
                >

                    <StatBox
                        title="400"
                        subtitle="Resources"
                        increase="+5%"
                        icon = {
                            <SourceOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}}/>
                        }
                    />
            </Box>

                        {/* Row 2 */}
            <Box
                gridColumn="span 8"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
            >
                <Box
                    mt="25px"
                    p="0 30px"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box>
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            color={colors.grey[400]}
                        >
                            Total Message Timeline
                        </Typography>
                        <Typography
                            variant="h3"
                            fontWeight="500"
                            color={colors.greenAccent[500]}
                        >
                            Total Message Timeline
                        </Typography>
                    </Box>

                    <Box>
                        <IconButton>
                            <DownloadOutlinedIcon 
                                sx ={{ fontSize: "26px", color: colors.greenAccent[500]}}
                            />
                        </IconButton>
                    </Box>
                </Box>

                <Box height="200px">
                    <BarChart />
                </Box>

                </Box>
                <Box 
                    gridColumn="span 4" 
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="hidden"
                    height="280px"
                >
                    <Typography
                        padding="12px"
                        variant="h4"
                        fontWeight="500"
                        color={colors.greenAccent[500]}
                        >
                            Message Type
                        </Typography>
                    <Box height="220px">
                    <PieChart />
                    </Box>

                </Box>



                {/* Row 3 */}
            <Box
                gridColumn="span 12"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
            >
                <Typography m="16px 16px 0px 16px" variant="h4" fontWeight="600">
                    Time Usage
                </Typography>
                <Box height="250px">
                <LineChart />
                </Box>

            </Box>
            
        </Box>




    </Box>

    )
}

export default Dashboard; 