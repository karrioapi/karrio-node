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
import Rate from './Rate';

/**
* The RateResponse model module.
* @module model/RateResponse
* @version v1-2021.2
*/
export default class RateResponse {
    /**
    * Constructs a new <code>RateResponse</code>.
    * @alias module:model/RateResponse
    * @class
    * @param rates {Array.<module:model/Rate>} The list of returned rates
    */

    constructor(rates) {
        
        
        this['rates'] = rates;
        
    }

    /**
    * Constructs a <code>RateResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RateResponse} obj Optional instance to populate.
    * @return {module:model/RateResponse} The populated <code>RateResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RateResponse();
                        
            
            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], [Message]);
            }
            if (data.hasOwnProperty('rates')) {
                obj['rates'] = ApiClient.convertToType(data['rates'], [Rate]);
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
    * The list of returned rates
    * @member {Array.<module:model/Rate>} rates
    */
    'rates' = undefined;




}
