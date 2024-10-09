import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import CompanyCard from "../../components/companyCard/CompCard";
import { fetchCompaniesByUserIdAsync, selectCompany } from "./appliedSlice";
import { selectLoggedInUser } from "../auth/authSlice";
import Sidebar from "../sidebar/Sidebar";
import Header from "../../pages/Header";
export function Applied() {
  const dispatch = useDispatch();
  const appliedComp = useSelector(selectCompany);
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    console.log(user);
    if (user) {
      dispatch(fetchCompaniesByUserIdAsync(user.id));
    }
  }, [dispatch, user.id]);
  return (
    <>
      <div className="main-wrapper">
        <div className="navBarSpace">
          <Sidebar />
        </div>
        <div className="actual-page-wrapper">
          <Header
            heading1=""
            heading2="APPLY LIST"
            heading3="You have applied in the below on-campus oppurtunities."
          />
          <div
            className="upcoming_companies_left_content"
            style={{
              width: "90vw",
              padding: "1vh 2vh",
              margin: "4vh",
              background: "#252f3d",
              // borderRadius: "30px",
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
                className="header"
                style={{
                  width: "100%",
                  height: "5%",
                  background: "transparent",
                }}
              >
                <h1
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "transparent",
                    color: "white",
                    fontSize: "30px",
                  }}
                >
                  <strong> APPLIED COMPANIES</strong>
                </h1>
              </div>

              <div
                className="cards-section-wrapper"
                style={{
                  background: "transparent",
                  height: "93%",
                  overflow: "auto",
                  // borderRadius: "30px",
                }}
              >
                {appliedComp.map((currElem) => {
                  const { id } = currElem.company;
                  const comp = { ...currElem.company };
                  comp.createdAt = currElem.createdAt;
                  comp.updatedAt = currElem.updatedAt;
                  return (
                    <NavLink to={`/company-detail/${id}`}>
                      <CompanyCard key={id} {...comp} />
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
