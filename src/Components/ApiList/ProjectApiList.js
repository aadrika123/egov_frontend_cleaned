export default function ProjectApiList() {
    let baseUrl = "http://192.168.0.16:8000"
    let apiList = {

        //login
        api_login: `${baseUrl}/api/login`,
        //1
        api_safInboxList: `${baseUrl}/api/property/saf/inbox`,
        //2
        api_getSafDetailsById: `${baseUrl}/api/property/saf-details`,
        //3
        api_getWorkflowCandidates: `${baseUrl}/api/workflow/getRoleByWorkflow`,
        //4
        api_postEscalateStatus: `${baseUrl}/api/property/saf/escalate`,
        //comment
        api_postComment: `${baseUrl}/api/property/saf/independent-comment`,
        //sending application to level
        api_postApplicationToLevel: `${baseUrl}/api/property/saf/post/level`,
        //escalate to speacial List
        api_getsafSpecialList: `${baseUrl}/api/property/saf/escalate/inbox`,
        //role details
        api_fetchRoleDetail: `${baseUrl}/api/workflows/getroledetails`,
        //outBox list
        api_safOutboxList: `${baseUrl}/api/property/saf/outbox`,

        //Approve Reject
        api_approveRejectForm: `${baseUrl}/api/property/saf/approvalrejection`,

         //back to citizen
         api_backToCitizen: `${baseUrl}/api/property/saf/back-to-citizen`


    }

    return apiList
}


