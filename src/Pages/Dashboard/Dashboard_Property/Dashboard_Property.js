import { useState, useEffect, useContext } from 'react'
import user from 'Components/Media/user.png'
import axios from 'axios'
import money from 'Components/Media/money.png'
import capital from 'Components/Media/capital.png'
import clock from 'Components/Media/clock.png'

import { ColorRing } from 'react-loader-spinner'
import { Chart } from "react-google-charts";
// import ApiHeader from '../Components/ApiList/ApiHeader'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { TbSearch } from 'react-icons/tb'
import moment from 'moment'
import PropertyApiList from 'Components/ApiList/PropertyApiList'
import ApiHeader from 'Components/ApiList/ApiHeader'
import piechart from 'Components/Media/piechart.png'
import dashboard from 'Components/Media/dashboard.svg'
// import secureLocalStorage from "react-secure-storage";





function Dashboard() {

    // const { getDashboardData, getConsumerAddFormData } = ApiList()
    const [dataDate, setDataDate] = useState()
    const [dvsCollection, setdvsCollection] = useState()
    const [wardList, setwardList] = useState()
    const [recordData, setrecordData] = useState({applicationList:[{},{},{},{}]})
    const [loaderStatus, setLoaderStatus] = useState(false)
    const {get_dashboard} = PropertyApiList()



    const getFormattedDate = (date) => {
        const options = { year: 'numeric', month: 'short' };
        let monthYear = date.toLocaleDateString('en-us', options)
        setDataDate(monthYear)

    }

    useEffect(() => {
        fetchDashboardData('2022-04-01', moment(new Date()).format('yy-MM-DD'))
    }, [])


    const fetchDashboardData = (fromDate, toDate) => {
        setLoaderStatus(true)
        let requestBody = {
            fromDate: fromDate,
            toDate: toDate,
        }
        console.log('---2 dashboard data to shwo....', requestBody)
        axios.post(get_dashboard, requestBody, ApiHeader())
            .then(function (response) {
                console.log('--3---dashboardData response', response?.data?.data)
                setrecordData(response?.data?.data)
                setLoaderStatus(false)
            }, ApiHeader())
            .catch(function (error) {
                setLoaderStatus(false)
                console.log('-3 dashboard error--',error)
            })
    }
    

    // const data = [
    //     ["Category", "Total number"],
    //     [`Applied(${parseInt(recordData?.totalAppliedApplication)})`, parseInt(recordData?.totalAppliedApplication)],
    //     [`Approved(${parseInt(recordData?.totalApprovedApplication)})`, parseInt(recordData?.totalApprovedApplication)],
    // ];
    // const data2 = [
    //     ["Category", "Total number"],
    //     [`Applied(${parseInt(recordData?.totalAppliedApplication)})`, parseInt(recordData?.totalAppliedApplication)],
    //     [`Rejected(${parseInt(recordData?.totalRejectedApplication)})`, parseInt(recordData?.totalRejectedApplication)]
    // ]
    const data = [
        ["Category", "Total number"],
        [`Applied(${recordData?.totalAppliedApplication})`, recordData?.totalAppliedApplication],
        [`Approved(${recordData?.totalApprovedApplication})`, recordData?.totalApprovedApplication],
    ];
    const data2 = [
        ["Category", "Total number"],
        [`Applied(${recordData?.totalAppliedApplication})`, recordData?.totalAppliedApplication],
        [`Rejected(${recordData?.totalRejectedApplication})`, recordData?.totalRejectedApplication]
    ]
    // const data = [
    //     ["Category", "Total number"],
    //     [`Applied(2000)`, 2000],
    //     [`Approved(1000)`, 1000],
    // ];
    // const data2 = [
    //     ["Category", "Total number"],
    //     [`Applied(2000)`, 2000],
    //     [`Rejected(1000)`, 1000]
    // ];
    // const data2 = [
    //     ["Demand vs Colleciton", "Total number"],
    //     ["Demand", 3317480],
    //     ["Collection", 618850]
    // ];

    // const data = [
    //     ["Category", "Total number"],
    //     [`Demand()`, 10],
    //     [`Collection()`, 20],
    // ];
    // const data2 = [
    //     ["Category", "Total number"],
    //     [`Residentail()`, 10],
    //     [`Commercial()`, 10]
    // ];

    const options = {
        title: "Applied vs Approved",
        is3D: true,
    };
    const option2 = {
        title: "Applied vs Rejected",
        is3D: true,
    };

    // const columnChartData = [
    //     ["Element", "Demand vs Collection", { role: "style" }],
    //     ["Demand", 8.94, "#b87333"], // RGB value
    //     ["Collection", 10.49, "silver"], // English color name
    //     // ["Gold", 19.3, "gold"],
    //     // ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
    //   ];

    console.log('current...data...', moment(new Date()).format('yy-MM-DD'))

    const validationSchema = yup.object({
        fromDate: yup.string().required('Select from date'),
        toDate: yup.string().required('Select to Date'),
        // wardNo: yup.string().required('Select ward'),
    })
    const formik = useFormik({
        initialValues: {
            fromDate: '2022-04-01',
            toDate: moment(new Date()).format('yy-MM-DD'),
            // wardNo: ''
        },

        onSubmit: (values) => {
            console.log('dashboard params..', values)
            fetchDashboardData(formik.values.fromDate, formik.values.toDate)
        }
        , validationSchema
    })




    return (
        <>
            {/* ======================updation====================== */}
            <form onSubmit={formik.handleSubmit}>
                <div className='grid grid-cols-12 space-x-2'>
                   

                    <div className="form-group mb-4 md:mb-6 col-span-4 md:col-span-4 md:pr-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">From Date</label>
                        <input {...formik.getFieldProps('fromDate')} type="date" className="form-control block w-full px-1 py-1.5 text-sm md:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer" />

                        <span className="text-red-600 absolute text-xs">{formik.touched.fromDate && formik.errors.fromDate ? formik.errors.fromDate : null}</span>
                    </div>
                    <div className="form-group mb-4 md:mb-6 col-span-4 md:col-span-4 md:px-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">To Date</label>
                        <input {...formik.getFieldProps('toDate')} type="date" className="form-control block w-full px-1 py-1.5 text-sm md:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer" />

                        <span className="text-red-600 absolute text-xs">{formik.touched.toDate && formik.errors.toDate ? formik.errors.toDate : null}</span>
                    </div>
                    
                    <div className="form-group mb-4 md:mb-6 col-span-4 md:col-span-4 md:px-4 flex jutify-center items-center">

                        <div>
                            <button type="submit" className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"><TbSearch className="inline text-sm font-bold" />Search</button>
                        </div>
                    </div>
                </div>
            </form>

            {/* =================================updation================================= */}
            <div className='mt-1 flex'>

                <div className='text-xl font-semibold font-serif flex-1'> <div className="flex-1">
            

                </div> {
                        loaderStatus && <div className='inline'>
                            <ColorRing
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />
                        </div>
                    }</div>
              
            </div>
          
            <div className='col-span-12'>
                        <h1 className='text-gray-700 text-xl font-semibold'><img src={piechart} className="inline w-6 mr-1" /> Property Dashboard</h1>
                    </div>
            <div className='bg-white  w-full shadow-lg py-2 pt-4 pb-10 mt-2 border border-gray-200 px-4'>

                <div className="grid grid-cols-12 gap-2 mt-4 gap-x-6 w-full">

                    <div className={`rounded overflow-hidden shadow-lg relative bg-green-200 cursor-pointer transition-all duration-500 col-span-6 md:col-span-3`} >
                        <img className='w-10 md:w-12 absolute bottom-0 right-1 md:right-5' src={user} />
                        <div className="px-6 py-2 md:py-7">
                            <div className="font-bold text-lg md:text-xl">{recordData?.totalAppliedApplication}</div>
                            <p className="text-gray-700 text-sm w-full">
                                Total Applied Applications
                            </p>
                        </div>
                    </div>
                    <div className={`rounded overflow-hidden shadow-lg relative bg-green-200 cursor-pointer transition-all duration-500 col-span-6 md:col-span-3`} >
                        <img className='w-10 md:w-12 absolute bottom-0 right-1 md:right-5' src={money} />
                        <div className="px-6 py-2 md:py-7">
                            <div className="font-bold text-lg md:text-xl">{recordData?.totalApprovedApplication}</div>
                            <p className="text-gray-700 text-sm w-full">
                                Total Approved Applications
                            </p>
                        </div>
                    </div>
                    <div className={`rounded overflow-hidden shadow-lg relative bg-green-200 cursor-pointer transition-all duration-500 col-span-6 md:col-span-3`} >
                        <img className='w-10 md:w-12 absolute bottom-0 right-1 md:right-5' src={capital} />
                        <div className="px-6 py-2 md:py-7">
                            <div className="font-bold text-lg md:text-xl">{recordData?.totalRejectedApplication}</div>
                            <p className="text-gray-700 text-sm w-full">
                                Total Rejected Applications
                            </p>
                        </div>
                    </div>
                    <div className={`rounded overflow-hidden shadow-lg relative bg-green-200 cursor-pointer transition-all duration-500 col-span-6 md:col-span-3`} >
                        <img className='w-10 md:w-12 absolute bottom-0 right-1 md:right-5' src={capital} />
                        <div className="px-6 py-2 md:py-7">
                            <div className="font-bold text-lg md:text-xl">{recordData?.totalPendingApplication}</div>
                            <p className="text-gray-700 text-sm w-full">
                                Total Pending Applications
                            </p>
                        </div>
                    </div>
                  

                    {/* spacer */}
                    <div className="col-span-12 mt-6"></div>

                    {/* graphs */}
                    <div className={`rounded overflow-hidden shadow-lg relative bg-white hover:shadow-none hover:z-50 transition-all duration-500 col-span-12 md:col-span-6  py-6 px-6`} >
                    <table className='min-w-full leading-normal mt-2'>
                      <thead className='font-bold text-left text-sm bg-sky-50 text-gray-600'>
                        <tr>
                          <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">#</th>
                          <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Type</th>
                          <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Applied</th>
                          <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Approved</th>
                          <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Rejected</th>
                          <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Pending</th>
                        


                        </tr>
                      </thead>
                      <tbody className="text-sm">
                    {
                      recordData?.applicationList.map((data,index)=>(
                        <tr className="bg-white shadow-lg border-b border-gray-200">
                        <td className="px-2 py-2 text-sm text-left">{index+1}</td>
                        <td className="px-2 py-2 text-sm text-left">{data?.type}</td>
                        <td className="px-2 py-2 text-sm text-left">{data?.applied}</td>
                        <td className="px-2 py-2 text-sm text-left">{data?.approved}</td>
                        <td className="px-2 py-2 text-sm text-left">{data?.rejected}</td>
                        <td className="px-2 py-2 text-sm text-left">{data?.pending}</td>
                      </tr>
                      ))
                    }
                         
                          

                      </tbody>
                    </table>

                    </div>
                    <div className={`rounded overflow-hidden relative bg-white transition-all duration-500 col-span-12 md:col-span-6 flex justify-center items-center py-6`} >
                       <img className='w-2/3 opacity-50' src={dashboard} />

                    </div>
                
                    <div className={`rounded overflow-hidden shadow-lg relative bg-white cursor-pointer transition-all duration-500 col-span-12 md:col-span-6 flex justify-center items-center py-6`} >
                        {/* <Chart chartType="ColumnChart" width="200px" height="400px" data={columnChartData} /> */}
                        <Chart
                            chartType="PieChart"
                            data={data2}
                            options={option2}
                            width={"100%"}
                            height={"400px"}
                        />
                    </div>
                    {/* graphs */}
                    <div className={`rounded overflow-hidden shadow-lg relative bg-white cursor-pointer transition-all duration-500 col-span-12 md:col-span-6 flex justify-center items-center py-6`} >
                        <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"400px"}
                        />


                    </div>


                </div>
            </div>
            <div className='w-full h-40'></div>

        </>
    )
}

export default Dashboard