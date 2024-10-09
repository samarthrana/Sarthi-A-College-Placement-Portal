import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../../pages/Header";
import { fetchAllNoticesAsync, selectAllNotices } from "../noticeSlice";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { selectUserInfo } from "../../user/userSlice";

export function Notice() {
  const dispatch = useDispatch();
  const notice = useSelector(selectAllNotices);
  const user = useSelector(selectUserInfo);
  useEffect(() => {
    dispatch(fetchAllNoticesAsync());
  }, [dispatch]);
  return (
    <>
      <div className="main-wrapper">
        <div className="navBarSpace">
          <Sidebar />
        </div>
        <div className="actual-page-wrapper">
          <Header heading1="" heading2="NOTICE" heading3="Be Updated !" />
          {user && user.role === "admin" && (
            <NavLink to="/admin/notice-form">
              <div
                style={{
                  textAlign: "right",
                  marginTop: "-4.5%",
                  marginRight: "5%",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#969797",
                    color: "black",
                    border: "3px solid white",
                  }}
                >
                  <strong>Add Notice</strong>
                </Button>
              </div>
            </NavLink>
          )}
          <div>
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
              <div
                className="upcoming-company-wrapper"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                }}
              >
                <div
                  // className="cards-section-wrapper"
                  style={{
                    background: "transparent",
                    height: "93%",
                    overflow: "auto",
                    //borderRadius: "30px",
                  }}
                >
                  {user.role === "admin" &&
                    notice.map((currNotice) => {
                      return (
                        <>
                          <NavLink to={`/notice-detail/${currNotice.id}`}>
                            <div
                              style={{
                                width: "85vw",
                                margin: "1vh 4vh",
                                padding: "2vh",
                                background: "white",
                                border: "red 2px",
                                //borderRadius: "30px",
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div
                                style={{
                                  color: "black",
                                  fontSize: "20px",
                                  marginTop: "17px",
                                }}
                              >
                                <strong>{currNotice.noticeMsg}</strong>
                              </div>
                              <div style={{ color: "black" }}>
                                <p>
                                  Date -{" "}
                                  {new Date(
                                    currNotice.updatedAt
                                  ).toLocaleDateString()}
                                </p>
                                <br />
                                <p>
                                  {" "}
                                  Time -
                                  {new Date(
                                    currNotice.updatedAt
                                  ).toLocaleTimeString()}
                                </p>
                              </div>
                            </div>
                          </NavLink>
                          {currNotice.deleted && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "20px",
                                marginLeft: "2.29%",
                              }}
                            >
                              <strong>Notice Deleted</strong>
                            </p>
                          )}
                          {user && user.role === "admin" && (
                            <div
                              style={{
                                textAlign: "right",
                                marginRight: "3%",
                              }}
                            >
                              <NavLink
                                to={`/admin/notice-form/${currNotice.id}`}
                              >
                                <Button style={{ backgroundColor: "white" }}>
                                  Edit
                                </Button>
                              </NavLink>
                            </div>
                          )}
                        </>
                      );
                    })}
                  {user.role === "user" &&
                    notice.map((currNotice) => {
                      return (
                        <>
                          {!currNotice.deleted && (
                            <NavLink to={`/notice-detail/${currNotice.id}`}>
                              <div
                                style={{
                                  width: "85vw",
                                  margin: "1vh 4vh",
                                  padding: "2vh",
                                  background: "white",
                                  border: "red 2px",
                                  // //borderRadius: "30px",
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <div
                                  style={{
                                    color: "black",
                                    fontSize: "20px",
                                    marginTop: "17px",
                                  }}
                                >
                                  <strong>{currNotice.noticeMsg}</strong>
                                </div>
                                <div style={{ color: "black" }}>
                                  <p>
                                    Date -{" "}
                                    {new Date(
                                      currNotice.updatedAt
                                    ).toLocaleDateString()}
                                  </p>
                                  <br />
                                  <p>
                                    {" "}
                                    Time -
                                    {new Date(
                                      currNotice.updatedAt
                                    ).toLocaleTimeString()}
                                  </p>
                                </div>
                              </div>
                            </NavLink>
                          )}
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
