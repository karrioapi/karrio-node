'use strict';

const API = require('./generated');

const proxyHandler = {
    get: function (receiver, name) {
        if (typeof receiver[name] !== 'function') return receiver[name];

        return (...args) => {
            let last = [...args].pop();
            let callback = typeof last === 'function' ? last : undefined;
            let params = typeof last === 'function' ? args.slice(args.length, args.length - 1) : [...args];

            // Replace missing arguments with undefined
            if(receiver[name].length - 1 > params.length) {
                let [...arr] = Array(receiver[name].length - params.length - 1);
                params = [...params, ...arr]
            }

            return new Promise((resolve, reject) => {
                receiver[name](...params, callback || ((err, data, response) => {
                    if (err) reject(response.type === 'application/json' ? JSON.parse(response.text) : response.text);
                    else resolve(data);
                }));
            });
        };
    }
};

/**
* Purplship API.
* @module purplship/Purplship
* @version 2020.12.1
*/
class Purplship {

    /**
    * Constructs a new Purplship instance.
    * @alias module:purplship/Purplship
    * @class
    * @param {String} [apiKey] API client implementation to use,
    * @param {String} [host] Optional API client implementation to use,
    * default to {@link module:ApiClient#basePath} if unspecified.
    */
    constructor(apiKey, host = API.ApiClient.instance.basePath) {
        let defaultClient = API.ApiClient.instance;
        defaultClient.basePath = host;
        let Token = defaultClient.authentications['Token'];
        Token.apiKey = apiKey;
        Token.apiKeyPrefix = 'Token';

        this.addresses = new Proxy(new API.AddressesApi(), proxyHandler);
        this.carriers = new Proxy(new API.CarriersApi(), proxyHandler);
        this.customs = new Proxy(new API.CustomsApi(), proxyHandler);
        this.parcels = new Proxy(new API.ParcelsApi(), proxyHandler);
        this.pickups = new Proxy(new API.PickupsApi(), proxyHandler);
        this.rates = new Proxy(new API.RatesApi(), proxyHandler);
        this.shipments = new Proxy(new API.ShipmentsApi(), proxyHandler);
        this.shipping = new Proxy(new API.ShippingApi(), proxyHandler);
        this.tracking = new Proxy(new API.TrackingApi(), proxyHandler);
        this.utils = new Proxy(new API.UtilsApi(), proxyHandler);
    }
}

module.exports = Purplship;

// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Purplship = Purplship;

// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = Purplship;
