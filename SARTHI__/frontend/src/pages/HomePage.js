import React, { useEffect } from "react";
import Sidebar from "../features/sidebar/Sidebar";
import Header from "./Header";
import "../App.css";
import { Company } from "../features/companies/components/Company";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../features/auth/authSlice";
import { fetchLoggedInUserAsync } from "../features/user/userSlice";
import { Navigate } from "react-router";

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    dispatch(fetchLoggedInUserAsync(user.id));
  });
  return (
    <>
      {user.role === "admin" && <Navigate to="/admin" replace={true} />}
      <div className="main-wrapper">
        <div className="navBarSpace">
          {" "}
          <Sidebar />
        </div>
        <div className="actual-page-wrapper">
          <Header
            heading1="Welcome to"
            heading2="SARTHI - YOUR PLACEMENT PORTAL"
            heading3="Here You get all the details about the upcoming company's visting our
        college and all there package details."
          />
          <div
            className="upcoming_companies_left_content"
            style={{
              height: "100%",
              width: "90vw",
              padding: "1vh 2vh",
              margin: "4vh",
              background: "#252f3d",
              // borderRadius: "30px",
            }}
          >
            <Company title="UPCOMING COMPANIES" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
