import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImUpload2 } from 'react-icons/im'
import FormSubmitResponse from 'Components/Common/ResponseScreen/FormSubmitResponse'
import { TbWebhook } from 'react-icons/tb'
import { useParams } from 'react-router-dom'
import TcVerificationForm2 from './TcVerificationForm2.js'
import TCFormReview from './TCFormReview.js'
import TcGeoTagging from './TcGeoTagging.js'


function TcVerficationFormIndex() {
    const [formIndex, setFormIndex] = useState(1) //formindex specifies type of form like basicdetails at index 1 ...
    const [animateform1, setAnimateform1] = useState('translate-x-0') //slide animation control state for BasicDetails form
    const [animateform2, setAnimateform2] = useState('pl-20 translate-x-full')//slide animation control state for PropertyAddressDetails form
    const [animateform3, setAnimateform3] = useState('pl-20 translate-x-full')//slide animation control state for ElectricityWaterDetails form
    const [submitStatus, setSubmitStatus] = useState(false) //checking full form filled status to toggle final submit button
    const [allFormData, setAllFormData] = useState({})
    //assessment type
    const [assTypeText, setAssTypeText] = useState()

    const backFun = (formIndex) => {
        let tempFormIndex = formIndex
        if (tempFormIndex == 2) { //backward by current form index 2
            setFormIndex(1) // go to form index 1 since back from index 2
            setAnimateform1('translate-x-0') // always setstate one index less than current index
            setAnimateform2('pl-20 translate-x-full') //always current index setstate
        }
        if (tempFormIndex == 3) {
            setFormIndex(2)
            setAnimateform2('translate-x-0')
            setAnimateform3('pl-20 translate-x-full')
        }
       


    }
    const nextFun = (formIndex) => {
        let tempFormIndex = formIndex
        if (tempFormIndex == 1) { //forward by current form index 1
            setFormIndex(2) //go to form index 2 since forward from index 1
            setAnimateform1(' -translate-x-full right-80')  //always current index setstate
            setAnimateform2('pl-0 translate-x-0') // always setstate one index greater than current index
        }
        if (tempFormIndex == 2) {
            setFormIndex(3)
            setAnimateform2('-translate-x-full right-80')
            setAnimateform3('pl-0 translate-x-0')
        }
       

    }
    //activating notification if no owner or no floor added
    const notify = (toastData) => {
        toast.dismiss();
        toast.error(toastData)
    };

    //
    const submitButtonToggle = () => {
        setSubmitStatus(true)
    }

    const collectAllFormData = (key, formData) => {
        console.log('prev of all Data', allFormData)
        // setAllFormData({...allFormData,formData}) //this is going to replace upcoming data since has same formData key all the time
        setAllFormData({ ...allFormData, [key]: formData })
    }
   
    return (
        <>
            <ToastContainer position="top-right"
                autoClose={2000} />
            <div className="grid grid-cols-2">
                <div>
                    {/* <div className='text-left relative top-0'>
                    <span className='bg-sky-100 border-l border-b border-white text-black col-span-12 sm:col-span-2 sm:col-start-11 pl-4 rounded-l shadow-lg font-semibold pr-4'>prev-holding : A0101010101010101</span>
                </div> */}
                </div>
                <div><div className='text-right relative top-0 animate__animated animate__fadeInDown'>
                    <span className='bg-sky-100 border-l border-b border-white text-black col-span-12 sm:col-span-2 sm:col-start-11 pl-4 rounded-l shadow-lg font-semibold pr-4'><TbWebhook className='inline' /> {assTypeText}</span>
                </div></div>
            </div>
          


            <div className={`${animateform1} transition-all relative`}><TcVerificationForm2 collectFormDataFun={collectAllFormData} submitFun={submitButtonToggle} toastFun={notify} backFun={backFun} nextFun={nextFun} /></div>
            {/* collectDataFun to receive form data on every save&next */}
            {/* submitFun to activate final submit button when all forms are filled */}
            {/* toastFun to activate toast notification via receiving toast message */}
            {/* backFun to go back from any specific form level */}
            {/* nextFun to go next from any specific form level */}
            <div className={`${animateform2} transition-all relative`}><TCFormReview collectFormDataFun={collectAllFormData} submitFun={submitButtonToggle} toastFun={notify} backFun={backFun} nextFun={nextFun} /></div>
            <div className={`${animateform3} transition-all relative`}><TcGeoTagging  collectFormDataFun={collectAllFormData} submitFun={submitButtonToggle} backFun={backFun} nextFun={nextFun} /></div>

        </>
    )
}

export default TcVerficationFormIndex