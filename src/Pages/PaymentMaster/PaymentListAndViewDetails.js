//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 18 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PaymentListAndViewDetails
//    DESCRIPTION -PaymentListAndViewDetails
//////////////////////////////////////////////////////////////////////////////////////
import React,{useState} from 'react'
import PaymentsList from './PaymentsList'
import ViewDetails from './ViewDetails'

function PaymentListAndViewDetails(props) {

    const [selectedFormId, setSelectedFormId] = useState(null)



    const backBtnFunc = () => {
        setSelectedFormId(null)
    }

    const userData = [
      {
          id: 21,
          status: "Processing",
          order_id : "order_HJFYT786786H",
          payment_id : "pay_GUI676JHJH",
          amount : 225,
          module : "Water",
          name: "Dipu Graham",
          email: "Sincere@april.biz",
          phone: "9687457478",
          date: "18/08/2022 08:22AM",
      },
      {
          id: 2,
          status: "Hold",
          order_id : "order_HJFYT786786H",
          payment_id : "pay_GUI676JHJH",
          amount : 155,
          module : "Trade",
          name: "Dopi Howell",
          email: "Shanna@melissa.tv",
          phone: "9687458754",
          date: "18/08/2022 08:22AM",
      }
  ];

  const handleViewBtn = (e) => {
    console.log("Hurryyy", e)
    setSelectedFormId(e)
}

  return (
    <>

    {/* <div>{props.title}</div> */}
    {!selectedFormId && <PaymentsList fun1={handleViewBtn} staticData={userData} />}

    {selectedFormId && <ViewDetails backBtn={backBtnFunc} btnId={selectedFormId} />}
</>
  )
}

export default PaymentListAndViewDetails