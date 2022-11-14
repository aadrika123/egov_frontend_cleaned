import { useState } from 'react'
import { FaUserNurse } from 'react-icons/fa'
import { BiAddToQueue } from 'react-icons/bi'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { RiDeleteBack2Line } from 'react-icons/ri'
import { TbEdit } from 'react-icons/tb'
import { allowFloatInput, getCurrentDate } from 'Components/Common/PowerUps/PowerupFunctions'



function PropertyTaxFloorForm(props) {
    const [ownerCount, setOwnerCount] = useState([1])
    const [floorList, setfloorList] = useState([])
    const [editStatus, setEditStatus] = useState(false) //to check edit or add of form
    const [editIndex, setEditIndex] = useState() //to carry the index to edit if edistatus is true
    const [AddFloorForm, setAddFloorForm] = useState('-translate-y-full -top-[800px]')
    const seleOptions = [
        { option: 'one', value: 1 },
        { option: 'two', value: 2 },
        { option: 'three', value: 3 },
        { option: 'four', value: 4 },
        { option: 'five', value: 5 },
        { option: 'six', value: 6 },
    ]


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
            if (editStatus) {
                editfloorList(values)
                return
            }
            let tempFloorList = [...floorList, values] //taking copy of array adding latest values since setstate does not update immediatly
            setfloorList([...floorList, values])
            props.collectFormDataFun('PropertyTaxFloorForm', tempFloorList) //sending PropertyTaxFloorForm data to parent to store all form data at one container
            toggleForm()
        }
        , validationSchema
    })

    const editfloorList = () => {
        let tempfloorList = [...floorList]  //copying the array
        console.log('edit index is ', editIndex)

        tempfloorList[editIndex] = formik.values  //updating value of editindex
        console.log('tmep owner list', tempfloorList)
        props.collectFormDataFun('PropertyTaxFloorForm', tempfloorList) //sending PropertyTaxFloorForm data to parent to store all form data at one container
        setfloorList(tempfloorList) //setting value in origin ownlist array
        setEditStatus(false) //seting edit status false after successfull edit
        toggleForm()
    }

    const toggleForm = () => {
        if (AddFloorForm === '-translate-y-full -top-[800px]') {
            setAddFloorForm('translate-y-0 -top-72')
        } else {
            setAddFloorForm('-translate-y-full -top-[800px]')
        }
        // (AddFloorForm == 'translate-y-0 top-40' && setAddFloorForm('-translate-y-full -top-80'))
        // (AddFloorForm == '-translate-y-full -top-80' && setAddFloorForm('translate-y-0 top-40'))
    }

    //funtion to remove owner from floorList via index
    const removeFloor = (index) => {
        setfloorList(current =>
            current.filter(ct => {
                if (current.indexOf(ct) == index) {
                } else {
                    return ct
                }
            }),
        );
    }

    //function to edit owner from owner list via index
    const editFloor = (index) => {
        setEditStatus(true)
        setEditIndex(index)
        let tempfloorList = [...floorList]
        formik.resetForm()

        formik.initialValues.floorNo = tempfloorList[index].floorNo
        formik.initialValues.useType = tempfloorList[index].useType
        formik.initialValues.occupancyType = tempfloorList[index].occupancyType
        formik.initialValues.constructionType = tempfloorList[index].constructionType
        formik.initialValues.builtupArea = tempfloorList[index].builtupArea
        formik.initialValues.fromDate = tempfloorList[index].fromDate
        formik.initialValues.uptoDate = tempfloorList[index].uptoDate

        toggleForm()
    }
    const checkMinimumFloor = () => {
        if (floorList.length === 0) {
            props.toastFun('Add minimum one floor')
        } else {
            props.submitFun()
        }
    }

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        //input restrict validation
        { name == 'builtupArea' && formik.setFieldValue("builtupArea", allowFloatInput(value, formik.values.builtupArea, 20)) }
    }
    return (
        <>

            <div className="">
                {/* <h1 className='mb-2 font-serif font-semibold absolute text-gray-600'><FaUserNurse className="inline mr-2" />Floor Details </h1> */}

                <div className={`${AddFloorForm} transition-all relative block p-4 w-full md:py-6 rounded-lg shadow-lg bg-white md:w-full mx-auto bg-green-100 z-50`}>
                    {/* <h1 className='bg-red-100 md:px-2 md:ml-8 md:mr-8'>Form 2</h1> */}

                    <form onSubmit={formik.handleSubmit} onChange={handleChange}>
                        <div className="grid grid-cols-1 md:grid-cols-5">
                            <div className={`grid col-span-5 grid-cols-1 md:grid-cols-5`}>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold ">
                                        <small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Floor No</label>
                                    <select {...formik.getFieldProps('floorNo')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                        aria-describedby="emailHelp" placeholder="Enter owner name">
                                        {
                                            seleOptions.map((data) => (
                                                <option value={data.value}>{data.option}</option>
                                            ))
                                        }

                                    </select>
                                    <span className="text-red-600 absolute text-xs">{formik.touched.floorNo && formik.errors.floorNo ? formik.errors.floorNo : null}</span>

                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>User Type</label>
                                    <select {...formik.getFieldProps('useType')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" >
                                        {
                                            seleOptions.map((data) => (
                                                <option value={data.value}>{data.option}</option>
                                            ))
                                        }

                                    </select>
                                    <span className="text-red-600 absolute text-xs">{formik.touched.useType && formik.errors.useType ? formik.errors.useType : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Occupancy Type</label>
                                    <select {...formik.getFieldProps('occupancyType')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md">
                                        {
                                            seleOptions.map((data) => (
                                                <option value={data.value}>{data.option}</option>
                                            ))
                                        }

                                    </select>
                                    <span className="text-red-600 absolute text-xs">{formik.touched.occupancyType && formik.errors.occupancyType ? formik.errors.occupancyType : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Construction Type</label>
                                    <select {...formik.getFieldProps('constructionType')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                        placeholder="Enter guardian name" >
                                        {
                                            seleOptions.map((data) => (
                                                <option value={data.value}>{data.option}</option>
                                            ))
                                        }

                                    </select>
                                    <span className="text-red-600 absolute text-xs">{formik.touched.constructionType && formik.errors.constructionType ? formik.errors.constructionType : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Built Up Area (in Sq. Ft)</label>
                                    <input {...formik.getFieldProps('builtupArea')} type="text" className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md" />
                                    <span className="text-red-600 absolute text-xs">{formik.touched.builtupArea && formik.errors.builtupArea ? formik.errors.builtupArea : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>From Date</label>
                                    <input {...formik.getFieldProps('fromDate')} type="date" className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" placeholder='Enter fromDate no' />
                                    <span className="text-red-600 absolute text-xs">{formik.touched.fromDate && formik.errors.fromDate ? formik.errors.fromDate : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Upto Date (Leave blank for current date)</label>
                                    <input {...formik.getFieldProps('uptoDate')} type="date" className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                        placeholder="Enter uptoDate no." />
                                    <span className="text-red-600 absolute text-xs">{formik.touched.uptoDate && formik.errors.uptoDate ? formik.errors.uptoDate : null}</span>
                                </div>

                                <div className=" flex justify-center items-end">
                                    <div className='md:px-10'>
                                        <button type="submit" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{editStatus ? 'Update' : 'Add'}</button>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </form>
                </div>

                <div className={` block p-4 -mt-52 w-full md:py-4 md:px-0 md:pb-0 md:pt-0 rounded-lg shadow-lg bg-white md:w-full mx-auto overflow-x-auto`}>

                    <table className='min-w-full leading-normal'>
                        <thead className='font-bold text-left text-sm bg-sky-50'>
                            <tr>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">#</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Floor No</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">User Type</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Occupancy Type</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Construction Type</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Builtup Area</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">From Date</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Upto Date</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {
                                floorList?.map((data, index) => (
                                    <>
                                        <tr className="bg-white shadow-lg border-b border-gray-200">
                                            <td className="px-2 py-2 text-sm text-left">{index + 1}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.floorNo}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.useType}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.occupancyType}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.constructionType}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.builtupArea}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.fromDate}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.uptoDate}</td>
                                            <td className="px-2 py-2 text-sm text-left"><TbEdit onClick={() => editFloor(index)} className='inline text-green-500 font-semibold text-lg cursor-pointer hover:text-green-700 relative hover:scale-150' /><RiDeleteBack2Line onClick={() => removeFloor(index)} className='inline ml-2 text-red-400 font-semibold text-lg cursor-pointer hover:text-red-700 relative hover:scale-150' /></td>
                                        </tr>
                                    </>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className={` block p-4 w-full md:py-4 rounded-lg shadow-lg bg-white md:w-full mx-auto`}>
                    <div className="grid grid-cols-1 md:grid-cols-5 ">


                        <div className="col-span-5 grid grid-cols-3">
                            <div className='md:px-10'>
                                {/* <button onClick={() => props.backFun(5)} type="button" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Back</button> */}
                            </div>
                            <div className='md:px-4 text-center'>
                                {/* <button onClick={toggleForm} type="button" className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Add Floor <BiAddToQueue className=' hidden md:inline font-semibold text-sm md:text-lg' /></button> */}
                            </div>
                            <div className='md:px-10 text-right'>
                                <button onClick={toggleForm} type="button" className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Add Floor <BiAddToQueue className=' hidden md:inline font-semibold text-sm md:text-lg' /></button>
                            </div>
                           

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PropertyTaxFloorForm