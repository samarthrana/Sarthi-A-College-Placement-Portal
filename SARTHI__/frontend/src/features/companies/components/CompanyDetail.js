import React, { useEffect, useState } from "react";
import BusinessIcon from "@mui/icons-material/Business";
import TitleIcon from "@mui/icons-material/Title";
import PaymentIcon from "@mui/icons-material/Payment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./Company.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyByIdAsync, selectedCompanyById } from "../companySlice";
import { useParams } from "react-router";
import { Button } from "@mui/material";
import {
  addToApplyAsync,
  fetchCompaniesByUserIdAsync,
  selectCompany,
} from "../../applied/appliedSlice";
import { selectLoggedInUser } from "../../auth/authSlice";

export function CompanyDetail() {
  const dispatch = useDispatch();
  const company = useSelector(selectedCompanyById);
  const user = useSelector(selectLoggedInUser);
  const params = useParams();
  const ifApplied = useSelector(selectCompany);
  let flag = false;
  if (company) {
    var data = [
      {
        id: 1,
        title: `CGPA`,
        info: company.cgpa,
        default: "7",
      },
      {
        id: 2,
        title: `10TH MARK'S PERCENTAGE`,
        info: company.ten,
        default: "70",
      },
      {
        id: 3,
        title: `12TH MARK'S PERCENTAGE`,
        info: company.twelve,
        default: "70",
      },
      {
        id: 4,
        title: `BACKLOGS`,
        info: company.backlogs,
        default: "0",
      },
    ];
  }
  const handleApply = (e) => {
    e.preventDefault();
    const newItem = { company: company.id, user: user.id };
    dispatch(addToApplyAsync(newItem));
  };
  useEffect(() => {
    dispatch(fetchCompanyByIdAsync(params.id));
    dispatch(fetchCompaniesByUserIdAsync(user.id));
  }, [params.id, dispatch]);
  const showFile = (attachedFile) => {
    console.log(attachedFile);
    window.open(`/files/${attachedFile}`, "_blank", "noreferrer");
  };
  const getIndexOfFirstAlphabet = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (/[a-zA-Z]/.test(str[i])) {
        return i;
      }
    }
    return -1;
  };
  const buttonString = (str) => {
    const name = str.split(".");
    const index = getIndexOfFirstAlphabet(name[0]);
    if (index != -1) {
      return str.substring(index);
    } else {
      return "File";
    }
  };
  return (
    <>
      {console.log(company)}
      {company && (
        <div className="main-wrapper">
          <div className="navBarSpace"></div>
          <div className="main_page_wrapper">
            {/* <PageHeader heading="COMPANY DETAILS" type="company_page" /> */}
            <div
              className="header_wrapper"
              style={{
                width: "90vw",
                height: "30vh",
                margin: "2vh 4vh",
                border: "red 2px",
                // borderRadius: "30px",

                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* company ka data yaha aaega */}
              <div className="companyName infoField">
                <div className="icon-wrapper">
                  <BusinessIcon
                    className="icon"
                    style={{ fontSize: "3.5rem" }}
                  />
                </div>
                <div className="tagTitle">COMPANY NAME</div>
                <div
                  style={{
                    backgroundColor: "white",
                    height: "1%",
                    width: "90%",
                  }}
                ></div>
                <div className="tagName">{company.name}</div>
              </div>
              <div className="companyType infoField">
                <div className="icon-wrapper">
                  <TitleIcon className="icon" style={{ fontSize: "3.5rem" }} />
                </div>
                <div className="tagTitle">COMPANY TYPE</div>
                <div
                  style={{
                    backgroundColor: "white",
                    height: "1%",
                    width: "90%",
                  }}
                ></div>
                <div className="tagName">
                  {company.field ? company.field : "Service"}
                </div>
              </div>
              <div className="companyCTC infoField">
                <div className="icon-wrapper">
                  <PaymentIcon
                    className="icon"
                    style={{ fontSize: "3.5rem" }}
                  />
                </div>
                <div className="tagTitle">COMPANY CTC</div>
                <div
                  style={{
                    backgroundColor: "white",
                    height: "1%",
                    width: "90%",
                  }}
                ></div>
                <div className="tagName">
                  {company.ctc ? company.ctc : "Unknown"}
                </div>
              </div>
              <div className="companyDate infoField">
                <div className="icon-wrapper">
                  <CalendarMonthIcon
                    className="icon"
                    style={{ fontSize: "3.5rem" }}
                  />
                </div>
                <div className="tagTitle">DATE OF ARRIVAL</div>
                <div
                  style={{
                    backgroundColor: "white",
                    height: "1%",
                    width: "90%",
                  }}
                ></div>
                <div className="tagName">
                  {company.scheduled ? company.scheduled : "TBD"}
                </div>
              </div>
            </div>
            <div
              className="header_wrapper"
              style={{
                width: "90vw",
                margin: "1vh 4vh",
                padding: "2vh",
                background: "#252f3d",
                border: "red 2px",
                // borderRadius: "30px",
              }}
            >
              <div className="header-main" style={{ marginLeft: "-4vh" }}>
                DESCRIPTION
              </div>
              <div
                style={{
                  height: "20%",
                  width: "98%",
                  background: "white",
                  padding: "4vh",
                  marginTop: "1vh",
                  marginLeft: "2vh",
                  // borderRadius: "20px",
                }}
              >
                {company.description
                  ? company.description
                  : "Will be updated soon"}
              </div>
            </div>
            <div
              className="header_wrapper"
              style={{
                width: "90vw",
                margin: "1vh 4vh",
                padding: "2vh",
                background: "#252f3d",
                border: "red 2px",
                // borderRadius: "30px",
              }}
            >
              <div className="header-main" style={{ marginLeft: "-4vh" }}>
                ATTACHMENTS
              </div>
              <div
                style={{
                  height: "20%",
                  width: "98%",
                  background: "white",
                  padding: "2vh 2vh",
                  marginTop: "1vh",
                  marginLeft: "2vh",
                }}
              >
                {company.compAttachs && company.compAttachs.length ? (
                  <>
                    {company.compAttachs.map((attachment) => (
                      <>
                        <Button
                          style={{
                            backgroundColor: "rgb(198, 198, 198)",
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "12px",
                          }}
                          onClick={() => showFile(attachment)}
                        >
                          {buttonString(attachment)} ⬇️
                        </Button>
                        <br />
                        <br />
                      </>
                    ))}
                  </>
                ) : (
                  "No attachments"
                )}
              </div>
            </div>
            <div
              className="header_wrapper"
              style={{
                width: "90vw",
                height: "40vh",
                margin: "2vh 4vh",
                padding: "2vh",
                background: "#252f3d",
                border: "red 2px",
                // borderRadius: "30px",
              }}
            >
              <div className="header-wrapper">
                <div className="header-main">ELIGIBILITY CRITERIA</div>
              </div>
              <div className="list-wrapper">
                {data.map((currElem) => {
                  return (
                    <div
                      style={{
                        height: "20%",
                        width: "98%",
                        background: "white",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                        padding: "0 2vh",
                        marginTop: "1vh",
                        // borderRadius: "20px",
                      }}
                    >
                      <div
                        className="title-wrapper"
                        style={{
                          width: "50%",
                          height: "100%",
                          background: "yellow",
                          display: "flex",
                          alignItems: "center",
                          background: "transparent",
                          fontSize: "1.4rem",
                          color: "gray",
                          fontWeight: "bold",
                        }}
                      >
                        {currElem.title} :
                      </div>
                      <div
                        className="info-wrapper"
                        style={{
                          width: "50%",
                          height: "100%",
                          background: "green",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "flex-end",
                          background: "transparent",
                          fontSize: "1.4rem",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        {currElem.info ? currElem.info : currElem.default}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {ifApplied &&
              ifApplied.map((comp) => {
                if (comp["company"]["id"] === params.id) {
                  flag = true;
                }
              })}
            {!flag && (
              <div className="header-wrapper">
                <Button onClick={handleApply} fullWidth>
                  <div
                    style={{
                      color: "black",
                      fontSize: "20px",
                      marginRight: "10px",
                    }}
                  >
                    {" "}
                    Once filled the company form please click here {" -> "}
                  </div>
                  <div className="applied_button">APPLIED</div>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
