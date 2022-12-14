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
import PropertySafFullDetailsCard from './PropertySafFullDetailsCard';
import { FcHome } from 'react-icons/fc'
import folder from 'Components/Media/folders.png'
import { FcBusinessman } from 'react-icons/fc'
import home from 'Components/Media/home.png'
import { FcFlashOn } from 'react-icons/fc'
import building from 'Components/Media/building.png'
import files from 'Components/Media/files.png'
import CitizenDocumentView from '../CitizenRegistrationWorkflow/CitizenDocumentView';





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

function PropertySafDetailsCard(props) {

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

    console.log('.............data in full details card.........', props?.applicationData)

    console.log('.............data in full details card floor detail.........', props?.applicationData?.data?.floors)
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
                            <div className="bg-white p-3 border-t-4 border-green-400">
                                <div className="image overflow-hidden">
                                    <img className="h-auto w-full mx-auto"
                                        // src="https://avatars.githubusercontent.com/u/62421178?v=4"
                                        src={propImage}
                                        alt="" />
                                </div>
                                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Super Structure</h1>


                                <ul
                                    className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-4 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li className="flex items-center py-3">
                                        <span>Status</span>
                                        <span className="ml-auto"><span
                                            className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
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
                                    <span className="tracking-wide">About Property</span>
                                </div>
                                <div className="text-gray-700">
                                    <div className="grid md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Ward No.</div>
                                            <div className="px-4 py-2">{props?.applicationData?.data?.ward_no}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Application No.</div>
                                            <div className="px-4 py-2">{props?.applicationData?.data?.saf_no}</div>
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
                                            <div className="px-4 py-2 font-semibold">Assessment Type</div>
                                            <div className='px-0 py-2'>
                                                <div className={' rounded-full shadow-lg px-1 py-2 text-center text-sm  ' + (props?.applicationData?.data?.assessment_type == 'New Assessment' ? 'bg-green-200 text-black border-2 border-white font-sans font-bold ' : '') + (props?.applicationData?.data?.assessment_type == 'Reassessment' ? 'bg-indigo-200 text-black border-2 border-white font-sans font-bold' : '') + (props?.applicationData?.data?.assessment_type == 'Mutation' ? 'bg-red-200 text-black border-2 border-white font-sans font-bold' : '')}>{props?.applicationData?.data?.assessment_type}</div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Property Type</div>
                                            <div className="px-4 py-2">{props?.applicationData?.data?.property_type}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Ownership Type</div>
                                            <div className="px-4 py-2">{props?.applicationData?.data?.ownership_type}</div>
                                        </div>

                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Ulb</div>
                                            <div className="px-4 py-2">{props?.applicationData?.data?.ulb_id}</div>
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

                        {/* basic details */}
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
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.old_ward_no

                                                        }</div>
                                                        <div className='text-gray-500'>Ward No.</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.new_ward_mstr_id
                                                        }</div>
                                                        <div className='text-gray-500'>New Ward No</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-semibold text-sm'>{props?.applicationData?.data?.ownership_type}</div>
                                                        <div className='text-gray-500'>Ownership Type</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>N{props?.applicationData?.data?.property_type}A</div>
                                                        <div className='text-gray-500'>Property Type</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.zone_mstr_id
                                                            == 1 ? "Zone 1" : "Zone 2"}</div>
                                                        <div className='text-gray-500'>Zone</div>
                                                    </div>
                                                </div>

                                                <div className="flex space-x-10  pl-4 mt-4">
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.is_mobile_tower
                                                        }</div>
                                                        <div className='text-gray-500'>Property has Mobile Tower(s) ?</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.is_hoarding_board
                                                        }</div>
                                                        <div className='text-gray-500'>Property has Hoarding Board(s) ?</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.is_petrol_pump
                                                        }</div>
                                                        <div className='text-gray-500'>Is property a Petrol Pump ?</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.is_water_harvesting}</div>
                                                        <div className='text-gray-500'>Rainwater harvesting provision ?</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>

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
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.khata_no}</div>
                                                        <div className='text-gray-500'>Khata No.</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-semibold text-sm'>{props?.applicationData?.data?.plot_no}</div>
                                                        <div className='text-gray-500'>Plot No</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-semibold text-sm'>{props?.applicationData?.data?.village_mauja_name}</div>
                                                        <div className='text-gray-500'>Village/Mauja Name</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.area_of_plot}</div>
                                                        <div className='text-gray-500'>Area of Plot</div>

                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='text-gray-500'>Road Width</div><div className='font-bold text-sm'>{props?.applicationData?.data?.road_width}</div>

                                                    </div>
                                                </div>

                                                <div className="flex space-x-10  pl-4 mt-4">
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.prop_city}</div>
                                                        <div className='text-gray-500'>City</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-semibold text-sm'>{props?.applicationData?.data?.prop_dist}</div>
                                                        <div className='text-gray-500'>District</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-semibold text-sm'>{props?.applicationData?.data?.prop_state}</div>
                                                        <div className='text-gray-500'>State</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.prop_pin_code}</div>
                                                        <div className='text-gray-500'>Pin</div>
                                                    </div>

                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'></div>
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.locality}</div>
                                                        <div className='text-gray-500'>Locality</div>
                                                    </div>
                                                </div>

                                                <div></div>
                                                {/* coressponding address */}
                                                <div className="col-span-4 grid grid-cols-5 justify-center items-center mt-4 mb-4">
                                                    <div className="col-span-2 flex justify-center items-center w-full h-[1px] bg-gray-400"></div>
                                                    <div className='flex justify-center items-center'><label className="form-check-label text-gray-800"> <small className="block mt-1 text-xs text-gray-400 inline md:px-4 font-mono text-center">Corresponding Address</small></label></div>
                                                    <div className="col-span-2 flex justify-center items-center w-full h-[1px] bg-gray-400"></div>
                                                </div>

                                                <div className="flex space-x-10  pl-4 mt-4">
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
                                                </div>
                                            </div>

                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Electricity & Water Details */}
                        <div className="" style={{ 'width': '69vw' }}>
                            <div className="container mx-auto mb-0 mt-1 p-5 py-1 ">
                                <div className="md:flex no-wrap md:-mx-2 ">
                                    <div className="w-full mx-2 ">
                                        <div className="bg-white p-3 shadow-xl rounded-sm">
                                            <div className="flex items-center pl-0 space-x-2 font-semibold text-gray-900 leading-8 mb-2">
                                                <span className="tracking-wide"><FcFlashOn className="text-xl inline" />  Electricity & Water Details</span>
                                            </div>
                                            <div className='bg-green-50'>
                                                <div className="flex space-x-10 pl-4 ">
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-bold text-sm'></div>
                                                        <div className='text-gray-500'>Electricity K. No</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-semibold text-sm'>{props?.applicationData?.data?.elect_acc_no
                                                        }</div>
                                                        <div className='text-gray-500'>ACC No.</div>
                                                    </div>
                                                    <div className='flex-1 text-xs'>
                                                        <div className='font-semibold text-sm'>{props?.applicationData?.data?.elect_bind_book_no
                                                        }</div>
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
                                                        <div className='font-bold text-sm'>{props?.applicationData?.data?.building_plan_approval_no
                                                        }</div>
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
                        </div>

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
                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Gender</th>
                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">DOB</th>
                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Guardian Name</th>
                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Relation</th>
                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Mobile No.</th>
                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Aadhar</th>
                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">PAN </th>
                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">email </th>
                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Is-Armed-Force </th>
                                                        <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Is-Specially-Abled? </th>

                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm">

                                                    {(props?.applicationData?.data?.owners?.length > 0) &&
                                                        props?.applicationData?.data?.owners.map((owner, index) => (
                                                            <>
                                                                <tr className="bg-white shadow-lg border-b border-gray-200">
                                                                    <td className="px-2 py-2 text-sm text-left">{index + 1}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner?.owner_name}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner?.gender}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner?.dob}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner?.guardian_name}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner?.relation_type}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner?.mobile_no}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner?.aadhar_no}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner?.pan_no}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner?.email}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner?.is_armed_force}</td>
                                                                    <td className="px-2 py-2 text-sm text-left">{owner?.is_specially_abled}</td>

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
                                                <span className="tracking-wide"><img src={building} alt="building image" className='inline w-4' /> Floor Details</span>
                                            </div>

                                            <>
                                                <table className='min-w-full leading-normal mt-2'>
                                                    <thead className='font-bold text-left text-sm bg-green-50 text-gray-600'>
                                                        <tr>
                                                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">#</th>
                                                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Floor </th>
                                                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Usage Type</th>
                                                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Occupancy Type</th>
                                                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Construction Type</th>
                                                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Built Up Area</th>
                                                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">From Date</th>
                                                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Upto Date</th>


                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-sm">
                                                        {props?.applicationData?.data?.floors?.length &&
                                                            props?.applicationData?.data?.floors.map((floor, index) => (
                                                                <>
                                                                    <tr className="bg-white shadow-lg border-b border-gray-200">
                                                                        <td className="px-2 py-2 text-sm text-left">{index + 1}</td>
                                                                        <td className="px-2 py-2 text-sm text-left">{floor?.floor_mstr_id}</td>
                                                                        <td className="px-2 py-2 text-sm text-left">{floor?.usage_type_mstr_id}</td>
                                                                        <td className="px-2 py-2 text-sm text-left">{floor?.occupancy_type_mstr_id}</td>
                                                                        <td className="px-2 py-2 text-sm text-left">{floor?.const_type_mstr_id}</td>

                                                                        <td className="px-2 py-2 text-sm text-left">{floor?.builtup_area}</td>
                                                                        <td className="px-2 py-2 text-sm text-left">{floor?.date_from}</td>
                                                                        <td className="px-2 py-2 text-sm text-left">{floor?.date_upto}</td>


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
                                <CitizenDocumentView />
                            </div>
                        </div>






                    </div>
                </div>

            </Modal>
        </>
    )
}

export default PropertySafDetailsCard
/**
 * Exported to :
 * 1. PropertySafDetailsTabs Component
 * 
 */