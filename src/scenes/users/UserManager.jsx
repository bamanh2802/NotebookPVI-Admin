import { Typography, Box, TextField, Select, MenuItem, useTheme, Avatar } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ColorizeSharp } from "@mui/icons-material";
import Button from '@mui/material/Button';
import { changeInfoUser, deleteUserById } from "../../service/LoginService";
import { tokens } from "../../theme";
import DeleteIcon from '@mui/icons-material/Delete';
import Grow from '@mui/material/Grow';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';



const userScheme = yup.object().shape({
    userName: yup.string().required("required"),
    password: yup.string().required("required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    role: yup.string().oneOf(["user", "manager", "admin"]).required("required"),
})


const UserManager = ({ initialValues, onClose, processStatus }) => {
    const isNonMobile = useMediaQuery("(min-width: 600px")
    const [newPassword, setNewPassword] = useState(initialValues.password)
    const [cofirmDeleteUser, setConfirmDeleteUser] = useState(false)
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleFormSubmit = async (values) => {

        if(newPassword !== values.password) {
            setNewPassword(values.password)
        } else {
            setNewPassword('')
        }
        try {
            const data = await changeInfoUser(values.userId, values.userName, newPassword, values.email)
            console.log(data)
            if(data.status_code === 200) {
                onClose();
                processStatus('success', 'Account updated successfully')

            }
        } catch (e) {
            console.log(e)
            processStatus('error', 'Update information failed')
            onClose();
        }
    }

    const handleCancelDeleteUser = () => {
        setConfirmDeleteUser(false)

    }

    const handleDeleteUser = async () => {
        setConfirmDeleteUser(true)
    }
    const handleConfirmDeleteUser = async () => {
        try {
            const data = await deleteUserById(initialValues.userId)
            if(data.status === 200) {
                onClose();
                setConfirmDeleteUser(true)
                processStatus('success', 'Account deleted successfully')
            }
            console.log(data)
        } catch(e) {
            console.log(e)
            processStatus('error', 'Delete information failed')
            onClose();
        }
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event) => event.preventDefault();



    return(
        <Box m="20px">
    
            <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userScheme}
            >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    maxWidth: "800px",
                    margin: "36px auto",
                    padding: "20px",
                    borderRadius: "8px",
                    }}
                >
                    <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="User Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.userName}
                    name="userName"
                    error={!!touched.userName && !!errors.userName}
                    helperText={touched.userName && errors.userName}
                    sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                    fullWidth
                    variant="filled"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    sx={{ gridColumn: "span 4" }}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        ),
                    }}
                    />
                   
                    <Select
                    fullWidth
                    variant="filled"
                    label="Role"
                    name="role"
                    value={values.role}
                    onChange={handleChange}
                    error={!!touched.role && !!errors.role}
                    helperText={touched.role && errors.role}
                    sx={{ gridColumn: "span 2" }}
                    >
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="manager">Manager</MenuItem>
                    <MenuItem value="user">User</MenuItem>
                    </Select>
                    <Box
                        display='flex'
                        justifyContent='space-around'
                        sx={{ gridColumn: "span 4" }}
                    >
                        <Button
                        variant="contained"
                        color="error"
                        onClick={handleDeleteUser}
                        >
                        Delete
                        </Button>
                        
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        >
                        Update
                    </Button>
                    </Box>
                </Box>
                </form>
            )}
            </Formik>

        <Box>
            
        </Box>

        <Grow in={cofirmDeleteUser}>
        <Box position='fixed'
                    width='calc(100% + 256px)'
                    height='100%'
                    top='0px'
                    left='0px'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    zIndex='100000'
                    onClick={handleCancelDeleteUser}
                >
                   <Box 
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    backgroundColor={colors.primary[400]}
                    flexDirection='column'
                    onClick={(event) => {
                        event.stopPropagation();
                      }}
                   >
                    <Box display='flex'
                        justifyContent='center'
                        alignItems='center'
                        flexDirection='column'
                        padding='24px'
                    > 
                        <Avatar alt="Delete User" src="https://i.pinimg.com/originals/4a/3c/42/4a3c429dc8ab5496413c9150416ddcfe.png"/>
                            <Typography
                                variant="h3"
                                display='flex'
                                justifyContent='center'
                                alignItems='center'
                                mb='8px'
                            >
                                Delete this user?
                            </Typography>
                            <Typography width='90%' textAlign='center'>
                                This action cannot be undone. Are you sure you want to delete this user?
                            </Typography>

                        </Box>
                        <Box padding='24px 0px'  display='flex' justifyContent='space-around' width='60%'>
                        <Button onClick={handleConfirmDeleteUser} color="error" variant="outlined" startIcon={<DeleteIcon />}>
                            Delete
                            </Button>
                            <Button onClick={handleCancelDeleteUser} color="success" variant="outlined" endIcon={<CancelOutlinedIcon />}>
                            Cancel
                            </Button>
                        </Box>
                   </Box>
                </Box>

        </Grow>

            {/* {cofirmDeleteUser && (
               

            )} */}
            
    
        </Box>
    
        )
}

export default UserManager;
