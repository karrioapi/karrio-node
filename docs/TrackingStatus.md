# PurplshipOpenSourceMultiCarrierShippingApi.TrackingStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identifier | [optional] 
**carrier_name** | **String** | The tracking carrier | 
**carrier_id** | **String** | The tracking carrier configured identifier | 
**tracking_number** | **String** | The shipment tracking number | 
**events** | [**[TrackingEvent]**](TrackingEvent.md) | The tracking details events | [optional] 
**test_mode** | **Boolean** | Specified whether it was created with a carrier in test mode | 
