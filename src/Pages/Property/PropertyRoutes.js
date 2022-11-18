import WorkflowMaster from 'Pages/Workflow/WorkflowMaster/WorkflowMaster'
import PropertySafWorkflowIndex from 'Pages/Property/workflow/PropertySafWorkflow/PropertySafWorkflowIndex';
import PropertyConcessionWorkflowIndex from 'Pages/Property/workflow/PropertyConcessionWorkflow/PropertyConcessionWorkflowIndex';
import PropertyHarvestingWorkflowIndex from 'Pages/Property/workflow/PropertyHarvestingWorkflow/PropertyHarvestingWorkflowIndex';
import PropertyObjectionWorkflowIndex from 'Pages/Property/workflow/PropertyObjectionWorkflow/PropertyObjectionWorkflowIndex';
import CitizenRegistrationWorkflowIndex from 'Pages/Property/workflow/CitizenRegistrationWorkflow/CitizenRegistrationWorkflowIndex';





import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PropertyTaxCalculatorIndex from './PropertyTaxCalculator/PropertyTaxCalculatorIndex';
import SafFormReview from './PropertyTaxCalculator/SafFormReview';
import Dashboard_Property from 'Pages/Dashboard/Dashboard_Property/Dashboard_Property';


function PropertyRoutes() {
    return (
        <>
            <Routes>
                 <Route path='/workflow-mstr' element={<WorkflowMaster />} />
              <Route path='/saf-workflow' element={<PropertySafWorkflowIndex />} />
              <Route path='/concession-workflow' element={<PropertyConcessionWorkflowIndex />} />
              <Route path='/harvesting-workflow' element={<PropertyHarvestingWorkflowIndex />} />
              <Route path='/objection-workflow' element={<PropertyObjectionWorkflowIndex />} />
              <Route path='/citizen-reg-workflow' element={<CitizenRegistrationWorkflowIndex />} />
              <Route path='/taxcal' element={<PropertyTaxCalculatorIndex />} />
              <Route path='/viewr' element={<SafFormReview />} />
              <Route path='/dashboard-property' element={<Dashboard_Property />} />
            </Routes>
        </>
    )
}

export default PropertyRoutes