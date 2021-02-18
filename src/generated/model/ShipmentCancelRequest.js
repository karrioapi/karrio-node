/**
 * Purplship Open Source Multi-carrier Shipping API
 *  Purplship is an open source multi-carrier shipping API that simplifies the integration of logistic carrier services  The **proxy** endpoints are stateless and forwards calls to carriers web services. 
 *
 * OpenAPI spec version: v1-2021.2
 * Contact: hello@purplship.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The ShipmentCancelRequest model module.
* @module model/ShipmentCancelRequest
* @version v1-2021.2
*/
export default class ShipmentCancelRequest {
    /**
    * Constructs a new <code>ShipmentCancelRequest</code>.
    * @alias module:model/ShipmentCancelRequest
    * @class
    * @param shipment_identifier {String} The shipment identifier returned during creation
    */

    constructor(shipment_identifier) {
        
        
        this['shipment_identifier'] = shipment_identifier;
        
    }

    /**
    * Constructs a <code>ShipmentCancelRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ShipmentCancelRequest} obj Optional instance to populate.
    * @return {module:model/ShipmentCancelRequest} The populated <code>ShipmentCancelRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShipmentCancelRequest();
                        
            
            if (data.hasOwnProperty('shipment_identifier')) {
                obj['shipment_identifier'] = ApiClient.convertToType(data['shipment_identifier'], 'String');
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiClient.convertToType(data['service'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], Object);
            }
        }
        return obj;
    }

    /**
    * The shipment identifier returned during creation
    * @member {String} shipment_identifier
    */
    'shipment_identifier' = undefined;
    /**
    * The selected shipment service
    * @member {String} service
    */
    'service' = undefined;
    /**
    * Advanced carrier specific cancellation options
    * @member {Object} options
    */
    'options' = undefined;




}
