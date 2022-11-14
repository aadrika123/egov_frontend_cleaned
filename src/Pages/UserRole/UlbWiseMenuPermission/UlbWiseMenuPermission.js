import React from 'react'

function UlbWiseMenuPermission() {
    return (
        <>
            <div className='border mt-0 mx-1 pb-10 bg-white mb-20'>
                <div className={`p-2 bg-green-400 shadow-lg`}>
                    <div className='grid grid-cols-2 '>
                        <div className='col-span-1 text-xl font-semibold'>ULB Wise Menu Permission Mapping</div>
                        {/* <div className='col-span-1 justify-self-end'>
                            <button onClick={props.addNewPermission}
                                className='bg-blue-600 hover:bg-blue-500 font-semibold text-white px-5 pl-2 py-1 shadow-lg rounded'>
                                <span className='inline-block hover:animate-bounce'>
                                    <MdPersonAdd fill='white' size={12} className="mt-1" />
                                </span> Add New
                            </button>
                        </div> */}
                    </div>
                </div>

                <div className='grid grid-cols-12 mt-5'>
                    <div className='col-span-4 mx-5'>
                        <div>
                            <select name="ulb" className='border my-2 border-gray-600 outline-gray-800 rounded shadow-md w-52 h-8'>
                                <option value="">Select ULB</option>
                                <option value="">Ranchi</option>
                            </select>
                        </div>
                        <div>
                            <select name="ulb" className='border my-2 border-gray-600 outline-gray-800 rounded shadow-md w-52 h-8'>
                                <option value="">Select Menu Group</option>
                                <option value="">Ranchi</option>
                            </select>
                        </div>
                        <div>
                            <select name="ulb" className='border my-2 border-gray-600 outline-gray-800 rounded shadow-md w-52 h-8'>
                                <option value="">Select Role</option>
                                <option value="">Ranchi</option>
                            </select>
                        </div>
                        <div className='flex justify-center mt-5'>
                            <button className='border border-gray-600 -ml-14 px-5 py-0.5 rounded shadow-md'>Freeze</button>
                        </div>
                    </div>
                    <div className='col-span-8'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-8'>
                                <p className='underline font-semibold'>Menu Item</p>
                                <p>Property SAF Application Workflow</p>
                                <p>Property Mutation Application Workflow</p>
                            </div>
                            <div className='col-span-2'>
                                <p className='underline font-semibold'>General</p>
                                <div className=''>
                                    <p>
                                        <input type="checkbox" name="vehicle1" />
                                    </p>
                                    <p>
                                        <input type="checkbox" name="vehicle1" />
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <p className='underline font-semibold'>Admin</p>
                                <div className=''>
                                    <p>
                                        <input type="checkbox" name="vehicle1" />
                                    </p>
                                    <p>
                                        <input type="checkbox" name="vehicle1" />
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className='flex justify-end mt-5'>
                            <button className='border border-gray-600 -ml-14 px-10 py-0.5 rounded shadow-md mr-20'>Save</button>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default UlbWiseMenuPermission