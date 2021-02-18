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
import Message from './Message';
import TrackingStatus from './TrackingStatus';

/**
* The TrackingResponse model module.
* @module model/TrackingResponse
* @version v1-2021.2
*/
export default class TrackingResponse {
    /**
    * Constructs a new <code>TrackingResponse</code>.
    * @alias module:model/TrackingResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>TrackingResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TrackingResponse} obj Optional instance to populate.
    * @return {module:model/TrackingResponse} The populated <code>TrackingResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrackingResponse();
                        
            
            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], [Message]);
            }
            if (data.hasOwnProperty('tracking')) {
                obj['tracking'] = TrackingStatus.constructFromObject(data['tracking']);
            }
        }
        return obj;
    }

    /**
    * The list of note or warning messages
    * @member {Array.<module:model/Message>} messages
    */
    'messages' = undefined;
    /**
    * @member {module:model/TrackingStatus} tracking
    */
    'tracking' = undefined;




}
