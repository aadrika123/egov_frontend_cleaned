import MailboxSidebar from 'Components/Common/MailboxSidebar'
import {useState} from 'react'

function CheckCommon() {
    const [tabIndex, settabIndex] = useState(0)
    const tabs = [
        { title: "Workflow", tabIndex: 0 },
        { title: "Generator", tabIndex: 1 },
        { title: ".......................", tabIndex: 2 }
    ]

    const tabSwitch = (index) => {
    }



    return (
        <div className="grid grid-cols-12 rounded-lg mt-4 -ml-10 shadow-xl broder-2 border-sky-200 bg-gray-200">
            <div className='col-span-12 sm:col-span-2 '> <MailboxSidebar tabs={tabs} fun={tabSwitch} /></div>
            {tabIndex == 0 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll'
                style={{ 'height': '90vh' }}>workflow</div>}
            {tabIndex == 1 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll'
                style={{ 'height': '90vh' }}>wkflow....</div>}
            {tabIndex == 2 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll'
                style={{ 'height': '90vh' }}>.........</div>}

        </div>
    )
}

export default CheckCommon