//////////////////////////////////////////////////////////////////////
// Author      : R U Bharti
// Date        : 16th Nov., 2022  01:30 PM
// Project     : JUIDCO
// Component   : ConcessionForm
// Description : Concession entry form
//////////////////////////////////////////////////////////////////////

import React, { useState } from "react";
import { RiBuilding2Fill } from "react-icons/ri";
import { useFormik } from "formik";
import * as yup from "yup";
import { getCurrentDate } from "Components/Common/PowerUps/PowerupFunctions";
import apiList from "../../../../Components/ApiList/ConcessionApi";
import ApiHeader2 from "Components/ApiList/ApiHeader2";
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify'
import { useNavigate } from "react-router-dom";

function ConcessionForm(props) {
  const { entryForm } = apiList();

  const [genderUpload, setgenderUpload] = useState();
  const [dobUpload, setdobUpload] = useState();
  const [speciallyUpload, setspeciallyUpload] = useState();
  const [armedForceUpload, setarmedForceUpload] = useState();
  const [storeData, setstoreData] = useState([]);
  const [stringData, setstringData] = useState({});
  const [resultData, setresultData] = useState({});
  const [concessionUpload, setconcessionUpload] = useState()

  const navigate = useNavigate()

  const validationSchema = yup.object({
    gender: yup.string().required("Select gender"),
    dob: yup.date().required("Select DOB"),
    speciallyAbled: yup.string().required("Select specially-abled status"),
    armedForce: yup.string().required("Select armed force status"),

    // genderDoc: yup.string().required("Select gender document"),
    // dobDoc: yup.string().required("Select DOB document"),
    // speciallyAbledDoc: yup.string().required("speciallyAbled"),
    // armedForceDoc: yup.string().when("armedForce", (armedForce) => {
    //   if (armedForce == "yes") {
    //     return yup.string().required("Select armed document");
    //   }
    // }),
  });

  const formik = useFormik({
    initialValues: {
      gender: "",
      dob: getCurrentDate(),
      speciallyAbled: "",
      armedForce: "",
      genderDoc: "",
      dobDoc: "",
      speciallyAbledDoc: "",
      armedForceDoc: "",
      concessionDoc: ""
    },

    onSubmit: (values) => {
      console.log("--1-- values => ", values);
      submitData(values);
    },
    // validationSchema,
  });

  const submitData = () => {
    //creating formData object to send file data
    let fd = new FormData();
    fd.append("gender", formik.values.remarks);
    fd.append("dob", formik.values.dob);
    fd.append("speciallyAbled", formik.values.speciallyAbled);
    fd.append("armedForce", formik.values.armedForce);
    fd.append("dobDoc", dobUpload);
    fd.append("genderDoc", genderUpload);
    fd.append("speciallyAbledDoc", speciallyUpload);
    fd.append("armedForceDoc", armedForceUpload);
    fd.append("concessionDoc", concessionUpload)

    console.log("--2-- before fetch...", fd);

    axios
      .post(entryForm, fd, ApiHeader2())
      .then(function (response) {
        console.log(
          "successfully posted => ",
          response,
          "\n result data =>",
          fd
        );
          toast.success("Submitted successfully")
          navigate("/home")
      })
      .catch(function (error) {
        console.log("error posting data => ", error, "\n result data =>", fd);
      });
  };

  const handleChange = (e) => {
    if (e.target.name == "genderDoc") {
      let file = e.target.files[0];
      setgenderUpload(e.target.files[0]);
      console.log("--1-file on change..", file);
    } else if (e.target.name == "dobDoc") {
      let file = e.target.files[0];
      setdobUpload(e.target.files[0]);
      console.log("--2-file on change..", file);
    } else if (e.target.name == "speciallyAbledDoc") {
      let file = e.target.files[0];
      setspeciallyUpload(e.target.files[0]);
      console.log("--3-file on change..", file);
    } else if (e.target.name == "armedForceDoc") {
      let file = e.target.files[0];
      setarmedForceUpload(e.target.files[0]);
      console.log("--4-file on change..", file);
    } else if (e.target.name == "concessionDoc"){
      let file = e.target.files[0];
      setconcessionUpload(e.target.files[0])
      console.log("--5-- concession file changed.. ", file)
    }
  };

  return (
    <>
     <ToastContainer position="top-right" autoClose={2000} />

      <h1 className="mt-6 mb-2 font-serif font-semibold absolute text-gray-600">
        <RiBuilding2Fill className="inline mr-2" />
        Concession Details
      </h1>

      <div className="block p-4 w-full md:py-6 shadow-lg bg-white mx-auto absolute top-14 border border-gray-200">
        <form onSubmit={formik.handleSubmit} onChange={handleChange}>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Gender */}
            <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 md:px-10">
              <div className="form-group mb-6 col-span-3 md:col-span-1 md:px-10">
                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">
                  <small className=" mt-1 text-sm font-semibold text-red-600 inline ">
                    *
                  </small>
                  Gender
                </label>
                <select
                  {...formik.getFieldProps("gender")}
                  className="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                >
                  <option value="" disabled>
                    --Select--
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                </select>
                <span className="text-red-600 absolute text-xs">
                  {formik.touched.gender && formik.errors.gender
                    ? formik.errors.gender
                    : null}
                </span>
              </div>
              <div className="form-group mb-6 col-span-3 md:col-span-1 md:px-4">
                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">
                  <small className="mt-1 text-sm font-semibold text-red-600 inline ">
                    *
                  </small>
                  Select gender document
                </label>
                <input
                  {...formik.getFieldProps("genderDoc")}
                  type="file"
                  className="form-control block w-full md:w-5/6 px-3 py-1.5 md:py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 cursor-pointer shadow-md"
                  placeholder="Enter new ward no."
                />
                <span className="text-red-600 absolute text-xs">
                  {formik.touched.genderDoc && formik.errors.genderDoc
                    ? formik.errors.genderDoc
                    : null}
                </span>
              </div>
            </div>

            {/* DOB */}
            <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 md:px-10">
              <div className="form-group mb-6 col-span-3 md:col-span-1 md:px-10">
                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">
                  <small className=" mt-1 text-sm font-semibold text-red-600 inline ">
                    *
                  </small>
                  DOB
                </label>
                <input
                  {...formik.getFieldProps("dob")}
                  type="date"
                  className="form-control block w-full  px-3 py-1.5 md:py-1 text-base md:text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                />
                <span className="text-red-600 absolute text-xs">
                  {formik.touched.dob && formik.errors.dob
                    ? formik.errors.dob
                    : null}
                </span>
              </div>
              <div className="form-group mb-6 col-span-3 md:col-span-1 md:px-4">
                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">
                  <small className=" mt-1 text-sm font-semibold text-red-600 inline ">
                    *
                  </small>
                  Select DOB document
                </label>
                <input
                  {...formik.getFieldProps("dobDoc")}
                  type="file"
                  className="form-control block w-full md:w-5/6 px-3 py-1.5 md:py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 cursor-pointer shadow-md"
                  placeholder="Enter new ward no."
                />
                <span className="text-red-600 absolute text-xs">
                  {formik.touched.dobDoc && formik.errors.dobDoc
                    ? formik.errors.dobDoc
                    : null}
                </span>
              </div>
            </div>

            {/* speciallyAbled */}
            <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 md:px-10">
              <div className="form-group mb-6 col-span-3 md:col-span-1 md:px-10">
                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">
                  <small className=" mt-1 text-sm font-semibold text-red-600 inline ">
                    *
                  </small>
                  Specially-Abled
                </label>
                <select
                  {...formik.getFieldProps("speciallyAbled")}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                >
                  <option value="" disabled>
                    --Select--
                  </option>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
                <span className="text-red-600 absolute text-xs">
                  {formik.touched.speciallyAbled && formik.errors.speciallyAbled
                    ? formik.errors.speciallyAbled
                    : null}
                </span>
              </div>
              <div className="form-group mb-6 col-span-3 md:col-span-1 md:px-4">
                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">
                  <small className=" mt-1 text-sm font-semibold text-red-600 inline ">
                    *
                  </small>
                  Select specially-abled document
                </label>
                <input
                  {...formik.getFieldProps("speciallyAbledDoc")}
                  type="file"
                  className="form-control block w-full md:w-5/6 px-3 py-1.5 md:py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 cursor-pointer shadow-md"
                  placeholder="Enter new ward no."
                />
                <span className="text-red-600 absolute text-xs">
                  {formik.touched.speciallyAbledDoc &&
                  formik.errors.speciallyAbledDoc
                    ? formik.errors.speciallyAbledDoc
                    : null}
                </span>
              </div>
            </div>

            {/* Armed Force */}
            <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 md:px-10">
              <div className="form-group mb-6 col-span-3 md:col-span-1 md:px-10">
                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">
                  <small className=" mt-1 text-sm font-semibold text-red-600 inline ">
                    *
                  </small>
                  Armed-Force
                </label>
                <select
                  {...formik.getFieldProps("armedForce")}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                >
                  <option value="" disabled>
                    --Select--
                  </option>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
                <span className="text-red-600 absolute text-xs">
                  {formik.touched.armedForce && formik.errors.armedForce
                    ? formik.errors.armedForce
                    : null}
                </span>
              </div>
              <div className="form-group mb-6 col-span-3 md:col-span-1 md:px-4">
                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">
                  <small className=" mt-1 text-sm font-semibold text-red-600 inline ">
                    *
                  </small>
                  Select armed force document
                </label>
                <input
                  {...formik.getFieldProps("armedForceDoc")}
                  type="file"
                  className="form-control block w-full md:w-5/6 px-3 py-1.5 md:py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 cursor-pointer shadow-md"
                  placeholder="Enter new ward no."
                />
                <span className="text-red-600 absolute text-xs">
                  {formik.touched.armedForceDoc && formik.errors.armedForceDoc
                    ? formik.errors.armedForceDoc
                    : null}
                </span>
              </div>

            {/* Concession Form */}
            <div className="ml-4 form-group mb-6 col-span-3 md:col-span-2 md:px-4">
                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">
                  <small className=" mt-1 text-sm font-semibold text-red-600 inline ">
                    *
                  </small>
                  Concession Form
                </label>
                <input
                  {...formik.getFieldProps("concessionDoc")}
                  type="file"
                  className="form-control block md:w-5/6 px-3 py-1.5 md:py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 cursor-pointer shadow-md"
                />
                <span className="text-red-600 absolute text-xs">
                  {formik.touched.concessionDoc && formik.errors.concessionDoc
                    ? formik.errors.concessionDoc
                    : null}
                </span>
              </div>
            </div>

            <div className="col-span-3 grid grid-cols-2 mb-16 text-center">
              <div className="md:px-10">
                {/* <button onClick={() => props.backFun(2)} type="button" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Back</button> */}
                <button
                  type="button"
                  className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Back
                </button>
              </div>
              <div className="md:px-10 ">
                <button
                  type="submit"
                  className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ConcessionForm;

//////////////////////////////////////////////
// Export to : ConcessionFormIndex.js
//////////////////////////////////////////////
