import { useState } from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Link, Navigate } from "react-router-dom";
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { useNavigate } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();

    const Test = (test) => {
        navigate(test)
        setSelected(title)
    }

    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => Test(to)}
        icon={icon}
      >
        <Typography fontFamily={`"Source Sans 3", sans-serif`}>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };



const ProSidebar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard")
    const userName = localStorage.getItem('username')

    return(
        <Box
            sx= {{
                "& .ps-sidebar-root" : {
                    height: '100vh',
                    width: '100%',
                    border: "none !important"
                },
                "& .ps-sidebar-container": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper" : {
                    background: "transparent !important"
                },
                "& .ps-menuitem-root" : {
                    padding: "2px 20px 2px 20px !important",
                },
                "& .ps-menu-button" : {
                    padding: "0 !important",
                },
                "& .ps-menu-button:hover": {
                    color: "#868dfb !important",
                    background: `${colors.primary[400]} !important`
                },
                "& .ps-menu-button:active": {
                    color: "#6780fa !important"
                }
            }}
        >
            <Sidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0px",
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems='center'
                                ml='15px'
                            >
                                <Typography fontFamily={`"Source Sans 3", sans-serif`} variant="h3" color={colors.grey[100]}>
                                    ADMIN
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>

                            </Box>
                        )}
                    </MenuItem>
                        {/* USER */}
                    {
                        !isCollapsed && (
                            <Box mb="25px" >
                                <Box display="flex" justifyContent="center" alignItems="center">
                                    <img
                                        alt="profile-user"
                                        width="100px"
                                        height="100px"
                                        src={`https://th.bing.com/th/id/OIP.KGmDcv-hBZoHXItvt8kNQwHaHo?rs=1&pid=ImgDetMain`}
                                        style={{ cursor: "pointer", borderRadius: "50%"}} 
                                        />
                                </Box>

                                <Box textAlign="center">
                                    <Typography
                                    fontFamily={`"Source Sans 3", sans-serif`}
                                        variant="h2"
                                        color={colors.grey[100]}
                                        fontWeight="bold"
                                        sx={{ m: "10px 0 0 0"}}
                                    >
                                        {userName}
                                    </Typography>
                                    <Typography fontFamily={`"Source Sans 3", sans-serif`} variant="h5" color={colors.greenAccent[500]}>
                                    VPI Notebook Management
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    }

                    {/* Menu ITEMS */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item 
                            title="Dashboard"
                            to=""
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            fontFamily={`"Source Sans 3", sans-serif`}
                            sx={{ m: "15px 0 5px 20px"}}
                            >
                            Manager
                        </Typography>
                         <Item 
                            title="Users Management"
                            to="users-management"
                            icon={<PersonOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                         <Item 
                            title="Notebooks Management"
                            to="notebooks-management"
                            icon={<StickyNote2OutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                         <Item 
                            title="Create Account"
                            to="create-account"
                            icon={<StickyNote2OutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            fontFamily={`"Source Sans 3", sans-serif`}
                            sx={{ m: "15px 0 5px 20px"}}
                            >
                            Botchat
                        </Typography>
                         <Item 
                            title="Assistants"
                            to="assitants"
                            icon={<SmartToyOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                         <Item 
                            title="Conversation"
                            to="conversation"
                            icon={<MessageOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Feedback"
                            to="feedback"
                            icon={<FeedbackOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            fontFamily={`"Source Sans 3", sans-serif`}
                            sx={{ m: "15px 0 5px 20px"}}
                            >
                            Report
                        </Typography>
                         <Item 
                            title="Column Chart"
                            to="column-chart"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Pie Chart"
                            to="pie-chart"
                            icon={<PieChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>

                </Menu>
            </Sidebar>
        </Box>
    )
    
}

export default ProSidebar; 