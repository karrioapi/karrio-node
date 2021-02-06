# PurplshipOpenSourceMultiCarrierShippingApi.PickupUpdateData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pickup_date** | **String** |  The expected pickup date  Date Format: YYYY-MM-DD  | [optional] 
**address** | [**AddressData**](AddressData.md) |  | [optional] 
**ready_time** | **String** | The ready time for pickup. | [optional] 
**closing_time** | **String** | The closing or late time of the pickup | [optional] 
**instruction** | **String** |  The pickup instruction.  eg: Handle with care.  | [optional] 
**package_location** | **String** |  The package(s) location.  eg: Behind the entrance door.  | [optional] 
**options** | **Object** | Advanced carrier specific pickup options | [optional] 
**tracking_numbers** | **[String]** | The list of shipments to be picked up | [optional] 
**confirmation_number** | **String** | pickup identification number | 
