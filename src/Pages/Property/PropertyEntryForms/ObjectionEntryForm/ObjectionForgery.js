import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import ApiHeader from 'Components/ApiList/ApiHeader'
import apiLinks from 'Components/ApiList/ObjectionRectificationApi'
import 'animate.css'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import {GiFlatHammer} from 'react-icons/gi'
import { ColorRing } from 'react-loader-spinner'

const ObjectionForgery = () => {

  const navigate = useNavigate()

  const [documentUpload, setdocumentUpload] = useState()
  const [isLoader, setisLoader] = useState(false)
  // const [otherReason, setotherReason] = useState('')

  const validationSchema = yup.object({
    // forgeryReason : yup.string().required('Please select or write the reason'),
    evidence : yup.mixed().required('Please upload the document as a proof')
  })

  const formik = useFormik({
  initialValues :  {
    forgeryReason : [],
    evidence : '',
    otherReason: ''
  },

    onSubmit: (values) => {
      console.log("getting forgery values => ", values)
      submitForm(values)
    },validationSchema

  })

  const submitForm = (values) => {
    console.log("Entering in sumbission form => ", values)
    setisLoader(true)

    let fd = new FormData();
    fd.append("forgeryReason", values.forgeryReason)
    fd.append("evidence", documentUpload)

    console.log("Before send => ", fd)

    axios.post(fd,ApiHeader())
    .then((res) => {
      console.log("Forgery Submitted", res)
      setisLoader(false)
    })
    .catch((err) => {
      console.log("Forgery submission error  => ", err)
      setisLoader(false)
    })

  }  

  const handleChange = (e) => {
    if (e.target.name == "evidence") {
      let file = e.target.files[0];
      setdocumentUpload(e.target.files[0]);
      console.log("File on change..", file);
    }
  };

  return (
    <>
    
    <ToastContainer position="top-right" autoClose={2000} />

    {isLoader && <div className="w-full z-10 absolute mx-auto text-center flex justify-center items-center top-1/2">
            <span className="inline">
              <ColorRing
                visible={true}
                height="120"
                width="120"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </span>
          </div>}

<div className='flex flex-row justify-evenly items-center space-x-2 md:w-[20vw] my-4 mt-[7rem] ml-[3rem] w-[50vw]'>
       <span className='font-extrabold text-[30px]'><GiFlatHammer/></span>
       <span className='text-lg font-semibold'>Objection Forgery</span>
    </div>

    <form onChange={formik.handleChange} onSubmit={formik.handleSubmit} className="md:mt-[3rem] mt-[3rem] text-sm px-6">


    {/* Reason */}
      <div className='my-6'>

        <div className='font-semibold text-base'>
          Select Reasons for forgery :
        </div>

        <div className='flex flex-row space-x-2 items-center py-2'>
        <label><input type="checkbox" name="forgeryReason" className='rounded-md ' value='Instead of the owner of the building, the tenant or other occupy the holding in his name.'/>
        Instead of the owner of the building, the tenant or other occupy the holding in his name.</label>
        </div>

        <div className='flex flex-row space-x-2 items-center py-2'>
          <label><input type="checkbox" name="forgeryReason" value='After the death of the owner of the holding registered in the corporation requisition register, only one shareholder obtained the holding number in his name.' />
          After the death of the owner of the holding registered in the corporation requisition register, only one shareholder obtained the holding number in his name.</label>
        </div>

        <div className='flex flex-row space-x-2 items-center py-2'>
         <label> <input type="checkbox" name="forgeryReason" value='Application has been made for establishment of holding by more than one claimant for the same building.'/>
          Application has been made for establishment of holding by more than one claimant for the same building.</label>
        </div>

        <div className='flex flex-row space-x-2 items-center py-2'>
         <label> <input type="checkbox" name="forgeryReason" value={formik.values.otherReason}/>
          Other Reason :</label>
          <textarea type="text" name="otherReason" value={formik.values.otherReason} placeholder='Enter any other reason...' className="form-control block w-[25rem] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md" rows={1} />
        
          {(formik.touched.evidence && formik.errors.evidence) && <span className='text-xs text-red-500 absolute bottom-10'>{formik.errors.evidence}</span>}

        
        </div>
       
      </div>


      {/* Document */}
      <div className='my-6'>

      <div className='font-semibold text-base'>
          Select Reasons for forgery :
        </div>

          <div className='flex flex-wrap flex-row items-center space-x-4 mt-2'>
          <label htmlFor="evidence">Document :</label>
          <input type="file" onChange={handleChange} name="evidence" id="evidence" className="form-control block w-[15rem] px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md" />
          </div>

      </div>


    {/* Buttons */}
    <div className='flex flex-row flex-wrap justify-between items-center'>
            <div onClick={() => navigate('/objection')} className="w-[5rem] cursor-pointer px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Back
            </div>
           <div>
           <button type="submit" className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"> Submit </button>
           </div>
           </div>

    </form>
    
    </>
  )
}

export default ObjectionForgery