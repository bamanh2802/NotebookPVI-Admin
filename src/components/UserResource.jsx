import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { useTheme } from "@mui/material";
import { tokens } from '../theme';

const usersData = [
  { name: 'User 1', resources: 150 },
  { name: 'User 2', resources: 200 },
  { name: 'User 3', resources: 75 },
  { name: 'User 4', resources: 300 },
  { name: 'User 5', resources: 120 },
];

const UserResource = ({ data }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette)

    useEffect(() => {
      data.sort((a, b) => b.total_resource_used - a.total_resource_used)
    }, [data])


  return (
    <div className="UserResource" backgroundColor={colors.primary[400]}>
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
    </div>
  );
};

export default UserResource;