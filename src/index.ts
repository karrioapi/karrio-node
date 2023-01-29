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
import { OrdersApi } from './generated/apis/OrdersApi';
import { BatchesApi } from './generated/apis/BatchesApi';
import { DocumentsApi } from './generated/apis/DocumentsApi';
import { Configuration, ConfigurationParameters } from './generated/runtime';

export * from './generated/runtime';
export * from './generated/models';

export interface KarrioClientInterface {
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
    orders: OrdersApi;
    batches: BatchesApi;
    documents: DocumentsApi;
    config: ConfigurationParameters;
}

export class Client implements KarrioClientInterface {
    API: APIApi;
    addresses: AddressesApi;
    carriers: CarriersApi;
    customs: CustomsApi;
    parcels: ParcelsApi;
    pickups: PickupsApi;
    proxy: ProxyApi;
    orders: OrdersApi;
    shipments: ShipmentsApi;
    trackers: TrackersApi;
    webhooks: WebhooksApi;
    batches: BatchesApi;
    documents: DocumentsApi;
    config: ConfigurationParameters;

    constructor(clientConfig: ConfigurationParameters) {
        const config = new Configuration({
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            ...clientConfig,
            ...(typeof window !== 'undefined' ? {} : { fetchApi: require('node-fetch') }),
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
        this.orders = new OrdersApi(config);
        this.batches = new BatchesApi(config);
        this.documents = new DocumentsApi(config);
    }
}

export default function Karrio(apiKey: string, host: string = 'https://api.karrio.io', apiKeyPrefix: string = 'Token') {
    const clientConfig: ConfigurationParameters = {
        basePath: host,
        apiKey: `${apiKeyPrefix} ${apiKey}`,
    };

    return new Client(clientConfig);
}

Karrio.Client = Client;

module.exports = Karrio;

// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Karrio = Karrio;

// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` 
//in the future, so that Babel users will use the `default` version.
module.exports.default = Karrio;