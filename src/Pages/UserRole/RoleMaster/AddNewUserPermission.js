//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 25 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - 
//    DESCRIPTION -
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { TiArrowBack } from 'react-icons/ti';
import { AiTwotoneEdit } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import { SiSpringsecurity } from 'react-icons/si';



function AddNewUserPermission(props) {

    const fakeData = [
        {
            'id': 1,
            'checkBox': 0,
            'roleName': 'Dealing Assitane',
            'givenPermisstion': 0
        },
        {
            'id': 2,
            'checkBox': 0,
            'roleName': 'Dealing Man',
            'givenPermisstion': 1
        },
        {
            'id': 3,
            'checkBox': 0,
            'roleName': 'Tax Collector',
            'givenPermisstion': 0
        },
        {
            'id': 4,
            'checkBox': 0,
            'roleName': 'City Manger',
            'givenPermisstion': 0
        }
    ];


    return (

        <>
            <div className='border-1 mx-1 shadow-2xl '>            
                <div className={`p-2 bg-green-400 shadow-lg`}>
                    <div className='grid grid-cols-2 '>
                        <div className='col-span-1 text-xl font-semibold'>Add New User Permission</div>
                        <div className='col-span-1 justify-self-end'><button onClick={props.handleBackBtn} className='bg-blue-600 hover:bg-blue-500 font-semibold text-white px-5 pl-2 py-1 shadow-lg rounded'><span className='inline-block'><TiArrowBack /></span> Back</button></div>
                    </div>
                </div>
                <div className='m-0 border bg-gray-100'>
                    <div className='flex py-3 justify-center border bg-yellow-100'>
                        <div>
                            <span className='text-xl font-semibold mr-3'>Select a User : </span>
                            <select className='shadow-xl border w-56 h-9 px-3' name="permissin" id="">
                                <option>Select User </option>
                                <option value="1">Dipu Singh</option>
                                <option value="2">Raj KUmar</option>
                                <option value="3">Ani Manger</option>
                            </select>
                        </div>
                    </div>

                    <div className='grid grid-cols-12 mb-2'>
                        {fakeData &&
                            fakeData.map((e) => (
                                <div kay={e.id}></div>,
                                <div className='col-span-4 '>
                                    <div className='flex border shadow-2xl px-2 py-1 mt-2 bg-green-300 mx-2'>
                                        <div className='grid grid-cols-12'>
                                            <div className='col-span-1'>
                                                <input className='mr-3' type="checkbox" name="" id="" />
                                            </div>
                                            <div className='col-span-7 ml-2'>
                                                <p className='font-semibold'>{e.roleName}</p>
                                            </div>
                                            <div className='col-span-4'>
                                                <p className='ml-5 '>
                                                    <select className='shadow-xl border' name="permissin" id="">
                                                        <option value="0">Read</option>
                                                        <option value="1">Write</option>
                                                    </select>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-green-400 hover:bg-green-500 px-3 py-1 my-5 font-medium rounded-sm shadow-xl flex'>
                            <SiSpringsecurity fill='blue' className='mt-1 mr-2' />Grant Permission</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AddNewUserPermission

/*
Exported To -
1. UserPermissionIndex
*/