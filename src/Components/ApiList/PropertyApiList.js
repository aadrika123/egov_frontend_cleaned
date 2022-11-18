export default function PropertyApiList() {
    let baseUrl = "http://192.168.0.237:8000"
    let apiList = {

         //back to citizen
         calculatePropertyTax: `${baseUrl}/api/property/calculatePropertyTax`,
         get_dashboard: `${baseUrl}/api/property/get-dashboard`
    }

    return apiList
}


