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
import { createUserAsync, selectLoggedInUser } from "../authSlice";

export function Signup() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      {user && user.profile.length === 0 && (
        <Navigate to="/update-profile" replace={true}></Navigate>
      )}
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
              Sign Up
            </Typography>
            {user?.email}
            <Box
              component="form"
              onSubmit={handleSubmit((data) => {
                dispatch(
                  createUserAsync({
                    email: data.email,
                    password: data.password,
                    profile: [],
                    role: "user",
                  })
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
              />{" "}
              {errors.email && (
                <p style={{ color: "rgb(220, 47, 47) " }}>
                  {errors.email.message}
                </p>
              )}
              <TextField
                margin="normal"
                fullWidth
                {...register("password", {
                  required: "Password required.",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message: `- At least 8 characters\n
- Must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
- Can contain special characters`,
                  },
                })}
                label="Password"
                type="password"
                id="password"
              />{" "}
              {errors.password && (
                <p style={{ color: "rgb(220, 47, 47) " }}>
                  {errors.password.message}
                </p>
              )}
              <TextField
                margin="normal"
                fullWidth
                {...register("confirmPassword", {
                  required: "Confirm password required.",
                  validate: (value, formValues) =>
                    value === formValues.password || "Password dosen't match!",
                })}
                label="Confirm Password"
                type="password"
                id="confirmPassword"
              />{" "}
              {errors.confirmPassword && (
                <p style={{ color: "rgb(220, 47, 47) " }}>
                  {errors.confirmPassword.message}
                </p>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  Alreay a Member?{"   "}
                  <NavLink to="/login" variant="body2">
                    <strong>
                      <span style={{ color: "darkBlue" }}>Log In</span>
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
