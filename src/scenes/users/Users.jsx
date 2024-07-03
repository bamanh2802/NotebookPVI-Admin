import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataTeam } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from "../../components/Header";

const Users = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    console.log(mockDataTeam)

    const columns = [
        { field: "id", headerName: "ID"}, 
        { field: "username", headerName: "User Name", flex: 1, cellClassName:"name-column-cell"}, 
        { field: "email", headerName: "Email", flex: 1}, 
        { field: "notebooks", headerName: "Notebooks"}, 
        { field: "notes", headerName: "Notes"}, 
        { field: "sources", headerName: "Sources"}, 
        { field: "role", headerName: "Role", renderCell: ({ row:{access} }) => {
            return (
                <Box 
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                    access === "admin"
                    ? colors.greenAccent[600]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
                >
                    {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                    {access === "user" && <LockOutlinedIcon />}
                    {access === "manager" && <SecurityOutlinedIcon />}
                </Box>
            )
        }}, 
        { field: "timeUsage", headerName: "Total Time Usage", flex: 1}, 
        { field: "totalResourceUsage", headerName: "Total Resource Usage", flex: 1}, 

        
    ]

    return(
        <Box>
            <Header title="User Managment" subtitle="Managing User Infomation" />
            <Box>
                <DataGrid>
                    rows={mockDataTeam}
                    columns={columns}
                </DataGrid>
            </Box>
        </Box>
    )
    
}

export default Users; 