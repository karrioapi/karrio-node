import { AddressesApi } from './generated/apis/AddressesApi';
import { APIApi } from './generated/apis/APIApi';
import { CarriersApi } from './generated/apis/CarriersApi';
import { CustomsApi } from './generated/apis/CustomsApi';
import { ParcelsApi } from './generated/apis/ParcelsApi';
import { PickupsApi } from './generated/apis/PickupsApi';
import { ProxyApi } from './generated/apis/ProxyApi';
import { ShipmentsApi } from './generated/apis/ShipmentsApi';
import { TrackersApi } from './generated/apis/TrackersApi';
import { WebhooksApi } from './generated/apis/WebhooksApi';
import { Configuration, ConfigurationParameters } from './generated/runtime';

export * from './generated/runtime';
export * from './generated/models';

export interface PurplshipClientInterface {
    API: APIApi;
    addresses: AddressesApi;
    carriers: CarriersApi;
    customs: CustomsApi;
    parcels: ParcelsApi;
    pickups: PickupsApi;
    proxy: ProxyApi;
    shipments: ShipmentsApi;
    trackers: TrackersApi;
    webhooks: WebhooksApi;
    config: ConfigurationParameters;
}

export class Client implements PurplshipClientInterface {
    API: APIApi;
    addresses: AddressesApi;
    carriers: CarriersApi;
    customs: CustomsApi;
    parcels: ParcelsApi;
    pickups: PickupsApi;
    proxy: ProxyApi;
    shipments: ShipmentsApi;
    trackers: TrackersApi;
    webhooks: WebhooksApi;
    config: ConfigurationParameters;

    constructor(clientConfig: ConfigurationParameters) {
        const config = new Configuration({
            ...(typeof window !== 'undefined' ? {} : { fetchApi: require('node-fetch') }),
            ...clientConfig,
        });

        this.config = clientConfig;
        this.API = new APIApi(config);
        this.addresses = new AddressesApi(config);
        this.carriers = new CarriersApi(config);
        this.customs = new CustomsApi(config);
        this.parcels = new ParcelsApi(config);
        this.pickups = new PickupsApi(config);
        this.proxy = new ProxyApi(config);
        this.shipments = new ShipmentsApi(config);
        this.trackers = new TrackersApi(config);
        this.webhooks = new WebhooksApi(config);
    }
}

export default function Purplship(apiKey: string, host: string = 'https://cloud.purplship.com', apiKeyPrefix: string = 'Token') {
    const clientConfig: ConfigurationParameters = {
        basePath: host,
        apiKey: `${apiKeyPrefix} ${apiKey}`,
    };

    return new Client(clientConfig);
}

Purplship.Client = Client;

module.exports = Purplship;

// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Purplship = Purplship;

// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` 
//in the future, so that Babel users will use the `default` version.
module.exports.default = Purplship;