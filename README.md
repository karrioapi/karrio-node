# Purplship Node.js Library

Purplship is a Multi-carrier Shipping API that simplifies the integration of logistic carrier services.

Visit [purplship.com](https://purplship.com) to deploy your private cloud multi-carrier shipping API.

## Documentation

See the full [Node API docs](https://docs.purplship.com).

## Installation

Install using [npm](https://www.npmjs.com/package/npm) or [yarn](https://yarnpkg.com/)

```bash
npm i purplship
# or 
yarn add purplship
```

## Usage

The package needs to be configured with your account's API key, which is available in the Purplship Dashboard.

```javascript
const Purplship = require('purplship');
const purplship = new Purplship('API_KEY', 'https://instance.purplship.api');

purplship.carriers.list()
    .then(carriers => console.log(carriers))
    .catch(error => console.error(error));
```

Or using ES modules and `async`/`await`:

```javascript
import Purplship from 'purplship';
const purplship = new Purplship('API_KEY', 'https://instance.purplship.api');

(async () => {
  const carriers = await purplship.carriers.list();

  console.log(carriers);
})();
```

## Documentation for Models

- [AccessToken](docs/AccessToken.md)
- [Address](docs/Address.md)
- [AddressData](docs/AddressData.md)
- [AddressList](docs/AddressList.md)
- [AddressValidation](docs/AddressValidation.md)
- [CarrierList](docs/CarrierList.md)
- [CarrierSettings](docs/CarrierSettings.md)
- [Charge](docs/Charge.md)
- [Commodity](docs/Commodity.md)
- [CommodityData](docs/CommodityData.md)
- [Customs](docs/Customs.md)
- [CustomsData](docs/CustomsData.md)
- [CustomsList](docs/CustomsList.md)
- [Duty](docs/Duty.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [Message](docs/Message.md)
- [Operation](docs/Operation.md)
- [OperationConfirmation](docs/OperationConfirmation.md)
- [OperationResponse](docs/OperationResponse.md)
- [Parcel](docs/Parcel.md)
- [ParcelData](docs/ParcelData.md)
- [ParcelList](docs/ParcelList.md)
- [Payment](docs/Payment.md)
- [Pickup](docs/Pickup.md)
- [PickupCancelData](docs/PickupCancelData.md)
- [PickupCancelRequest](docs/PickupCancelRequest.md)
- [PickupData](docs/PickupData.md)
- [PickupList](docs/PickupList.md)
- [PickupRequest](docs/PickupRequest.md)
- [PickupResponse](docs/PickupResponse.md)
- [PickupUpdateData](docs/PickupUpdateData.md)
- [PickupUpdateRequest](docs/PickupUpdateRequest.md)
- [Rate](docs/Rate.md)
- [RateRequest](docs/RateRequest.md)
- [RateResponse](docs/RateResponse.md)
- [References](docs/References.md)
- [Shipment](docs/Shipment.md)
- [ShipmentCancelRequest](docs/ShipmentCancelRequest.md)
- [ShipmentData](docs/ShipmentData.md)
- [ShipmentList](docs/ShipmentList.md)
- [ShipmentPurchaseData](docs/ShipmentPurchaseData.md)
- [ShippingRequest](docs/ShippingRequest.md)
- [TokenObtainPair](docs/TokenObtainPair.md)
- [TokenPair](docs/TokenPair.md)
- [TokenRefresh](docs/TokenRefresh.md)
- [TokenVerify](docs/TokenVerify.md)
- [TrackerList](docs/TrackerList.md)
- [TrackingEvent](docs/TrackingEvent.md)
- [TrackingResponse](docs/TrackingResponse.md)
- [TrackingStatus](docs/TrackingStatus.md)
- [Webhook](docs/Webhook.md)
- [WebhookData](docs/WebhookData.md)
- [WebhookList](docs/WebhookList.md)

## Author

Purplship Team | hello@purplship.com | [purplship.com](https://purplship.com)
Daniel K| danielk.developer@gmail.com | [danielk.xyz](https://danielk.xyz)
