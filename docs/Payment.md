# PurplshipApi.Payment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paid_by** | **String** | The payor type | [optional] [default to &#39;sender&#39;]
**currency** | **String** | The payment amount currency | [optional] 
**account_number** | **String** | The payor account number | [optional] 



## Enum: PaidByEnum


* `sender` (value: `"sender"`)

* `recipient` (value: `"recipient"`)

* `third_party` (value: `"third_party"`)





## Enum: CurrencyEnum


* `EUR` (value: `"EUR"`)

* `AED` (value: `"AED"`)

* `USD` (value: `"USD"`)

* `XCD` (value: `"XCD"`)

* `AMD` (value: `"AMD"`)

* `ANG` (value: `"ANG"`)

* `AOA` (value: `"AOA"`)

* `ARS` (value: `"ARS"`)

* `AUD` (value: `"AUD"`)

* `AWG` (value: `"AWG"`)

* `AZN` (value: `"AZN"`)

* `BAM` (value: `"BAM"`)

* `BBD` (value: `"BBD"`)

* `BDT` (value: `"BDT"`)

* `XOF` (value: `"XOF"`)

* `BGN` (value: `"BGN"`)

* `BHD` (value: `"BHD"`)

* `BIF` (value: `"BIF"`)

* `BMD` (value: `"BMD"`)

* `BND` (value: `"BND"`)

* `BOB` (value: `"BOB"`)

* `BRL` (value: `"BRL"`)

* `BSD` (value: `"BSD"`)

* `BTN` (value: `"BTN"`)

* `BWP` (value: `"BWP"`)

* `BYN` (value: `"BYN"`)

* `BZD` (value: `"BZD"`)

* `CAD` (value: `"CAD"`)

* `CDF` (value: `"CDF"`)

* `XAF` (value: `"XAF"`)

* `CHF` (value: `"CHF"`)

* `NZD` (value: `"NZD"`)

* `CLP` (value: `"CLP"`)

* `CNY` (value: `"CNY"`)

* `COP` (value: `"COP"`)

* `CRC` (value: `"CRC"`)

* `CUC` (value: `"CUC"`)

* `CVE` (value: `"CVE"`)

* `CZK` (value: `"CZK"`)

* `DJF` (value: `"DJF"`)

* `DKK` (value: `"DKK"`)

* `DOP` (value: `"DOP"`)

* `DZD` (value: `"DZD"`)

* `EGP` (value: `"EGP"`)

* `ERN` (value: `"ERN"`)

* `ETB` (value: `"ETB"`)

* `FJD` (value: `"FJD"`)

* `GBP` (value: `"GBP"`)

* `GEL` (value: `"GEL"`)

* `GHS` (value: `"GHS"`)

* `GMD` (value: `"GMD"`)

* `GNF` (value: `"GNF"`)

* `GTQ` (value: `"GTQ"`)

* `GYD` (value: `"GYD"`)

* `HKD` (value: `"HKD"`)

* `HNL` (value: `"HNL"`)

* `HRK` (value: `"HRK"`)

* `HTG` (value: `"HTG"`)

* `HUF` (value: `"HUF"`)

* `IDR` (value: `"IDR"`)

* `ILS` (value: `"ILS"`)

* `INR` (value: `"INR"`)

* `IRR` (value: `"IRR"`)

* `ISK` (value: `"ISK"`)

* `JMD` (value: `"JMD"`)

* `JOD` (value: `"JOD"`)

* `JPY` (value: `"JPY"`)

* `KES` (value: `"KES"`)

* `KGS` (value: `"KGS"`)

* `KHR` (value: `"KHR"`)

* `KMF` (value: `"KMF"`)

* `KPW` (value: `"KPW"`)

* `KRW` (value: `"KRW"`)

* `KWD` (value: `"KWD"`)

* `KYD` (value: `"KYD"`)

* `KZT` (value: `"KZT"`)

* `LAK` (value: `"LAK"`)

* `LKR` (value: `"LKR"`)

* `LRD` (value: `"LRD"`)

* `LSL` (value: `"LSL"`)

* `LYD` (value: `"LYD"`)

* `MAD` (value: `"MAD"`)

* `MDL` (value: `"MDL"`)

* `MGA` (value: `"MGA"`)

* `MKD` (value: `"MKD"`)

* `MMK` (value: `"MMK"`)

* `MNT` (value: `"MNT"`)

* `MOP` (value: `"MOP"`)

* `MRO` (value: `"MRO"`)

* `MUR` (value: `"MUR"`)

* `MVR` (value: `"MVR"`)

* `MWK` (value: `"MWK"`)

* `MXN` (value: `"MXN"`)

* `MYR` (value: `"MYR"`)

* `MZN` (value: `"MZN"`)

* `NAD` (value: `"NAD"`)

* `XPF` (value: `"XPF"`)

* `NGN` (value: `"NGN"`)

* `NIO` (value: `"NIO"`)

* `NOK` (value: `"NOK"`)

* `NPR` (value: `"NPR"`)

* `OMR` (value: `"OMR"`)

* `PEN` (value: `"PEN"`)

* `PGK` (value: `"PGK"`)

* `PHP` (value: `"PHP"`)

* `PKR` (value: `"PKR"`)

* `PLN` (value: `"PLN"`)

* `PYG` (value: `"PYG"`)

* `QAR` (value: `"QAR"`)

* `RSD` (value: `"RSD"`)

* `RUB` (value: `"RUB"`)

* `RWF` (value: `"RWF"`)

* `SAR` (value: `"SAR"`)

* `SBD` (value: `"SBD"`)

* `SCR` (value: `"SCR"`)

* `SDG` (value: `"SDG"`)

* `SEK` (value: `"SEK"`)

* `SGD` (value: `"SGD"`)

* `SHP` (value: `"SHP"`)

* `SLL` (value: `"SLL"`)

* `SOS` (value: `"SOS"`)

* `SRD` (value: `"SRD"`)

* `SSP` (value: `"SSP"`)

* `STD` (value: `"STD"`)

* `SYP` (value: `"SYP"`)

* `SZL` (value: `"SZL"`)

* `THB` (value: `"THB"`)

* `TJS` (value: `"TJS"`)

* `TND` (value: `"TND"`)

* `TOP` (value: `"TOP"`)

* `TRY` (value: `"TRY"`)

* `TTD` (value: `"TTD"`)

* `TWD` (value: `"TWD"`)

* `TZS` (value: `"TZS"`)

* `UAH` (value: `"UAH"`)

* `UYU` (value: `"UYU"`)

* `UZS` (value: `"UZS"`)

* `VEF` (value: `"VEF"`)

* `VND` (value: `"VND"`)

* `VUV` (value: `"VUV"`)

* `WST` (value: `"WST"`)

* `YER` (value: `"YER"`)

* `ZAR` (value: `"ZAR"`)




