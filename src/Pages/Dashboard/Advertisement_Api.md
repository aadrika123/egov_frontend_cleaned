>>>> Self Advertisement Form Data

```
API
|--getSelfAdvertisementList

response
├── licenseYear
├── residenceAddressWardList 
├── PermanentAddressWardList 
├── installationLocationList
└── EntityAddressWardList 

   
```


API
|--postSelfAdvertisement

request
├──  licenseYear
├── applicantName
├── fatherName
├── email
└── residenceAddress
├── residenceWardNo
└── permanentAddress
├── permanentWardNo
└── mobileNo
├── aadharNo
└── entityName
├── entityAddress
└── entityWardNo
├── installationLocation
└── brandDisplayName
├── holdingNo
└── tradeLicenseNo
├── gstNo
└── displayArea
├── displayType
└── longitude
├── latitude
└── aadharDoc
├── tradeLicenseDoc
└── photoWithGps
├── holdingNoDoc
└── gstDocPhoto
├── proceedingPhoto1
└── proceedingPhoto2
├── proceedingPhoto3
└── uploadExtraDoc1
├── uploadExtraDoc2

response
├── status 
├── message



>>>> Movable Vehicle Form Data

```
API
|--getMovableVehicleListData

response

├── residenceAddressWardList 
├── PermanentAddressWardList 
  
```
API
|--postMovableVehicle

request
├──  applicantName
├── fatherName
├── email
├── residenceAddress
└── residenceWardNo
├── permanentAddress
└── permanentWardNo
├── mobileNo
└── aadharNo
├── licenseFrom
└── licenseTo
├── entityName
└── tradeLicenseNo
├── gstNo
└── vehicleNo
├── vehicleName
└── vehicleType
├── brandDisplayVehicle
└── frontArea
├── rearArea
└── sideArea1
├── topArea
└── displayType
├── aadharDoc
└── tradeLicenseDoc
├── vehiclePhoto
└── uploadOwnerBook
├── uploadDrivingLicense
└── uploadInsurancePhoto
├── uploadGSTNoPhoto


response
├── status 
├── message




>>>> Private Land

```
API
|--getPrivateLandList

response

├── residenceAddressWardList 
├── PermanentAddressWardList 
├── installationLocationList
└── EntityAddressWardList 
  
```
API
|--postPrivateLand

request
├──  applicantName
├── fatherName
├── email
├── residenceAddress
└── residenceWardNo
├── permanentAddress
└── permanentWardNo
├── mobileNo
└── aadharNo
├── entityName
└── entityAddress
├── entityWardNo
└── installationLocation
├── brandDisplayName
└── brandDisplayAddress
├── holdingNo
└── totalHoldingNo
├── tradeLicenseNo
└── gstNo
├── totalDisplayArea
└── displayType
├── longitude
└── latitude
├── aadharDoc
└── tradeLicenseDoc
├── photoWithGpsMapped
└── holdingNoPhoto
├── gstNoPhoto
└── uploadBrandDisplayDoc



response
├── status 
├── message



>>>> Agency Application

```
API
|--getAgencyApplicationList

response

├── residenceAddressWardList 
├── PermanentAddressWardList 
├── installationLocationList
└── EntityAddressWardList 
  
```
API
|--postAgencyApplication

request
├──  entityType
├── entityName
├── Address
├── mobileNo
└── officialTelephone
├── fax
└── email
├── panNo
└── gstNo
├── isBlacklisted
└── isPendingCourtCase
├── pendingAmount
├── directorName[]
└── directorMobileNo[]
├── directorEmail[]
└── uploadGstPhoto
├── itLastYearUpload
└── itPrevToLastUpload
├── officeAddressUpload
└── panNoPhoto
├── aadharPhotoDirector1
└── aadharPhotoDirector2
├── aadharPhotoDirector3
└── aadharPhotoDirector4
├── affidifitPhoto


response
├── status 
├── message






>>>> Self Advertisement workflow

```
API
|--getAllSelfAdvertisementInboxList

response
├── allApplicantList
 
   
```

API
|--getSelfAdvrtApplicantDetailById

response
├── fullDetailList

request
├──applicantId


```


```
API
|--getAllSelfAdvertisementOutboxList

response
├── allApplicantList
 
   
```

API
|--getAllSelfAdvertisementApprovedList

response
├── allApplicantList
 
   
```

API
|--getAllSelfAdvertisementRejectedList

response
├── allApplicantList
 
   
```


API
|--getSelfAdvrtApplicantDetailById

response
├── fullDetailList

request
├──applicantId


```

API
|--SelfAdvertisementAllWorkFowCandidateList

response
├── allWorkFlowCandidateList(id,CandidateName)
 
   
```



API
|--postCommentsByCandidate

request
├── userId
|-- Comment
|-- RenewalID

response
|-- status(true,false)
|-- message
 
   
```





>>>> Movable Vehicle workflow

```
API
|--getAllMovableVehicleInboxList

response
├── allApplicantList
 
   
```

API
|--getMovableVehicleApplicantDetailById

response
├── fullDetailList

request
├──applicantId


```


```
API
|--getAllMovableVehicleOutboxList

response
├── allApplicantList
 
   
```

API
|--getMovableVehicleApplicantDetailById

response
├── fullDetailList

request
├──applicantId


```

API
|--movableVehicleAllWorkFowCandidateList

response
├── allWorkFlowCAndidateList(id,CandidateName)
 
   
```



API
|--postCommentsByCandidate

request
├── userId
|-- Comment
|-- RenewalID

response
|-- status(true,false)
|-- message
 
   
```