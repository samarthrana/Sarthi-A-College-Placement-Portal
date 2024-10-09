import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSelectedCompany,
  createCompanyAsync,
  fetchCompanyByIdAsync,
  selectedCompanyById,
  updateCompanyAsync,
} from "../../companies/companySlice";
import { useParams } from "react-router";
import { useAlert } from "react-alert";
import Swal from "sweetalert2";

const CompanyForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const alert = useAlert();
  const dispatch = useDispatch();
  const company = useSelector(selectedCompanyById);
  const params = useParams();
  const [compAttachs, setcompAttachs] = useState(null);
  const attachArr = [];
  const handleDelete = () => {
    const delComp = { ...company };
    delComp.deleted = true;
    console.log("dle", delComp);
    dispatch(updateCompanyAsync(delComp));
    alert.info("Company deleted succesfully.");
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
      dispatch(fetchCompanyByIdAsync(params.id));
    } else {
      dispatch(clearSelectedCompany());
      // todo : created message
    }
  }, [dispatch, params.id]);
  useEffect(() => {
    if (company && params.id) {
      setValue("type", company.type);
      setValue("url", company.url);
      setValue("name", company.name);
      setValue("field", company.field);
      setValue("ctc", company.ctc);
      setValue("scheduled", company.scheduled);
      setValue("description", company.description);
      setValue("vacancy", company.vacancy);
      setValue("cgpa", company.cgpa);
      setValue("ten", company.ten);
      setValue("twelve", company.twelve);
      setValue("backlogs", company.backlogs);
      setValue("compAttachs", company.compAttachs);
    }
  }, [company, params.id]);
  // File change handler
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
    setcompAttachs(attachArr);
  };
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
              const company = { ...data };
              if (compAttachs) {
                company.compAttachs = compAttachs;
                setcompAttachs(null);
              } else {
                console.log("null chaal");
                company.compAttachs = [];
                setcompAttachs(null);
              }
              reset();
              if (params.id) {
                company.id = params.id;
                console.log("disp", company);
                dispatch(updateCompanyAsync(company));
                alert.success("Company updated succesfully.");
                reset();
              } else {
                console.log(company);
                dispatch(createCompanyAsync(company));
                alert.success("Company added succesfully.");
                reset();
              }
            })}
          >
            <span
              style={{ color: "white", marginLeft: "3vh", fontSize: "20px" }}
            >
              <strong>Company Details</strong>
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
                  htmlFor="type"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Company On-campus / Off-campus *
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
                    type="text"
                    {...register("type", {
                      required: "Type is required",
                    })}
                    id="type"
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
                  htmlFor="url"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  External URL (Incase of Off-Campus) *
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
                    type="text"
                    {...register("url")}
                    id="url"
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
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Company Name *
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
                    type="text"
                    {...register("name", {
                      required: "Type is required",
                    })}
                    id="name"
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
                  htmlFor="field"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Company Type
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
                    type="text"
                    {...register("field")}
                    id="field"
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
                  htmlFor="ctc"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Company CTC
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
                    type="text"
                    {...register("ctc")}
                    id="ctc"
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
                  htmlFor="scheduled"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Scheduled
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
                    type="text"
                    {...register("scheduled")}
                    id="scheduled"
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
                <label
                  htmlFor="description"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Description
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
                  <textarea
                    rows={4}
                    {...register("description")}
                    id="description"
                    placeholder="Type your message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    defaultValue={""}
                    style={{ padding: "1.2vh", width: "84vw" }}
                  />
                </div>
              </div>
            </div>
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
                  htmlFor="vacancy"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Vacancy
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
                    type="text"
                    {...register("vacancy")}
                    id="vacancy"
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
                  htmlFor="compAttachs"
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
                    id="compAttachs"
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
              <strong>Eligiblity Criteria</strong>
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
                  htmlFor="cgpa"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  CGPA
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
                    type="text"
                    {...register("cgpa")}
                    id="cgpa"
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
                  htmlFor="ten"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  10 %
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
                    type="text"
                    {...register("ten")}
                    id="ten"
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
                  htmlFor="twelve"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  12 %
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
                    type="text"
                    {...register("twelve")}
                    id="twelve"
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
                  htmlFor="backlogs"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Backlogs
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
                    type="text"
                    {...register("backlogs")}
                    id="backlogs"
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

export default CompanyForm;
