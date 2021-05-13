# PurplshipApi.Address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identifier | [optional] 
**postal_code** | **String** |  The address postal code  **(required for shipment purchase)**  | [optional] 
**city** | **String** |  The address city.  **(required for shipment purchase)**  | [optional] 
**federal_tax_id** | **String** | The party frederal tax id | [optional] 
**state_tax_id** | **String** | The party state id | [optional] 
**person_name** | **String** |  attention to  **(required for shipment purchase)**  | [optional] 
**company_name** | **String** | The company name if the party is a company | [optional] 
**country_code** | **String** | The address country code | 
**email** | **String** | The party email | [optional] 
**phone_number** | **String** | The party phone number. | [optional] 
**state_code** | **String** | The address state code | [optional] 
**suburb** | **String** | The address suburb if known | [optional] 
**residential** | **Boolean** | Indicate if the address is residential or commercial (enterprise) | [optional] [default to false]
**address_line1** | **String** |  The address line with street number &lt;br/&gt; **(required for shipment purchase)**  | [optional] 
**address_line2** | **String** | The address line with suite number | [optional] 
**validate_location** | **Boolean** | Indicate if the address should be validated | [optional] [default to false]
**validation** | [**AddressValidation**](AddressValidation.md) |  | [optional] 



## Enum: CountryCodeEnum


* `AD` (value: `"AD"`)

* `AE` (value: `"AE"`)

* `AF` (value: `"AF"`)

* `AG` (value: `"AG"`)

* `AI` (value: `"AI"`)

* `AL` (value: `"AL"`)

* `AM` (value: `"AM"`)

* `AN` (value: `"AN"`)

* `AO` (value: `"AO"`)

* `AR` (value: `"AR"`)

* `AS` (value: `"AS"`)

* `AT` (value: `"AT"`)

* `AU` (value: `"AU"`)

* `AW` (value: `"AW"`)

* `AZ` (value: `"AZ"`)

* `BA` (value: `"BA"`)

* `BB` (value: `"BB"`)

* `BD` (value: `"BD"`)

* `BE` (value: `"BE"`)

* `BF` (value: `"BF"`)

* `BG` (value: `"BG"`)

* `BH` (value: `"BH"`)

* `BI` (value: `"BI"`)

* `BJ` (value: `"BJ"`)

* `BM` (value: `"BM"`)

* `BN` (value: `"BN"`)

* `BO` (value: `"BO"`)

* `BR` (value: `"BR"`)

* `BS` (value: `"BS"`)

* `BT` (value: `"BT"`)

* `BW` (value: `"BW"`)

* `BY` (value: `"BY"`)

* `BZ` (value: `"BZ"`)

* `CA` (value: `"CA"`)

* `CD` (value: `"CD"`)

* `CF` (value: `"CF"`)

* `CG` (value: `"CG"`)

* `CH` (value: `"CH"`)

* `CI` (value: `"CI"`)

* `CK` (value: `"CK"`)

* `CL` (value: `"CL"`)

* `CM` (value: `"CM"`)

* `CN` (value: `"CN"`)

* `CO` (value: `"CO"`)

* `CR` (value: `"CR"`)

* `CU` (value: `"CU"`)

* `CV` (value: `"CV"`)

* `CY` (value: `"CY"`)

* `CZ` (value: `"CZ"`)

* `DE` (value: `"DE"`)

* `DJ` (value: `"DJ"`)

* `DK` (value: `"DK"`)

* `DM` (value: `"DM"`)

* `DO` (value: `"DO"`)

* `DZ` (value: `"DZ"`)

* `EC` (value: `"EC"`)

* `EE` (value: `"EE"`)

* `EG` (value: `"EG"`)

* `ER` (value: `"ER"`)

* `ES` (value: `"ES"`)

* `ET` (value: `"ET"`)

* `FI` (value: `"FI"`)

* `FJ` (value: `"FJ"`)

* `FK` (value: `"FK"`)

* `FM` (value: `"FM"`)

* `FO` (value: `"FO"`)

* `FR` (value: `"FR"`)

* `GA` (value: `"GA"`)

* `GB` (value: `"GB"`)

* `GD` (value: `"GD"`)

* `GE` (value: `"GE"`)

* `GF` (value: `"GF"`)

* `GG` (value: `"GG"`)

* `GH` (value: `"GH"`)

* `GI` (value: `"GI"`)

* `GL` (value: `"GL"`)

* `GM` (value: `"GM"`)

* `GN` (value: `"GN"`)

* `GP` (value: `"GP"`)

* `GQ` (value: `"GQ"`)

* `GR` (value: `"GR"`)

* `GT` (value: `"GT"`)

* `GU` (value: `"GU"`)

* `GW` (value: `"GW"`)

* `GY` (value: `"GY"`)

* `HK` (value: `"HK"`)

* `HN` (value: `"HN"`)

* `HR` (value: `"HR"`)

* `HT` (value: `"HT"`)

* `HU` (value: `"HU"`)

* `IC` (value: `"IC"`)

* `ID` (value: `"ID"`)

* `IE` (value: `"IE"`)

* `IL` (value: `"IL"`)

* `IN` (value: `"IN"`)

* `IQ` (value: `"IQ"`)

* `IR` (value: `"IR"`)

* `IS` (value: `"IS"`)

* `IT` (value: `"IT"`)

* `JE` (value: `"JE"`)

* `JM` (value: `"JM"`)

* `JO` (value: `"JO"`)

* `JP` (value: `"JP"`)

* `KE` (value: `"KE"`)

* `KG` (value: `"KG"`)

* `KH` (value: `"KH"`)

* `KI` (value: `"KI"`)

* `KM` (value: `"KM"`)

* `KN` (value: `"KN"`)

* `KP` (value: `"KP"`)

* `KR` (value: `"KR"`)

* `KV` (value: `"KV"`)

* `KW` (value: `"KW"`)

* `KY` (value: `"KY"`)

* `KZ` (value: `"KZ"`)

* `LA` (value: `"LA"`)

* `LB` (value: `"LB"`)

* `LC` (value: `"LC"`)

* `LI` (value: `"LI"`)

* `LK` (value: `"LK"`)

* `LR` (value: `"LR"`)

* `LS` (value: `"LS"`)

* `LT` (value: `"LT"`)

* `LU` (value: `"LU"`)

* `LV` (value: `"LV"`)

* `LY` (value: `"LY"`)

* `MA` (value: `"MA"`)

* `MC` (value: `"MC"`)

* `MD` (value: `"MD"`)

* `ME` (value: `"ME"`)

* `MG` (value: `"MG"`)

* `MH` (value: `"MH"`)

* `MK` (value: `"MK"`)

* `ML` (value: `"ML"`)

* `MM` (value: `"MM"`)

* `MN` (value: `"MN"`)

* `MO` (value: `"MO"`)

* `MP` (value: `"MP"`)

* `MQ` (value: `"MQ"`)

* `MR` (value: `"MR"`)

* `MS` (value: `"MS"`)

* `MT` (value: `"MT"`)

* `MU` (value: `"MU"`)

* `MV` (value: `"MV"`)

* `MW` (value: `"MW"`)

* `MX` (value: `"MX"`)

* `MY` (value: `"MY"`)

* `MZ` (value: `"MZ"`)

* `NA` (value: `"NA"`)

* `NC` (value: `"NC"`)

* `NE` (value: `"NE"`)

* `NG` (value: `"NG"`)

* `NI` (value: `"NI"`)

* `NL` (value: `"NL"`)

* `NO` (value: `"NO"`)

* `NP` (value: `"NP"`)

* `NR` (value: `"NR"`)

* `NU` (value: `"NU"`)

* `NZ` (value: `"NZ"`)

* `OM` (value: `"OM"`)

* `PA` (value: `"PA"`)

* `PE` (value: `"PE"`)

* `PF` (value: `"PF"`)

* `PG` (value: `"PG"`)

* `PH` (value: `"PH"`)

* `PK` (value: `"PK"`)

* `PL` (value: `"PL"`)

* `PR` (value: `"PR"`)

* `PT` (value: `"PT"`)

* `PW` (value: `"PW"`)

* `PY` (value: `"PY"`)

* `QA` (value: `"QA"`)

* `RE` (value: `"RE"`)

* `RO` (value: `"RO"`)

* `RS` (value: `"RS"`)

* `RU` (value: `"RU"`)

* `RW` (value: `"RW"`)

* `SA` (value: `"SA"`)

* `SB` (value: `"SB"`)

* `SC` (value: `"SC"`)

* `SD` (value: `"SD"`)

* `SE` (value: `"SE"`)

* `SG` (value: `"SG"`)

* `SH` (value: `"SH"`)

* `SI` (value: `"SI"`)

* `SK` (value: `"SK"`)

* `SL` (value: `"SL"`)

* `SM` (value: `"SM"`)

* `SN` (value: `"SN"`)

* `SO` (value: `"SO"`)

* `SR` (value: `"SR"`)

* `SS` (value: `"SS"`)

* `ST` (value: `"ST"`)

* `SV` (value: `"SV"`)

* `SY` (value: `"SY"`)

* `SZ` (value: `"SZ"`)

* `TC` (value: `"TC"`)

* `TD` (value: `"TD"`)

* `TG` (value: `"TG"`)

* `TH` (value: `"TH"`)

* `TJ` (value: `"TJ"`)

* `TL` (value: `"TL"`)

* `TN` (value: `"TN"`)

* `TO` (value: `"TO"`)

* `TR` (value: `"TR"`)

* `TT` (value: `"TT"`)

* `TV` (value: `"TV"`)

* `TW` (value: `"TW"`)

* `TZ` (value: `"TZ"`)

* `UA` (value: `"UA"`)

* `UG` (value: `"UG"`)

* `US` (value: `"US"`)

* `UY` (value: `"UY"`)

* `UZ` (value: `"UZ"`)

* `VA` (value: `"VA"`)

* `VC` (value: `"VC"`)

* `VE` (value: `"VE"`)

* `VG` (value: `"VG"`)

* `VI` (value: `"VI"`)

* `VN` (value: `"VN"`)

* `VU` (value: `"VU"`)

* `WS` (value: `"WS"`)

* `XB` (value: `"XB"`)

* `XC` (value: `"XC"`)

* `XE` (value: `"XE"`)

* `XM` (value: `"XM"`)

* `XN` (value: `"XN"`)

* `XS` (value: `"XS"`)

* `XY` (value: `"XY"`)

* `YE` (value: `"YE"`)

* `YT` (value: `"YT"`)

* `ZA` (value: `"ZA"`)

* `ZM` (value: `"ZM"`)

* `ZW` (value: `"ZW"`)




