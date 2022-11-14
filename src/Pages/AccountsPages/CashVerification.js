import React from 'react';
import cash from '../Trade/TradeAssests/rupee.png'

function CashVerification() {

    const checkAll = () => {

        // All checkbox array collection
        let classArray = document.getElementsByClassName('trnx_id');
        let selectAll = document.getElementById('selectAll');
        if (selectAll.checked) {
            for (var i = 0; i < classArray.length; i++) {
                classArray[i].checked = true;
            }
        }
        if (!selectAll.checked){
            for (var i = 0; i < classArray.length; i++) {
                classArray[i].checked = false;
            }
        }
    }
    return (
        <div class="container bg-gray-50 ">
            <h1 className='text-blue-400 font-bold mx-8 text-xl my-4'>CASH VERIFICATION, TC DASHBOARD.</h1>

            {/* tc info */}
            <div className='rounded-lg mx-4 '>
                <div className='grid grid-cols-5' >
                    <div className=" col-span-2 flex rounded-md">
                        <div className=" flex-1 ">
                            <img src="https://b5d544927a00eede1649-be3726e3ad45e4cab18c83e623e49788.ssl.cf3.rackcdn.com/assets/img/boss-baby-2.png" alt="employee Pic" className=' h-36 mx-auto ' />
                        </div>
                        <div className=" flex-1 justify-between pr-2">
                            <h1 className='text-xl font-bold'>Good Job, Agent !</h1>
                            <p className='text-sm font-bold'>You have finished all your work for the day !</p>
                            <tr className='text-sm'>
                                <td className='text-fuchsia-700'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                    </svg>
                                </td>
                                <td>&nbsp; Collection target achieved.</td>
                            </tr>
                            <tr className='text-sm'>
                                <td className='text-fuchsia-700'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                    </svg>
                                </td>
                                <td>&nbsp; Cash submission done.</td>
                            </tr>
                            <tr className='text-sm'>
                                <td className='text-fuchsia-700'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                    </svg>
                                </td>
                                <td>&nbsp; workday proposal submitted.</td>
                            </tr>
                        </div>
                    </div>
                    {/* bg-[#46d3c6]  */}
                    <div className=" col-span-3 rounded-md text-white">
                        <div className=" grid grid-cols-2 gap-2 w-full">
                            <div className=" rounded-md h-24  bg-[#467ed3]" title='cash' >
                                <p className='flex justify-between'>
                                    <img src="https://img.icons8.com/emoji/48/000000/money-with-wings-emoji.png" title='cash' />
                                    <span className='font-bold text-amber-200 px-1'>Cash</span>
                                </p>
                                <h2 className='text-2xl font-bold  float-right px-2'>₹3860</h2>
                            </div>
                            <div className=" rounded-md h-24  bg-[#46d37e]" title='Cheque'  >
                                <p className='flex justify-between'>
                                    <img src="https://img.icons8.com/fluency/48/000000/check-book.png" title='Cheque' />
                                    <span className='font-bold text-amber-200 px-1'>Cheque</span>
                                </p>
                                <h2 className='text-2xl font-bold  float-right px-2'>₹4850</h2>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-2 my-3 text-white'>

                            <div className="border rounded-md h-24 bg-[#8a46d3]" title='Demand Draft' >
                                <p className='flex justify-between'>
                                    <img src="https://img.icons8.com/fluency/48/000000/demand.png" title='Demand Draft' />
                                    <span className='font-bold text-amber-200 px-1'>Demand Draft</span>
                                </p>
                                <h2 className='text-2xl font-bold float-right px-2'>₹2860</h2>
                            </div>
                            <div className="border rounded-md h-24 bg-[#ce46d3]" title='Card' >
                                <p className='flex justify-between'>
                                    <img src="https://img.icons8.com/fluency/48/000000/bank-card-front-side.png" title='Card' />
                                    <span className='font-bold text-amber-200 px-1'>Card</span>
                                </p>
                                <h2 className='text-2xl font-bold  float-right px-2'>₹5652</h2>
                            </div>
                            <div className="border rounded-md h-24 bg-[#46d3c6]" title='RTGS'  >
                                <p className='flex justify-between'>
                                    <img src="https://img.icons8.com/fluency/48/000000/cash.png" title='RTGS' />
                                    <span className='font-bold text-amber-200 px-1'>RTGS</span>
                                </p>
                                <h2 className='text-2xl font-bold float-right px-2'>₹2860</h2>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* verify all button */}
            <div className=' mx-auto flex py-1 justify-between'>
                <button className='bg-gray-300 text-sm px-2 mx-4  py-1 rounded-lg' onClick={checkAll}> <input type="checkbox" id='selectAll' /> CHECK ALL</button>
                <button className='bg-teal-600 text-white px-4 mx-4  py-1 rounded-lg'>VERIFY NOW</button>
            </div>

            {/* table data */}
            <div className=' overflow-y-scroll h-96 shadow-sm shadow-gray-700'>

                {/* table data trade */}
                <h1 className='text-gray-600 text-sm font-bold mx-8'>Trade Payment - Total No of Transaction : 0, Total Amount : 0</h1>
                <div className='bg-teal-50 mx-4 rounded-lg mb-4 border overflow-auto'>
                    <div className='grid grid-cols-1 my-4 w-full'>
                        <table className='table-auto text-xs'>
                            <thead className='bg-teal-100 h-12 text-gray-700 border-b-2'>
                                <tr>
                                    <th>Serial. </th>
                                    <th>Check</th>
                                    <th>Transaction No</th>
                                    <th>Payment Mode</th>
                                    <th>Ward No</th>
                                    <th>Holding No.</th>
                                    <th>Owner Name</th>
                                    <th>Paid Upto</th>
                                    <th>Paid Amount</th>
                                    <th>Verify status</th>
                                    <th>Verified By</th>
                                    <th>Verified On</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1 </td>
                                    <td>
                                        <input type="checkbox" name="trxnId" id='trxnId' className='trnx_id' />
                                    </td>
                                    <td>TRNML4567894587</td>
                                    <td>CASH</td>
                                    <td>1A</td>
                                    <td>2022012454X1.</td>
                                    <td>MR. Owner Name</td>
                                    <td>2023</td>
                                    <td>₹1500</td>
                                    <td className='text-green-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                        </svg>
                                    </td>
                                    <td>Accounts</td>
                                    <td>Mon, 5 Sep 2022</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <input type="checkbox" name="trxnId" className='trnx_id' />  </td>
                                    <td>TRNML4567894587</td>
                                    <td>CASH</td>
                                    <td>1A</td>
                                    <td>2022012454X1.</td>
                                    <td>MR. Owner Name</td>
                                    <td>2023</td>
                                    <td>₹1500</td>
                                    <td className='text-green-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                        </svg>
                                    </td>
                                    <td>Accounts</td>
                                    <td>Mon, 5 Sep 2022</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* table data Property */}
                <h1 className='text-gray-600 text-sm font-bold mx-8'>Property Payment - Total No of Transaction : 0, Total Amount : 0</h1>
                <div className='bg-amber-50 mx-4 rounded-lg mb-4 border overflow-auto'>
                    <div className='grid grid-cols-1 w-full my-4 '>
                        <table className='table-auto text-xs'>
                            <thead className='bg-amber-100 h-12 text-gray-700 border-b-2'>
                                <tr>
                                    <th> Serial. &nbsp;</th>
                                    <th> Check. &nbsp;</th>
                                    <th> Transaction No</th>
                                    <th>Payment Mode</th>
                                    <th>Ward No</th>
                                    <th>Holding No.</th>
                                    <th>Owner Name</th>
                                    <th>Paid Upto</th>
                                    <th>Paid Amount</th>
                                    <th>Verify status</th>
                                    <th>Verified By</th>
                                    <th>Verified On</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1 </td>
                                    <td>
                                        <input type="checkbox" name="trxnId" className='trnx_id' />
                                    </td>
                                    <td>TRNML4567894587</td>
                                    <td>CASH</td>
                                    <td>1A</td>
                                    <td>2022012454X1.</td>
                                    <td>MR. Owner Name</td>
                                    <td>2023</td>
                                    <td>₹1500</td>
                                    <td>
                                        <div className='text-red-500'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td>Accounts</td>
                                    <td>Mon, 5 Sep 2022</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <input type="checkbox" name="trxnId" className='trnx_id' />  </td>
                                    <td>TRNML4567894587</td>
                                    <td>CASH</td>
                                    <td>1A</td>
                                    <td>2022012454X1.</td>
                                    <td>MR. Owner Name</td>
                                    <td>2023</td>
                                    <td>₹1500</td>
                                    <td>
                                        <div className='text-red-500'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td>Accounts</td>
                                    <td>Mon, 5 Sep 2022</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                {/* table data Water */}
                <h1 className='text-gray-600 text-sm font-bold mx-8'>Water Payment - Total No of Transaction : 0, Total Amount : 0</h1>
                <div className='bg-sky-100 mx-4 rounded-lg border overflow-auto'>
                    <div className='grid grid-cols-1  my-4 w-full'>
                        <table className='table-auto  text-xs'>
                            <thead className='bg-sky-200 h-12 text-gray-700 border-b-2'>
                                <tr>
                                    <th> Serial. &nbsp;</th>
                                    <th> Check. &nbsp;</th>
                                    <th> Transaction No</th>
                                    <th>Payment Mode</th>
                                    <th>Ward No</th>
                                    <th>Holding No.</th>
                                    <th>Owner Name</th>
                                    <th>Paid Upto</th>
                                    <th>Paid Amount</th>
                                    <th>Verify status</th>
                                    <th>Verified By</th>
                                    <th>Verified On</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1 </td>
                                    <td>
                                        <input type="checkbox" name="trxnId" className='trnx_id' />
                                    </td>
                                    <td>TRNML4567894587</td>
                                    <td>CASH</td>
                                    <td>1A</td>
                                    <td>2022012454X1.</td>
                                    <td>MR. Owner Name</td>
                                    <td>2023</td>
                                    <td>₹1500</td>
                                    <td>
                                        <div className='text-red-500'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td>Accounts</td>
                                    <td>Mon, 5 Sep 2022</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <input type="checkbox" name="trxnId" className='trnx_id' />  </td>
                                    <td>TRNML4567894587</td>
                                    <td>CASH</td>
                                    <td>1A</td>
                                    <td>2022012454X1.</td>
                                    <td>MR. Owner Name</td>
                                    <td>2023</td>
                                    <td>₹1500</td>
                                    <td>
                                        <div className='text-red-500'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td>Accounts</td>
                                    <td>Mon, 5 Sep 2022</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CashVerification