/**
 * Purplship API
 *  ## API Reference  Purplship is an open source multi-carrier shipping API that simplifies the integration of logistic carrier services.  The Purplship API is organized around REST. Our API has predictable resource-oriented URLs, accepts JSON-encoded  request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.  The Purplship API differs for every account as we release new versions. These docs are customized to your version of the API.   ## Versioning  When backwards-incompatible changes are made to the API, a new, dated version is released.  The current version is `2021.7`.   Read our API changelog and to learn more about backwards compatibility.  As a precaution, use API versioning to check a new API version before committing to an upgrade.   ## Pagination  All top-level API resources have support for bulk fetches via \"list\" API methods. For instance, you can list addresses,  list shipments, and list trackers. These list API methods share a common structure, taking at least these  two parameters: limit, and offset.  Purplship utilizes offset-based pagination via the offset and limit parameters. Both parameters take a number as value (see below) and return objects in reverse chronological order.  The offset parameter returns objects listed after an index.  The limit parameter take a limit on the number of objects to be returned from 1 to 100.   ```json {     \"next\": \"/v1/shipments?limit=25&offset=25\",     \"previous\": \"/v1/shipments?limit=25&offset=25\",     \"results\": [     ] } ```  ## Environments  The Purplship API offer the possibility to create and retrieve certain objects in `test_mode`. In development, it is therefore possible to add carrier connections, get live rates,  buy labels, create trackers and schedule pickups in `test_mode`.  
 *
 * The version of the OpenAPI document: 2021.7
 * Contact: hello@purplship.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AddressData from './AddressData';
import ParcelData from './ParcelData';

/**
 * The PickupRequest model module.
 * @module model/PickupRequest
 * @version 2021.7
 */
class PickupRequest {
    /**
     * Constructs a new <code>PickupRequest</code>.
     * @alias module:model/PickupRequest
     * @param pickup_date {String}  The expected pickup date  Date Format: `YYYY-MM-DD` 
     * @param address {module:model/AddressData} 
     * @param parcels {Array.<module:model/ParcelData>} The shipment parcels to pickup.
     * @param ready_time {String}  The ready time for pickup.  Time Format: `HH:MM` 
     * @param closing_time {String}  The closing or late time of the pickup  Time Format: `HH:MM` 
     */
    constructor(pickup_date, address, parcels, ready_time, closing_time) { 
        
        PickupRequest.initialize(this, pickup_date, address, parcels, ready_time, closing_time);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pickup_date, address, parcels, ready_time, closing_time) { 
        obj['pickup_date'] = pickup_date;
        obj['address'] = address;
        obj['parcels'] = parcels;
        obj['ready_time'] = ready_time;
        obj['closing_time'] = closing_time;
    }

    /**
     * Constructs a <code>PickupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PickupRequest} obj Optional instance to populate.
     * @return {module:model/PickupRequest} The populated <code>PickupRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PickupRequest();

            if (data.hasOwnProperty('pickup_date')) {
                obj['pickup_date'] = ApiClient.convertToType(data['pickup_date'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = AddressData.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('parcels')) {
                obj['parcels'] = ApiClient.convertToType(data['parcels'], [ParcelData]);
            }
            if (data.hasOwnProperty('ready_time')) {
                obj['ready_time'] = ApiClient.convertToType(data['ready_time'], 'String');
            }
            if (data.hasOwnProperty('closing_time')) {
                obj['closing_time'] = ApiClient.convertToType(data['closing_time'], 'String');
            }
            if (data.hasOwnProperty('instruction')) {
                obj['instruction'] = ApiClient.convertToType(data['instruction'], 'String');
            }
            if (data.hasOwnProperty('package_location')) {
                obj['package_location'] = ApiClient.convertToType(data['package_location'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], Object);
            }
        }
        return obj;
    }


}

/**
 *  The expected pickup date  Date Format: `YYYY-MM-DD` 
 * @member {String} pickup_date
 */
PickupRequest.prototype['pickup_date'] = undefined;

/**
 * @member {module:model/AddressData} address
 */
PickupRequest.prototype['address'] = undefined;

/**
 * The shipment parcels to pickup.
 * @member {Array.<module:model/ParcelData>} parcels
 */
PickupRequest.prototype['parcels'] = undefined;

/**
 *  The ready time for pickup.  Time Format: `HH:MM` 
 * @member {String} ready_time
 */
PickupRequest.prototype['ready_time'] = undefined;

/**
 *  The closing or late time of the pickup  Time Format: `HH:MM` 
 * @member {String} closing_time
 */
PickupRequest.prototype['closing_time'] = undefined;

/**
 *  The pickup instruction.  eg: Handle with care. 
 * @member {String} instruction
 */
PickupRequest.prototype['instruction'] = undefined;

/**
 *  The package(s) location.  eg: Behind the entrance door. 
 * @member {String} package_location
 */
PickupRequest.prototype['package_location'] = undefined;

/**
 * Advanced carrier specific pickup options
 * @member {Object} options
 */
PickupRequest.prototype['options'] = undefined;






export default PickupRequest;

