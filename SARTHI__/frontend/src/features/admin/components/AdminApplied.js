import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../../pages/Header";
import CompanyCard from "../../../components/companyCard/CompCard";
import {
  fetchCompaniesByUserIdAsync,
  selectUserApplied,
} from "../../applied/appliedSlice";
import { selectLoggedInUser } from "../../auth/authSlice";
import { selectAllCompanies } from "../../companies/companySlice";
export function AdminApplied() {
  const dispatch = useDispatch();
  const appliedComp = useSelector(selectUserApplied);
  const user = useSelector(selectLoggedInUser);
  const company = useSelector(selectAllCompanies);
  useEffect(() => {
    console.log(user);
    if (user) {
      dispatch(fetchCompaniesByUserIdAsync(user.id));
    }
  }, [dispatch, user.id]);
  // console.log(appliedComp);
  return (
    <>
      <div className="main-wrapper">
        <div className="navBarSpace">
          <Sidebar />
        </div>
        <div className="actual-page-wrapper">
          <Header
            heading1=""
            heading2="STUDENT LIST"
            heading3="Students list for various on-campus oppurtunities."
          />
          <div
            className="upcoming_companies_left_content"
            style={{
              width: "90vw",
              padding: "1vh 2vh",
              margin: "4vh",
              background: "#252f3d",
              borderRadius: "30px",
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
                  {/* <strong>{title}</strong> */}
                </h1>
              </div>
              {/* <div
          style={{ height: "2%", backgroundColor: "black", width: "80%" }}
        ></div> */}
              <div
                className="cards-section-wrapper"
                style={{
                  background: "transparent",
                  height: "93%",
                  overflow: "auto",
                  borderRadius: "30px",
                }}
              >
                {company.map((currElem) => {
                  const { id } = currElem;
                  if (currElem.type === "on") {
                    return (
                      <NavLink to={`/admin/user-detail/${id}`}>
                        <CompanyCard key={id} {...currElem} />
                      </NavLink>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
            {/* <div
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
                    color: "pink",
                    fontSize: "30px",
                  }}
                >
                  <strong>COMPANIES LIST</strong>
                </h1>
              </div>

              <div
                className="cards-section-wrapper"
                style={{
                  background: "transparent",
                  height: "93%",
                  overflow: "auto",
                  borderRadius: "30px",
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
