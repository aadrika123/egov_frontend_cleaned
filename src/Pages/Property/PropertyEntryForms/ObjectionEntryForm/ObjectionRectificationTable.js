//////////////////////////////////////////////////////////////////////
// Author      : R U Bharti
// Date        : 18th Nov., 2022  12:45 PM
// Project     : JUIDCO
// Component   : ObjectionRectificationTable
// Description : Objection Rectification Application page
//////////////////////////////////////////////////////////////////////

import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import ApiHeader2 from 'Components/ApiList/ApiHeader2'
import apiLinks from 'Components/ApiList/ObjectionRectificationApi'
import 'animate.css'
import {Toggle} from 'react-toggle-component'

const ObjectionRectificationTable = (props) => {

    const {postRectification} = apiLinks()

// const [cname, setcname] = useState(false)
// const [cmobile, setcmobile] = useState(false)
// const [caddress, setcaddress] = useState(false)
// const [csafMember, setcsafMember] = useState(false)
const [ownerData, setownerData] = useState()
const [nameUpload, setnameUpload] = useState()
const [mobileUpload, setmobileUpload] = useState()
const [addressUpload, setaddressUpload] = useState()
const [safMemberUpload, setsafMemberUpload] = useState()

useEffect(() => {
  setownerData(props.ownerData[0])
}, [])

    const formik = useFormik({
        initialValues: {
            name: "",
            mobileNo : "",
            address : "",
            safMember: "",
            nameDoc : '',
            // mobileNoDoc : '',
            addressDoc: '',
            safMemberDoc : ''
        },

        onSubmit: (values) => {
            console.log("--4-- application data => ", values)
            submitData(values)
        }

    })

    const submitData = () => {
        let fd = new FormData();
        fd.append("name", formik.values.name);
        fd.append("mobileNo", formik.values.mobileNo);
        fd.append("address", formik.values.address);
        fd.append("safMember", formik.values.safMember);
        fd.append("nameDoc", nameUpload);
        fd.append("mobileNoDoc", mobileUpload);
        fd.append("addressDoc", addressUpload);
        fd.append("safMemberDoc", safMemberUpload);
    
        console.log("--2-- before fetch...", fd);
    
        axios
          .post(postRectification, fd, ApiHeader2())
          .then(function (response) {
            console.log("successfully posted application data  => ", response, "\n result data =>", fd);
          })
          .catch(function (error) {
            console.log("error posting application data => ", error,  "\n result data =>", fd);
          });
    }

    const handleChange = (e) => {
        if (e.target.name == "nameDoc") {
          let file = e.target.files[0];
          setmobileUpload(e.target.files[0]);
          console.log("--1-- name file on change..", file);
        } else if (e.target.name == "mobileNoDoc") {
          let file = e.target.files[0];
          setmobileUpload(e.target.files[0]);
          console.log("--2-- mobile file on change..", file);
        } else if (e.target.name == "addressDoc") {
          let file = e.target.files[0];
          setaddressUpload(e.target.files[0]);
          console.log("--3-- address file on change..", file);
        } else if (e.target.name == "safMemberDoc") {
          let file = e.target.files[0];
          setsafMemberUpload(e.target.files[0]);
          console.log("--4-- saf memeber file on change..", file);
        }
      };

  return (
    <div className='animate__animated animate__fadeInUp'>

    {/* Toggle */}
    {/* <div className='flex flex-wrap flex-col md:flex-row md:justify-evenly w-full md:items-center justify-center items-evenly mb-4'>

                <div>
                    <label className='cursor-pointer'>
                 <Toggle
              leftBackgroundColor="tomato"
              rightBackgroundColor="green"
              borderColor="trasparent"
              knobColor="white"
              name="toggle-1"
              onToggle={e => {
                console.log("onToggle", e.target.checked)
                setcname(!cname)
            }}
            />Name</label>
                </div>
                
                <div>
                    <label className='cursor-pointer'>
                 <Toggle
              leftBackgroundColor="tomato"
              rightBackgroundColor="green"
              borderColor="trasparent"
              knobColor="white"
              name="toggle-2"
              onToggle={e => {
                console.log("onToggle", e.target.checked)
                setcmobile(!cmobile)
            }}
            />Mobile No</label>
                </div>

                <div>
                    <label className='cursor-pointer'>
                 <Toggle
              leftBackgroundColor="tomato"
              rightBackgroundColor="green"
              borderColor="trasparent"
              knobColor="white"
              name="toggle-3"
              onToggle={e => {
                console.log("onToggle", e.target.checked)
                setcaddress(!caddress)
            }}
            />Address</label>
                </div>

                <div>
                    <label className='cursor-pointer'>
                 <Toggle
              leftBackgroundColor="tomato"
              rightBackgroundColor="green"
              borderColor="trasparent"
              knobColor="white"
              name="toggle-4"
              onToggle={e => {
                console.log("onToggle", e.target.checked)
                setcsafMember(!csafMember)
            }}
            />SAF Members</label>
                </div>

            </div> */}

    <form onSubmit={formik.handleSubmit} onChange={handleChange} className='transition-all duration-300'>

            

            <table className='w-full border-separate border-spacing-y-4 ' >
                <tr className='bg-sky-100 hover:bg-sky-200 px-4 h-[2.5rem] rounded-md shadow-lg'>
                    <th className='w-[25%]'>Correction Type</th>
                    <th className='w-[25%]'>Old Data</th>
                    <th className='w-[25%]'>New Data</th>
                    <th className='w-[25%]'>Document</th>
                </tr>
                    
                   <tr className='h-[2.3rem] text-sm text-center bg-zinc-100 hover:bg-zinc-200 rounded-md shadow-md animate__animated animate__lightSpeedInRight animate__delay-1s'>
                    <td className='font-semibold'>Name</td>
                    <td>{ownerData?.name}</td>
                    <td> <input type="text" name="name" id="" className='focus:outline-none rounded-md w-full h-[2rem] px-4 py-1 bg-zinc-100 text-center' placeholder='Enter new data...' /> </td>
                    <td> <input type="file" name="nameDoc" id="" className='' /> </td>
                </tr>

               <tr className='h-[2.3rem] text-sm text-center bg-zinc-100 hover:bg-zinc-200 rounded-md shadow-md animate__animated animate__lightSpeedInRight animate__delay-1s'>
                    <td className='font-semibold'>Mobile No</td>
                    <td>{ownerData?.mobileNo}</td>
                    <td> <input type="text" name="mobileNo" id="" className='focus:outline-none rounded-md w-full h-[2rem] px-4 py-1 bg-zinc-100 text-center' placeholder='Enter new data...' /> </td>
                    <td> <i>N/A</i> </td>
                </tr>

                <tr className='h-[2.3rem] text-sm text-center bg-zinc-100 hover:bg-zinc-200 rounded-md shadow-md animate__animated animate__lightSpeedInRight animate__delay-1s'>
                    <td className='font-semibold'>Address</td>
                    <td>{ownerData?.address}</td>
                    <td> <input type="text" name="address" id="" className='focus:outline-none rounded-md w-full h-[2rem] px-4 py-1 bg-zinc-100 text-center' placeholder='Enter new data...' /> </td>
                    <td> <input type="file" name="addressDoc" id="" className='' /> </td>
                </tr>

               <tr className='h-[2.3rem] text-sm text-center bg-zinc-100 hover:bg-zinc-200 rounded-md shadow-md animate__animated animate__lightSpeedInRight animate__delay-1s'>
                    <td className='font-semibold'>Saf Members</td>
                    <td>xyz</td>
                    <td> <input type="text" name="safMember" id="" className='focus:outline-none rounded-md w-full h-[2rem] px-4 py-1 bg-zinc-100 text-center' placeholder='Enter new data...' /> </td>
                    <td> <input type="file" name="safMemberDoc" id="" className='' /> </td>
                </tr>
            
            </table>

            <button type="submit" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"> Submit </button>

        </form> 
    
    </div>
  )
}

export default ObjectionRectificationTable

///////////////////////////////////////////////////////////////////
// Export to : ObjectionRectification.js
///////////////////////////////////////////////////////////////////