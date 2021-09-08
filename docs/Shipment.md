# PurplshipApi.Shipment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identifier | [optional] 
**status** | **String** | The current Shipment status | [optional] [default to &#39;created&#39;]
**carrier_name** | **String** | The shipment carrier | [optional] 
**carrier_id** | **String** | The shipment carrier configured identifier | [optional] 
**label** | **String** | The shipment label in base64 string | [optional] 
**tracking_number** | **String** | The shipment tracking number | [optional] 
**shipment_identifier** | **String** | The shipment carrier system identifier | [optional] 
**selected_rate** | [**Rate**](Rate.md) |  | [optional] 
**selected_rate_id** | **String** | The shipment selected rate. | [optional] 
**rates** | [**[Rate]**](Rate.md) | The list for shipment rates fetched previously | [optional] 
**tracking_url** | **String** | The shipment tracking url | [optional] 
**service** | **String** | The selected service | [optional] 
**shipper** | [**Address**](Address.md) |  | 
**recipient** | [**Address**](Address.md) |  | 
**parcels** | [**[Parcel]**](Parcel.md) | The shipment&#39;s parcels | 
**services** | **[String]** |  The carriers services requested for the shipment.  Please consult [the reference](#operation/references) for specific carriers services.&lt;br/&gt; Note that this is a list because on a Multi-carrier rate request you could specify a service per carrier.  | [optional] 
**options** | **Object** |  The options available for the shipment.&lt;br/&gt; Please consult [the reference](#operation/references) for additional specific carriers options.  | [optional] 
**payment** | [**Payment**](Payment.md) |  | [optional] 
**customs** | [**Customs**](Customs.md) |  | [optional] 
**reference** | **String** | The shipment reference | [optional] 
**label_type** | **String** | The shipment label file type. | [optional] 
**carrier_ids** | **[String]** |  The list of configured carriers you wish to get rates from.  *Note that the request will be sent to all carriers in nothing is specified*  | [optional] 
**tracker_id** | **String** | The attached tracker id | [optional] 
**created_at** | **String** |  The shipment creation datetime  Date Format: &#x60;YYYY-MM-DD HH:MM:SS.mmmmmmz&#x60;  | 
**test_mode** | **Boolean** | Specified whether it was created with a carrier in test mode | 
**meta** | **Object** | provider specific metadata | [optional] 
**messages** | [**[Message]**](Message.md) | The list of note or warning messages | [optional] 



## Enum: StatusEnum


* `created` (value: `"created"`)

* `purchased` (value: `"purchased"`)

* `cancelled` (value: `"cancelled"`)

* `shipped` (value: `"shipped"`)

* `in-transit` (value: `"in-transit"`)

* `delivered` (value: `"delivered"`)





## Enum: LabelTypeEnum


* `PDF` (value: `"PDF"`)

* `ZPL` (value: `"ZPL"`)




