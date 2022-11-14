//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 24-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AgencyApplication
//    DESCRIPTION - AgencyApplication Component
//////////////////////////////////////////////////////////////////////////////////////


import { useFormik } from 'formik';
import React from 'react'
import SaveIcon from '@mui/icons-material/Save';

function AgencyApplication() {



    const formik = useFormik({
        initialValues: {
            entityType: '',
            entityName: '',
            Address: '',
            mobileNo: '',
            officialTelephone: '',
            fax: '',
            email: '',
            panNo: '',
            gstNo: '',
            isBlacklisted: false,
            isPendingCourtCase: false,
            pendingAmount: '',
            directorName: [],
            directorMobileNo: [],
            directorEmail: [],
            uploadGstPhoto: '',
            itLastYearUpload: '',
            itPrevToLastUpload: '',
            officeAddressUpload: '',
            panNoPhoto: '',
            aadharPhotoDirector1: '',
            aadharPhotoDirector2: '',
            aadharPhotoDirector3: '',
            aadharPhotoDirector4: '',
            affidifitPhoto: '',

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
                    <h1 className=' text-sm px-4'>Agency Aplication </h1>
                </div>

                <div class="container mx-auto bg-white border shadow-md p-4 mt-3 overflow-y-scroll mb-28 ">


                    {/*  Application   */}

                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">

                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Entity Type <span className='text-red-600'> *</span></p>
                            <select {...formik.getFieldProps('entityType')} className={`${inputStyle}`} >
                                <option>select one</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>

                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Entity Name <span className='text-red-600'> *</span></p>
                            <input type="text" name='entityName' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.entityName}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Address <span className='text-red-600'> *</span></p>
                            <input type="text" name='Address' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.Address}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Mobile No<span className='text-red-600'> *</span></p>
                            <input type="text" name='mobileNo' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.mobileNo}
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Official Telephone<span className='text-red-600'> *</span></p>
                            <input type="text" name='officialTelephone' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.officialTelephone}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>FAX<span className='text-red-600'> *</span></p>
                            <input type="text" name='fax' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.fax}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Email <span className='text-red-600'> *</span></p>
                            <input type="text" name='email' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>PAN No. <span className='text-red-600'> *</span></p>
                            <input type="text" name='panNo' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.panNo}
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>GST No. <span className='text-red-600'> *</span></p>
                            <input type="text" name='gstNo' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.mobileNo}
                            />
                        </div>

                    </div>

                    {/*  OTHER INFORMATION  */}
                    <div className='bg-sky-200 p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   mt-3 shadow-md '>
                        <h1 className='text-sm px-4'>Other Information</h1>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">

                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Blacklisted in RMC<span className='text-red-600'> *</span></p>
                            <input type="checkbox" name='isBlacklisted' placeholder='' className={`${inputStyle}`}
                                {...formik.getFieldProps('isBlacklisted')}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Pending Court Case <span className='text-red-600'> *</span></p>
                            <input type="checkbox" name='isPendingCourtCase' placeholder='' className={`${inputStyle}`}
                                {...formik.getFieldProps('isPendingCourtCase')}
                            />
                        </div>
                        <div className='px-1'>
                            <p className={`${labelStyle}`}>Pending Amount (If any)<span className='text-red-600'> *</span></p>
                            <input type="text" name='pendingAmount' placeholder='' className={`${inputStyle}`}
                                onChange={formik.handleChange}
                                value={formik.values.pendingAmount}
                            />
                        </div>

                    </div>

                    {/*** director Table ***/}
                    <div className='bg-sky-200 p-1 mt-2  shadow-md'>
                        <h1 className=' text-sm px-4'>Directors Information
                            <button type='button' className='bg-green-400 rounded-lg w-16  drop-shadow-lg ml-3' >Add</button>
                        </h1>
                    </div>
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 mt-1 inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full text-center">
                                        <thead class="border-b bg-gray-100 h-8">
                                            <tr >
                                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                                    Director Name
                                                </th>
                                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                                    Mobile
                                                </th>
                                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                                    Email
                                                </th>
                                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">

                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b  boder-gray-900">
                                                <td class="text-sm  font-medium px-6 py-4 whitespace-nowrap">
                                                    <input type="text" name=' directorName[0]' placeholder='' className={`${inputStyle} text-gray-800`}
                                                        onChange={formik.handleChange}
                                                        value={formik.values.directorName[0]}
                                                    />
                                                </td>
                                                <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                    <input type="text" name='directorMobileNo[0]' placeholder='' className={`${inputStyle}`}
                                                        onChange={formik.handleChange}
                                                        value={formik.values.directorMobileNo[0]}

                                                    />
                                                </td>
                                                <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                    <input type="text" name='directorEmail[0]' placeholder='' className={`${inputStyle}`}
                                                        onChange={formik.handleChange}
                                                        value={formik.values.directorEmail[0]}

                                                    />
                                                </td>
                                            </tr>
                                            <tr class="border-b  boder-gray-900">
                                                <td class="text-sm font-medium px-6 py-4 whitespace-nowrap">
                                                    <input type="text" name='directorName[1]' placeholder='' className={`${inputStyle}`}
                                                        onChange={formik.handleChange}
                                                        value={formik.values.directorName[1]}
                                                    />
                                                </td>
                                                <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                    <input type="text" name='directorMobileNo[1]' placeholder='' className={`${inputStyle}`}
                                                        onChange={formik.handleChange}
                                                        value={formik.values.directorMobileNo[1]}
                                                    />
                                                </td>
                                                <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                    <input type="text" name='directorEmail[1]' placeholder='' className={`${inputStyle}`}
                                                        onChange={formik.handleChange}
                                                        value={formik.values.directorEmail[1]}
                                                    />
                                                </td>
                                            </tr>
                                            <tr class="border-b  boder-gray-900">
                                                <td class="text-sm  font-medium px-6 py-4 whitespace-nowrap">
                                                    <input type="text" name='directorName[2]' placeholder='' className={`${inputStyle}`}

                                                        onChange={formik.handleChange}
                                                        value={formik.values.directorName[2]}
                                                    />
                                                </td>
                                                <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                    <input type="text" name='directorMobileNo[2]' placeholder='' className={`${inputStyle}`}

                                                        onChange={formik.handleChange}
                                                        value={formik.values.directorMobileNo[2]}
                                                    />
                                                </td>
                                                <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                    <input type="text" name='directorEmail[2]' placeholder='' className={`${inputStyle}`}

                                                        onChange={formik.handleChange}
                                                        value={formik.values.directorEmail[2]}
                                                    />
                                                </td>
                                            </tr>
                                            <tr class="border-b  boder-gray-900">
                                                <td class="text-sm  font-medium px-6 py-4 whitespace-nowrap">
                                                    <input type="text" name='directorName[3]' placeholder='' className={`${inputStyle}`}

                                                        onChange={formik.handleChange}
                                                        value={formik.values.directorName[3]}
                                                    />
                                                </td>
                                                <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                    <input type="text" name='directorMobileNo[3]' placeholder='' className={`${inputStyle}`}

                                                        onChange={formik.handleChange}
                                                        value={formik.values.directorMobileNo[3]}
                                                    />
                                                </td>
                                                <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                    <input type="text" name='directorEmail[3]' placeholder='' className={`${inputStyle}`}

                                                        onChange={formik.handleChange}
                                                        value={formik.values.directorEmail[3]}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* upload document */}
                    <div className=' '>
                        <div className='bg-sky-200 p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-3 shadow-md '>
                            <h1 className='text-sm px-4'>Upload Document</h1>
                        </div>



                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">

                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Director1 Aadhar Photo<span className='text-red-600'> *</span></p>
                                <input type="file" name='aadharPhotoDirector1' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.aadharPhotoDirector1}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Director2 Aadhar Photo<span className='text-red-600'> *</span></p>
                                <input type="file" name='aadharPhotoDirector2' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.aadharPhotoDirector2}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Director3 Aadhar Photo<span className='text-red-600'> *</span></p>
                                <input type="file" name='aadharPhotoDirector3' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.aadharPhotoDirector3}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Director4 Aadhar Photo <span className='text-red-600'> *</span></p>
                                <input type="file" name='aadharPhotoDirector4' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.aadharPhotoDirector4}
                                />
                            </div>


                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload GST Photograph<span className='text-red-600'> *</span></p>
                                <input type="file" name='uploadGstPhoto' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.uploadGstPhoto}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload PAN No. Photograph <span className='text-red-600'> *</span></p>
                                <input type="file" name='panNoPhoto' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.panNoPhoto}
                                />
                            </div>

                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Office Address Photograph<span className='text-red-600'> *</span></p>
                                <input type="file" name='officeAddressUpload' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.officeAddressUpload}
                                />
                            </div>

                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-3">
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload IT Return Photograph for Previous to Last Financial Year<span className='text-red-600'> *</span></p>
                                <input type="file" name='itPrevToLastUpload' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.itPrevToLastUpload}
                                />
                            </div>

                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload IT Return Photograph for Last Financial Year<span className='text-red-600'> *</span></p>
                                <input type="file" name='itLastYearUpload' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.itLastYearUpload}
                                />
                            </div>
                            <div className='px-1'>
                                <p className={`${labelStyle}`}>Upload Affidifit Photo(You are required to submit the original copy to RMC)<span className='text-red-600'> *</span></p>
                                <input type="file" name='affidifitPhoto' placeholder='' className={`${inputStyle}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.affidifitPhoto}
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

export default AgencyApplication