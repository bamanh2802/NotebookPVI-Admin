import React from 'react';
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

const UserResource = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette)



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
            {usersData.map((user, index) => (
              <TableRow key={index} sx={{ backgroundColor: colors.primary[400] }}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{(user.resources / 100).toFixed(2)}</TableCell> {/* Chia và định dạng số thập phân */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserResource;