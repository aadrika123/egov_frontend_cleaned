//////////////////////////////////////////////////////////////////////
// Author      : R U Bharti
// Date        : 16th Nov., 2022  01:30 PM
// Project     : JUIDCO
// Component   : ConcessionApi
// Description : Concession api list
//////////////////////////////////////////////////////////////////////

const ConcessionApi = () => {
    
    const baseUrl = 'http://192.168.0.205:8000/api/property/concession'

    let apiList = {
        
        entryForm : `${baseUrl}/UpdateDocuments/1`,

        postHolding : `${baseUrl}/postHolding`

    }

    return apiList;

}

export default ConcessionApi

////////////////////////////////////////////////////////////////////////
// Export to : ConcessionFormIndex.js, ConcessionForm.js
////////////////////////////////////////////////////////////////////////