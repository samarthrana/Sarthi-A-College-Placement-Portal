import React from "react";
import { Company } from "../features/companies/components/Company";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllCompanies } from "../features/companies/companySlice";
import CompanyCard from "../components/companyCard/CompCard";
import Header from "./Header";
import Sidebar from "../features/sidebar/Sidebar";
import { selectUserInfo } from "../features/user/userSlice";
import { AdminCompany } from "../features/admin/components/AdminCompany";
import { Button } from "@mui/material";

const CompanyPage = () => {
  const company = useSelector(selectAllCompanies);
  const user = useSelector(selectUserInfo);
  return (
    <>
      <div className="main-wrapper">
        <div className="navBarSpace">
          <Sidebar />
        </div>
        <div className="actual-page-wrapper">
          <Header
            heading1=""
            heading2="COMPANY'S LIST"
            heading3="On-campus and Off-campus oppurtunities on a single platform."
          />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              className="upcoming_companies_left_content"
              style={{
                height: "100%",
                width: "46%",
                padding: "1vh 2vh",
                background: "#252f3d",
                // borderRadius: "30px",
              }}
            >
              {user && user.role === "admin" ? (
                <AdminCompany title="On-Campus Companies" />
              ) : (
                <Company title="On-Campus Companies" />
              )}
            </div>
            <div
              className="upcoming_companies_left_content"
              style={{
                height: "100%",
                width: "46%",
                padding: "1vh 2vh",
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
                    <strong>Off-Campus Companies</strong>
                  </h1>
                  {user.role === "admin" && (
                    <NavLink to="/admin/company-form">
                      <div style={{ textAlign: "right", marginTop: "-3.15%" }}>
                        <Button
                          style={{
                            backgroundColor: "#969797",
                            color: "black",
                            border: "3px solid white",
                          }}
                        >
                          <strong>Add Company</strong>
                        </Button>
                      </div>
                    </NavLink>
                  )}
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
                  {company.map((currElem) => {
                    const { id } = currElem;
                    if (currElem.type === "off") {
                      return (
                        <>
                          <a href={`${currElem.url}`} target="_sarthi">
                            <CompanyCard key={id} {...currElem} />
                          </a>
                          {user.role === "admin" && (
                            <div
                              style={{
                                textAlign: "right",
                                marginTop: "-1%",
                                marginRight: "2%",
                              }}
                            >
                              <NavLink to={`/admin/company-form/edit/${id}`}>
                                <Button style={{ backgroundColor: "white" }}>
                                  Edit
                                </Button>
                              </NavLink>
                            </div>
                          )}
                        </>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyPage;
