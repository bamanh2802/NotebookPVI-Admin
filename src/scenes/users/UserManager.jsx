import { Typography, Box, TextField, Select, MenuItem } from "@mui/material";
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


const userScheme = yup.object().shape({
    userName: yup.string().required("required"),
    password: yup.string().required("required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    role: yup.string().oneOf(["user", "manager", "admin"]).required("required"),
})


const UserManager = ({ initialValues, onClose }) => {
    const isNonMobile = useMediaQuery("(min-width: 600px")
    const [newPassword, setNewPassword] = useState(initialValues.password)


    const handleFormSubmit = async (values) => {
        console.log(values.userId)

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
            }
        } catch (e) {
            console.log(e)
        }
    }

    const handleDeleteUser = async () => {
        console.log(initialValues)
        try {
            const data = await deleteUserById(initialValues.userId)
            console.log(data)
        } catch(e) {
            console.log(e)
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
    
        </Box>
    
        )
}

export default UserManager;
