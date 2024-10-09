import React from "react";
import Header from "../../../pages/Header";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser, updateUserAsync } from "../../auth/authSlice";
import { Navigate } from "react-router";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(user);
  return (
    <>
      {user.profile && user.profile.length > 0 && (
        <Navigate to="/" replace={true}></Navigate>
      )}
      <div style={{ marginLeft: "3vw" }}>
        <Header heading1="" heading2="Complete Your Profile" heading3="" />
        <div
          className="upcoming_companies_left_content"
          style={{
            width: "90vw",
            padding: "1vh 2vh",
            margin: "4vh",
            background: "#252f3d",
            //borderRadius: "30px",
          }}
        >
          <form
            noValidate
            onSubmit={handleSubmit((data) => {
              console.log("data", data);
              dispatch(updateUserAsync({ ...user, profile: data }));
            })}
          >
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name :
                </label>
              </div>
              <div
                className="info"
                style={{
                  background: "transparent",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                <input
                  type="text"
                  {...register("name", { required: "Name required." })}
                  id="name"
                  placeholder="Enter your name"
                  style={{
                    width: "150%",
                    marginLeft: "-50%",
                    borderBottom: "2px solid white",
                  }}
                />
              </div>
            </div>
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label
                  htmlFor="roll"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  University Roll Number :
                </label>
              </div>
              <div
                className="info"
                style={{
                  background: "transparent",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                <input
                  type="text"
                  {...register("roll", {
                    required: "University roll number required.",
                  })}
                  id="roll"
                  placeholder="Enter University roll number"
                  style={{
                    width: "150%",
                    marginLeft: "-50%",
                    borderBottom: "2px solid white",
                  }}
                />
              </div>
            </div>
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  E-Mail Id :
                </label>
              </div>
              <div
                className="info"
                style={{
                  background: "transparent",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                <input
                  type="text"
                  {...register("email", {
                    required: "Email required.",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Email is not Valid",
                    },
                  })}
                  id="email"
                  placeholder="Enter college e-mail id"
                  style={{
                    width: "150%",
                    marginLeft: "-50%",
                    borderBottom: "2px solid white",
                  }}
                />
              </div>
            </div>
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label
                  htmlFor="phone"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone Number :
                </label>
              </div>
              <div
                className="info"
                style={{
                  background: "transparent",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                <input
                  type="tel"
                  {...register("phone", { required: "Phone Number required." })}
                  id="phone"
                  placeholder="Enter phone number"
                  style={{
                    width: "150%",
                    marginLeft: "-50%",
                    borderBottom: "2px solid white",
                  }}
                />
              </div>
            </div>
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label
                  htmlFor="branch"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Branch & Section :
                </label>
              </div>
              <div
                className="info"
                style={{
                  background: "transparent",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                <input
                  type="text"
                  {...register("branch", {
                    required: "Branch required.",
                  })}
                  id="branch"
                  placeholder="Enter branch and section"
                  style={{
                    width: "150%",
                    marginLeft: "-50%",
                    borderBottom: "2px solid white",
                  }}
                />
              </div>
            </div>
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label
                  htmlFor="year"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Year :
                </label>
              </div>
              <div
                className="info"
                style={{
                  background: "transparent",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                <input
                  type="number"
                  id="year"
                  {...register("year", {
                    required: "Year required.",
                  })}
                  placeholder="Enter current year"
                  style={{
                    width: "150%",
                    marginLeft: "-50%",
                    borderBottom: "2px solid white",
                  }}
                />
              </div>
            </div>
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label
                  htmlFor="cgpa"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  CGPA :
                </label>
              </div>
              <div
                className="info"
                style={{
                  background: "transparent",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                <input
                  type="number"
                  {...register("cgpa", {
                    required: "CGPA required.",
                  })}
                  id="cgpa"
                  placeholder="Enter current CGPA"
                  style={{
                    width: "150%",
                    marginLeft: "-50%",
                    borderBottom: "2px solid white",
                  }}
                />
              </div>
            </div>
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label
                  htmlFor="ten"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  10% :
                </label>
              </div>
              <div
                className="info"
                style={{
                  background: "transparent",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                <input
                  type="number"
                  {...register("ten", {
                    required: "10% required.",
                  })}
                  id="ten"
                  placeholder="Enter 10% "
                  style={{
                    width: "150%",
                    marginLeft: "-50%",
                    borderBottom: "2px solid white",
                  }}
                />
              </div>
            </div>
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label
                  htmlFor="twelve"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  12% :
                </label>
              </div>
              <div
                className="info"
                style={{
                  background: "transparent",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                <input
                  type="number"
                  {...register("twelve", {
                    required: "12% required.",
                  })}
                  id="twelve"
                  placeholder="Enter 12%"
                  style={{
                    width: "150%",
                    marginLeft: "-50%",
                    borderBottom: "2px solid white",
                  }}
                />
              </div>
            </div>
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label
                  htmlFor="back"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Backlogs :
                </label>
              </div>
              <div
                className="info"
                style={{
                  background: "transparent",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                <input
                  type="number"
                  {...register("back", {
                    required: "Backlogs required.",
                  })}
                  id="back"
                  placeholder="Enter backlogs"
                  style={{
                    width: "150%",
                    marginLeft: "-50%",
                    borderBottom: "2px solid white",
                  }}
                />
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button
                type="submit"
                style={{ backgroundColor: "white", fontSize: "1.2rem" }}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default User;
