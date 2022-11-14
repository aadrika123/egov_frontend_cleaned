//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 14 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PropertySafDetailsCard
//    DESCRIPTION - PropertySafDetailsCard Component
//////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react'
// import WardChip from '../WardChip'
import propImage from './prop.jpg'
import { GrHomeRounded } from 'react-icons/gr'
import Modal from 'react-modal';
import TradeFullDetailsCard from './TradeFullDetailsCard';
import { FcHome } from 'react-icons/fc'
import folder from 'Components/Media/folders.png'
import { FcBusinessman } from 'react-icons/fc'
import home from 'Components/Media/home.png'
import { FcFlashOn } from 'react-icons/fc'
import building from 'Components/Media/building.png'
import files from 'Components/Media/files.png'
import CitizenDocumentView from './CitizenRegistrationWorkflow/CitizenDocumentView';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        border: 'none'
    },
};
Modal.setAppElement('#root');

function TradeDetailsCard(props) {

    const { licenceDtl, ownerDtl, documents, transactionDtl, timeline } = props?.applicationData;

    const [modalIsOpen, setIsOpen] = useState(false);
    let subtitle;

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    console.log('.............data in full details card.........', transactionDtl)
    if (props?.applicationData == null) {
        return (
            <h1>Loading List...</h1>
        )
    }

    return (
        <>
            <div className="bg-gray-100">
                <div className="container mx-auto my-5 p-5">
                    <div className="md:flex no-wrap md:-mx-2 ">
                        <div className="w-full md:w-3/12 md:mx-2 shadow-xl">
                            <div className="bg-white p-2 border-t-2 border-stone-400 rounded-lg">
                                <div className="image overflow-hidden">
                                    <img className="h-auto w-full mx-auto max-h-32"
                                        src="https://cdn-icons-png.flaticon.com/512/8347/8347734.png"
                                        // src={propImage}
                                        alt="" />
                                </div>
                                <h1 className="text-gray-900 font-bold text-xl leading-8 ">Trade License</h1>


                                <ul
                                    className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-4 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li className="flex items-center py-3">
                                        <span>Status</span>
                                        {props?.applicationData?.licenceDtl?.status == 1 ?
                                            <span className="ml-auto"><span
                                                className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span>
                                            </span>
                                            :
                                            <span className="ml-auto"><span
                                                className="bg-gray-500 py-1 px-2 rounded text-white text-sm">Closed</span>
                                            </span>
                                        }
                                    </li>

                                </ul>
                            </div>
                            <div className="my-4 md:my-0"></div>

                        </div>
                        <div className="w-full md:w-9/12 mx-2 h-auto">
                            <div className="bg-white p-3 shadow-xl rounded-sm">
                                <div className="flex items-center pl-4 space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <GrHomeRounded />
                                    </span>
                                    <span className="tracking-wide">About Application No.<small className='text-teal-400 font-mono'> ()</small></span>
                                </div>
                                <div className="text-gray-700 text-xs">
                                    <div className="grid md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Ward No.</div>
                                            <div className="px-4 py-2 ">{licenceDtl?.ward_no}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Application No.</div>
                                            <div className="px-4 py-2 ">{licenceDtl?.application_no}</div>
                                        </div>
                                        {/* <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Owner Name</div>
                                            <div className="px-4 py-2">{props?.applicationData?.data?.owner_name}</div>
                                        </div> */}
                                        {/* <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Mobile Number</div>
                                            <div className="px-4 py-2">{props?.applicationData?.data?.mobile}</div>
                                        </div> */}
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Application Type</div>
                                            <div className='px-0 py-1'>
                                                <div className={' rounded-full shadow-lg px-1 py-1 text-center text-xs  ' + (licenceDtl?.application_type_id == '1' ? 'bg-green-200 text-black border-2 border-white font-sans  ' : '') + (licenceDtl?.application_type_id == '2' ? 'bg-indigo-200 text-black border-2 border-white font-sans ' : '') + (licenceDtl?.application_type_id == '3' ? 'bg-amber-200 text-black border-2 border-white font-sans ' : '') + (licenceDtl?.application_type_id == '4' ? 'bg-red-200 text-black border-2 border-white font-sans ' : '')}>{licenceDtl?.application_type}</div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Firm Type</div>
                                            <div className="px-4 py-2">{licenceDtl?.firm_type}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Firm Name</div>
                                            <div className="px-4 py-2">{licenceDtl?.firm_name}</div>
                                        </div>

                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Ownership Type</div>
                                            <div className="px-4 py-2">{licenceDtl?.ownership_type}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold"></div>
                                            <div className="px-4 py-2">
                                                <a className="text-blue-800" href="mailto:jane@example.com"></a>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold"></div>
                                            <div className="px-4 py-2"></div>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={openModal}
                                    className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                                    Full Information</button>
                            </div>

                            <div className="md:my-4"></div>


                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div class="rounded-lg  shadow-xl pt-4 bg-white ml-40" style={{ 'width': '70vw', 'height': '70vh' }}>
                    <div className='bg-gray-100'>

                        {/* saf details */}
                        <div className="" style={{ 'width': '69vw' }}>
                            <div className="container mx-auto mb-0 mt-1 p-5 py-1 ">
                                <div className="md:flex no-wrap md:-mx-2 ">
                                    <div className="w-full mx-2 ">
                                        <div className="bg-white p-3  rounded-sm">
                                            <div className="flex items-center pl-0 space-x-2 font-semibold text-gray-900 leading-8 mb-2">
                                                <span className="tracking-wide"><img src={folder} alt="pin" className='w-5 inline' /> Basic Details</span>
                                            </div>
                                            <div className='bg-green-50 rounded-lg shadow-lg py-6'>
                                                <div className="flex space-x-10 pl-4 ">
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{licenceDtl?.ward_no}</div>
                                                        <div className='text-gray-500'>Ward No.</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{licenceDtl?.new_ward_no}</div>
                                                        <div className='text-gray-500'>New Ward No</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-semibold text-sm'>{licenceDtl?.ownership_type}</div>
                                                        <div className='text-gray-500'>Ownership Type</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{licenceDtl?.firm_type}</div>
                                                        <div className='text-gray-500'>Firm Type</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{licenceDtl?.address}</div>
                                                        <div className='text-gray-500'>Firm Establishment Date</div>
                                                    </div>

                                                </div>

                                                <div className="flex space-x-10  pl-4 mt-4">

                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{licenceDtl?.address}</div>
                                                        <div className='text-gray-500'>License For Years</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className=' text-sm'>({licenceDtl?.items_code}) <span className='text-[8px] font-mono'>{licenceDtl?.items} </span></div>
                                                        <div className='text-gray-500'>Nature of Business</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{licenceDtl?.firm_type}</div>
                                                        <div className='text-gray-500'>Firm Name :</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{licenceDtl?.firm_type}</div>
                                                        <div className='text-gray-500'>Apply Date</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{licenceDtl?.firm_type}</div>
                                                        <div className='text-gray-500'>Cateogry Type</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Property Details & Address */}
                        <div className="" style={{ 'width': '69vw' }}>
                            <div className="container mx-auto mb-0 mt-1 p-5 py-1 ">
                                <div className="md:flex no-wrap md:-mx-2 ">
                                    <div className="w-full mx-2 ">
                                        <div className="bg-white p-3 shadow-xl rounded-sm">
                                            <div className="flex items-center pl-0 space-x-2 font-semibold text-gray-900 leading-8 mb-2">
                                                <span className="tracking-wide"><img src={home} alt="pin" className='w-5 inline' />  Property Details & Address</span>
                                            </div>
                                            <div className='bg-green-50'>
                                                <div className="flex space-x-10 pl-4 ">
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{licenceDtl?.firm_type}</div>
                                                        <div className='text-gray-500'>Khata No.</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-semibold text-sm'>{licenceDtl?.firm_type
                                                        }</div>
                                                        <div className='text-gray-500'>Area of Plot</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{licenceDtl?.firm_type}</div>
                                                        <div className='text-gray-500'>Pincode</div>

                                                    </div>
                                                </div>

                                                <div className="flex space-x-10  pl-4 mt-4">

                                                    <div className='flex-1 text-xs'>
                                                        <div className='text-gray-500'>Account No</div><div className='font-bold text-sm'>{licenceDtl?.firm_type}</div>

                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-semibold text-sm'>{licenceDtl?.firm_type}</div>
                                                        <div className='text-gray-500'>Business Address</div>
                                                    </div>

                                                    <div className='flex-1 text-xs'>
                                                        <div className='text-gray-500'>Landmark</div><div className='font-bold text-sm'>{licenceDtl?.firm_type}</div>

                                                    </div>
                                                    {/* <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.prop_city}</div>
                                                        <div className='text-gray-500'>City</div>
                                                    </div> */}
                                                    {/* <div className='flex-1 text-xs'>
                                                        <div className='font-semibold text-sm'>{props?.applicationData?.data?.prop_dist
                                                        }</div>
                                                        <div className='text-gray-500'>District</div>
                                                    </div> */}
                                                    {/* <div className='flex-1 text-xs'>
                                                        <div className='font-semibold text-sm'>{props?.applicationData?.data?.prop_state}</div>
                                                        <div className='text-gray-500'>State</div>
                                                    </div> */}
                                                    {/* <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.prop_pin_code}</div>
                                                        <div className='text-gray-500'>Pin</div>
                                                    </div> */}

                                                    {/* <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'></div>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.prop_address}</div>
                                                        <div className='text-gray-500'>Locality</div>
                                                    </div> */}
                                                </div>

                                                <div></div>
                                                {/* coressponding address */}
                                                {/* <div className="col-span-4 grid grid-cols-5 justify-center items-center mt-4 mb-4">
                                                    <div className="col-span-2 flex justify-center items-center w-full h-[1px] bg-gray-400"></div>
                                                    <div className='flex justify-center items-center'><label className="form-check-label text-gray-800"> <small className="block mt-1 text-xs text-gray-400 inline md:px-4 font-mono text-center">Corresponding Address</small></label></div>
                                                    <div className="col-span-2 flex justify-center items-center w-full h-[1px] bg-gray-400"></div>
                                                </div> */}

                                                {/* <div className="flex space-x-10  pl-4 mt-4">
                                                    <div className='flex-1 text-xs'>
                                                        <div className='text-gray-500'>City</div>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.corr_city}</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='text-gray-500'>District</div>
                                                        <div className='font-semibold text-sm'>{props?.applicationData?.data?.corr_dist}</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='text-gray-500'>State</div>
                                                        <div className='font-semibold text-sm'>{props?.applicationData?.data?.corr_state}</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='text-gray-500'>Pin</div>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.corr_pin_code}</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='text-gray-500'>Locality</div>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.corr_address}</div>
                                                    </div>
                                                </div> */}
                                            </div>

                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Property Details & Address */}
                        {/* <div className="" style={{ 'width': '69vw' }}>
                            <div className="container mx-auto mb-0 mt-1 p-5 py-1 ">
                                <div className="md:flex no-wrap md:-mx-2 ">
                                    <div className="w-full mx-2 ">
                                        <div className="bg-white p-3 shadow-xl rounded-sm">
                                            <div className="flex items-center pl-0 space-x-2 font-semibold text-gray-900 leading-8 mb-2">
                                                <span className="tracking-wide"><FcFlashOn className="text-xl inline" />  Onwer Details</span>
                                            </div>
                                            <div className='bg-green-50'>
                                                <div className="flex space-x-10 pl-4 ">
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'></div>
                                                        <div className='text-gray-500'>Electricity K. No</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-semibold text-sm'>{props?.applicationData?.data?.elect_acc_no}</div>
                                                        <div className='text-gray-500'>ACC No.</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-semibold text-sm'>{props?.applicationData?.data?.elect_bind_book_no}</div>
                                                        <div className='text-gray-500'>BIND/BOOK No.</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.elect_consumer_no}</div>
                                                        <div className='text-gray-500'>Electricity Consumer Category</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>

                                                    </div>
                                                </div>


                                                <div className="flex space-x-10  pl-4 mt-4">
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.building_plan_approval_no}</div>
                                                        <div className='text-gray-500'>Building Plan Approval No.</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-semibold text-sm'>{props?.applicationData?.data?.building_plan_approval_date}</div>
                                                        <div className='text-gray-500'>Building Plan Approval Date</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-semibold text-sm'>{props?.applicationData?.data?.waterConsumerNo}</div>
                                                        <div className='text-gray-500'>Water Consumer No.</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.water_conn_date}</div>
                                                        <div className='text-gray-500'>Water Connection Date</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* owner Details */}
                        <div className="" style={{ 'width': '69vw' }}>
                            <div className="container mx-auto mb-0 mt-1 p-5 py-1 ">
                                <div className="md:flex no-wrap md:-mx-2 ">
                                    <div className="w-full mx-2 ">
                                        <div className="bg-white p-3 shadow-xl rounded-sm">
                                            <div className="flex items-center pl-0 space-x-2 font-semibold text-gray-900 leading-8 mb-2">
                                                <span className="tracking-wide"><FcBusinessman className='inline text-xl' /> Owner Details</span>
                                            </div>


                                            <table className='min-w-full leading-normal mt-2'>
                                                <thead className='font-bold text-left text-sm bg-green-50 text-gray-600'>
                                                    <tr>
                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">#</th>
                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Owner Name</th>

                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Guardian Name</th>

                                                        {/* <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Gender</th> */}

                                                        {/* <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Relation</th> */}
                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Mobile No.</th>
                                                        {/* <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Aadhar</th> */}
                                                        {/* <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">PAN </th> */}
                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">email </th>

                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Address</th>
                                                        {/* <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Is-Armed-Force </th>
                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Is-Specially-Abled? </th> */}

                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm">

                                                    {
                                                        (ownerDtl?.length > 0) &&
                                                        ownerDtl?.map((owner_dtl, index) => (
                                                            <>
                                                                <tr className="bg-white shadow-lg border-b border-gray-200">
                                                                    <td className="px-2 py-2 text-sm text-left">{index + 1}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner_dtl?.owner_name}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner_dtl?.guardian_name}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner_dtl?.mobile}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner_dtl?.emailid}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner_dtl?.address}</td>
                                                                    {/* <td className="px-2 py-2 text-sm text-left">{owner_dtl?.firm_type}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner_dtl?.firm_type}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner_dtl?.firm_type}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner_dtl?.firm_type}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner_dtl?.firm_type}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner_dtl?.firm_type}</td> */}

                                                                </tr>
                                                            </>
                                                        ))
                                                    }



                                                </tbody>
                                            </table>

                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Floor Details */}
                        <div className="" style={{ 'width': '69vw' }}>
                            <div className="container mx-auto mb-0 mt-1 p-5 py-1 ">
                                <div className="md:flex no-wrap md:-mx-2 ">
                                    <div className="w-full mx-2 ">
                                        <div className="bg-white p-3 shadow-xl rounded-sm">
                                            <div className="flex items-center pl-0 space-x-2 font-semibold text-gray-900 leading-8 mb-2">
                                                <span className="tracking-wide"><img src="https://cdn-icons-png.flaticon.com/512/7014/7014960.png" alt="building image" className='inline w-4' /> Payment Details</span>
                                            </div>

                                            <>
                                                <table className='min-w-full leading-normal mt-2'>
                                                    <thead className='font-bold text-left text-sm bg-green-50 text-gray-600'>
                                                        <tr>
                                                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase ">#</th>
                                                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase ">Processing Fee</th>
                                                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase ">Transaction Date</th>
                                                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase ">Payment Through</th>
                                                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase ">Payment For</th>
                                                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase ">View</th>


                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-sm">
                                                        {transactionDtl?.length >0 &&
                                                            transactionDtl?.map((transactionDtl, index) => (
                                                                <>
                                                                    <tr className="bg-white shadow-lg border-b border-gray-200">
                                                                        <td className="px-2 py-2 text-sm text-left">{index + 1}</td>
                                                                        <td className="px-2 py-2 text-sm text-left">{transactionDtl?.paid_amount}</td>
                                                                        <td className="px-2 py-2 text-sm text-left">{transactionDtl?.transaction_date}</td>
                                                                        <td className="px-2 py-2 text-sm text-left">{transactionDtl?.payment_mode}</td>
                                                                        <td className="px-2 py-2 text-sm text-left">{transactionDtl?.transaction_type}</td>

                                                                        <td className="px-2 py-2 text-sm text-left"> <button className='bg-purple-600 text-white hover:bg-purple-800 px-3 py-1.5 rounded-lg text-xs font-mono'>VIEW</button> </td>


                                                                    </tr>
                                                                </>
                                                            ))
                                                        }


                                                    </tbody>
                                                </table>
                                            </>


                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* document deatils */}
                        <div className="px-6 mt-4">
                            <div className='bg-white px-3 pt-4'>
                                <div className="flex items-center pl-0 space-x-2 font-semibold text-gray-900 leading-8 mb-2">
                                    <span className="tracking-wide"><img src={files} alt="building image" className='inline w-4' /> Document Details</span>
                                </div>
                                <CitizenDocumentView documents={props?.applicationData?.documents} />
                            </div>
                        </div>






                    </div>
                </div>

            </Modal>
        </>
    )
}

export default TradeDetailsCard
/**
 * Exported to :
 * 1. PropertySafDetailsTabs Component
 * 
 */