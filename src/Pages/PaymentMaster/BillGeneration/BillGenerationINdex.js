import React from 'react'

function BillGenerationINdex() {
    return (
        <>
            <div className='mx-1 shadow-lg'>
                <div className='grid grid-cols-12 w-full '>
                    <div className='col-span-6 p-2'>
                        <p className='text-center py-2 text-lg font-semibold'>Previous Demand</p>
                        <table className='w-full text-center border-collapse border border-slate-400 bg-red-100 shadow-lg'>
                            <thead className='bg-sky-200 font-semibold'>
                                <tr>
                                    <td className='border border-slate-300 px-1'>Sl.</td>
                                    <td className='border border-slate-300 px-1'>Financial Year</td>
                                    <td className='border border-slate-300 px-1'>Quarter</td>
                                    <td className='border border-slate-300 px-1'>Demand Amount</td>
                                    <td className='border border-slate-300 px-1'>RWH Penalty</td>
                                </tr>
                            </thead>
                            <tbody className='leading-8'>
                                <tr>
                                    <td className='border border-slate-300'>1.</td>
                                    <td className='border border-slate-300'>2021 - 22</td>
                                    <td className='border border-slate-300'>Qtr : 4</td>
                                    <td className='border border-slate-300'>500</td>
                                    <td className='border border-slate-300'>200</td>
                                </tr>
                                <tr>
                                    <td className='border border-slate-300'>2.</td>
                                    <td className='border border-slate-300'>2021 - 22</td>
                                    <td className='border border-slate-300'>Qtr : 1</td>
                                    <td className='border border-slate-300'>870</td>
                                    <td className='border border-slate-300'>150</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-span-6 p-2'>
                        <p className='text-center py-2 text-lg font-semibold'>New Demand</p>
                        <table className='w-full text-center border-collapse border border-slate-400 bg-green-100 shadow-lg'>
                            <thead className='bg-sky-200 font-semibold'>
                                <tr>
                                    <td className='border border-slate-300 px-1'>Sl.</td>
                                    <td className='border border-slate-300 px-1'>Financial Year</td>
                                    <td className='border border-slate-300 px-1'>Quarter</td>
                                    <td className='border border-slate-300 px-1'>Demand Amount</td>
                                    <td className='border border-slate-300 px-1'>RWH Penalty</td>
                                </tr>
                            </thead>
                            <tbody className='leading-8'>
                                <tr>
                                    <td className='border border-slate-300'>1.</td>
                                    <td className='border border-slate-300'>2021 - 22</td>
                                    <td className='border border-slate-300'>Qtr : 4</td>
                                    <td className='border border-slate-300'>500</td>
                                    <td className='border border-slate-300'>200</td>
                                </tr>
                                <tr>
                                    <td className='border border-slate-300'>2.</td>
                                    <td className='border border-slate-300'>2021 - 22</td>
                                    <td className='border border-slate-300'>Qtr : 1</td>
                                    <td className='border border-slate-300'>870</td>
                                    <td className='border border-slate-300'>150</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>

                <div className='my-5 '>
                    {/* <p className='font-semibold px-5 py-1'>Comment <span className='text-red-400'>*</span></p> */}
                    <div className='flex justify-center'>
                        <textarea placeholder='Enter Your Comment..' className='px-2 py-1 w-1/3 mx-5 border border-gray-500 rounded' name="comment" rows="2"></textarea>
                    </div>
                    <div className='flex justify-center'>

                        <button className='bg-green-500 text-white hover:bg-green-400 hover:text-black font-normal px-3 py-1 my-3 rounded-sm shadow-lg'>Adjust Demand</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default BillGenerationINdex