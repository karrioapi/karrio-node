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
* The PickupCancelData model module.
* @module model/PickupCancelData
* @version v1-2021.0
*/
export default class PickupCancelData {
    /**
    * Constructs a new <code>PickupCancelData</code>.
    * @alias module:model/PickupCancelData
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PickupCancelData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PickupCancelData} obj Optional instance to populate.
    * @return {module:model/PickupCancelData} The populated <code>PickupCancelData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PickupCancelData();
                        
            
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
        }
        return obj;
    }

    /**
    * The reason of the pickup cancellation
    * @member {String} reason
    */
    'reason' = undefined;




}
