//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 14 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PropertyConcessionDetailsCard (closed)
//    DESCRIPTION - PropertyConcessionDetailsCard Component
//////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react'
// import WardChip from '../WardChip'
import propImage from './prop.jpg'
import { GrHomeRounded } from 'react-icons/gr'
import Modal from 'react-modal';
import PropertyConcessionFullDetailsCard from './PropertyConcessionFullDetailsCard';



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

function PropertyConcessionDetailsCard(props) {

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
                                            <div className="px-4 py-2">{props.applicationData?.ward_no}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Holding No.</div>
                                            <div className="px-4 py-2">{props.applicationData?.saf_no}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Owner Name</div>
                                            <div className="px-4 py-2">{props.applicationData?.owner_name}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Mobile Number</div>
                                            <div className="px-4 py-2">{props.applicationData?.mobile}</div>
                                        </div>
                                       

                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Assigned Ulb</div>
                                            <div className="px-4 py-2">Ranchi Municipal Corporation</div>
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

                <div class="rounded-lg  shadow-xl pt-4 bg-gray-400 ml-40" style={{ 'width': '70vw', 'height': '70vh' }}>
                    <div className='bg-gray-400'>
                        <PropertyConcessionFullDetailsCard />
                        <PropertyConcessionFullDetailsCard />
                        <PropertyConcessionFullDetailsCard />
                    </div>
                </div>

            </Modal>
        </>
    )
}

export default PropertyConcessionDetailsCard
/**
 * Exported to :
 * 1. PropertyConcessionDetailsTabs Component
 * 
 */