//////////////////////////////////////////////////////////////////////
// Author      : R U Bharti
// Date        : 16th Nov., 2022  01:30 PM
// Project     : JUIDCO
// Component   : Cluster 
// Description : Cluster Table List
//////////////////////////////////////////////////////////////////////

import React from 'react'
import { RiBuilding2Fill } from 'react-icons/ri'
import { useFormik } from 'formik'
import * as yup from 'yup'
import apiList from 'Components/ApiList/ClusterFormApi'
import ApiHeader from 'Components/ApiList/ApiHeader'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

export const ClusterForm = (props) => {

  const {getCluster, addCluster, viewCluster, updateCluster, deleteCluster} = apiList()
  

  const validationSchema = yup.object({
    name: yup.string().required("Enter name"),
    type: yup.string().required("Select type"),
    address: yup.string().required("Enter address"),
    mobileNo: yup.number().required("Enter mobile no."),
    authPersonName: yup.string().required("Select authorized person name")
  })

  console.log("user Data => ", props?.userData)

  const formik = useFormik({
    initialValues: {
      name: props?.userData?.name,
      type: props?.userData?.type,
      address: props?.userData?.address,
      mobileNo : props?.userData?.mobileNo,
      authPersonName : props?.userData?.authPersonName
    },

    onSubmit: (values) => {
      console.log("--1-- concession form data => ",values)
      submitForm(values)
    }, validationSchema
  })

  const submitForm = (values) => {
    console.log("--2-- before fetch data => ", values)
   {props?.edit ? 
    ( axios.post(addCluster, values, ApiHeader())
    .then((res) => {
      console.log("--3-- form edited successfully \n data => ", res)
      toast.success("Added Successfully")
    })
    .catch((err) => console.log("--3-- form editing error => ", err)))
    :
    ( axios.put(updateCluster + props?.userId, values, ApiHeader())
    .then((res) => {
      console.log("--3-- form updated successfully \n data => ", res)
      toast.success("Updated Successfully")
    })
    .catch((err) => console.log("--3-- form updation error => ", err)))}
  }


  return (
    <>

<ToastContainer position="top-right" autoClose={2000} />
    
    <h1 className="mt-6 mb-2 mx-6 font-serif font-semibold absolute text-gray-600">
        <RiBuilding2Fill className="inline mr-2" />
        Cluster Form
      </h1>

      <div className="block mt-[4rem] md:mt-[5rem] p-4 w-full md:py-6 md:px-14 shadow-lg bg-white mx-auto border border-gray-200">
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-12 md:gap-x-8 gap-y-6">
            {/* name */}
            <div className="md:col-span-4 col-span-12">
                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">
                  <small className=" mt-1 text-sm font-semibold text-red-600 inline ">
                    *
                  </small>
                  Name
                </label>
                <input type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                  name="name"
                  className="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" placeholder='Enter your name..'
                />
                <span className="text-red-600 absolute text-xs">
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : null}
                </span>
            </div>

            {/* Type */}
           <div className="md:col-span-4 col-span-12">
                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">
                  <small className=" mt-1 text-sm font-semibold text-red-600 inline ">
                    *
                  </small>
                  Type
                </label>
                <select
                value={formik.values.type}
                onChange={formik.handleChange}
                  name='type'
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                >
                  <option value="" disabled selected>
                    --Select Type--
                  </option>
                  <option value="c-saf">C-SAF</option>
                  <option value="gb-saf">GB-SAF</option>
                </select>
                <span className="text-red-600 absolute text-xs">
                  {formik.touched.type && formik.errors.type
                    ? formik.errors.type
                    : null}
                </span>
              </div>
           

            {/* Address */}
           <div className="md:col-span-4 col-span-12">
                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">
                  <small className=" mt-1 text-sm font-semibold text-red-600 inline ">
                    *
                  </small>
                  Address
                </label>
                <input
                value={formik.values.address}
                onChange={formik.handleChange}
                 type="text"
                  name='address'
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" placeholder='Enter your address..'
                />
                <span className="text-red-600 absolute text-xs">
                  {formik.touched.address && formik.errors.address
                    ? formik.errors.address
                    : null}
                </span>
              </div>

              {/* Mobile No */}
              <div className="md:col-span-4 col-span-12">
                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">
                  <small className=" mt-1 text-sm font-semibold text-red-600 inline ">
                    *
                  </small>
                  Mobile No.
                </label>
                <input
                value={formik.values.mobileNo}
                onChange={formik.handleChange}
                 type="text"
                  name='mobileNo'
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" placeholder='Enter your mobile no...'
                />
                <span className="text-red-600 absolute text-xs">
                  {formik.touched.mobileNo && formik.errors.mobileNo
                    ? formik.errors.mobileNo
                    : null}
                </span>
              </div>

              {/* Authorized Person Name */}
              <div className="md:col-span-4 col-span-12">
                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">
                  <small className=" mt-1 text-sm font-semibold text-red-600 inline ">
                    *
                  </small>
                  Authorized Person Name
                </label>
                <select
                value={formik.values.authPersonName}
                onChange={formik.handleChange}
                  name='authPersonName'
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                >
                  <option value="" disabled selected>
                    --Select Type--
                  </option>
                  <option value="First Person">First Person</option>
                  <option value="Second Person">Second Person</option>
                </select>
                <span className="text-red-600 absolute text-xs">
                  {formik.touched.authPersonName && formik.errors.authPersonName
                    ? formik.errors.authPersonName
                    : null}
                </span>
              </div>
          

              <div className='col-span-6'>

                <button onClick={props.backFun}
                  type="button"
                  className="md:mt-1.5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Back
                </button>
              </div>

              <div className='col-span-6 text-end'>
                <button
                  type="submit"
                  className="md:mt-2 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                 {props.editState ? <>Update</>:<>Add</>}
                </button>
              </div>

          </div>
        </form>
      </div>
    
    </>
  )
}
