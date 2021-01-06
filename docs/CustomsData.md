# CustomsData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aes** | **String** |  | [optional] 
**eel_pfc** | **String** |  | [optional] 
**content_type** | **String** |  | [optional] 
**content_description** | **String** |  | [optional] 
**incoterm** | **String** | The customs &#x27;term of trade&#x27; also known as &#x27;incoterm&#x27; | [optional] 
**commodities** | [**[Commodity]**](Commodity.md) | The parcel content items | [optional] 
**duty** | [**Payment**](Payment.md) |  | [optional] 
**invoice** | **String** | The invoice reference number | [optional] 
**commercial_invoice** | **Boolean** | Indicates if the shipment is commercial | [optional] 
**certify** | **Boolean** | Indicate that signer certified confirmed all | [optional] 
**signer** | **String** |  | [optional] 
**certificate_number** | **String** |  | [optional] 
**options** | **Object** |  | [optional] 

<a name="ContentTypeEnum"></a>
## Enum: ContentTypeEnum

* `documents` (value: `"documents"`)
* `gift` (value: `"gift"`)
* `sample` (value: `"sample"`)
* `merchandise` (value: `"merchandise"`)
* `return_merchandise` (value: `"return_merchandise"`)
* `other` (value: `"other"`)


<a name="IncotermEnum"></a>
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

