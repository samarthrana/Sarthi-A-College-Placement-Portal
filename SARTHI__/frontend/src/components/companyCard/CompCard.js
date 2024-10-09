import React from "react";
import "./CompanyCard.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaymentIcon from "@mui/icons-material/Payment";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import UpdateIcon from "@mui/icons-material/Update";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../features/auth/authSlice";

const CompanyCard = (props) => {
  const user = useSelector(selectLoggedInUser);
  return (
    <>
      {user.role === "admin" && !props.url && (
        <div
          className="upcoming-company-card-wrapper"
          style={{
            width: "100%",
            height: "30vh",
            margin: "2% 0",
            background: "white",
            //borderRadius: "30px",
          }}
        >
          <div className="company-name">{props.name}</div>

          <div className="line-wrapper">
            <div className="liner"></div>
          </div>

          <div className="info-wrapper">
            <div className="info-company">
              <div className="company-type">
                <WorkOutlineOutlinedIcon
                  style={{
                    fontSize: "3rem",
                    marginRight: "2%",
                    background: "transparent",
                  }}
                />{" "}
                {props.field ? props.field : "Service"}
              </div>
              <div className="company-CTC">
                <PaymentIcon
                  style={{
                    fontSize: "3rem",
                    marginRight: "2%",
                    background: "transparent",
                  }}
                />{" "}
                {props.ctc ? props.ctc : "Unknown"}
              </div>
              <div className="company-drive-date">
                <CalendarMonthIcon
                  style={{
                    fontSize: "3rem",
                    marginRight: "2%",
                    background: "transparent",
                  }}
                />{" "}
                {props.scheduled ? props.scheduled : "TBD"}
              </div>
            </div>

            <div className="info-application-count">
              <div className="application-count">
                <GroupsOutlinedIcon
                  style={{
                    fontSize: "3rem",
                    marginRight: "2%",
                    background: "transparent",
                  }}
                />{" "}
                {props.vacancy ? props.vacancy : "❔"} Vacancies
              </div>
              <div className="info-spare-1"></div>
              <div className="info-spare-2">
                <div className="info-application-count">
                  <div className="application-count">
                    <UpdateIcon
                      style={{
                        fontSize: "1.5rem",
                        marginRight: "2%",
                        background: "transparent",
                      }}
                    />{" "}
                    <div
                      style={{
                        marginTop: "10%",
                        fontSize: "1.9rem",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <p style={{ fontSize: "17px" }}>Date- </p>
                        <p style={{ fontSize: "12px", width: "60px" }}>
                          {new Date(props.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <p style={{ fontSize: "17px" }}>Time- </p>
                        <p style={{ fontSize: "12px", width: "60px" }}>
                          {new Date(props.updatedAt).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="info-spare-1"></div>
                  <div className="info-spare-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {user.role === "admin" && props.url && (
        <div
          className="upcoming-company-card-wrapper"
          style={{
            width: "100%",
            height: "30vh",
            margin: "2% 0",
            background: "white",
            //borderRadius: "30px",
          }}
        >
          <div className="company-name">{props.name}</div>

          <div className="line-wrapper">
            <div className="liner"></div>
          </div>

          <div className="info-wrapper">
            <div className="info-company">
              <div className="company-type"></div>
            </div>

            <div className="info-application-count">
              <div className="application-count">
                <GroupsOutlinedIcon
                  style={{
                    fontSize: "3rem",
                    marginRight: "2%",
                    background: "transparent",
                  }}
                />{" "}
                {props.vacancy ? props.vacancy : "❔"} Vacancies
              </div>
              <div className="info-spare-1"></div>
              <div className="info-spare-2">
                <div className="info-application-count">
                  <div className="application-count">
                    <UpdateIcon
                      style={{
                        fontSize: "1.5rem",
                        marginRight: "2%",
                        background: "transparent",
                      }}
                    />{" "}
                    <div
                      style={{
                        marginTop: "10%",
                        fontSize: "1.9rem",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <p style={{ fontSize: "17px" }}>Date- </p>
                        <p style={{ fontSize: "12px", width: "60px" }}>
                          {new Date(props.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <p style={{ fontSize: "17px" }}>Time- </p>
                        <p style={{ fontSize: "12px", width: "60px" }}>
                          {new Date(props.updatedAt).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="info-spare-1"></div>
                  <div className="info-spare-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {user.role === "user" && !props.deleted && !props.url && (
        <div
          className="upcoming-company-card-wrapper"
          style={{
            width: "100%",
            height: "30vh",
            margin: "2% 0",
            background: "white",
            //borderRadius: "30px",
          }}
        >
          <div className="company-name">{props.name}</div>

          <div className="line-wrapper">
            <div className="liner"></div>
          </div>

          <div className="info-wrapper">
            <div className="info-company">
              <div className="company-type">
                <WorkOutlineOutlinedIcon
                  style={{
                    fontSize: "3rem",
                    marginRight: "2%",
                    background: "transparent",
                  }}
                />{" "}
                {props.field ? props.field : "Service"}
              </div>
              <div className="company-CTC">
                <PaymentIcon
                  style={{
                    fontSize: "3rem",
                    marginRight: "2%",
                    background: "transparent",
                  }}
                />{" "}
                {props.ctc ? props.ctc : "Unknown"}
              </div>
              <div className="company-drive-date">
                <CalendarMonthIcon
                  style={{
                    fontSize: "3rem",
                    marginRight: "2%",
                    background: "transparent",
                  }}
                />{" "}
                {props.scheduled ? props.scheduled : "TBD"}
              </div>
            </div>

            <div className="info-application-count">
              <div className="application-count">
                <GroupsOutlinedIcon
                  style={{
                    fontSize: "3rem",
                    marginRight: "2%",
                    background: "transparent",
                  }}
                />{" "}
                {props.vacancy ? props.vacancy : "❔"} Vacancies
              </div>
              <div className="info-spare-1"></div>
              <div className="info-spare-2">
                <div className="info-application-count">
                  <div className="application-count">
                    <UpdateIcon
                      style={{
                        fontSize: "1.5rem",
                        marginRight: "2%",
                        background: "transparent",
                      }}
                    />{" "}
                    <div
                      style={{
                        marginTop: "10%",
                        fontSize: "1.9rem",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <p style={{ fontSize: "17px" }}>Date- </p>
                        <p style={{ fontSize: "12px", width: "60px" }}>
                          {new Date(props.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <p style={{ fontSize: "17px" }}>Time- </p>
                        <p style={{ fontSize: "12px", width: "60px" }}>
                          {new Date(props.updatedAt).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="info-spare-1"></div>
                  <div className="info-spare-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {user.role === "user" && !props.deleted && props.url && (
        <div
          className="upcoming-company-card-wrapper"
          style={{
            width: "100%",
            height: "30vh",
            margin: "2% 0",
            background: "white",
            //borderRadius: "30px",
          }}
        >
          <div className="company-name">{props.name}</div>

          <div className="line-wrapper">
            <div className="liner"></div>
          </div>

          <div className="info-wrapper">
            <div className="info-company">
              <div className="company-type"></div>
            </div>

            <div className="info-application-count">
              <div className="application-count">
                <GroupsOutlinedIcon
                  style={{
                    fontSize: "3rem",
                    marginRight: "2%",
                    background: "transparent",
                  }}
                />{" "}
                {props.vacancy ? props.vacancy : "❔"} Vacancies
              </div>
              <div className="info-spare-1"></div>
              <div className="info-spare-2">
                <div className="info-application-count">
                  <div className="application-count">
                    <UpdateIcon
                      style={{
                        fontSize: "1.5rem",
                        marginRight: "2%",
                        background: "transparent",
                      }}
                    />{" "}
                    <div
                      style={{
                        marginTop: "10%",
                        fontSize: "1.9rem",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <p style={{ fontSize: "17px" }}>Date- </p>
                        <p style={{ fontSize: "12px", width: "60px" }}>
                          {new Date(props.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <p style={{ fontSize: "17px" }}>Time- </p>
                        <p style={{ fontSize: "12px", width: "60px" }}>
                          {new Date(props.updatedAt).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="info-spare-1"></div>
                  <div className="info-spare-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyCard;
