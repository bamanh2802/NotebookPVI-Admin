import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from "../../components/Header";
import UserManager from "./UserManager";
import { useState } from "react";

const Users = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [openUserManager, setIsOpenUserManager] = useState(false)
    const [inititalValues, setInitialValues] = useState({});

    

    const handleSelectUser = (userSelected) => {
        const user = mockDataTeam.find(user => user.id === userSelected.id)
        const userValues = {
            userName: user.username,
            password: user.password,
            email: user.email,
            role: user.role,
        }
        setIsOpenUserManager(true)
        setInitialValues(userValues)
        console.log(userValues)
    }

    const handleStopPropagation = (event) => {
        event.stopPropagation();
        
    }

    const handleCloseUserManager = () => {
        setIsOpenUserManager(false)
    }

    const columns = [
        { field: "id", headerName: "ID"}, 
        { field: "username", headerName: "User Name", flex: 1, cellClassName:"name-column-cell"}, 
        { field: "email", headerName: "Email", flex: 1}, 
        { field: "notebooks", headerName: "Notebooks"}, 
        { field: "notes", headerName: "Notes"}, 
        { field: "role", headerName: "Role", renderCell: ({ row:{role} }) => {
            return (
                <Box 
                width="60%"
                m="0 0"
                p="5px"
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                // backgroundColor={
                //     role === "admin"
                //     ? colors.greenAccent[600]
                //     : colors.greenAccent[700]
                // }
                height="100%"
                borderRadius="4px"
                >
                    {role === "admin" && <AdminPanelSettingsOutlinedIcon />}
                    {role === "user" && <LockOutlinedIcon />}
                    {role === "manager" && <SecurityOutlinedIcon />}
                    <Typography color={colors.grey[100]} sx={{ ml: "5px"}}>
                        {role}
                    </Typography>
                </Box>
            )
        }}, 
        { field: "timeUsage", headerName: "Total Time Usage", flex: 1}, 
        { field: "totalResourceUsage", headerName: "Total Resource Usage", flex: 1}, 
        
    ]
    return(
        <Box m="20px">
            <Header title="User Managment" subtitle="Managing User Infomation" />
            <Box 
                m="40px 0 0 0 "
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root" : {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell":{
                        border: "none !important"
                    },
                    "& .name-column-cell": {
                        color: `${colors.greenAccent[300]} !important`
                    },
                    "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
                        backgroundColor: `${colors.blueAccent[700]} !important`,
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none !important",
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .css-tgsonj":{
                        border: "none !important"
                    },
                }}
            >
                <DataGrid
                    onRowClick={handleSelectUser}
                    rows={mockDataTeam}
                    columns={columns}>
                </DataGrid>
            </Box>

            {openUserManager && (
                <Box 
                    position="absolute"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bottom="0px"
                    left="125px"
                    width="100%"
                    height="100%"
                    backgroundColor="#3d3b3b61"
                    onClick={handleCloseUserManager}
                > 
                    <Box
                    onClick={handleStopPropagation}
                    backgroundColor={`${colors.blueAccent[800]}`}
                    minWidth="400px"
                    >
                        <Typography
                            variant="h4"
                            padding="16px 16px 0 16px"
                        >
                            Update User Info
                        </Typography>
                        <UserManager initialValues={inititalValues}/>    
                    </Box>
                    
                </Box>
            )}
        </Box>
    )
    
}

export default Users; 