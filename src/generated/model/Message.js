/**
 * Purplship Open Source Multi-carrier Shipping API
 *  Purplship is an open source multi-carrier shipping API that simplifies the integration of logistic carrier services  The **proxy** endpoints are stateless and forwards calls to carriers web services. 
 *
 * OpenAPI spec version: v1-2021.0
 * Contact: hello@purplship.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The Message model module.
* @module model/Message
* @version v1-2021.0
*/
export default class Message {
    /**
    * Constructs a new <code>Message</code>.
    * The list of error messages
    * @alias module:model/Message
    * @class
    * @param carrier_name {String} The targeted carrier
    * @param carrier_id {String} The targeted carrier name (unique identifier)
    */

    constructor(carrier_name, carrier_id) {
        
        
        this['carrier_name'] = carrier_name;
        this['carrier_id'] = carrier_id;
        
    }

    /**
    * Constructs a <code>Message</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Message} obj Optional instance to populate.
    * @return {module:model/Message} The populated <code>Message</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Message();
                        
            
            if (data.hasOwnProperty('carrier_name')) {
                obj['carrier_name'] = ApiClient.convertToType(data['carrier_name'], 'String');
            }
            if (data.hasOwnProperty('carrier_id')) {
                obj['carrier_id'] = ApiClient.convertToType(data['carrier_id'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
    * The targeted carrier
    * @member {String} carrier_name
    */
    'carrier_name' = undefined;
    /**
    * The targeted carrier name (unique identifier)
    * @member {String} carrier_id
    */
    'carrier_id' = undefined;
    /**
    * The error or warning message
    * @member {String} message
    */
    'message' = undefined;
    /**
    * The message code
    * @member {String} code
    */
    'code' = undefined;
    /**
    * any additional details
    * @member {Object.<String, String>} details
    */
    'details' = undefined;




}
