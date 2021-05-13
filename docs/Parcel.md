# PurplshipApi.Parcel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identifier | [optional] 
**weight** | **Number** | The parcel&#39;s weight | 
**width** | **Number** | The parcel&#39;s width | [optional] 
**height** | **Number** | The parcel&#39;s height | [optional] 
**length** | **Number** | The parcel&#39;s length | [optional] 
**packaging_type** | **String** |  The parcel&#39;s packaging type.  **Note that the packaging is optional when using a package preset**  values: &lt;br/&gt;- **envelope**&lt;br/&gt;- **pak**&lt;br/&gt;- **tube**&lt;br/&gt;- **pallet**&lt;br/&gt;- **small_box**&lt;br/&gt;- **medium_box**&lt;br/&gt;- **your_packaging**  For specific carriers packaging type, please consult [the reference](#operation/references).  | [optional] 
**package_preset** | **String** |  The parcel&#39;s package preset.  For specific carriers package preset, please consult [the reference](#operation/references).  | [optional] 
**description** | **String** | The parcel&#39;s description | [optional] 
**content** | **String** | The parcel&#39;s content description | [optional] 
**is_document** | **Boolean** | Indicates if the parcel is composed of documents only | [optional] [default to false]
**weight_unit** | **String** | The parcel&#39;s weight unit | 
**dimension_unit** | **String** | The parcel&#39;s dimension unit | [optional] 



## Enum: WeightUnitEnum


* `KG` (value: `"KG"`)

* `LB` (value: `"LB"`)





## Enum: DimensionUnitEnum


* `CM` (value: `"CM"`)

* `IN` (value: `"IN"`)




