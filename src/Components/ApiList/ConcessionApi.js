//////////////////////////////////////////////////////////////////////
// Author      : R U Bharti
// Date        : 16th Nov., 2022  01:30 PM
// Project     : JUIDCO
// Component   : ConcessionApi
// Description : Concession api list
//////////////////////////////////////////////////////////////////////

const ConcessionApi = () => {
    
    const baseUrl = 'http://192.168.0.205:8000/api/property/concession'
    const jskUrl = 'http://192.168.0.205:8000/api/property/saf'

    let apiList = {
        
        entryForm : `${baseUrl}/apply-concession`,

        postHolding : `${jskUrl}/get-prop-byholding`

    }

    return apiList;

}

export default ConcessionApi

////////////////////////////////////////////////////////////////////////
// Export to : ConcessionFormIndex.js, ConcessionForm.js
////////////////////////////////////////////////////////////////////////