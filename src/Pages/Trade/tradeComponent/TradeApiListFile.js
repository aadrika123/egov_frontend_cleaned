import React from 'react'

const baseUrl = "http://192.168.0.16:8000/";
export const TRADE =
{
    UPDATE_API_LIST: baseUrl + "api/edit-api/",                         //requires an id param at the end
    GET_API_BY_ID: baseUrl + "api/get-api-by-id/",                      //requires an id param at the end
    SAVE_API_LIST: baseUrl + "api/save-api",
    GET_API_LIST: baseUrl + "api/get-all-apis",
    MASTER_DATA_API: baseUrl + "api/trade/apply/",                      //requires an STRING param at the end
    VALIDATE_HOLDING: baseUrl + "api/trade/getPropertyByHolding",       //request payload is holding no
    GET_CHARGE: baseUrl + "api/trade/getCharge",                        //request payload is applicationType, areaSqft, natureOfBusiness[id],tocStatus,
    SEARCH_LICENSE_FOR_APPLY: baseUrl + "api/trade/searchLicense",      //provide license number as the post data with application type
    GET_DENIAL_DETAILS: baseUrl + "api/trade/getDenialDetails",         // taken notice no as (post data) in it's required parameter    
    GET_APPLICATION_LIST: baseUrl + "api/trade/inbox",                  // in get method return all application List INBOX  
    GET_APPLICATION_LIST_OUTBOX: baseUrl + "api/trade/outbox",          // in get method return all application List OUTBOX
    GET_LICENSE_DTL_BY_ID: baseUrl + "api/trade/getLicenceDtl/",        //returns license details of a particular application....send id in parameter;
    GET_LICENSE_DTL_BY_ANYTHING: baseUrl + "api/trade/getApplicationList/"    //returns application list. Takes post data as entity_name && entity_value


}

export const HEADER = () => {
    let token = JSON.parse(window.localStorage.getItem('token'))
    let HEADER = {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        }
    }

    return HEADER;
}

console.log("testing", HEADER())


