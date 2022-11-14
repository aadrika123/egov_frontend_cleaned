
//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 24-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - HoardingBoard
//    DESCRIPTION - HoardingBoard Component
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { useFormik } from 'formik';
import SaveIcon from '@mui/icons-material/Save';

function HoardingBoard() {

    const formik = useFormik({
        initialValues: {
            licenseYear: '',
            location: '',
            longitude: '',
            latitude: '',
            lengthHoarding: '',
            widthHoarding: '',
            areaBoard: '',
            materialType: '',
            illumination: '',
            facing: '',
            landmark: '',
            hoardingType: '',
            propertyType: '',
            ownerName: '',
            ownerAddress: '',
            ownerCity: '',
            ownerPhone: '',
            ownerWhatsApp: '',
            uploadBuildingPermit: '',
            uploadSitePhoto: '',
            uploadEngineerCertificate: '',
            uploadAgreement: '',
            uploadGpsPhoto: '',
            uploadSketchPlan: '',
            uploadPendingDues: '',
            uploadArchitecturalDrawing: '',
            uploadProceedingPhoto1: '',
            uploadProceedingPhoto2: '',
            uploadExtraDoc1: '',
            uploadExtraDoc2: '',

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
                <div className='bg-sky-200 p-1 mt-2 shadow-md grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  '>
                    <h1>Hoarding</h1>
                </div>
                <div class="container mx-auto bg-white border shadow-md p-4 mt-3 overflow-y-scroll mb-28 ">

                    {/*Input Fields*/}


                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div className='px-1'>
                            <p className={`${labelStyle}`}> License Year <span className='text-red-600'> *</span></p>
                            <select className={`${inputStyle}`} {...formik.getFieldProps('licenseYear')} >
                                <option>select one</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Location <span className='text-red-600'> *</span></p>
                            <input type="text" name='location' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.location}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Longitude <span className='text-red-600'> *</span></p>
                            <input type="text" name='longitude' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.longitude}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Latitude <span className='text-red-600'> *</span></p>
                            <input type="text" name='latitude' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.latitude}
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Length Of Hoarding <span className='text-red-600'> *</span></p>
                            <input type="text" name='lengthHoarding' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.lengthHoarding}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Width Of Hoarding <span className='text-red-600'> *</span></p>
                            <input type="text" name='widthHoarding' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.widthHoarding}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Area Of Board<span className='text-red-600'> *</span></p>
                            <input type="text" name='areaBoard' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.areaBoard}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Material Type <span className='text-red-600'> *</span></p>
                            <select  {...formik.getFieldProps('materialType')} className={`${inputStyle}`} >
                                <option>select one</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Illumination <span className='text-red-600'> *</span></p>
                            <input type="text" name='illumination' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.illumination}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Facing<span className='text-red-600'> *</span></p>
                            <input type="text" name='facing' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.facing}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Landmark<span className='text-red-600'> *</span></p>
                            <input type="text" name='landmark' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.landmark}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Hoarding Type<span className='text-red-600'> *</span></p>
                            <select  {...formik.getFieldProps('hoardingType')} className={`${inputStyle}`} >
                                <option>select one</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">

                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Owner Name (If property type is private) <span className='text-red-600'> *</span></p>
                            <input type="text" name='ownerName' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.ownerName}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Owner Address(If property type is private) <span className='text-red-600'> *</span></p>
                            <input type="text" name='ownerAddress' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.ownerAddress}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Owner City (If property type is private)<span className='text-red-600'> *</span></p>
                            <input type="text" name='ownerCity' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.ownerCity}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Owner Phone (If property type is private) <span className='text-red-600'> *</span></p>
                            <input type="text" name='ownerPhone' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.ownerPhone}
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">

                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Owner WhatsApp (If property type is private) <span className='text-red-600'> *</span></p>
                            <input type="text" name='ownerWhatsApp' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.ownerWhatsApp}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Property Type <span className='text-red-600'> *</span></p>
                            <select type="text" name='propertyType' placeholder='' className={`${inputStyle}`} >
                                <option>select one</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>


                    {/* upload document */}
                    <div className=' '>
                        <div className='bg-sky-200 p-1 mt-4  shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                            <h1 className='text-sm px-4'>Upload Document</h1>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Building permit Document <span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadBuildingPermit' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadBuildingPermit}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Site Photograph  <span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadSitePhoto' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadSitePhoto}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Engineer Certificate <span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadEngineerCertificate' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadEngineerCertificate}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Agreement Document<span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadAgreement' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadAgreement}
                                />
                            </div>


                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 ">

                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Sketch Plan<span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadSketchPlan' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadSketchPlan}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Pending Dues  <span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadPendingDues' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadPendingDues}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Architectural Drawing<span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadArchitecturalDrawing' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadArchitecturalDrawing}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload GPS Photo<span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadGpsPhoto' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadGpsPhoto}
                                />
                            </div>

                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 ">

                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Proceeding1 Photo<span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadProceedingPhoto1' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadProceedingPhoto1}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Proceeding2 Photo<span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadProceedingPhoto2' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadProceedingPhoto2}
                                />
                            </div>
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

export default HoardingBoard