//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 24-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - SelfAdvertisement
//    DESCRIPTION - SelfAdvertisement Component containing SelfAdvertisement apply form
//////////////////////////////////////////////////////////////////////////////////////


import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios';

function SelfAdvertisement() {


    // const [selfAdvrtData, setSelfAdvrtData] = useState([])

    const formik = useFormik({
        initialValues: {
            licenseYear: '',
            applicantName: '',
            fatherName: '',
            email: '',
            residenceAddress: '',
            residenceWardNo: '',
            permanentAddress: '',
            permanentWardNo: '',
            mobileNo: '',
            aadharNo: '',
            entityName: '',
            entityAddress: '',
            entityWardNo: '',
            installationLocation: '',
            brandDisplayName: '',
            holdingNo: '',
            tradeLicenseNo: '',
            gstNo: '',
            displayArea: '',
            displayType: '',
            longitude: '',
            latitude: '',
            aadharDoc: '',
            tradeLicenseDoc: '',
            photoWithGps: '',
            holdingNoDoc: '',
            gstDocPhoto: '',
            proceedingPhoto1: '',
            proceedingPhoto2: '',
            proceedingPhoto3: '',
            uploadExtraDoc1: '',
            uploadExtraDoc2: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log("self Advertisement", values)


        },
    });


    // const getData = () => {
    //     axios({
    //         method: "GET",
    //         url: "http://192.168.0.131:8000/api/getSelfAdvertisment",

    //     })
    //         .then(function (response) {
    //             console.log("selfAdvrtData", response.data);
    //             setSelfAdvrtData(response.data)

    //         });
    // }
    // useEffect(() => {
    //     getData()
    // }, [])

    let labelStyle = "mt-4 pl-1 text-sm text-gray-600"
    let inputStyle = "border shadow-md px-1.5 py-1 rounded-lg w-48"

    return (
        <>

            <form onSubmit={formik.handleSubmit}>
                <div className='bg-sky-200 p-1 mt-2  shadow-md grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  '>
                    <h1>Self Advertisement</h1>
                </div>
                <div class="container mx-auto bg-white border shadow-md p-4 mt-3 overflow-y-scroll mb-28 ">

                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div className='px-1'>
                            <p className={`${labelStyle}`}> License Year <span className='text-red-600'> *</span></p>
                            <select className={`${inputStyle}`} {...formik.getFieldProps('licenseYear')} >
                                <option>select one</option>
                                <option>1</option>
                                <option>2</option>
                                {/* {
                                    selfAdvrtData.map((items) => {
                                        <option>{items.licenseyear}</option>
                                    })
                                } */}
                            </select>
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Applicant <span className='text-red-600'> *</span></p>
                            <input type="text" name='applicantName' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.applicantName}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Father <span className='text-red-600'> *</span></p>
                            <input type="text" name='fatherName' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.fatherName}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>E-mail <span className='text-red-600'> *</span></p>
                            <input type="text" name='email' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Residence Address <span className='text-red-600'> *</span></p>
                            <input type="text" name='residenceAddress' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.residenceAddress}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Ward No <span className='text-red-600'> *</span></p>
                            <select {...formik.getFieldProps('residenceWardNo')} className={`${inputStyle}`} >
                                <option>select one</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Permanent Address <span className='text-red-600'> *</span></p>
                            <input type="text" name='permanentAddress' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.permanentAddress}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Ward No <span className='text-red-600'> *</span></p>
                            <select  {...formik.getFieldProps('permanentWardNo')} className={`${inputStyle}`} >
                                <option>select one</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Mobile <span className='text-red-600'> *</span></p>
                            <input type="text" name='mobileNo' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.mobileNo}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Aadhar No <span className='text-red-600'> *</span></p>
                            <input type="text" name='aadharNo' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.aadharNo}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Entity Name<span className='text-red-600'> *</span></p>
                            <input type="text" name='entityName' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.entityName}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Entity Address<span className='text-red-600'> *</span></p>
                            <input type="text" name='entityAddress' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.entityAddress}
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Ward No <span className='text-red-600'> *</span></p>
                            <select type="text" name='entityWardNo' placeholder='' className={`${inputStyle}`} >
                                <option>select one</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Installation Location <span className='text-red-600'> *</span></p>
                            <select {...formik.getFieldProps('installationLocation')} className={`${inputStyle}`} >
                                <option>select one</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Brand Display Name<span className='text-red-600'> *</span></p>
                            <input type="text" name='brandDisplayName' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.brandDisplayName}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Holding No.<span className='text-red-600'> *</span></p>
                            <input type="text" name='holdingNo' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.holdingNo}
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Trade License No<span className='text-red-600'> *</span></p>
                            <input type="text" name='tradeLicenseNo' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.tradeLicenseNo}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>GST No. <span className='text-red-600'> *</span></p>
                            <input type="text" name='gstNo' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.gstNo}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Display Area<span className='text-red-600'> *</span></p>
                            <input type="text" name='displayArea' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.displayArea}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Display Type<span className='text-red-600'> *</span></p>
                            <input type="text" name='displayType' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.displayType}
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">

                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Longitude  <span className='text-red-600'> *</span></p>
                            <input type="text" name='longitude' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.longitude}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Latitude<span className='text-red-600'> *</span></p>
                            <input type="text" name='latitude' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.latitude}
                            />
                        </div>

                    </div>

                    {/* upload document */}
                    <div className=' '>
                        <div className='bg-sky-200 p-1 mt-2  shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                            <h1 className='text-sm px-4'>Upload Document</h1>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Aadhar Document  <span className='text-red-600'> *</span></p>
                                <input type="file" name='aadharDoc' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.aadharDoc}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload  Trade License Document<span className='text-red-600'> *</span></p>
                                <input type="file" name='tradeLicenseDoc' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.tradeLicenseDoc}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Photograph with GPS<span className='text-red-600'> *</span></p>
                                <input type="file" name='photoWithGps' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.photoWithGps}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Holding No<span className='text-red-600'> *</span></p>
                                <input type="file" name='holdingNoDoc' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.holdingNoDoc}
                                />
                            </div>

                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 ">

                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload GST Document Photo<span className='text-red-600'> *</span></p>
                                <input type="file" name='gstDocPhoto' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.gstDocPhoto}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Proceeding1 Photo  <span className='text-red-600'> *</span></p>
                                <input type="file" name='proceedingPhoto1' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.proceedingPhoto1}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Proceeding2 Photo<span className='text-red-600'> *</span></p>
                                <input type="file" name='proceedingPhoto2' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.proceedingPhoto2}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Proceeding3 Photo<span className='text-red-600'> *</span></p>
                                <input type="file" name='proceedingPhoto3' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.proceedingPhoto3}
                                />
                            </div>

                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Extra Document1<span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadExtraDoc1' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadExtraDoc1}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Extra Document2<span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadExtraDoc2' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadExtraDoc2}
                                />
                            </div>
                        </div>


                        <div className='float-right p-4'>
                            <button type='submit' className='bg-green-400 px-8 py-1 rounded-md hover:bg-green-600' ><SaveIcon />submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SelfAdvertisement