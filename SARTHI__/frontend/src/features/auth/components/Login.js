import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAsync, selectError, selectLoggedInUser } from "../authSlice";

export function Login() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const user = useSelector(selectLoggedInUser);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <>
      {user && <Navigate to="/" replace={true}></Navigate>}
      <div
        style={{
          backgroundColor: " rgba(153, 153, 153, 0.856)",
          height: "100vh",
          marginTop: "-64px",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit((data) => {
                dispatch(
                  loginUserAsync({ email: data.email, password: data.password })
                );
                console.log(data);
              })}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                {...register("email", {
                  required: "Email required.",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Email is not Valid",
                  },
                })}
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                {...register("password", {
                  required: "Password required.",
                })}
                label="Password"
                type="password"
                id="password"
              />{" "}
              {error && (
                <p style={{ color: "rgb(220, 47, 47) " }}>{error.message}</p>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item>
                  Create new account ?{"   "}
                  <NavLink to="/signup" variant="body2">
                    <strong>
                      <span style={{ color: "darkBlue" }}>Sign Up</span>
                    </strong>
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}
