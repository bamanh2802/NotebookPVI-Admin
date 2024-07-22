import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from "../../components/Header";
import UserManager from "./UserManager";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../service/LoginService";
import { ToastContainer, toast } from 'react-toastify';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import 'react-toastify/dist/ReactToastify.css';

const Users = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [openUserManager, setIsOpenUserManager] = useState(false);
    const [openUserManagerGrow, setIsOpenUserManagerGrow] = useState(false);
    const [initialValues, setInitialValues] = useState({});
    const [allUsers, setAllUsers] = useState([]);

    const fetchAllUsers = async () => {
        try {
            const data = await getAllUsers();
            if (data.status_code === 200) {
                // Thêm id vào mỗi user trong data.users
                const usersWithId = data.users.map((user, index) => ({
                    ...user,
                    id: index + 1,
                }));
                setAllUsers(usersWithId);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!openUserManager) {
            fetchAllUsers();
        }
    }, [openUserManager]);

    const popUpToast = (status, title) => {
        if(status === 'success') {
            toast.success(`${title}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        } else if (status === 'error') {
            toast.error(`${title}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }

    const handleSelectUser = (userSelected) => {
        const user = allUsers.find(user => user.id === userSelected.id);
        const userValues = {
            userName: user.username,
            password: user.password,
            email: user.email,
            role: user.role,
            userId: user.user_id
        };
        setInitialValues(userValues);
        setIsOpenUserManager(true);
        setIsOpenUserManagerGrow(true)
    };

    const handleStopPropagation = (event) => {
        event.stopPropagation();
    };

    const handleCloseUserManager = () => {
        setIsOpenUserManagerGrow(false)
        setTimeout(() => {
        setIsOpenUserManager(false);

        },500)
    };

    const columns = [
        { field: "id", headerName: "ID" }, 
        { field: "username", headerName: "User Name", flex: 1, cellClassName: "name-column-cell" }, 
        { field: "email", headerName: "Email", flex: 1 }, 
        { field: "created_at", headerName: "Create At", flex: 1 }, 
        { field: "role", headerName: "Role", renderCell: ({ row: { role } }) => {
            return (
                <Box 
                    width="60%"
                    display="flex"
                    alignItems="center"
                    p="5px"
                    borderRadius="4px"
                >
                    {role === "admin" && <AdminPanelSettingsOutlinedIcon />}
                    {role === "user" && <LockOutlinedIcon />}
                    {role === "manager" && <SecurityOutlinedIcon />}
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                        {role}
                    </Typography>
                </Box>
            );
        } }, 
        { field: "total_chat_token", headerName: "Total Chat Token" }, 
        { field: "total_time_used", headerName: "Total Time Usage" }, 
        { field: "total_resource_used", headerName: "Total Resource Usage" }
    ];

    return (
        <Box m="20px">
            <Header title="User Management" subtitle="Managing User Information" />
            <Box 
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
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
                    "& .css-tgsonj": {
                        border: "none !important"
                    },
                }}
            >
                <DataGrid
                    onRowClick={handleSelectUser}
                    rows={allUsers}
                    columns={columns}
                >
                </DataGrid>
            </Box>

            
            {openUserManager && (
            <Fade in={openUserManagerGrow}>
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
                <Grow in={openUserManagerGrow}>
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
                    <UserManager initialValues={initialValues} onClose={handleCloseUserManager} processStatus={popUpToast}/>    
                </Box>
                </Grow>
                </Box>
            </Fade>
            )}

        <ToastContainer />

        </Box>
    );
}

export default Users;