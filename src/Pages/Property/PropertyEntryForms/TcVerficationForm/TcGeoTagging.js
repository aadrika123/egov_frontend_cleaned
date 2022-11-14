import React, { useContext } from 'react'
import rainWater from './Assets/storm.png'
import road from './Assets/road.png'
import home from './Assets/home.png'
import area from './Assets/radar.png'
import mobile from './Assets/tower.png'
import hoarding from './Assets/billboard.png'
import floor from './Assets/parquet.png'
import petrol from './Assets/petrol.png'
import L from 'Components/Media/l.png'
import R from 'Components/Media/r.png'
import F from 'Components/Media/f.png'
import nav from 'Components/Media/nav.png'
import { contextVar } from 'Components/Context/Context'
import { useFormik } from 'formik'
import * as yup from 'yup'
import photo from 'Components/Media/photo.png'

function TcGeoTagging(props) {
    //destructuring notify function to activate toast
    const { notify } = useContext(contextVar);

    const validationSchema = yup.object({
        floorNo: yup.string().required('Select floor no.').max(50, 'Enter maximum 50 characters'),
        useType: yup.string().required('Select use type'),
        occupancyType: yup.string().required('Select occupancy type'),
        constructionType: yup.string().required('Select construction type'),
        builtupArea: yup.string().required('Enter builtup Area'),
        fromDate: yup.date().required('Select from date'),
        uptoDate: yup.date()

    })
    const formik = useFormik({
        initialValues: {
            floorNo: '',
            useType: '',
            occupancyType: '',
            constructionType: '',
            builtupArea: '',
            fromDate: '',
            uptoDate: ''
        },

        onSubmit: (values, resetForm) => {
            console.log('submit...')
        }
        , validationSchema
    })
    return (
        <>
            <div className="absolute top-0 overflow-x-auto">
                <h1 className='px-4 font-semibold font-serif'><img src={nav} alt="pin" className='w-10 inline' /> Geo Tagging</h1>
                <div className="min-w-screen min-h-screen bg-gray-100 flex md:pl-4 bg-white font-sans overflow-x-auto">
                    <div className="w-full lg:w-4/6">
                        <div className="bg-white shadow-md rounded my-2">
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-amber-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left cursor-pointer" onClick={() => notify('just testing the context data', 'info')}>Image Type</th>
                                        <th className="py-3 px-6 text-left">Upload</th>
                                        <th className="py-3 px-6 text-center">Preview</th>
                                        <th className="py-3 px-6 text-center">Latitude</th>
                                        <th className="py-3 px-6 text-center">Longitude</th>

                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light bg-white">
                                    {/* front image */}
                                    <tr className="border-b border-gray-200 ">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="mr-2 bg-white shadow-lg rounded-full p-2">
                                                    <img src={F} alt="rain" className='w-3' />
                                                </div>
                                                <span className="font-medium">Front</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <div className="form-group col-span-4 md:col-span-1 md:px-0">
                                                    <input {...formik.getFieldProps('harvesting')} type='file' className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36" />
                                                    <span className="text-red-600 absolute text-xs">{formik.touched.harvesting && formik.errors.harvesting ? formik.errors.harvesting : null}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <img src={photo} alt="previewImage" className='w-16 cursor-pointer' />
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className="border-b border-gray-200 ">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="mr-2 bg-white shadow-lg rounded-full p-2">
                                                    <img src={L} alt="rain" className='w-4' />
                                                </div>
                                                <span className="font-medium">Left</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="form-group col-span-4 md:col-span-1 md:px-0">
                                                <input {...formik.getFieldProps('harvesting')} type='file' className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36" />
                                                <span className="text-red-600 absolute text-xs">{formik.touched.harvesting && formik.errors.harvesting ? formik.errors.harvesting : null}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <img src={photo} alt="previewImage" className='w-16 cursor-pointer' />
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                No

                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className="border-b border-gray-200 ">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="mr-2 bg-white shadow-lg rounded-full p-2">
                                                    <img src={R} alt="rain" className='w-4' />
                                                </div>
                                                <span className="font-medium">Right</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="form-group col-span-4 md:col-span-1 md:px-0">
                                                <input {...formik.getFieldProps('harvesting')} type='file' className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36" />
                                                <span className="text-red-600 absolute text-xs">{formik.touched.harvesting && formik.errors.harvesting ? formik.errors.harvesting : null}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <img src={photo} alt="previewImage" className='w-16 cursor-pointer' />

                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>

                                    </tr>
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
                                            <div className="form-group col-span-4 md:col-span-1 md:px-0">
                                                <input {...formik.getFieldProps('harvesting')} type='file' className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36" />
                                                <span className="text-red-600 absolute text-xs">{formik.touched.harvesting && formik.errors.harvesting ? formik.errors.harvesting : null}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <img src={photo} alt="previewImage" className='w-16 cursor-pointer' />

                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
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
                                            <div className="form-group col-span-4 md:col-span-1 md:px-0">
                                                <input {...formik.getFieldProps('harvesting')} type='file' className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36" />
                                                <span className="text-red-600 absolute text-xs">{formik.touched.harvesting && formik.errors.harvesting ? formik.errors.harvesting : null}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <img src={photo} alt="previewImage" className='w-16 cursor-pointer' />

                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className="border-b border-gray-200 ">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="mr-2 bg-white shadow-lg rounded-full p-2">
                                                    <img src={hoarding} alt="rain" className='w-4' />
                                                </div>
                                                <span className="font-medium">Hoarding</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="form-group col-span-4 md:col-span-1 md:px-0">
                                                <input {...formik.getFieldProps('harvesting')} type='file' className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36" />
                                                <span className="text-red-600 absolute text-xs">{formik.touched.harvesting && formik.errors.harvesting ? formik.errors.harvesting : null}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <img src={photo} alt="previewImage" className='w-16 cursor-pointer' />

                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className="border-b border-gray-200 ">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="mr-2 bg-white shadow-lg rounded-full p-2">
                                                    <img src={petrol} alt="rain" className='w-4' />
                                                </div>
                                                <span className="font-medium">Petrol Pump</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="form-group col-span-4 md:col-span-1 md:px-0">
                                                <input {...formik.getFieldProps('harvesting')} type='file' className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36" />
                                                <span className="text-red-600 absolute text-xs">{formik.touched.harvesting && formik.errors.harvesting ? formik.errors.harvesting : null}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <img src={photo} alt="previewImage" className='w-16 cursor-pointer' />

                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex items-center justify-center font-semibold text-sm">
                                                <span>No</span>
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
                                <button onClick={() => props.backFun(3)} type="button" className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Save</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TcGeoTagging