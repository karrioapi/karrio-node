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

/**
 * The PickupUpdateData model module.
 * @module model/PickupUpdateData
 * @version 2021.7
 */
class PickupUpdateData {
    /**
     * Constructs a new <code>PickupUpdateData</code>.
     * @alias module:model/PickupUpdateData
     * @param confirmation_number {String} pickup identification number
     */
    constructor(confirmation_number) { 
        
        PickupUpdateData.initialize(this, confirmation_number);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, confirmation_number) { 
        obj['confirmation_number'] = confirmation_number;
    }

    /**
     * Constructs a <code>PickupUpdateData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PickupUpdateData} obj Optional instance to populate.
     * @return {module:model/PickupUpdateData} The populated <code>PickupUpdateData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PickupUpdateData();

            if (data.hasOwnProperty('pickup_date')) {
                obj['pickup_date'] = ApiClient.convertToType(data['pickup_date'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = AddressData.constructFromObject(data['address']);
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
            if (data.hasOwnProperty('tracking_numbers')) {
                obj['tracking_numbers'] = ApiClient.convertToType(data['tracking_numbers'], ['String']);
            }
            if (data.hasOwnProperty('confirmation_number')) {
                obj['confirmation_number'] = ApiClient.convertToType(data['confirmation_number'], 'String');
            }
        }
        return obj;
    }


}

/**
 *  The expected pickup date  Date Format: YYYY-MM-DD 
 * @member {String} pickup_date
 */
PickupUpdateData.prototype['pickup_date'] = undefined;

/**
 * @member {module:model/AddressData} address
 */
PickupUpdateData.prototype['address'] = undefined;

/**
 * The ready time for pickup.
 * @member {String} ready_time
 */
PickupUpdateData.prototype['ready_time'] = undefined;

/**
 * The closing or late time of the pickup
 * @member {String} closing_time
 */
PickupUpdateData.prototype['closing_time'] = undefined;

/**
 *  The pickup instruction.  eg: Handle with care. 
 * @member {String} instruction
 */
PickupUpdateData.prototype['instruction'] = undefined;

/**
 *  The package(s) location.  eg: Behind the entrance door. 
 * @member {String} package_location
 */
PickupUpdateData.prototype['package_location'] = undefined;

/**
 * Advanced carrier specific pickup options
 * @member {Object} options
 */
PickupUpdateData.prototype['options'] = undefined;

/**
 * The list of shipments to be picked up
 * @member {Array.<String>} tracking_numbers
 */
PickupUpdateData.prototype['tracking_numbers'] = undefined;

/**
 * pickup identification number
 * @member {String} confirmation_number
 */
PickupUpdateData.prototype['confirmation_number'] = undefined;






export default PickupUpdateData;

