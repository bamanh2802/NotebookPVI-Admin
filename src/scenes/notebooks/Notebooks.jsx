import { useState } from "react";

import './notebook.css'
import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam, mockDataNotebooks, mockDataNotes } from '../../data/mockData';
import Header from "../../components/Header";
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';

const Notebooks = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const [selectedNotebooks, setSelectedNotebooks] = useState(null);
    const [userNotes, setUserNotes] = useState([]);
    const [isOpenNote, setIsOpenNote] = useState(true)


    const handleCloseNote = () => {
        setIsOpenNote(false)
        setTimeout(() => {
            setSelectedNotebooks(false)

        }, 300)
    }

    const handleStopPropagation = (event) => {
        event.stopPropagation();
    }

    const handleNotebookClick = (notebookSelected) => {
        const notebook = mockDataNotebooks.find(notebook => notebook.id === notebookSelected.id);
        const notes = mockDataNotes.filter(note => note.id === notebook.id);
        setSelectedNotebooks(notebook);
        setUserNotes(notes);
        setIsOpenNote(true)
        console.log(selectedNotebooks)
    };

    const columns = [
        { field: "userId", headerName: "UserID"}, 
        { field: "userName", headerName: "User Name", 
            flex: 1, 
            cellClassName:"name-column-cell",
        }, 
        { field: "id", headerName: "Notebook ID"}, 
        { field: "name", headerName: "Notebook Name", 
            flex: 1, 
            cellClassName:"name-column-cell",
        }, 
        { field: "notes", headerName: "Notes", flex: 1}, 
        { field: "sources", headerName: "Sources"}, 
        { field: "createAt", headerName: "CreateAt"}, 
        
        
    ]
    return(
        <Box m="20px" mt="0px">
            <Header title="Notebooks Managment" subtitle="Managing Notebooks and Notes" />
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
                    
                    onRowClick={handleNotebookClick}
                    rows={mockDataNotebooks}
                    columns={columns}
                    >
                </DataGrid>
            </Box>
            {selectedNotebooks && (
               <Box mt={2}
               position="fixed"
               zIndex="99999999"
               top="0"
               height="100%"
               width="calc(100% - 300px)"
               display="flex"
               justifyContent="center"
               alignItems="center"
               onClick={handleCloseNote}
               > 
                 <Box mt={2} 
                    onClick={handleStopPropagation}
                    minHeight="500px"
                    width="60%"
                    boxShadow={`0 0 20px 0 rgba(${colors.grey[300]}, 0.5)`}
                    backgroundColor={`${colors.grey[700]} !important`}
                    className={`note-box ${isOpenNote ? 'show' : 'hide'}`}
                    >
                        <Typography
                        display="flex"
                        justifyContent="space-between"
                         variant="h4"
                         padding="16px"
                         >Notebooks of {selectedNotebooks.name}
                         <CloseFullscreenOutlinedIcon
                            onClick={handleCloseNote}
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                color: `${colors.grey[300]}`,
                                },
                            }}
                            />
                         </Typography>
                        <Box sx={{ height: 500, width: '100%' }}>
                            <DataGrid
                                rows={userNotes}
                                columns={[
                                    { field: 'id', headerName: 'ID', flex: 1 },
                                    { field: 'name', headerName: 'Name', flex: 2 },
                                    { field: 'content', headerName: 'Content', flex: 2 }
                                ]}
                            />
                        </Box>
                    </Box>
               </Box>
            )}
        </Box>
    )
    
}

export default Notebooks; 