import { Preview } from '@mui/icons-material';
import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { HEADER, TRADE } from '../tradeComponent/TradeApiListFile';

function TrackTable(props) {

    const getLicenseDetails = (id) => {
        console.log("id", id);
        axios.get(TRADE.GET_LICENSE_DTL_BY_ID + id, HEADER())
            .then(function (response) {
                console.log("========response.data", response.data)
                if (response.data.status) {
                    props.collector(response.data.data);
                    props.showFun(true);
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    return (
        <div>
            <div className='w-full  mt-4 rounded-lg border font-sans text-sm text-justify'>
                <table className='w-full mx-auto'>
                    <thead>
                        <tr className='bg-stone-200 hover:bg-stone-300  h-10 rounded-lg'>
                            <th> # </th>
                            <th> Action </th>
                            <th> Application No. </th>
                            <th> License No. </th>
                            <th> Firm Name </th>
                            <th> Owner Name </th>
                            <th> Apply Date</th>
                            <th> Validity </th>
                        </tr>
                    </thead>

                    <tbody className='pt-4'>
                        {props?.licenseData?.map((items, index) => (
                            <tr className='h-10 hover:bg-amber-50 border-b' key={index}>
                                <td>{index + 1}</td>
                                <td>{items.id != null && <Button variant='outlined' color='primary' size='small' type='button' onClick={() => getLicenseDetails(items.id)}><Preview /> </Button>}</td>
                                <td>{items.application_no}</td>
                                <td>{items.license_no}</td>
                                <td>{items.firm_name}</td>
                                <td>{items.owner_name}</td>
                                <td>{items.apply_date}</td>
                                <td>{items.valid_upto}</td>
                            </tr>

                        ))}



                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TrackTable