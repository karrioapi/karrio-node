# PurplshipOpenSourceMultiCarrierShippingApi.Pickup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique pickup identifier | [optional] 
**carrier_name** | **String** | The pickup carrier | 
**carrier_id** | **String** | The pickup carrier configured name | 
**confirmation_number** | **String** | The pickup confirmation identifier | 
**pickup_date** | **String** | The pickup date | [optional] 
**pickup_charge** | [**Charge**](Charge.md) |  | [optional] 
**ready_time** | **String** | The pickup expected ready time | [optional] 
**closing_time** | **String** | The pickup expected closing or late time | [optional] 
**address** | [**Address**](Address.md) |  | 
**parcels** | [**[Parcel]**](Parcel.md) | The shipment parcels to pickup. | 
**instruction** | **String** |  The pickup instruction.  eg: Handle with care.  | [optional] 
**package_location** | **String** |  The package(s) location.  eg: Behind the entrance door.  | [optional] 
**options** | **Object** | Advanced carrier specific pickup options | [optional] 
**test_mode** | **Boolean** | Specified whether it was created with a carrier in test mode | 
