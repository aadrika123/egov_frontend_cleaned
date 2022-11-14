import React from 'react'
import { useState } from 'react';
import TrackLicenseComponent from '../TrackLicense/TrackLicenseComponent';
import TrackTable from './TrackTable';
import TradeFormReview from './TradeFormReview';

function TrackLicense() {

  const [show, setshow] = useState(false);
  const [licenseData, setlicenseData] = useState()
  const [collector, setcollector] = useState([
    {
      application_no: "...",
      apply_date: "...",
      apply_from: "...",
      email_id: "...",
      firm_name: "...",
      guardian_name: "...",
      id: "...",
      license_no: "...",
      mobile_no: "...",
      owner_name: "...",
      provisional_license_no: "hello",
      valid_upto: "..."
    }
  ])

  console.log("collector", collector);
  return (
    <div>
      {/* Track license component for searching application or license number */}
      <TrackLicenseComponent licenseDataFun={setlicenseData} showFun={setshow} />
      {!show && <TrackTable licenseData={licenseData} collector={setcollector} showFun={setshow} />}
      {show &&
        <div className=''>
          <TradeFormReview collection={collector} />
        </div>
      }
    </div>
  )
}

export default TrackLicense