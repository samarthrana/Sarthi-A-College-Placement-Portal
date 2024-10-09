import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchCompaniesByCompIdAsync,
  selectUserApplied,
} from "../features/applied/appliedSlice";
import "../UserTable.css";
import { Button } from "@mui/material";

const UserDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const userApllied = useSelector(selectUserApplied);
  useEffect(() => {
    dispatch(fetchCompaniesByCompIdAsync(params.id));
  }, [dispatch, params.id]);
  const downloadCSV = (csv, filename) => {
    var csvFile, downloadLink;
    csvFile = new Blob([csv], { type: "text/csv" });
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
  };
  const htmlToCSV = () => {
    const filename = "Student_Details.csv";
    var data = [];
    var rows = document.querySelectorAll("table tr");
    for (var i = 0; i < rows.length; i++) {
      var row = [];
      var cols = rows[i].querySelectorAll("td");
      for (var j = 0; j < 3; j++) {
        row.push(cols[j].innerText.toString());
      }
      data.push(row.join(","));
    }
    downloadCSV(data.join("\n"), filename);
  };
  return (
    <div>
      <Button
        style={{
          backgroundColor: "#969797",
          color: "black",
          border: "3px solid white",
          float: "right",
        }}
        onClick={htmlToCSV}
      >
        <strong>Download CSV File</strong>
      </Button>
      <table>
        <tr>
          <td>
            <strong>Student Name</strong>
          </td>
          <td>
            <strong>Student RollNumber</strong>
          </td>
          <td>
            <strong>Student Email-id</strong>
          </td>
        </tr>
        {userApllied &&
          userApllied.map((UserDetail, index) => {
            return (
              <tr>
                {UserDetail["user"]["profile"][0] ? (
                  <td>
                    {index + 1 + " "}
                    {UserDetail["user"]["profile"][0] &&
                      UserDetail["user"]["profile"][0]["name"]}
                  </td>
                ) : null}
                {UserDetail["user"]["profile"][0] ? (
                  <td>{UserDetail["user"]["profile"][0]["roll"]}</td>
                ) : null}
                {UserDetail["user"]["profile"][0] ? (
                  <td>
                    {UserDetail["user"]["profile"][0] &&
                      UserDetail["user"]["profile"][0]["email"]}
                  </td>
                ) : null}
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default UserDetail;
