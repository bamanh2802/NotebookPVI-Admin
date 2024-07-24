import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { useTheme } from "@mui/material";
import { tokens } from '../theme';
import CircularProgress from '@mui/material/CircularProgress';

const UserResource = ({ data }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette)
    const [isLoadingData, setIsLoadingData] = useState(true);

    useEffect(() => {
      if(data.length !== 0) {
        data.sort((a, b) => b.total_resource_used - a.total_resource_used)
        setIsLoadingData(false)
      } else {
        setIsLoadingData(true)
      }
    }, [data])


  return (
    <Box>
    {
      isLoadingData ? (
          <Box height='250px' display='flex' justifyContent='center' alignItems='center'>
            <CircularProgress color="success"/>
          </Box>
      ) : (
        <Box backgroundColor={colors.primary[400]}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: colors.primary[400] }}>
                  <TableCell>User</TableCell>
                  <TableCell>Resources (Mb)</TableCell>
                </TableRow>
              </TableHead >
              <TableBody >
                {data.map((user, index) => (
                  <TableRow key={index} sx={{ backgroundColor: colors.primary[400] }}>
                    <TableCell>{user.user_name}</TableCell>
                    <TableCell>{(user.total_resource_used)}</TableCell> {/* Chia và định dạng số thập phân */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )
    }
  </Box>
    
  );
};

export default UserResource;