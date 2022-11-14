import { useState } from 'react'
import newSvg from './new.svg'
import re from './re.svg'
import mu from './mu.svg'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { TiArrowBack } from 'react-icons/ti'
import { TbSearch } from 'react-icons/tb'
import { FcHome } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SafEntryScreen() {
    const [newStatus, setnewStatus] = useState('col-span-12 md:col-span-4 py-6')// to maintain the hide show state of new-assessment
    const [reStatus, setreStatus] = useState('col-span-12 md:col-span-4 py-6')// to maintain the hide show state of re-assessment
    const [mutationStatus, setmutationStatus] = useState('col-span-12 md:col-span-4 py-6')// to maintain the hide show state of mutation
    const [dataListStatus, setDataListStatus] = useState(false) //to toggle hide show of data list table after finding the holding data from search holding
    const [holdingData, setholdingData] = useState() //to hold found holding data
    const [asstypeStatus, setasstypeStatus] = useState('both') //to hold found holding data

    const navigate = useNavigate()
    //function to hide and show and animate assessment options
    const assStatus = (type) => {
        setasstypeStatus(type)
        if (type == 'new') {
            setnewStatus('col-span-12 md:col-span-12 py-0 block')
            setreStatus('w-0 col-span-0 md:col-span-0 hidden')
            setmutationStatus('w-0 col-span-0 md:col-span-0 hidden')
        }
        if (type == 're') {
            setnewStatus('w-0 col-span-0 md:col-span-0 hidden')
            setreStatus('col-span-12 md:col-span-12 py-0 block')
            setmutationStatus('w-0 col-span-0 md:col-span-0 hidden')
        }
        if (type == 'mu') {
            setnewStatus('w-0 col-span-0 md:col-span-0 hidden')
            setreStatus('w-0 col-span-0 md:col-span-0 hidden')
            setmutationStatus('col-span-12 md:col-span-12 py-0 block')
        }
        if (type == 'back') {
            setDataListStatus(false)
            setnewStatus('col-span-12 md:col-span-4 py-6')
            setreStatus('col-span-12 md:col-span-4 py-6')
            setmutationStatus('col-span-12 md:col-span-4 py-6')
        }
    }

    const validationSchema = yup.object({
        holdingNo: yup.string().required('Enter holding no.')
    })
    const formik = useFormik({
        initialValues: {
            holdingNo: ''
        },

        onSubmit: (values, resetForm) => {
            console.log('propertyaddressdetails ', values)
            findHolding()
        }
        , validationSchema
    })

    //function to fetch holding data and set into data table
    const findHolding = () => {
        // let holdingNo = formik.holdingNo
        let holdingNo = 601
        //fetch holding data
        axios.get(`http://localhost:3001/dummyHolding/${holdingNo}`)
            .then(function (response) {
                console.log('serahed data....', response.data)
                setholdingData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }


    return (
        <>
            <div className="grid grid-cols-12 gap-2 mt-4 gap-x-6">
                {(reStatus == 'col-span-12 md:col-span-12 py-0 block' || mutationStatus == 'col-span-12 md:col-span-12 py-0 block') && <div className='col-span-12 cursor-pointer font-semibold text-gray-700' onClick={() => assStatus('back')}><TiArrowBack className='text-2xl hover:text-green-500 inline' /> Back</div>}
                <div className={` ${newStatus} rounded overflow-hidden shadow-lg relative bg-yellow-200 cursor-pointer hover:scale-105 transition-all duration-500`} onClick={() => navigate('/safform/new')}>
                    <img className={`md:w-32 w-20 absolute bottom-0 right-0`}   src={newSvg}  />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl">New-Assessment</div>
                        <p className="text-gray-700 text-sm w-3/5">
                            Choose if fresh assessment
                        </p>
                    </div>
                </div>
                <div className={`${reStatus} rounded overflow-hidden shadow-lg relative bg-green-200 cursor-pointer hover:scale-105 transition-all duration-500`} onClick={() => assStatus('re')}>
                    <img className={`${reStatus=='col-span-12 md:col-span-12 py-0 block'?'md:w-14 w-14':'md:w-20 w-16'} absolute bottom-0 right-5`} src={re}  />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl">Re-Assessment</div>
                        <p className="text-gray-700 text-sm w-3/5">
                            Choose if some updates in property
                        </p>
                    </div>
                </div>
                <div className={`${mutationStatus} rounded overflow-hidden shadow-lg relative bg-orange-200 cursor-pointer hover:scale-105 transition-all duration-500`} onClick={() => assStatus('mu')}>
                    <img className={`${mutationStatus=='col-span-12 md:col-span-12 py-0 block'?'md:w-14 w-14':'md:w-20 w-16'} absolute bottom-0 right-5`} src={mu}  />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl">Mutation</div>
                        <p className="text-gray-700 text-sm w-3/5">
                            Choose if owner has been changed
                        </p>
                    </div>
                </div>
            </div>

            {/* reassement content */}

            <section className={`${(reStatus == 'col-span-12 md:col-span-12 py-0 block' || mutationStatus == 'col-span-12 md:col-span-12 py-0 block') ? 'block' : 'block'} text-gray-600 body-font overflow-hidden mt-10 shadow-lg p-10 border border-gray-200`}>
                <h1 className="text-gray-700 text-3xl title-font font-medium mb-4 flex items-center"><FcHome className="inline" /> <p className='ml-3'>Find Holding</p></h1>

                <form onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-12">
                        <div className="form-group mb-6 col-span-12 md:col-span-3 ">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Holding no.</label>
                            <input {...formik.getFieldProps('holdingNo')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                placeholder="Enter holding no." />
                            <span className="text-red-600 absolute text-xs">{formik.touched.holdingNo && formik.errors.holdingNo ? formik.errors.holdingNo : null}</span>
                        </div>
                        <div className="form-group mb-6 col-span-12 md:col-span-3 align-bottom">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold invisible"><small className="block mt-1 text-sm font-semibold text-red-600 inline  ">*</small>Enter Holding no.</label>
                            <div className='md:px-10 text-right'>
                                <button onClick={() => setDataListStatus(true)} type="submit" className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"><TbSearch className="inline text-sm font-bold" />Find</button>
                            </div>
                        </div>
                    </div>
                </form>


                {/* found holding */}
                {
                    dataListStatus && <div className="py-2 overflow-x-auto bg-white">
                        <div className="inline-block min-w-full rounded-lg overflow-hidden bg-white">
                            <table className="min-w-full leading-normal">
                                <thead className='font-bold text-left text-sm bg-sky-50'>
                                    <tr >
                                        <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Holding No</th>
                                        <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Owner Name</th>
                                        <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Guardian Name</th>
                                        <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Address</th>
                                        <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Action</th>


                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="bg-white shadow-lg border-b border-gray-200">
                                        <td className="px-2 py-2 text-sm text-left">{holdingData?.holdingNo}</td>
                                        <td className="px-2 py-2 text-sm text-left">{holdingData?.ownerName}</td>
                                        <td className="px-2 py-2 text-sm text-left">{holdingData?.guardianName}</td>
                                        <td className="px-2 py-2 text-sm text-left">{holdingData?.Address}</td>
                                        <td className="px-2 py-2 text-sm text-left">
                                            {(asstypeStatus == 're' || asstypeStatus == 'both') && <button onClick={() => navigate('/safform/re')} type="button" className=" px-2 py-1 bg-green-200 text-black hover:text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Re-Assessment</button>}
                                            {(asstypeStatus == 'mu' || asstypeStatus == 'both') && <button onClick={() => navigate('/safform/mu')} type="button" className="ml-2 px-2 py-1 bg-orange-200 text-black hover:text-white font-medium text-xs leading-tight  rounded  hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">Mutation</button>}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                }
            </section>
        </>
    )
}

export default SafEntryScreen