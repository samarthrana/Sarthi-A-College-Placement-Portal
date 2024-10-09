import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Company.css";
import CompanyCard from "../../../components/companyCard/CompCard";
import { NavLink } from "react-router-dom";
import {
  fetchAllCompaniesAsync,
  selectAllCompanies,
} from "../../companies/companySlice";
import { Button } from "@mui/material";
export function AdminCompany({ title }) {
  const dispatch = useDispatch();
  const company = useSelector(selectAllCompanies);
  useEffect(() => {
    dispatch(fetchAllCompaniesAsync());
  }, [dispatch]);
  return (
    <>
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
              // color: "pink",
              color: "white",
              fontSize: "30px",
            }}
          >
            <strong>{title}</strong>
          </h1>
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
          {company.map((currElem) => {
            const { id } = currElem;
            if (currElem.type === "on") {
              return (
                <>
                  <NavLink to={`/admin/company-detail/${id}`}>
                    <CompanyCard key={id} {...currElem} />
                  </NavLink>

                  {currElem.deleted ? (
                    <p
                      style={{
                        color: "red",
                        fontSize: "20px",
                        marginLeft: "1%",
                        marginTop: "-1.6%",
                      }}
                    >
                      <strong>Company Deleted</strong>
                    </p>
                  ) : (
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
    </>
  );
}
