# PurplshipApi.Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | The URL of the webhook endpoint. | 
**description** | **String** | An optional description of what the webhook is used for. | [optional] 
**enabled_events** | **[String]** | The list of events to enable for this endpoint. | 
**test_mode** | **Boolean** | Specified whether it was created with a carrier in test mode | 
**disabled** | **Boolean** | Indicates that the webhook is disabled | [optional] 
**id** | **String** | A unique identifier | [optional] 
**last_event_at** | **Date** | The datetime of the last event sent. | [optional] 



## Enum: [EnabledEventsEnum]


* `all` (value: `"all"`)

* `shipment.purchased` (value: `"shipment.purchased"`)

* `shipment.cancelled` (value: `"shipment.cancelled"`)

* `shipment.fulfilled` (value: `"shipment.fulfilled"`)

* `tracker.created` (value: `"tracker.created"`)

* `tracker.updated` (value: `"tracker.updated"`)




