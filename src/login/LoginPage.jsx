import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { loginForm } from "../service/LoginService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const isAuthenticated = !!localStorage.getItem('session');
  const notify = () => toast("This account is Invalid!");
  const theme = useTheme();
  const colors = tokens(theme.palette)
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false)
  const [typeError, setTypeError] = useState()
  useEffect(() => {
    console.log(isAuthenticated)
    if(isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated])

  const handleSubmit = async (event) => {
        event.preventDefault();
        const dataLogin = new FormData(event.currentTarget);

        try {
          const data = await loginForm(dataLogin.get('username'), dataLogin.get('password'))
          console.log(data)

          if(data && data.status === 200 && data.data.role === "admin") {
            localStorage.setItem("session", JSON.stringify(data.data.data.session_id))
            localStorage.setItem("username", data.data.username)
            localStorage.setItem("role", data.data.role)
            localStorage.setItem("userid", data.data.user_id)
            console.log(data.role)
            toast.success('Login Successfully!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            navigate('/dashboard')
          } else if (data.data.role !== "admin"){
            toast.warn('This account is Invalid!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
              setIsError(true)
              setTypeError('Account is Invalid')
          } 
        } catch (error) {
          console.error('Error logging in:', error);
          setIsError(true)
          setTypeError('Wrong Username or Password')
          toast.error('login Failed', {
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

      };
      const handleMouseEnter = () => {
        setIsError(false)
        setTypeError('')
      }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: colors.primary[400],
          padding: 3,
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            error={isError}
            helperText={isError ? typeError : null}
            color="success"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleMouseEnter}
          />
          <TextField
            error={isError}
            helperText={isError ? typeError : null}
            color="success"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleMouseEnter}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, background: 'linear-gradient(to right, #35c3c1, #00d6b7)' }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              
            </Grid>
          </Grid>
        </Box>
      </Box>
      <ToastContainer />
    </Container>
  );
}

export default LoginForm;
