import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Company.css";
import CompanyCard from "../../../components/companyCard/CompCard";
import { NavLink } from "react-router-dom";
import { fetchAllCompaniesAsync, selectAllCompanies } from "../companySlice";
import { Button } from "@mui/material";
export function Company({ title }) {
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
              color: "white",
              fontSize: "30px",
            }}
          >
            <strong>{title}</strong>
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
                <NavLink to={`/company-detail/${id}`}>
                  <CompanyCard key={id} {...currElem} />
                </NavLink>
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
