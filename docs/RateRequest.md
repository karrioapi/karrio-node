# PurplshipApi.RateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipper** | [**AddressData**](AddressData.md) |  | 
**recipient** | [**AddressData**](AddressData.md) |  | 
**parcels** | [**[ParcelData]**](ParcelData.md) | The shipment&#39;s parcels | 
**services** | **[String]** |  The requested carrier service for the shipment.&lt;br/&gt; Please consult [the reference](#operation/references) for specific carriers services.  Note that this is a list because on a Multi-carrier rate request you could specify a service per carrier.  | [optional] 
**options** | **Object** |  The options available for the shipment.  Please consult [the reference](#operation/references) for additional specific carriers options.  | [optional] 
**reference** | **String** | The shipment reference | [optional] 
**carrier_ids** | **[String]** |  The list of configured carriers you wish to get rates from.  | [optional] 


