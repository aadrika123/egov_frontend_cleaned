//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 24 june 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - App
//    DESCRIPTION - App Component
//////////////////////////////////////////////////////////////////////////////////////
import './App.css';
import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Sidebar from './Components/Common/Sidebar/Sidebar';
import Header from './Components/Common/Header/Header';
import { connect } from "react-redux";
import Login2 from './Pages/Login2';
import Home from './Pages/Home';
import ProtectedRoutes from './Components/Auth/ProtectedRoutes';
import Error from './Components/Common/404/Error';
import { useQuery, QueryClientProvider, QueryClient, useQueryClient } from "react-query";
import Redirect from 'Components/Common/404/Redirect';
import Shorthands from 'Components/TestDelete/Shorthands';
import ListTableParent from 'Components/Common/ListTable/ListTableParent';
import { contextVar } from 'Components/Context/Context'
// import TradeMailbox from 'Pages/TradeMailbox/TradeMailbox';
import UserPermission from 'Pages/UserPermission/UserPermission';
import SuccessCheck from 'Components/Common/SuccessCheck';
import ButtonAnimation from 'Components/TestDelete/ButtonAnimation';
import Multi2 from 'Components/TestDelete/Multi2';
import LoadingAnimation from 'Components/TestDelete/LoadingAnimation';
import MyComponent from 'Components/TestDelete/Chatbot/MyComponent ';
import FormSubmitResponse from 'Components/Common/ResponseScreen/FormSubmitResponse';
import FormSubmitError from 'Components/Common/ResponseScreen/FormSubmitError';
import AutoWidth from 'Components/TestDelete/AutoWidth';
import Trade from 'Pages/Trade/Trade';


import Multi from 'Components/TestDelete/Multi';
import MultiSelect from 'Components/Common/MultiSelect';
import 'animate.css'
import PaymentMasterIndex from 'Pages/PaymentMaster/PaymentMasterIndex';
import RoundLoader from 'Components/TestDelete/RoundLoader';
import Birds from 'Components/TestDelete/Birds';
import LoadingAnimation2 from 'Components/TestDelete/LoadingAnimation2';
import UserRole from 'Pages/UserRole/UserRole';
import PropertyTaxCalculatorIndex from 'Pages/Property/PropertyTaxCalculator/PropertyTaxCalculatorIndex';
import PropertyTaxReview from 'Pages/Property/PropertyTaxCalculator/PropertyTaxReview';
import UlbWorkflowRolesIndex from 'Pages/Masters/UlbManage/UlbWorkflowRoles/UlbWorkflowRolesIndex';
import ApiTest from 'Components/TestDelete/ApiTest';
import AccountsIndex from 'Components/Accounts/AccountsIndex';
import Dashboard_Property from 'Pages/Dashboard/Dashboard_Property/Dashboard_Property';
import Dashboard_Water from 'Pages/Dashboard/Dashboard_Water/Dashboard_Water';
import Dashboard_Trade from 'Pages/Dashboard/Dashboard_Trade/Dashboard_Trade';
import Dashboard_Advertisement from 'Pages/Dashboard/Dashboard_Advertisement/Dashboard_Advertisement';
import AdvtWorkflow from 'Pages/Advertisement2/advtWorkflwork/AdvtWorkflow';
import SelfAdvt from 'Pages/Advertisement2/SelfAdvt/SelfAdvt';
import MovableVehicle from 'Pages/Advertisement2/movableVehicle/MovableVehicle';
import PvtLand from 'Pages/Advertisement2/PvtLand/PvtLand';
import Agency from 'Pages/Advertisement2/Agency/Agency';
import LandingPage from 'Pages/LandingPage';
import TradeReport from 'Pages/Trade/TradeReport/TradeReport';
import TrackLicense from 'Pages/Trade/TrackLicense/TrackLicense';
import PaymentReceipt from 'Pages/Trade/PaymentReceipt/PaymentReceipt';
import ProvisionalLicense from 'Pages/Trade/ProvisionalLicense/ProvisionalLicense';
import Water from 'Pages/Water/Water';
import SafApplicationFormIndex from 'Pages/Property/PropertyEntryForms/SafApplicationForm/SafApplicationFormIndex';
import ConcessionFormIndex from 'Pages/Property/PropertyEntryForms/ConcessionForm/ConcessionFormIndex';
import GovSafApplicationFormIndex from 'Pages/Property/PropertyEntryForms/GovSafApplicationForm/GovSafApplicationFormIndex';
import ColonySafApplicationFormIndex from 'Pages/Property/PropertyEntryForms/ColonySafEntryForm/ColonySafApplicationFormIndex';
import LegacyEntryFormIndex from 'Pages/Property/PropertyEntryForms/LegacyEntryForm/LegacyEntryFormIndex';
import ObjectionFormIndex from 'Pages/Property/PropertyEntryForms/ObjectionEntryForm/ObjectionFormIndex';
import SafEntryScreen from 'Pages/Property/PropertyEntryForms/SafApplicationForm/SafEntryScreen';
import TcVerficationFormIndex from 'Pages/Property/PropertyEntryForms/TcVerficationForm/TcVerficationFormIndex';
import PropertySafDocumentVerify from 'Pages/Property/PropertyEntryForms/DaVerificationScreen.js/PropertySafDocumentVerify';
import BoDocUpload from 'Pages/Property/PropertyEntryForms/BackOffice/BoDocUpload';
import SafFormReview from 'Pages/Property/PropertyEntryForms/SafFormReview/SafFormReview';
import SafFormDemand from 'Pages/Property/PropertyEntryForms/SafFormReview/SafFormDemand';
import SafFormPayment from 'Pages/Property/PropertyEntryForms/SafFormReview/SafFormPayment';
import TradeMailbox from 'Pages/Trade/TradeMailbox/TradeMailbox';
import WaterMailbox from 'Pages/Water/WaterMailbox/WaterMailbox';
import WorkflowMaster from 'Pages/Workflow/WorkflowMaster/WorkflowMaster';
import PropertyRoutes from 'Pages/Property/PropertyRoutes';
import ObjectionRectification from 'Pages/Property/PropertyEntryForms/ObjectionEntryForm/ObjectionRectification';



function App(props) {

  const [boxWidth, setBoxWidth] = useState({ width: 'md:w-4/5', margin: 'md:ml-64' })
  const client = useQueryClient()

  let token = JSON.parse(window.localStorage.getItem('token'))
  console.log('token save from login ', token)
  if (token != undefined) {
    props.LOGIN()
  }
  useEffect(() => {

    if (props.navOriginalCloseStatus == true) {
      setBoxWidth({ width: 'md:w-full', margin: 'md:ml-16' })
      console.log(boxWidth.width, " ", boxWidth.margin)
    } else {
      setBoxWidth({ width: 'md:w-4/5', margin: 'md:ml-64' })
      console.log(boxWidth.width, " ", boxWidth.margin)

    }


  }, [props.navOriginalCloseStatus])

  //context Data to active toast from anywhere
  const contextData = {
    notify: (toastData, actionFlag) => {
      toast.dismiss()
      { actionFlag == 'error' && toast.error(toastData) }
      { actionFlag == 'info' && toast.info(toastData) }
      { actionFlag == 'success' && toast.success(toastData) }
      { actionFlag == 'warn' && toast.warn(toastData) }
    },
    token: window.localStorage.getItem("token")
  };
  contextData.notify(`You are in ${process.env.REACT_APP_MODE}`, 'info')

  // const onSuccess = (data) => {
  //   console.log('data after success query fetch ', data)
  // }


  // const { isLoading, data, isError, error, refetch } = LevelCandidateQueryById(102);
  // if (!isLoading) {
  //   console.log('requesabel query ', data.data)
  // }

  return (
    <>

      {/* passing context data to all component enclosed */}
      <contextVar.Provider value={contextData}>
        <BrowserRouter>
          {/* common notify toast to run from anywhere */}
          <ToastContainer position="top-right"
            autoClose={2000} />
          <Header />
          <Sidebar />

          <div className={`sm:w-full transition-all pl-4 pr-4 md:pl-8 ${boxWidth.width}  ${boxWidth.margin} mt-2 h-screen overflow-y-scroll`}>
            {/* <div className={`sm:w-full transition-all pl-4 pr-4 md:pl-8 ${boxWidth.width}  ${boxWidth.margin} mt-2`}> */}
            <PropertyRoutes/>
            <Routes>
              {/* <Route element={<ProtectedRoutes />}> */}
              {/* <Route path='/home' element={<Home />} /> */}
              <Route path='/home' element={<LandingPage />} />
              <Route path='/shorthand' element={<Shorthands />} />
              <Route path='/listtable' element={<ListTableParent />} />
              <Route path='/water-mailbox' element={<WaterMailbox />} />
              <Route path='/trade-mailbox' element={<TradeMailbox />} />
              <Route path='/user-permission' element={<UserPermission />} />
              <Route path='/user-role' element={<UserRole />} />

              <Route path='/ck' element={<SuccessCheck />} />
              <Route path='/multi1' element={<Multi />} />
              <Route path='/multi2' element={<Multi2 />} />
              <Route path='/multi3' element={<MultiSelect />} />

              {/* <Route path='/self-advt' element={<SelfAdvtWorkflowIndex />} /> */}
              <Route path='/payment-master' element={<PaymentMasterIndex />} />

              {/* trade routes */}
              <Route path='/trade-reports' element={<TradeReport />} />
              <Route path='/trade-track-license' element={<TrackLicense />} />
              <Route path='/trade-payment-receipt' element={<PaymentReceipt />} />
              <Route path='/trade-provisional-license' element={<ProvisionalLicense />} />
              {/* trade routes */}

              {/* advertisement new routes */}
              <Route path='/advt-workflow' element={<AdvtWorkflow />} />
              <Route path='/self-advt' element={<SelfAdvt />} />
              <Route path='/movable-vehicle' element={<MovableVehicle />} />
              <Route path='/private-land' element={<PvtLand />} />
              <Route path='/agency-advt' element={<Agency />} />
              {/* advertisement new routes */}
              <Route path='/btn' element={<ButtonAnimation />} />
              <Route path='/anm' element={<LoadingAnimation />} />

              <Route path='/safform/:assType' element={<SafApplicationFormIndex />} />
              <Route path='/con-form' element={<ConcessionFormIndex />} />
              <Route path='/gov-form' element={<GovSafApplicationFormIndex />} />
              <Route path='/colony' element={<ColonySafApplicationFormIndex />} />
              <Route path='/legacy' element={<LegacyEntryFormIndex />} />
              <Route path='/objection' element={<ObjectionFormIndex />} />
              <Route path="/objection-rectification" element={<ObjectionRectification/>} />
              <Route path='/saf-entry' element={<SafEntryScreen />} />
              <Route path='/tcform' element={<TcVerficationFormIndex />} />
              <Route path='/da-verify' element={<PropertySafDocumentVerify />} />


              <Route path='/chat' element={<MyComponent />} />
              <Route path='/submit-res' element={<FormSubmitResponse />} />
              <Route path='/submit-error' element={<FormSubmitError />} />
              <Route path='/auto' element={<AutoWidth />} />
              <Route path='/trade' element={<Trade />} />
              <Route path='/water' element={<Water />} />
              <Route path='/ulb-workflow-roles' element={<UlbWorkflowRolesIndex />} />
              <Route path='/accounts' element={<AccountsIndex />} />

              {/* Dashboards */}
              
              <Route path='/dashboard-water' element={<Dashboard_Water />} />
              <Route path='/dashboard-trade' element={<Dashboard_Trade />} />
              <Route path='/dashboard-advertisement' element={<Dashboard_Advertisement />} />


              {/* </Route> */}
              <Route index element={<Login2 />} />
              <Route path='*' element={<Redirect />} />
              <Route path='/error' element={<Error />} />
              <Route path='/loader2' element={<RoundLoader />} />

              {/* test */}
              <Route path='/birds' element={<Birds />} />
              <Route path='/load2' element={<LoadingAnimation2 />} />
              
              <Route path='/bodoc' element={<BoDocUpload />} />
              <Route path='/saf-review' element={<SafFormReview />} />
              <Route path='/saf-demand' element={<SafFormDemand />} />
              <Route path='/saf-payment' element={<SafFormPayment />} />
              <Route path='/rps' element={<FormSubmitResponse />} />
              <Route path='/api-test' element={<ApiTest />} />

              {/* nested routes */}
              {/* <Route path='/citizen-saf-entry-screen' element={<SafEntryScreen2 />} /> */}


            </Routes>
          </div>
        </BrowserRouter>
      </contextVar.Provider>
    </>
  );
}

//for redux
const mapStateToProps = (state) => {
  return {
    navCloseStatus: state.navCloseStatus,
    navOriginalCloseStatus: state.navOriginalCloseStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // buyCake: () => dispatch(buyCake())
    NAV_OPEN: (data2) => dispatch({ type: "NAV_OPEN" }),
    NAV_CLOSE: (data3) => dispatch({ type: "NAV_CLOSE" }),
    LOGIN: (data2) => dispatch({ type: "LOGIN" }),
  };
};
// export default Home // EXPORTING HOME COMPONENT
export default connect(mapStateToProps, mapDispatchToProps)(App);
