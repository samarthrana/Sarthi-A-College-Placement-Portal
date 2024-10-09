import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import mainlogo from "./logo.jpg";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import CampaignIcon from "@mui/icons-material/Campaign";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../auth/authSlice";

const Sidebar = () => {
  const user = useSelector(selectLoggedInUser);
  console.log(user.role);
  return (
    <>
      <div className="header">
        <div className="side-nav">
          <div className="user" style={{ height: "60px" }}>
            <img src={mainlogo} className="user-img" />

            <div className="user-name-email">
              <h2>{user.profile[0].name}</h2>
              <p>{user.email}</p>
              {user.role === "admin" && <p>{user.role}</p>}
            </div>

            {/* <img src={mainlogo} className="star-img" /> */}
          </div>

          <header style={{ background: "transparent" }}>
            <nav className="navbar-wrapper">
              {user.role === "user" && (
                <ul>
                  <NavLink exact to="/">
                    <li>
                      {" "}
                      <HomeIcon
                        style={{ fontSize: "5vh", background: "transparent" }}
                      />{" "}
                      <p>Home Page</p>{" "}
                    </li>
                  </NavLink>
                  <NavLink exact to="/company-page">
                    <li>
                      {" "}
                      <BusinessIcon
                        style={{ fontSize: "5vh", background: "transparent" }}
                      />{" "}
                      <p>Companies</p>{" "}
                    </li>
                  </NavLink>
                  {/* <NavLink exact to="/student-page">
                  <li>
                    {" "}
                    <Groups2Icon
                      style={{ fontSize: "5vh", background: "transparent" }}
                    />{" "}
                    <p>Students</p>{" "}
                  </li>
                </NavLink> */}
                  <NavLink exact to="/applied-page">
                    <li>
                      {" "}
                      <RecentActorsIcon
                        style={{ fontSize: "5vh", background: "transparent" }}
                      />{" "}
                      <p>Applied</p>{" "}
                    </li>
                  </NavLink>
                  {/* <NavLink exact to="/placed-page">
                  <li>
                    {" "}
                    <PersonAddAltIcon
                      style={{ fontSize: "5vh", background: "transparent" }}
                    />{" "}
                    <p>Placed</p>{" "}
                  </li>
                </NavLink> */}
                  <NavLink exact to="/notice-page">
                    <li>
                      {" "}
                      <CampaignIcon
                        style={{ fontSize: "5vh", background: "transparent" }}
                      />{" "}
                      <p>Notice</p>{" "}
                    </li>
                  </NavLink>
                  <NavLink exact to="/profile-page">
                    <li>
                      {" "}
                      <AccountCircleIcon
                        style={{ fontSize: "5vh", background: "transparent" }}
                      />{" "}
                      <p>Profile</p>{" "}
                    </li>
                  </NavLink>
                </ul>
              )}
              {user.role === "admin" && (
                <ul>
                  <NavLink exact to="/admin">
                    <li>
                      {" "}
                      <HomeIcon
                        style={{ fontSize: "5vh", background: "transparent" }}
                      />{" "}
                      <p>Home Page</p>{" "}
                    </li>
                  </NavLink>
                  <NavLink exact to="/admin/company-page">
                    <li>
                      {" "}
                      <BusinessIcon
                        style={{ fontSize: "5vh", background: "transparent" }}
                      />{" "}
                      <p>Companies</p>{" "}
                    </li>
                  </NavLink>
                  {/* <NavLink exact to="/student-page">
                  <li>
                    {" "}
                    <Groups2Icon
                      style={{ fontSize: "5vh", background: "transparent" }}
                    />{" "}
                    <p>Students</p>{" "}
                  </li>
                </NavLink> */}
                  <NavLink exact to="/admin/applied-page">
                    <li>
                      {" "}
                      <RecentActorsIcon
                        style={{ fontSize: "5vh", background: "transparent" }}
                      />{" "}
                      <p>Applied</p>{" "}
                    </li>
                  </NavLink>
                  {/* <NavLink exact to="/placed-page">
                  <li>
                    {" "}
                    <PersonAddAltIcon
                      style={{ fontSize: "5vh", background: "transparent" }}
                    />{" "}
                    <p>Placed</p>{" "}
                  </li>
                </NavLink> */}
                  <NavLink exact to="/admin/notice-page">
                    <li>
                      {" "}
                      <CampaignIcon
                        style={{ fontSize: "5vh", background: "transparent" }}
                      />{" "}
                      <p>Notice</p>{" "}
                    </li>
                  </NavLink>
                  <NavLink exact to="/profile-page">
                    <li>
                      {" "}
                      <AccountCircleIcon
                        style={{ fontSize: "5vh", background: "transparent" }}
                      />{" "}
                      <p>Profile</p>{" "}
                    </li>
                  </NavLink>
                </ul>
              )}
            </nav>
          </header>

          <div className="footer-main">
            <ul>
              <NavLink to="/logout">
                <li>
                  <LogoutIcon
                    style={{ fontSize: "5vh", background: "transparent" }}
                  />
                  <p>Logout</p>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
