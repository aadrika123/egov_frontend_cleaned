//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 19 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - UserRoleSideBar
//    DESCRIPTION -UserRoleSideBar
//////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react'
import MailboxSidebar from 'Components/Common/MailboxSidebar'
import UserRoleList from './RoleMaster/UserRoleTab'
import UserRoleTab from './RoleMaster/UserRoleTab'
import UserPermissionIndex from './UserManagement/UserPermissionIndex'
import RoleWiseUserIndex from './RoleWiseUser/RoleWiseUserIndex'
import UlbWiseMenuPermission from './UlbWiseMenuPermission/UlbWiseMenuPermission'



function UserRoleSideBar() {
    const [tabIndex, settabIndex] = useState(0)     //state to store current tab index
    const tabs = [
        { title: "Role Master", tabIndex: 0 },
        { title: "User Management", tabIndex: 1 },
        { title: "Role wise User", tabIndex: 2 },
        { title: "ULB wise Menu Permission", tabIndex: 3 },
    
    ]
    const tabSwitch = (index) => {        //tabSwitch function receive tabIndex to switch between tabs called from Sidebar menu
        settabIndex(index)      //updating the tab index to recent value
    }
    return (
        <>

            <div className="grid grid-cols-12 rounded-lg mt-4 -ml-10 shadow-xl broder-2 border-sky-200 bg-gray-200">
                <div className='col-span-12 sm:col-span-2 '>
                    <MailboxSidebar tabs={tabs} fun={tabSwitch} /></div>
                {tabIndex == 0 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}> <UserRoleTab /> </div>}     
                {tabIndex == 1 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}> <UserPermissionIndex  /> </div>}     
                {tabIndex == 2 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}> <RoleWiseUserIndex /> </div>}     
                {tabIndex == 3 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}> <UlbWiseMenuPermission /> </div>}     
                
            </div>
        </>
    )
}


export default UserRoleSideBar

/*
Exported to -
UserRole.js
*/