//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 14 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PropertyObjectionDocumentView (closed)
//    DESCRIPTION - PropertyObjectionDocumentView Component

import { useState } from 'react'
import PropertyObjectionDocumentRow from './PropertyObjectionDocumentRow'
import Modal from 'react-modal';
import dummy from './dummy.pdf'


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
function PropertyObjectionDocumentView() {
    const [docList, setDocList] = useState(
        [
            { 'docName': 'Property Document', 'docUrl': '/dd', 'docStatus': 'Rejected', 'docRemarks': 'Upload Proper Document' },
            { 'docName': 'Property Document', 'docUrl': '/dd', 'docStatus': 'Rejected', 'docRemarks': 'Upload Proper Document' },
            { 'docName': 'Property Document', 'docUrl': '/dd', 'docStatus': 'Rejected', 'docRemarks': 'Upload Proper Document' },
            { 'docName': 'Property Document', 'docUrl': '/dd', 'docStatus': 'Rejected', 'docRemarks': 'Upload Proper Document' },
        ]
    )

    const [modalIsOpen, setIsOpen] = useState(false);
    const [docUrl, setDocUrl] = useState('')
    let subtitle;

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    const afterOpenModal = () => { }

    const modalAction = (incomingDocUrl) => {
        setDocUrl(incomingDocUrl)
        openModal()
    }
    return (
        <>

            <div className="container mx-auto  max-w-3xl ml-0  px-1 py-1 shadow-lg rounded-lg">
                <div className="py-0">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto">
                        <div className="inline-block min-w-full rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead className='bg-sky-100'>
                                    <tr className='font-semibold'>
                                        <th scope="col" className="px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase">
                                            #
                                        </th>
                                        <th scope="col" className="px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase">
                                            Document Name
                                        </th>
                                        <th scope="col" className="px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase">
                                            View
                                        </th>
                                        <th scope="col" className="px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase">
                                            Status
                                        </th>
                                        <th scope="col" className="px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase">
                                            Remarks
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        docList.map((data, index) => (
                                            <PropertyObjectionDocumentRow openModal={modalAction} docList={data} index={index} />
                                        ))
                                    }



                                </tbody>
                            </table>
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

                <div class=" rounded-lg shadow-xl border-2 border-gray-50 ml-32 px-0" style={{ 'width': '70vw', 'height': '80vh' }}>
                    <iframe className='w-full h-full' src={dummy} frameborder="0"></iframe>
                </div>

            </Modal>

        </>
    )
}

export default PropertyObjectionDocumentView
/**
 * Exported to :
 * 1. PropertyObjectionDetailsTabs Component
 * 
 */