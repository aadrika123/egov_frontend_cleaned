import { useState } from 'react'
import { FaUserNurse } from 'react-icons/fa'
import { BiAddToQueue } from 'react-icons/bi'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { RiDeleteBack2Line } from 'react-icons/ri'
import { TbEdit } from 'react-icons/tb'
import { allowCharacterNumberInput, allowCharacterSpaceCommaInput, allowMailInput, allowNumberInput, getCurrentDate } from 'Components/Common/PowerUps/PowerupFunctions'
import { ConnectingAirportsOutlined } from '@mui/icons-material'


function OwnerDetails(props) {
    const [ownerCount, setOwnerCount] = useState([1])
    const [ownerList, setOwnerList] = useState([])
    const [editStatus, setEditStatus] = useState(false) //to check edit or add of form
    const [editIndex, setEditIndex] = useState() //to carry the index to edit if edistatus is true
    const [AddOwnerForm, setAddOwnerForm] = useState('-translate-y-full -top-[400px]') //to hide and show ownerform with animation
    const [dummyPrevOwnerList, setDummyPrevOwnerList] = useState([
        {
            ownerName: "mark",
            gender: "female",
            dob: "2022-02-05",
            guardinaName: "owner mark",
            relation: "s/o",
            mobile: "9123252525",
            aadhar: "1919456565",
            pan: "MAvsph14199",
            emailId: "abc@gmail.com",
            armedForce: "no",
            speciallayAbled: "no",
        },
        {
            ownerName: "mark",
            gender: "female",
            dob: "2022-02-05",
            guardinaName: "owner mark",
            relation: "s/o",
            mobile: "9123252525",
            aadhar: "1919456565",
            pan: "MAvsph14199",
            emailId: "abc@gmail.com",
            armedForce: "no",
            speciallayAbled: "no",
        }
    ])
    const seleOptions = [
        { option: 'one', value: 1 },
        { option: 'two', value: 2 },
        { option: 'three', value: 3 },
        { option: 'four', value: 4 },
        { option: 'five', value: 5 },
        { option: 'six', value: 6 },
    ]

    console.log('current date at owner ', getCurrentDate())


    const validationSchema = yup.object({
        ownerName: yup.string().required('Enter owner name').max(50, 'Enter maximum 50 characters'),
        gender: yup.string().required('Select gender'),
        dob: yup.date().required('Select DOB'),
        guardinaName: yup.string(),
        relation: yup.string(),
        mobile: yup.string().required('Enter mobile no.'),
        aadhar: yup.string(),
        pan: yup.string(),
        emailId: yup.string(),
        armedForce: yup.string().required('Select armed force status'),
        speciallayAbled: yup.string().required('Select specially-abled status'),

    })
    const formik = useFormik({
        initialValues: {
            ownerName: '',
            gender: '',
            dob: getCurrentDate(),
            guardinaName: '',
            relation: '',
            mobile: '',
            aadhar: '',
            pan: '',
            emailId: '',
            armedForce: 'no',
            speciallayAbled: 'no'
        },

        onSubmit: (values, resetForm) => {
            if (editStatus) {
                editOwnerList(values)
                return
            }
            let tempOwnerList = [...ownerList, values] //taking copy of array adding latest values since setstate does not update immediatly
            setOwnerList([...ownerList, values])
            props.collectFormDataFun('ownerDetails', tempOwnerList) //sending OwnerDetails data to parent to store all form data at one container
            toggleForm()
        }
        , validationSchema
    })

    const editOwnerList = () => {
        let tempOwnerlist = [...ownerList]  //copying the array
        console.log('edit index is ', editIndex)
        tempOwnerlist[editIndex] = formik.values  //updating value of editindex
        console.log('tmep owner list', tempOwnerlist)
        props.collectFormDataFun('ownerDetails', tempOwnerlist) //sending OwnerDetails data to parent to store all form data at one container
        setOwnerList(tempOwnerlist) //setting value in origin ownlist array
        setEditStatus(false) //seting edit status false after successfull edit
        toggleForm()
    }

    const toggleForm = () => {
        if (AddOwnerForm === 'translate-y-0 top-[200px]') {
            setAddOwnerForm('-translate-y-full -top-[400px]')
        } else {
            setAddOwnerForm('translate-y-0 top-[200px]')
        }
        // (AddOwnerForm == 'translate-y-0 top-40' && setAddOwnerForm('-translate-y-full -top-80'))
        // (AddOwnerForm == '-translate-y-full -top-80' && setAddOwnerForm('translate-y-0 top-40'))
    }


    //funtion to remove owner from ownerlist via index
    const removeOwner = (index) => {
        setOwnerList(current =>
            current.filter((ct,cIndex) => {
               return cIndex != index
            }),
        );
      
    }


    console.log('owner list.....',ownerList)

    //function to edit owner from owner list via index
    const editOwner = (index) => {
        setEditStatus(true)
        setEditIndex(index)
        let tempOwnerlist = [...ownerList]
        formik.resetForm()

        formik.initialValues.ownerName = tempOwnerlist[index].ownerName
        formik.initialValues.gender = tempOwnerlist[index].gender
        formik.initialValues.dob = tempOwnerlist[index].dob
        formik.initialValues.guardinaName = tempOwnerlist[index].guardinaName
        formik.initialValues.relation = tempOwnerlist[index].relation
        formik.initialValues.mobile = tempOwnerlist[index].mobile
        formik.initialValues.aadhar = tempOwnerlist[index].aadhar
        formik.initialValues.pan = tempOwnerlist[index].pan
        formik.initialValues.emailId = tempOwnerlist[index].emailId
        formik.initialValues.armedForce = tempOwnerlist[index].armedForce
        formik.initialValues.speciallayAbled = tempOwnerlist[index].speciallayAbled

        toggleForm()
    }
    const checkMinimumOwner = () => {
        if (ownerList.length === 0) {
            props.toastFun('Add minimum one owner')
        } else {
            props.nextFun(4)
        }
    }

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        //input restrict validation
        { name == 'ownerName' && formik.setFieldValue("ownerName", allowCharacterSpaceCommaInput(value, formik.values.ownerName, 100)) }
        { name == 'guardinaName' && formik.setFieldValue("guardinaName", allowCharacterSpaceCommaInput(value, formik.values.guardinaName, 100)) }
        { name == 'mobile' && formik.setFieldValue("mobile", allowNumberInput(value, formik.values.mobile, 10)) }
        { name == 'aadhar' && formik.setFieldValue("aadhar", allowNumberInput(value, formik.values.aadhar, 12)) }
        { name == 'pan' && formik.setFieldValue("pan", allowCharacterNumberInput(value, formik.values.pan, 10)) }
        { name == 'emailId' && formik.setFieldValue("emailId", allowMailInput(value, formik.values.emailId, 100)) }

    }
    return (
        <>

            <div className="absolute">
                <h1 className='mt-6 mb-2 font-serif font-semibold absolute text-gray-600'><FaUserNurse className="inline mr-2" />Owner Details </h1>

                <div className={`${AddOwnerForm} transition-all relative block p-4 w-full md:py-6 rounded-lg shadow-lg bg-white md:w-full mx-auto absolute top-14 bg-green-100 z-50`}>
                    {/* <h1 className='bg-red-100 md:px-2 md:ml-8 md:mr-8'>Form 2</h1> */}

                    <form onSubmit={formik.handleSubmit} onChange={handleChange}>
                        <div className="grid grid-cols-1 md:grid-cols-5">
                            <div className={`grid col-span-5 grid-cols-1 md:grid-cols-5`}>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold "><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Owner Name</label>
                                    <input {...formik.getFieldProps('ownerName')} type="text" className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md"
                                        aria-describedby="emailHelp" placeholder="Enter owner name" />
                                    <span className="text-red-600 absolute text-xs">{formik.touched.ownerName && formik.errors.ownerName ? formik.errors.ownerName : null}</span>

                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Gender</label>
                                    <select {...formik.getFieldProps('gender')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" >
                                        <option value="" disabled selected>select gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                        <option value="3">Other</option>

                                    </select>
                                    <span className="text-red-600 absolute text-xs">{formik.touched.gender && formik.errors.gender ? formik.errors.gender : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>DOB</label>
                                    <input {...formik.getFieldProps('dob')} type="date" className="block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" />
                                    <span className="text-red-600 absolute text-xs">{formik.touched.dob && formik.errors.dob ? formik.errors.dob : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Guardian Name</label>
                                    <input {...formik.getFieldProps('guardinaName')} type="text" className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md"
                                        placeholder="Enter guardian name" />
                                    <span className="text-red-600 absolute text-xs">{formik.touched.guardinaName && formik.errors.guardinaName ? formik.errors.guardinaName : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Relation</label>
                                    <select {...formik.getFieldProps('relation')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" >
                                        <option value="" disabled selected>select relation</option>
                                        <option value="1">S/O</option>
                                        <option value="2">D/O</option>
                                        <option value="3">W/O</option>
                                        <option value="4">C/O</option>

                                    </select>
                                    <span className="text-red-600 absolute text-xs">{formik.touched.relation && formik.errors.relation ? formik.errors.relation : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Mobile No.</label>
                                    <input {...formik.getFieldProps('mobile')} type="text" className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md" placeholder='Enter mobile no' />
                                    <span className="text-red-600 absolute text-xs">{formik.touched.mobile && formik.errors.mobile ? formik.errors.mobile : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Aadhar No</label>
                                    <input {...formik.getFieldProps('aadhar')} type="text" className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md"
                                        placeholder="Enter aadhar no." />
                                    <span className="text-red-600 absolute text-xs">{formik.touched.aadhar && formik.errors.aadhar ? formik.errors.aadhar : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">PAN No.</label>
                                    <input {...formik.getFieldProps('pan')} type="text" className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md"
                                        placeholder="Enter pan no." />
                                    <span className="text-red-600 absolute text-xs">{formik.touched.pan && formik.errors.pan ? formik.errors.pan : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">EmailId</label>
                                    <input {...formik.getFieldProps('emailId')} type="email" className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md"
                                        placeholder="Enter email." />
                                    <span className="text-red-600 absolute text-xs">{formik.touched.emailId && formik.errors.emailId ? formik.errors.emailId : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Is-Armed-Force</label>
                                    <select {...formik.getFieldProps('armedForce')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md" >
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                    </select>
                                    <span className="text-red-600 absolute text-xs">{formik.touched.armedForce && formik.errors.armedForce ? formik.errors.armedForce : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Is-Specially-Abled?</label>
                                    <select {...formik.getFieldProps('speciallayAbled')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" >
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>

                                    </select>
                                    <span className="text-red-600 absolute text-xs">{formik.touched.speciallayAbled && formik.errors.speciallayAbled ? formik.errors.speciallayAbled : null}</span>
                                </div>
                                <div className=" flex justify-center items-end">
                                    <div className='md:px-10'>
                                        <button type="submit" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer">{editStatus ? 'Update' : 'Add'}</button>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </form>
                </div>
                <div className={` block p-4 w-full md:py-4 rounded-lg shadow-lg bg-white md:w-full mx-auto absolute top-14 `}>
                    <div className="grid grid-cols-1 md:grid-cols-5 ">


                        <div className="col-span-5 grid grid-cols-3">
                            <div className='md:px-10'>
                                <button onClick={() => props.backFun(4)} type="button" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Back</button>
                            </div>
                            <div className='md:px-4 text-center'>
                                <button onClick={toggleForm} type="button" className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Add Owner <BiAddToQueue className=' hidden md:inline font-semibold text-sm md:text-lg' /></button>
                            </div>
                            <div className='md:px-10 text-right'>
                                <button type="button" onClick={checkMinimumOwner} className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Save & Next</button>
                            </div>

                        </div>
                    </div>

                </div>
                <div className={` block p-4 mt-20 w-full md:py-4 md:px-0 md:pb-0 md:pt-0 rounded-lg shadow-lg bg-white md:w-full mx-auto absolute top-14 overflow-x-auto`}>


                    {/* previous owner details */}
                    {props.assType == 'Mutation' && <table className='min-w-full leading-normal shadow-xl mb-10'>
                        <thead className='font-bold text-left text-sm bg-gray-500'>
                            <tr>
                                <td colSpan={13} m className='px-2 text-white font-semibold font-mono'><span className='bg-white text-gray-700 shadow-lg px-2'>Previous Owner</span></td>
                            </tr>
                            <tr className='text-white'>
                                <th className="px-2 py-3 border-b border-gray-200 text-left text-xs uppercase text-left">#</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-left text-xs uppercase text-left">Owner</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-left text-xs uppercase text-left">Gender</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-left text-xs uppercase text-left">DOB</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-left text-xs uppercase text-left">Guardian</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-left text-xs uppercase text-left">Relation</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-left text-xs uppercase text-left">Mobile</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-left text-xs uppercase text-left">Aadhar</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-left text-xs uppercase text-left">PAN</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-left text-xs uppercase text-left">EmailId</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-left text-xs uppercase text-left">IsArmed</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-left text-xs uppercase text-left">IsSpecially</th>

                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {
                                dummyPrevOwnerList?.map((data, index) => (
                                    <>
                                        <tr className="bg-gray-200 shadow-lg border-b border-gray-200">
                                            <td className="px-2 py-2 text-sm text-left">{index + 1}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.ownerName}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.gender}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.dob}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.guardinaName}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.relation}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.mobile}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.aadhar}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.pan}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.emailId}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.armedForce}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.speciallayAbled}</td>

                                        </tr>
                                    </>
                                ))
                            }
                        </tbody>
                    </table>}

                    <table className='min-w-full leading-normal'>
                        <thead className='font-bold text-left text-sm bg-sky-50'>
                            <tr>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">#</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Owner</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Gender</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">DOB</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Guardian</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Relation</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Mobile</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Aadhar</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">PAN</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">EmailId</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">IsArmed</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">IsSpecially</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {
                                ownerList?.map((data, index) => (
                                    <>
                                        <tr className="bg-white shadow-lg border-b border-gray-200">
                                            <td className="px-2 py-2 text-sm text-left">{index + 1}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.ownerName}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.gender}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.dob}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.guardinaName}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.relation}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.mobile}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.aadhar}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.pan}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.emailId}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.armedForce}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.speciallayAbled}</td>
                                            <td className="px-2 py-2 text-sm text-left"><TbEdit onClick={() => editOwner(index)} className='inline text-green-500 font-semibold text-lg cursor-pointer hover:text-green-700 relative hover:scale-150' /><RiDeleteBack2Line onClick={() => removeOwner(index)} className='inline ml-2 text-red-400 font-semibold text-lg cursor-pointer hover:text-red-700 relative hover:scale-150' /></td>
                                        </tr>
                                    </>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default OwnerDetails