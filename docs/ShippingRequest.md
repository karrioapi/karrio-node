# PurplshipOpenSourceMultiCarrierShippingApi.ShippingRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipper** | [**AddressData**](AddressData.md) |  | 
**recipient** | [**AddressData**](AddressData.md) |  | 
**parcels** | [**[ParcelData]**](ParcelData.md) | The shipment&#x27;s parcels | 
**options** | **Object** |  The options available for the shipment.&lt;br/&gt; Please consult [the reference](#operation/references) for additional specific carriers options.  | [optional] 
**payment** | [**Payment**](Payment.md) |  | 
**customs** | [**CustomsData**](CustomsData.md) |  | [optional] 
**reference** | **String** | The shipment reference | [optional] 
**label_type** | **String** | The shipment label file type. | [optional] [default to &#x27;PDF&#x27;]
**selected_rate_id** | **String** | The shipment selected rate. | 
**rates** | [**[Rate]**](Rate.md) | The list for shipment rates fetched previously | 

<a name="LabelTypeEnum"></a>
## Enum: LabelTypeEnum

* `PDF` (value: `"PDF"`)
* `ZPL` (value: `"ZPL"`)

