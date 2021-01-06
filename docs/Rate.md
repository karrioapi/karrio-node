# Rate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identifier | [optional] 
**carrier_name** | **String** | The rate&#x27;s carrier | 
**carrier_id** | **String** | The targeted carrier&#x27;s name (unique identifier) | 
**currency** | **String** | The rate monetary values currency code | 
**service** | **String** | The carrier&#x27;s rate (quote) service | [optional] 
**discount** | **Number** | The monetary amount of the discount on the rate | [optional] 
**base_charge** | **Number** |  The rate&#x27;s monetary amount of the base charge. This is the net amount of the rate before additional charges  | [optional] 
**total_charge** | **Number** |  The rate&#x27;s monetary amount of the total charge. This is the gross amount of the rate after adding the additional charges  | [optional] 
**duties_and_taxes** | **Number** | The monetary amount of the duties and taxes if applied | [optional] 
**transit_days** | **Number** | The estimated delivery transit days | [optional] 
**extra_charges** | [**[Charge]**](Charge.md) | list of the rate&#x27;s additional charges | [optional] 
**meta** | **Object** | provider specific metadata | [optional] 
**carrier_ref** | **String** | The system carrier configuration id | [optional] 
**test_mode** | **Boolean** | Specified whether it was created with a carrier in test mode | 
