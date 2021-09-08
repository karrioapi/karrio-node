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
import Address from './Address';
import Charge from './Charge';
import Parcel from './Parcel';

/**
 * The Pickup model module.
 * @module model/Pickup
 * @version 2021.7
 */
class Pickup {
    /**
     * Constructs a new <code>Pickup</code>.
     * @alias module:model/Pickup
     * @param carrier_name {String} The pickup carrier
     * @param carrier_id {String} The pickup carrier configured name
     * @param confirmation_number {String} The pickup confirmation identifier
     * @param address {module:model/Address} 
     * @param parcels {Array.<module:model/Parcel>} The shipment parcels to pickup.
     * @param test_mode {Boolean} Specified whether it was created with a carrier in test mode
     */
    constructor(carrier_name, carrier_id, confirmation_number, address, parcels, test_mode) { 
        
        Pickup.initialize(this, carrier_name, carrier_id, confirmation_number, address, parcels, test_mode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, carrier_name, carrier_id, confirmation_number, address, parcels, test_mode) { 
        obj['carrier_name'] = carrier_name;
        obj['carrier_id'] = carrier_id;
        obj['confirmation_number'] = confirmation_number;
        obj['address'] = address;
        obj['parcels'] = parcels;
        obj['test_mode'] = test_mode;
    }

    /**
     * Constructs a <code>Pickup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pickup} obj Optional instance to populate.
     * @return {module:model/Pickup} The populated <code>Pickup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pickup();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('carrier_name')) {
                obj['carrier_name'] = ApiClient.convertToType(data['carrier_name'], 'String');
            }
            if (data.hasOwnProperty('carrier_id')) {
                obj['carrier_id'] = ApiClient.convertToType(data['carrier_id'], 'String');
            }
            if (data.hasOwnProperty('confirmation_number')) {
                obj['confirmation_number'] = ApiClient.convertToType(data['confirmation_number'], 'String');
            }
            if (data.hasOwnProperty('pickup_date')) {
                obj['pickup_date'] = ApiClient.convertToType(data['pickup_date'], 'String');
            }
            if (data.hasOwnProperty('pickup_charge')) {
                obj['pickup_charge'] = Charge.constructFromObject(data['pickup_charge']);
            }
            if (data.hasOwnProperty('ready_time')) {
                obj['ready_time'] = ApiClient.convertToType(data['ready_time'], 'String');
            }
            if (data.hasOwnProperty('closing_time')) {
                obj['closing_time'] = ApiClient.convertToType(data['closing_time'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('parcels')) {
                obj['parcels'] = ApiClient.convertToType(data['parcels'], [Parcel]);
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
            if (data.hasOwnProperty('test_mode')) {
                obj['test_mode'] = ApiClient.convertToType(data['test_mode'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * A unique pickup identifier
 * @member {String} id
 */
Pickup.prototype['id'] = undefined;

/**
 * The pickup carrier
 * @member {String} carrier_name
 */
Pickup.prototype['carrier_name'] = undefined;

/**
 * The pickup carrier configured name
 * @member {String} carrier_id
 */
Pickup.prototype['carrier_id'] = undefined;

/**
 * The pickup confirmation identifier
 * @member {String} confirmation_number
 */
Pickup.prototype['confirmation_number'] = undefined;

/**
 * The pickup date
 * @member {String} pickup_date
 */
Pickup.prototype['pickup_date'] = undefined;

/**
 * @member {module:model/Charge} pickup_charge
 */
Pickup.prototype['pickup_charge'] = undefined;

/**
 * The pickup expected ready time
 * @member {String} ready_time
 */
Pickup.prototype['ready_time'] = undefined;

/**
 * The pickup expected closing or late time
 * @member {String} closing_time
 */
Pickup.prototype['closing_time'] = undefined;

/**
 * @member {module:model/Address} address
 */
Pickup.prototype['address'] = undefined;

/**
 * The shipment parcels to pickup.
 * @member {Array.<module:model/Parcel>} parcels
 */
Pickup.prototype['parcels'] = undefined;

/**
 *  The pickup instruction.  eg: Handle with care. 
 * @member {String} instruction
 */
Pickup.prototype['instruction'] = undefined;

/**
 *  The package(s) location.  eg: Behind the entrance door. 
 * @member {String} package_location
 */
Pickup.prototype['package_location'] = undefined;

/**
 * Advanced carrier specific pickup options
 * @member {Object} options
 */
Pickup.prototype['options'] = undefined;

/**
 * Specified whether it was created with a carrier in test mode
 * @member {Boolean} test_mode
 */
Pickup.prototype['test_mode'] = undefined;






export default Pickup;

