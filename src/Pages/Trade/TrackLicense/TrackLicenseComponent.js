import { Preview } from '@mui/icons-material';
import { Button } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import TRACKING from '../TradeAssests/tracking.png'
import { HEADER, TRADE } from '../tradeComponent/TradeApiListFile';
import * as yup from 'yup';

function TrackLicenseComponent(props) {

  const [licenseData, setlicenseData] = useState([
    {
      application_no: "...",
      apply_date: "...",
      apply_from: "...",
      email_id: "...",
      firm_name: "...",
      guardian_name: "...",
      id: null,
      license_no: "...",
      mobile_no: "...",
      owner_name: "...",
      provisional_license_no: "...",
      valid_upto: "...",
    }]
  )

  console.log("licenseData.....", licenseData[0])
  const handleSearch = (values) => {
    axios.post(TRADE.GET_LICENSE_DTL_BY_ANYTHING, values, HEADER())
      .then(function (response) {
        console.log("license dtl by anything", response.data);
        if (response.data.status) {
          // props.collector(response.data.license);
          props.licenseDataFun(response.data.data.licence);
          props.showFun(false);
        } else {
            alert("No Data Found !")
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const initialValues = {
    entityName: "",
    entityValue: ''
  };

  const validationSchema = yup.object({
    entityName: yup.string().required('This field is required !'),
    entityValue: yup.string().required('This field is required !')
  })

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log("==========values", values);
      handleSearch(values)
    }, validationSchema
  })

 


  return (
    <div className='w-full mt-4'>

      <div className=''>
        <div className='w-full h-16 bg-teal-200 mx-auto font-mono rounded-lg flex m-4'>
          <img src={TRACKING} className='h-12 w-12 my-1 ml-8' />
          <h1 className='font-bold text-lg py-3 px-2'> TRACK LICENSE NO</h1>
          <p className='font-bold text-sm py-4 px-2'>( SEARCH WITH APPLICATION, LICENSE, MOBILE OR FIRM NAME )</p>
        </div>
        <form onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
          <div className='w-full h-16 bg-slate-100 mx-auto font-semibold rounded-sm  text-xs grid grid-cols-5 gap-2'>
            <div className='text-justify uppercase  mx-4'>
              {/* <p htmlFor="entityName" className=''>Search By  <span className='text-red-500'> *</span></p> */}
              <br />
              <select className='form-control border rounded-md px-4 py-1.5 w-full' name='entityName' onChange={formik.handleChange} value={formik.values.entityName} >
                <option value="" selected>SEARCH BY</option>
                <option value="APPLICATION">APPLICATION NO</option>
                <option value="LICENSE">LICENSE NO.</option>
                <option value="MOBILE">MOBILE NO.</option>
                <option value="FIRM">FIRM NAME.</option>
                <option value="OWNER">OWNER NAME.</option>
              </select>

              <p className='text-red-500 text-[9px]'>{formik.touched.entityName && formik.errors.entityName ? formik.errors.entityName : null}</p>
            </div>
            <div className='uppercase'>

              {/* <p htmlFor="entityName" className=''>Search By  <span className='text-red-500'> *</span></p> */}
              <br />
              <input type="text" name='entityValue' className='form-control border rounded-md  w-full  px-4 py-1.5' placeholder='Enter Application, Mobile, License or Firm name.' onChange={formik.handleChange} value={formik.values.entityValue} />

              <p className='text-red-500 text-[9px]'>{formik.touched.entityValue && formik.errors.entityValue ? formik.errors.entityValue : null}</p>
            </div>
            <div>
              <br />
              <button className='font-semibold text-sm bg-white rounded-md  px-4 py-1.5' type='submit'> SEARCH </button>
            </div>
          </div>
        </form>
      </div>

  

    </div>
  )
}

export default TrackLicenseComponent