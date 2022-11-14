export default function PaymentApiList() {
    let baseUrl = "http://192.168.0.16:8000"
    let apiList = {

        //login
        getAllPayments: `${baseUrl}/api/get-all-payments`,
        getPaymentByid: `${baseUrl}/api/get-payment-by-id`,
        storePayment: `${baseUrl}/api/store-payment`,


    }

    return apiList
}


