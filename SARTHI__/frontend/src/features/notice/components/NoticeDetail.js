import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchNoticeByIdAsync, selectNotice } from "../noticeSlice";
import { PictureAsPdf } from "@mui/icons-material";
import { Button } from "@mui/material";

const NoticeDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const notice = useSelector(selectNotice);
  useEffect(() => {
    dispatch(fetchNoticeByIdAsync(params.id));
  }, [dispatch, params.id]);
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
      {notice && (
        <div>
          <div
            className="header_wrapper"
            style={{
              width: "90vw",
              margin: "2vh 8vh",
              padding: "2vh",
              background: "#252f3d",
              border: "red 2px",
              //borderRadius: "30px",
            }}
          >
            <div style={{ color: "white", fontSize: "24px" }}>
              <strong> {notice.noticeMsg}</strong>
            </div>
            <div
              style={{
                height: "20%",
                width: "98%",
                background: "white",
                padding: "4vh",
                marginTop: "1vh",
                marginLeft: "2vh",
                borderRadius: "20px",
              }}
            >
              {notice.description}
            </div>
          </div>
          <div
            className="header_wrapper"
            style={{
              width: "90vw",
              margin: "2vh 8vh",
              padding: "2vh",
              background: "#252f3d",
              border: "red 2px",
              //borderRadius: "30px",
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
                borderRadius: "20px",
              }}
            >
              {notice.noticeAttachs && notice.noticeAttachs.length ? (
                <>
                  {notice.noticeAttachs.map((attachment) => (
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
        </div>
      )}
    </>
  );
};

export default NoticeDetail;
