//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 24-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PrivateLand
//    DESCRIPTION - PrivateLand Component containing PrivateLand apply form
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import SaveIcon from '@mui/icons-material/Save';
import { useFormik } from 'formik';

function PrivateLand() {

    const formik = useFormik({
        initialValues: {

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
            brandDisplayAddress: '',
            holdingNo: '',
            totalHoldingNo: '',
            tradeLicenseNo: '',
            gstNo: '',
            totalDisplayArea: '',
            displayType: '',
            longitude: '',
            latitude: '',
            aadharDoc: '',
            tradeLicenseDoc: '',
            photoWithGpsMapped: '',
            holdingNoPhoto: '',
            gstNoPhoto: '',
            uploadBrandDisplayDoc: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log("self Advertisement", values)


        },
    });

    let labelStyle = "mt-4 pl-1 text-sm text-gray-600"
    let inputStyle = "border shadow-md px-1.5 py-1 rounded-lg w-48"

    return (
        <>

            <form onSubmit={formik.handleSubmit}>
                
                <div className='bg-sky-200 p-1 mt-2  shadow-md'>
                    <h1 className=' text-sm px-4'>Private Land</h1>
                </div>
                <div class="container mx-auto bg-white border shadow-md p-4 mt-3 overflow-y-scroll mb-28 ">

                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">

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
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Mobile <span className='text-red-600'> *</span></p>
                            <input type="text" name='mobileNo' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.mobileNo}
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
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Ward No <span className='text-red-600'> *</span></p>
                            <select type="text" name='entityWardNo' placeholder='' className={`${inputStyle}`} >
                                <option>select one</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">

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
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Trade License No<span className='text-red-600'> *</span></p>
                            <input type="text" name='tradeLicenseNo' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.tradeLicenseNo}
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">

                        <div className='px-1'>
                            <p className={`${labelStyle}`}>GST No. <span className='text-red-600'> *</span></p>
                            <input type="text" name='gstNo' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.gstNo}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Total Display Area<span className='text-red-600'> *</span></p>
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
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>No of Hoardings <span className='text-red-600'> *</span></p>
                            <input type="text" name='totalHoldingNo' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.totalHoldingNo}
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
                        <div className='bg-sky-200 p-1 mt-2  shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   '>
                            <h1 className='text-sm px-4'>Upload Document</h1>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Aadhar Document  <span className='text-red-600'> *</span></p>
                                <input type="file" name='aadharDoc' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.aadharDoc}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Trade License Document<span className='text-red-600'> *</span></p>
                                <input type="file" name='tradeLicenseDoc' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.tradeLicenseDoc}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Photograph with GPS Mapped Camera<span className='text-red-600'> *</span></p>
                                <input type="file" name='photoWithGpsMapped' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.photoWithGpsMapped}
                                />
                            </div>
                          

                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 ">

                        <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Holding No. Photograph<span className='text-red-600'> *</span></p>
                                <input type="file" name='holdingNoPhoto' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.holdingNoPhoto}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload GST No. Photograph <span className='text-red-600'> *</span></p>
                                <input type="file" name='gstNoPhoto' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.gstNoPhoto}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Brand Display Permission<span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadBrandDisplayDoc' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadBrandDisplayDoc}
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

export default PrivateLand