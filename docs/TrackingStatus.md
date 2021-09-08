# PurplshipApi.TrackingStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identifier | [optional] 
**carrier_name** | **String** | The tracking carrier | 
**carrier_id** | **String** | The tracking carrier configured identifier | 
**tracking_number** | **String** | The shipment tracking number | 
**events** | [**[TrackingEvent]**](TrackingEvent.md) | The tracking details events | [optional] 
**delivered** | **Boolean** | Specified whether the related shipment was delivered | [optional] 
**test_mode** | **Boolean** | Specified whether the object was created with a carrier in test mode | 
**status** | **String** | The current tracking status | [optional] [default to &#39;created&#39;]



## Enum: StatusEnum


* `created` (value: `"created"`)

* `purchased` (value: `"purchased"`)

* `cancelled` (value: `"cancelled"`)

* `shipped` (value: `"shipped"`)

* `in-transit` (value: `"in-transit"`)

* `delivered` (value: `"delivered"`)




