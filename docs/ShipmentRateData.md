# PurplshipApi.ShipmentRateData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**services** | **[String]** |  The requested carrier service for the shipment.  Please consult [the reference](#operation/references) for specific carriers services.&lt;br/&gt; Note that this is a list because on a Multi-carrier rate request you could specify a service per carrier.  | [optional] 
**carrier_ids** | **[String]** |  The list of configured carriers you wish to get rates from.  *Note that the request will be sent to all carriers in nothing is specified*  | [optional] 
**reference** | **String** | The shipment reference | [optional] 


