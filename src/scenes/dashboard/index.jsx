import Header from "../../components/Header";
import { Typography, Box, Button, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import TokenIcon from '@mui/icons-material/Token';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import StatBox from "../../components/StatBox";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import LineChart from "../../components/LineChart";
import UserResource from "../../components/UserResource";

import { getTotalToken, 
    getTotalResourceUsed, 
    getNewUserIn7Days, 
    getTotalResourceUsedByUser 
        } from "../../service/LoginService";
import { DataArray } from "@mui/icons-material";



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
    const [sumToken, setSumToken] = useState(-1)
    const [tokenIncrease, setTokenIncrease] = useState(-1)
    const [sumResource, setSumResource] = useState(-1)
    const [resourceIncrease, setResourceIncrease] = useState(-1)
    const [sumTimeUsed, setSumTimeUsed] = useState(-1)
    const [totalToken, setTotalToken] = useState([
        {
            id: 'tokens',
            data: []
        }
      ]);
    const [totalResource, setTotalResource] = useState([
        {
            id: 'resources',
            data: []
        }
    ]);

    const [totalResourceByUser, setTotalResourceByUser] = useState([])

    const fetchTotalToken = async () => {
        try {
            const data = await getTotalToken()
            if(data.status_code === 200) {
                const output = data.total_tokens_used_by_day.map(item => ({
                    x: item.date,
                    y: item.total_tokens_used
                }))
                setTotalToken([
                        {
                            id: 'tokens',
                            data: output
                        }
                      ])
                setTokenIncrease(output[output.length - 1].y)
                setSumToken(output.reduce((sum, item) => sum + item.y, 0))
            }
        } catch (e) {
            console.log(e)
        }
    }

    const fetchTotalResource = async () => {
        try {
            const data = await getTotalResourceUsed()
            if(data.status_code === 200) {
                const output = data.total_resource_used_by_day.map(item => ({
                    x: item.date,
                    y: item.total_resource_used
                }))
                setTotalResource([
                        {
                            id: 'resources',
                            data: output
                        }
                      ])
                setResourceIncrease(output[output.length - 1].y)
                setSumResource(output.reduce((sum, item) => sum + item.y, 0))
            }
        } catch (e) {
            console.log(e)
        }
    }

    const fetchtotalResourceByUser = async () => {
        try {
            const data = await getTotalResourceUsedByUser();
            if (data.status_code === 200) {
                setSumTimeUsed(Math.round(data.total_resource_used_by_user.reduce((total, item) => total + item.total_time_used, 0) / 86400 * 1000) / 1000)
                setTotalResourceByUser(data.total_resource_used_by_user)

            }
        } catch (e){
            console.log(e)
        }
    }


    useEffect(() => {
        fetchTotalToken()
        fetchtotalResourceByUser()
        fetchTotalResource()
    }, [])


    return(
    <Box m="20px">
        <Box height="100%" display="flex" justifyContent="space-between" alignItems="center">
        <Header title='DASHBOARD' subtitle='Admin Dashboard Surface'/>
       
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
                        title={sumToken}
                        subtitle="Tokens"
                        increase={`+ ${tokenIncrease}`}
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
                        title={sumTimeUsed}
                        subtitle="Time Usage (hour)"
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
                        title={sumResource}
                        subtitle="Resources"
                        increase={`+ ${resourceIncrease}`}
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
                position='relative'
            >
                <Box
                    position='absolute'
                    width='100%'
                    height='100%'
                > 
                    <Box
                        m='16px 16px 0 16px'
                        alignItems="center"
                    >
                        <Box position='absolute'>
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
                    height="180px" mt='40px'>
                    <LineChart data={totalResource}/>

                    </Box>
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
                    <UserResource data={totalResourceByUser}/>
                    </Box>
                    <Box height='250px' padding="12px">
                        <PieChart data={totalResourceByUser} totalData={262144} />
                    </Box>

                </Box>



                {/* Row 3 */}
            <Box
                position='relative'
                gridColumn="span 8"
                gridRow="span 3"
                height='100%'
                backgroundColor={colors.primary[400]}
            >
              <Box position='absolute'  bottom='0px' height='100%' width='100%'>
                <Typography m="16px 16px 0px 16px" 
                        color={colors.greenAccent[500]}
                        variant="h4" fontWeight="600">
                        Tokens Used Daily
                    </Typography>
                    <LineChart data={totalToken}/>
              </Box>

            </Box>
            
        </Box>




    </Box>

    )
}

export default Dashboard; 