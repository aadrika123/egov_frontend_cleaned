//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 24-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - MovableVehicleApllication
//    DESCRIPTION - MovableVehicleApllication Component containing moval vehicle apply form
//////////////////////////////////////////////////////////////////////////////////////

import { useFormik } from 'formik';
import React from 'react'
import SaveIcon from '@mui/icons-material/Save';

function MovableVehicleApllication() {


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
            licenseFrom: '',
            licenseTo: '',
            entityName: '',
            tradeLicenseNo: '',
            gstNo: '',
            vehicleNo: '',
            vehicleName: '',
            vehicleType: '',
            brandDisplayVehicle: '',
            frontArea: '',
            rearArea: '',
            sideArea1: '',
            topArea: '',
            displayType: '',
            aadharDoc: '',
            tradeLicenseDoc: '',
            vehiclePhoto: '',
            uploadOwnerBook: '',
            uploadDrivingLicense: '',
            uploadInsurancePhoto: '',
            uploadGSTNoPhoto: '',

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
                <div className='bg-sky-200 p-1 mt-2  shadow-md grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  '>
                    <h1>MOVABLE VEHICLE</h1>
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
                            <p className={`${labelStyle}`}>Entity Name<span className='text-red-600'> *</span></p>
                            <input type="text" name='entityName' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.entityName}
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
                            <p className={`${labelStyle}`}>License From<span className='text-red-600'> *</span></p>
                            <input type="date" name='licenseFrom' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.licenseFrom}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>License To<span className='text-red-600'> *</span></p>
                            <input type="date" name='licenseTo' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.licenseTo}
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Brand Display In Vehicle<span className='text-red-600'> *</span></p>
                            <input type="text" name='brandDisplayVehicle' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.brandDisplayVehicle}
                            />
                        </div>
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
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">

                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Display Type<span className='text-red-600'> *</span></p>
                            <input type="text" name='displayType' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.displayType}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Vehicle No  <span className='text-red-600'> *</span></p>
                            <input type="text" name='vehicleNo' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.vehicleNo}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Vehicle Name<span className='text-red-600'> *</span></p>
                            <input type="text" name='vehicleName' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.vehicleName}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Vehicle Type<span className='text-red-600'> *</span></p>
                            <input type="text" name='vehicleType' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.vehicleType}
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">

                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Front Area(Sq ft)<span className='text-red-600'> *</span></p>
                            <input type="text" name='frontArea' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.frontArea}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Rear Area(Sq ft) <span className='text-red-600'> *</span></p>
                            <input type="text" name='rearArea' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.rearArea}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Side 1 Area(Sq ft) <span className='text-red-600'> *</span></p>
                            <input type="text" name='sideArea1' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.sideArea1}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Top Area(Sq ft) <span className='text-red-600'> *</span></p>
                            <input type="text" name='topArea' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.topArea}
                            />
                        </div>

                    </div>

                    {/* upload document */}
                    <div className=' '>
                        <div className='bg-sky-200 p-1 mt-2  shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  '>
                            <h1 className='text-sm px-4'>Upload Document</h1>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Driving License<span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadDrivingLicense' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadDrivingLicense}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Insurance Photo <span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadInsurancePhoto' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadInsurancePhoto}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload GST No. Photo<span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadGSTNoPhoto' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadGSTNoPhoto}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Owner Book<span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadOwnerBook' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadOwnerBook}
                                />
                            </div>

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
                                <p className={`${labelStyle}`}>Upload Trade License Document<span className='text-red-600'> *</span></p>
                                <input type="file" name='tradeLicenseDoc' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.tradeLicenseDoc}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Vehicle Photograph<span className='text-red-600'> *</span></p>
                                <input type="file" name='vehiclePhoto' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.vehiclePhoto}
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

export default MovableVehicleApllication