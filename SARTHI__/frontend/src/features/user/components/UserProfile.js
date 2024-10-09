import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../../pages/Header";
import { Button } from "@mui/material";
import { selectUserInfo, updateUserAsync } from "../userSlice";
import { useForm } from "react-hook-form";

export function UserProfile() {
  const replace = {
    name: "NAME",
    roll: "UNIVERSITY ROLL NO.",
    email: "EMAIL",
    phone: "PHONE",
    branch: "BRANCH & SECTION",
    year: "YEAR",
    cgpa: "CGPA",
    ten: "10TH %",
    twelve: "12TH %",
    back: "BACKLOGS",
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  const [selectEdit, setSelectEdit] = useState(null);
  const handleEditForm = () => {
    setSelectEdit(0);
    setValue("name", user.profile[0].name);
    setValue("roll", user.profile[0].roll);
    setValue("email", user.profile[0].email);
    setValue("phone", user.profile[0].phone);
    setValue("branch", user.profile[0].branch);
    setValue("year", user.profile[0].year);
    setValue("cgpa", user.profile[0].cgpa);
    setValue("ten", user.profile[0].ten);
    setValue("twelve", user.profile[0].twelve);
    setValue("back", user.profile[0].back);
  };
  const handleEdit = (profileUpdate) => {
    dispatch(updateUserAsync({ ...user, profile: profileUpdate }));
  };
  return (
    <>
      <div className="main-wrapper">
        <div className="navBarSpace">
          <Sidebar />
        </div>
        <div className="actual-page-wrapper">
          <Header heading1="" heading2="PROFILE" heading3="Student Profile" />
          {/* Edit Profile starts */}
          {selectEdit === 0 && (
            <div>
              <div
                className="upcoming_companies_left_content"
                style={{
                  width: "90vw",
                  padding: "1vh 2vh",
                  margin: "4vh",
                  background: "#252f3d",
                  ////borderRadius: "30px",
                }}
              >
                <form
                  noValidate
                  onSubmit={handleSubmit((data) => {
                    handleEdit(data);
                    setSelectEdit(null);
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
                        {...register("phone", {
                          required: "Phone Number required.",
                        })}
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
                        type="text"
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
                        type="text"
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
                        type="text"
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
                        type="text"
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
                        type="text"
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
                      onClick={(e) => setSelectEdit(null)}
                      type="submit"
                      style={{
                        backgroundColor: "white",
                        fontSize: "1.2rem",
                        marginRight: "20px",
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      style={{ backgroundColor: "white", fontSize: "1.2rem" }}
                    >
                      Save
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {/* Edit profile ends */}
          {/* Profile Display */}
          <div
            className="upcoming_companies_left_content"
            style={{
              width: "90vw",
              padding: "1vh 2vh",
              margin: "4vh",
              background: "#252f3d",
              ////borderRadius: "30px",
            }}
          >
            <div
              className="info-card-wrapper"
              style={{
                height: "100%",
                width: "100%",
                background: "transparent",
              }}
            >
              <div
                className="heading"
                style={{
                  height: "5%",
                  width: "100%",
                  fontSize: "2rem",
                  color: "white",
                  fontWeight: "bold",
                  background: "transparent",
                  textAlign: "center",
                }}
              >
                STUDENT INFORMATION
              </div>

              <div
                className="student_info_wrapper"
                style={{
                  height: "100%",
                  width: "90%",
                  background: "transparent",
                  padding: "0 1vh",
                }}
              >
                {Object.entries(user.profile[0]).map((userDetail) => {
                  return (
                    <div
                      className="subCard"
                      style={{
                        height: "7%",
                        width: "85vw",
                        background: "white",
                        borderRadius: "10px",
                        margin: "1.5vh 3vh",
                        padding: "0 1vh",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="title"
                        style={{
                          background: "transparent",
                          fontSize: "1.3rem",
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
                        {replace[userDetail[0]]} :
                      </div>

                      <div
                        className="info"
                        style={{
                          background: "transparent",
                          fontSize: "1.6rem",
                          fontWeight: "bold",
                        }}
                      >
                        {userDetail[1]}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{ textAlign: "right", marginRight: "2vh" }}>
                <Button
                  onClick={(e) => handleEditForm()}
                  type="submit"
                  style={{
                    backgroundColor: "white",
                    fontSize: "1.2rem",
                  }}
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
