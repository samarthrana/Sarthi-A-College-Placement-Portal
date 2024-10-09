import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createNoticeAsync,
  fetchNoticeByIdAsync,
  selectAllNotices,
  selectNotice,
  updateNoticeAsync,
} from "../../notice/noticeSlice";
import { useParams } from "react-router";
import { useAlert } from "react-alert";
import Swal from "sweetalert2";

const NoticeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const alert = useAlert();
  const dispatch = useDispatch();
  const params = useParams();
  const notice = useSelector(selectNotice);
  const [noticeAttach, setNoticeAttach] = useState(null);
  const attachArr = [];
  const handleDelete = () => {
    const delNote = { ...notice };
    delNote.deleted = true;
    dispatch(updateNoticeAsync(delNote));
    alert.info("Notice deleted succesfully.");
  };
  const handleFileChange = (event) => {
    console.log("Handl", event.target.files[0]);
    const files = event.target.files;
    console.log(files);
    console.log();
    for (let idx = 0; idx < files.length; idx++) {
      attachArr.push(files[idx]);
      console.log(attachArr);
    }
    const file = event.target.files[0];
    console.log(attachArr, file);
    setNoticeAttach(attachArr);
  };
  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  useEffect(() => {
    if (params.id) {
      dispatch(fetchNoticeByIdAsync(params.id));
    }
  }, [dispatch, params.id]);
  useEffect(() => {
    if (selectNotice && params.id) {
      setValue("noticeMsg", notice.noticeMsg);
      setValue("description", notice.description);
      setValue("noticeAttachs", notice.noticeAttachs);
    }
  }, [notice, params.id]);

  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div
          className="upcoming_companies_left_content"
          style={{
            width: "90vw",
            padding: "1vh 2vh",
            margin: "4vh",
            marginLeft: "10vh",
            background: "#242526",
            borderRadius: "30px",
          }}
        >
          <form
            noValidate
            onSubmit={handleSubmit((data) => {
              const notice = { ...data };
              if (noticeAttach) {
                notice.noticeAttachs = noticeAttach;
                setNoticeAttach(null);
              } else {
                notice.noticeAttachs = [];
                setNoticeAttach(null);
              }
              if (params.id) {
                notice.id = params.id;
                dispatch(updateNoticeAsync(notice));
                alert.success("Notice updated succesfully.");

                reset();
              } else {
                dispatch(createNoticeAsync(notice));
                alert.success("Notice added succesfully.");

                reset();
              }
            })}
          >
            <span
              style={{ color: "white", marginLeft: "3vh", fontSize: "20px" }}
            >
              <strong>Subject</strong>
            </span>
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label htmlFor="noticeMsg">Notice Title</label>
                <br></br>
                <div
                  className="info"
                  style={{
                    background: "transparent",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  <input
                    type="text"
                    {...register("noticeMsg", {
                      required: "Subject is required",
                    })}
                    id="noticeMsg"
                    placeholder="Enter ...."
                    style={{
                      borderBottom: "2.5px solid white",
                      color: "black",
                      width: "83.8vw",
                      padding: "1.2vh",
                    }}
                  />
                </div>
              </div>
            </div>
            <span
              style={{ color: "white", marginLeft: "3vh", fontSize: "20px" }}
            >
              <strong>Description</strong>
            </span>
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label htmlFor="description">Description</label>
                <br></br>
                <div
                  className="info"
                  style={{
                    background: "transparent",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  <textarea
                    rows={4}
                    {...register("description", {
                      required: "Type is required",
                    })}
                    id="description"
                    placeholder="Type your message"
                    defaultValue={""}
                    style={{ padding: "1.2vh", width: "84vw" }}
                  />
                </div>
              </div>
            </div>
            <span
              style={{ color: "white", marginLeft: "3vh", fontSize: "20px" }}
            >
              <strong>Attachments</strong>
            </span>
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label
                  htmlFor="noticeAttachs"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  File/s
                </label>
                <br></br>
                <div
                  className="info"
                  style={{
                    background: "transparent",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  <input
                    multiple
                    type="file"
                    onChange={handleFileChange}
                    id="noticeAttachs"
                    placeholder="Enter ...."
                    style={{
                      borderBottom: "2.5px solid white",
                      color: "black",
                      width: "83.8vw",
                      padding: "1.2vh",
                    }}
                  />
                </div>
              </div>
            </div>

            {params.id ? (
              <div style={{ textAlign: "center" }}>
                <Button
                  onClick={handleClick}
                  style={{
                    backgroundColor: "white",
                    width: "10vw",
                    fontSize: "20px",
                    marginRight: "3%",
                  }}
                >
                  <strong>Delete</strong>
                </Button>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "white",
                    width: "10vw",
                    fontSize: "20px",
                  }}
                >
                  <strong>Save</strong>
                </Button>
              </div>
            ) : (
              <div style={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "white",
                    width: "10vw",
                    fontSize: "20px",
                  }}
                >
                  <strong>Add</strong>
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoticeForm;
