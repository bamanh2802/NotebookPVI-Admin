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

    return(
        <Box
            minWidth="300px !important"
            sx= {{
                "& .ps-sidebar-root" : {
                    height: '100vh',
                    width: '100%'
                },
                "& .ps-sidebar-container": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper" : {
                    background: "transparent !important"
                },
                "& .ps-menuitem-root" : {
                    padding: "5px 20px 5px 20px !important",
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
                                        src={`../../../assets/user.png`}
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
                                        Admin
                                    </Typography>
                                    <Typography fontFamily={`"Source Sans 3", sans-serif`} variant="h5" color={colors.greenAccent[500]}>
                                        VPI Admin
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
                         <Item 
                            title="Users Managment"
                            to="users-managment"
                            icon={<PersonOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                         <Item 
                            title="Notebooks Managment"
                            to="notebooks-managment"
                            icon={<StickyNote2OutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                         <Item 
                            title="Assistants"
                            to="assitants"
                            icon={<SmartToyOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                         <Item 
                            title="Report"
                            to="report-data"
                            icon={<BarChartOutlinedIcon />}
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
                    </Box>

                </Menu>
            </Sidebar>
        </Box>
    )
    
}

export default ProSidebar; 