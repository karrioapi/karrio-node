# PurplshipApi.ShipmentData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipper** | [**AddressData**](AddressData.md) |  | 
**recipient** | [**AddressData**](AddressData.md) |  | 
**parcels** | [**[ParcelData]**](ParcelData.md) | The shipment&#39;s parcels | 
**options** | **Object** |  The options available for the shipment.&lt;br/&gt; Please consult [the reference](#operation/references) for additional specific carriers options.  | [optional] 
**payment** | [**Payment**](Payment.md) |  | [optional] 
**customs** | [**CustomsData**](CustomsData.md) |  | [optional] 
**reference** | **String** | The shipment reference | [optional] 
**label_type** | **String** | The shipment label file type. | [optional] [default to &#39;PDF&#39;]
**services** | **[String]** |  The requested carrier service for the shipment.  Please consult [the reference](#operation/references) for specific carriers services.&lt;br/&gt; Note that this is a list because on a Multi-carrier rate request you could specify a service per carrier.  | [optional] 
**carrier_ids** | **[String]** |  The list of configured carriers you wish to get rates from.  *Note that the request will be sent to all carriers in nothing is specified*  | [optional] 



## Enum: LabelTypeEnum


* `PDF` (value: `"PDF"`)

* `ZPL` (value: `"ZPL"`)




