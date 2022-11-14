import React from 'react'
import rainWater from './Assets/storm.png'
import road from './Assets/road.png'
import home from './Assets/home.png'
import area from './Assets/radar.png'
import mobile from './Assets/tower.png'
import hoarding from './Assets/billboard.png'
import floor from './Assets/parquet.png'
import { useFormik } from 'formik'
import * as yup from 'yup'

function PropertyObjectionVerification() {


    const validationSchema = yup.object({
        harvesting: yup.string().required('Select floor no.'),
        roadWidth: yup.string().required('Select use type'),
        propertyType: yup.string().required('Select occupancy type'),
        plotArea: yup.string().required('Select construction type'),
        mobileTower: yup.string().required('Enter builtup Area'),
        hoarding: yup.string().required('Select from date'),

    })
    const formik = useFormik({
        initialValues: {
            harvesting: '',
            roadWidth: '',
            propertyType: '',
            plotArea: '',
            mobileTower: '',
            hoarding: '',
        },

        onSubmit: (values, resetForm) => {
            console.log('submit...')
        }
        , validationSchema
    })
    return (
        <>
            <div className="overflow-x-auto">
                <div className="min-w-screen min-h-screen bg-gray-100 flex md:pl-4 bg-white font-sans overflow-hidden overflow-x-auto">
                    <div className="w-full lg:w-4/6">
                        <div className="bg-white shadow-md rounded my-2">
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-amber-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">Objection</th>
                                        <th className="py-3 px-6 text-left">Assesment</th>
                                        <th className="py-3 px-6 text-center">Applicant</th>
                                        <th className="py-3 px-6 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light bg-white">
                                    <tr className="border-b border-gray-200 ">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="mr-2 bg-white shadow-lg rounded-full p-2">
                                                    <img src={rainWater} alt="rain" className='w-4' />
                                                </div>
                                                <span className="font-medium">RainWater Harvesting</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center font-semibold text-sm">
                                                <span>Yes</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <div className="form-group col-span-4 md:col-span-1 md:px-4">
                                                    <select {...formik.getFieldProps('harvesting')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" >
                                                        <option value="correct">Correct</option>
                                                        <option value="wrong">Wrong</option>

                                                    </select>
                                                    <span className="text-red-600 absolute text-xs">{formik.touched.harvesting && formik.errors.harvesting ? formik.errors.harvesting : null}</span>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className="border-b border-gray-200 ">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="mr-2 bg-white shadow-lg rounded-full p-2">
                                                    <img src={road} alt="rain" className='w-4' />
                                                </div>
                                                <span className="font-medium">Road Width</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center font-semibold text-sm">
                                                <span>Yes</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <div className="form-group col-span-4 md:col-span-1 md:px-4">
                                                    <select {...formik.getFieldProps('roadWidth')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" >
                                                        <option value="correct">Correct</option>
                                                        <option value="wrong">Wrong</option>

                                                    </select>
                                                    <span className="text-red-600 absolute text-xs">{formik.touched.roadWidth && formik.errors.roadWidth ? formik.errors.roadWidth : null}</span>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className="border-b border-gray-200 ">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="mr-2 bg-white shadow-lg rounded-full p-2">
                                                    <img src={home} alt="rain" className='w-4' />
                                                </div>
                                                <span className="font-medium">Property Type</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center font-semibold text-sm">
                                                <span>Yes</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <div className="form-group col-span-4 md:col-span-1 md:px-4">
                                                    <select {...formik.getFieldProps('propertyType')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" >
                                                        <option value="correct">Correct</option>
                                                        <option value="wrong">Wrong</option>

                                                    </select>
                                                    <span className="text-red-600 absolute text-xs">{formik.touched.propertyType && formik.errors.propertyType ? formik.errors.propertyType : null}</span>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className="border-b border-gray-200 ">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="mr-2 bg-white shadow-lg rounded-full p-2">
                                                    <img src={area} alt="rain" className='w-4' />
                                                </div>
                                                <span className="font-medium">Area of Plot</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center font-semibold text-sm">
                                                <span>Yes</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <div className="form-group col-span-4 md:col-span-1 md:px-4">
                                                    <select {...formik.getFieldProps('plotArea')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" >
                                                        <option value="correct">Correct</option>
                                                        <option value="wrong">Wrong</option>

                                                    </select>
                                                    <span className="text-red-600 absolute text-xs">{formik.touched.plotArea && formik.errors.plotArea ? formik.errors.plotArea : null}</span>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className="border-b border-gray-200 ">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="mr-2 bg-white shadow-lg rounded-full p-2">
                                                    <img src={mobile} alt="rain" className='w-4' />
                                                </div>
                                                <span className="font-medium">Mobile Tower</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center font-semibold text-sm">
                                                <span>Yes</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <div className="form-group col-span-4 md:col-span-1 md:px-4">
                                                    <select {...formik.getFieldProps('mobileTower')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" >
                                                        <option value="correct">Correct</option>
                                                        <option value="wrong">Wrong</option>

                                                    </select>
                                                    <span className="text-red-600 absolute text-xs">{formik.touched.mobileTower && formik.errors.mobileTower ? formik.errors.mobileTower : null}</span>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className="border-b border-gray-200 ">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="mr-2 bg-white shadow-lg rounded-full p-2">
                                                    <img src={hoarding} alt="rain" className='w-4' />
                                                </div>
                                                <span className="font-medium">Hoarding Board</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center font-semibold text-sm">
                                                <span>Yes</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <div className="form-group col-span-4 md:col-span-1 md:px-4">
                                                    <select {...formik.getFieldProps('hoarding')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" >
                                                        <option value="correct">Correct</option>
                                                        <option value="wrong">Wrong</option>

                                                    </select>
                                                    <span className="text-red-600 absolute text-xs">{formik.touched.hoarding && formik.errors.hoarding ? formik.errors.hoarding : null}</span>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className="border-b border-gray-200 ">
                                        <td colSpan={4} className="py-3 px-6 text-left whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="mr-2 bg-white shadow-lg rounded-full p-2">
                                                    <img src={floor} alt="rain" className='w-4' />
                                                </div>
                                                <span className="font-medium">Floor Detail</span>
                                            </div>
                                            <div className="col-span-4 overflow-x-auto">
                                                <table className='min-w-full leading-normal'>
                                                    <thead className='font-bold text-left text-sm bg-sky-50'>

                                                        <tr className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs text-left">
                                                            <th className='py-2 px-2'><small className="block mt-1 font-semibold text-red-600 inline ">*</small>Floor No</th>
                                                            <th className='py-2 px-2'><small className="block mt-1 font-semibold text-red-600 inline ">*</small>Usage Type</th>
                                                            <th className='py-2 px-2'><small className="block mt-1 font-semibold text-red-600 inline ">*</small>Occupancy Type</th>
                                                            <th className='py-2 px-2'><small className="block mt-1 font-semibold text-red-600 inline ">*</small>Construction Type</th>
                                                            <th className='py-2 px-2'><small className="block mt-1 font-semibold text-red-600 inline ">*</small>Built Up Area <small className="block mt-1 text-xs text-gray-600 inline "><small className="block mt-1 font-semibold text-red-600 inline ">*</small>(in Sq. Ft)</small></th>
                                                            <th className='py-2 px-2'><small className="block mt-1 font-semibold text-red-600 inline ">*</small>From Date</th>
                                                            <th className='py-2 px-2'>Upto Date </th>
                                                        </tr>

                                                    </thead>
                                                    <tbody className="text-xs">
                                                        {/* {
                                                    floorList.map((floor) => ( */}
                                                        <>

                                                            {/* <tr className="bg-white shadow-lg border-b border-gray-200">
                                                                <td className="px-2 py-2 text-left">{floor?.floorNo}</td>
                                                                <td className="px-2 py-2 text-left">{floor?.usageType}</td>
                                                                <td className="px-2 py-2 text-left">{floor?.occupancyType}</td>
                                                                <td className="px-2 py-2 text-left">{floor?.constructionType}</td>
                                                                <td className="px-2 py-2 text-left">{floor?.area}</td>
                                                                <td className="px-2 py-2 text-left">{floor?.from_date}</td>
                                                                <td className="px-2 py-2 text-left">{floor?.uptoDate}</td>
                                                            </tr> */}
                                                            <tr className="bg-white shadow-lg border-b border-gray-200 font-bold">
                                                                <td className="px-2 py-2 text-left">one</td>
                                                                <td className="px-2 py-2 text-left">one</td>
                                                                <td className="px-2 py-2 text-left">one</td>
                                                                <td className="px-2 py-2 text-left">one</td>
                                                                <td className="px-2 py-2 text-left">one</td>
                                                                <td className="px-2 py-2 text-left">one</td>
                                                                <td className="px-2 py-2 text-left">one</td>
                                                            </tr>
                                                            <tr className="bg-white shadow-lg border-b border-gray-200 border-b border-gray-600">
                                                                <td className="px-2 py-2 text-sm text-left"><select {...formik.getFieldProps('floorNo')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                                                >
                                                                    <option value="0">0</option>
                                                                    <option value="1">1</option>
                                                                </select></td>
                                                                <td className="px-2 py-2 text-sm text-left"><select {...formik.getFieldProps('floorNo')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                                                >
                                                                    <option value="0">0</option>
                                                                    <option value="1">1</option>
                                                                </select></td>
                                                                <td className="px-2 py-2 text-sm text-left"><select {...formik.getFieldProps('floorNo')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                                                >
                                                                    <option value="0">0</option>
                                                                    <option value="1">1</option>
                                                                </select></td>
                                                                <td className="px-2 py-2 text-sm text-left"><select {...formik.getFieldProps('floorNo')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                                                >
                                                                    <option value="0">0</option>
                                                                    <option value="1">1</option>
                                                                </select></td>
                                                                <td className="px-2 py-2 text-sm text-left"><select {...formik.getFieldProps('floorNo')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                                                >
                                                                    <option value="0">0</option>
                                                                    <option value="1">1</option>
                                                                </select></td>
                                                                <td className="px-2 py-2 text-sm text-left"><select {...formik.getFieldProps('floorNo')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                                                >
                                                                    <option value="0">0</option>
                                                                    <option value="1">1</option>
                                                                </select></td>
                                                                <td className="px-2 py-2 text-sm text-left"><select {...formik.getFieldProps('floorNo')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                                                >
                                                                    <option value="0">0</option>
                                                                    <option value="1">1</option>
                                                                </select></td>
                                                            </tr>
                                                        </>
                                                        {/* ))
                                                } */}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>


                                    </tr>

                                </tbody>
                            </table>


                        </div>

                        <div className="col-span-5 grid grid-cols-3">
                            <div className='md:pl-0'>
                            </div>
                            <div className='md:px-4 text-center'>
                            </div>
                            <div className='md:pl-10 text-right'>
                                <button type="button" className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Save</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyObjectionVerification