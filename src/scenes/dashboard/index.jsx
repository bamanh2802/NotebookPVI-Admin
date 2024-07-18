import Header from "../../components/Header";
import { Typography, Box, Button, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import TokenIcon from '@mui/icons-material/Token';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import StatBox from "../../components/StatBox";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import LineChart from "../../components/LineChart";
import UserResource from "../../components/UserResource";
const dataTimeUsage = [
    {
      id: "tokens",
      data: [
        { x: "2024-06-18", y: 100 },
        { x: "2024-06-19", y: 200 },
        { x: "2024-06-20", y: 150 },
        { x: "2024-06-21", y: 175 },
        { x: "2024-06-22", y: 225 },
        { x: "2024-06-23", y: 300 },
        { x: "2024-06-24", y: 275 },
        { x: "2024-06-25", y: 350 },
        { x: "2024-06-26", y: 325 },
        { x: "2024-06-27", y: 400 },
        { x: "2024-06-28", y: 375 },
        { x: "2024-06-29", y: 450 },
        { x: "2024-06-30", y: 500 },
        { x: "2024-07-01", y: 550 },
        { x: "2024-07-02", y: 600 },
        { x: "2024-07-03", y: 650 },
        { x: "2024-07-04", y: 700 },
        { x: "2024-07-05", y: 750 },
        { x: "2024-07-06", y: 800 },
        { x: "2024-07-07", y: 850 },
        { x: "2024-07-08", y: 900 },
        { x: "2024-07-09", y: 950 },
        { x: "2024-07-10", y: 1000 },
        { x: "2024-07-11", y: 1050 },
        { x: "2024-07-12", y: 1100 },
        { x: "2024-07-13", y: 1150 },
        { x: "2024-07-14", y: 1200 },
        { x: "2024-07-15", y: 1250 },
        { x: "2024-07-16", y: 1300 },
        { x: "2024-07-17", y: 1350 },
      ],
    },
  ];


  const dataTrafic = [
    {
        id: 'Traffic',
        data: [
            { x: '2024-07-01', y: 1000 },
            { x: '2024-07-02', y: 1500 },
            { x: '2024-07-03', y: 700 },
            { x: '2024-07-04', y: 1200 },
            { x: '2024-07-05', y: 1300 },
            { x: '2024-07-06', y: 2000 },
            { x: '2024-07-08', y: 1200 },
            { x: '2024-07-09', y: 1300 },
            { x: '2024-07-10', y: 2000 },
            { x: '2024-07-11', y: 1200 },
            { x: '2024-07-12', y: 1300 },
            { x: '2024-07-13', y: 2000 },
        ]
    }
  
    // Thêm các dữ liệu khác
  ];
  
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
                        subtitle="Users"
                        increase="+12%"
                        icon = {
                            <PersonIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}}/>
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
                        subtitle="Token"
                        increase="+7%"
                        icon = {
                            <TokenIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}}/>
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
                gridRow="span 3"
                height='100%'
                backgroundColor={colors.primary[400]}
            >
                <Box
                    mt="25px"
                    p="0 30px"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box position='absolute' mt='24px'>
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

                    
                </Box>

                <Box 
                height="206px" mt='40px'>
                    {/* <BarChart /> */}
                    {/* <LineChart data={dataTrafic} /> */}
                <LineChart data={dataTrafic}/>

                </Box>

                </Box>
                <Box 
                    gridColumn="span 4" 
                    gridRow="span 6"
                    backgroundColor={colors.primary[400]}
                    overflow="hidden"
                    height="100%"
                >
                    <Typography
                        padding="12px"
                        variant="h4"
                        fontWeight="500"
                        color={colors.greenAccent[500]}
                        >
                            Resource Usage by User
                        </Typography>
                    <Box maxHeight='300px' overflow='auto' padding="12px">
                    <UserResource />
                    </Box>
                    <Box height='250px' padding="12px">
                        <PieChart />
                    </Box>

                </Box>



                {/* Row 3 */}
            <Box
                gridColumn="span 8"
                gridRow="span 4"
                height='100%'
                backgroundColor={colors.primary[400]}
            >
                <Typography m="16px 16px 0px 16px" 
                    color={colors.greenAccent[500]}
                variant="h4" fontWeight="600">
                    Time Usage
                </Typography>
                <LineChart data={dataTimeUsage}/>

            </Box>
            
        </Box>




    </Box>

    )
}

export default Dashboard; 