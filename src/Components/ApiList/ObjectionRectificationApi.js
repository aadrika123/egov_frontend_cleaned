//////////////////////////////////////////////////////////////////////
// Author      : R U Bharti
// Date        : 18th Nov., 2022  12:45 PM
// Project     : JUIDCO
// Component   : ObjectionRectificationApi
// Description : Objection Rectification api list
//////////////////////////////////////////////////////////////////////

const ObjectionRectificationApi = () => {

    const baseUrl = 'http://192.168.0.205:8000/api/property/objection'
  
    let apiLinks = {
        
        postHolding : `${baseUrl}/ownerDetails`,
        postRectification : `${baseUrl}/rectification`

    }
  
    return apiLinks;

}

export default ObjectionRectificationApi

//////////////////////////////////////////////////////////////////////////
// Export to : ObjectionRectification.js, ObjectionRectificationTable.js
//////////////////////////////////////////////////////////////////////////