# PurplshipApi.Customs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identifier | [optional] 
**aes** | **String** |  | [optional] 
**eel_pfc** | **String** |  | [optional] 
**content_type** | **String** |  | [optional] 
**content_description** | **String** |  | [optional] 
**incoterm** | **String** | The customs &#39;term of trade&#39; also known as &#39;incoterm&#39; | [optional] 
**commodities** | [**[Commodity]**](Commodity.md) | The parcel content items | [optional] 
**duty** | [**Duty**](Duty.md) |  | [optional] 
**invoice** | **String** | The invoice reference number | [optional] 
**invoice_date** | **String** | The invoice date | [optional] 
**commercial_invoice** | **Boolean** | Indicates if the shipment is commercial | [optional] 
**certify** | **Boolean** | Indicate that signer certified confirmed all | [optional] 
**signer** | **String** |  | [optional] 
**certificate_number** | **String** |  | [optional] 
**options** | **Object** |  | [optional] 



## Enum: ContentTypeEnum


* `documents` (value: `"documents"`)

* `gift` (value: `"gift"`)

* `sample` (value: `"sample"`)

* `merchandise` (value: `"merchandise"`)

* `return_merchandise` (value: `"return_merchandise"`)

* `other` (value: `"other"`)





## Enum: IncotermEnum


* `CFR` (value: `"CFR"`)

* `CIF` (value: `"CIF"`)

* `CIP` (value: `"CIP"`)

* `CPT` (value: `"CPT"`)

* `DAF` (value: `"DAF"`)

* `DDP` (value: `"DDP"`)

* `DDU` (value: `"DDU"`)

* `DEQ` (value: `"DEQ"`)

* `DES` (value: `"DES"`)

* `EXW` (value: `"EXW"`)

* `FAS` (value: `"FAS"`)

* `FCA` (value: `"FCA"`)

* `FOB` (value: `"FOB"`)




