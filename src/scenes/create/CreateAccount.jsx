import Header from "../../components/Header";
import { Typography, Box, TextField, Select, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Password } from "@mui/icons-material";


const initialValues = {
    userName: "",
    password: "",
    confirmPassword: "",
    email: "",
    role: "user",
}

const userScheme = yup.object().shape({
    userName: yup.string().required("required"),
    password: yup.string().required("required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
    email: yup.string().email("Invalid email address").required("Email is required"),
    role: yup.string().oneOf(["user", "manager", "admin"]).required("required"),
})

const CreateAcctount = () => {

    const isNonMobile = useMediaQuery("(min-width: 600px")

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return(
    <Box m="20px">
        <Header title='CREATE ACCOUNT' subtitle='Admin Create Account Surface'/>

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
          type="password"
          label="Password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          name="password"
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="password"
          label="Confirm Password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.confirmPassword}
          name="confirmPassword"
          error={!!touched.confirmPassword && !!errors.confirmPassword}
          helperText={touched.confirmPassword && errors.confirmPassword}
          sx={{ gridColumn: "span 4" }}
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
        sx={{
            gridColumn: "span 2",
          display: "block",
          padding: "10px 20px",
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          textAlign: "center",
          "&:hover": {
            backgroundColor: "#1565c0",
          },
        }}
        component="button"
        type="submit"
      >
        Submit
      </Box>
      </Box>
    </form>
  )}
</Formik>

    </Box>

    )
}

export default CreateAcctount; 