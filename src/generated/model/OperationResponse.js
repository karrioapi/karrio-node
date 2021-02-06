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
import Message from './Message';
import OperationConfirmation from './OperationConfirmation';

/**
* The OperationResponse model module.
* @module model/OperationResponse
* @version v1-2021.0
*/
export default class OperationResponse {
    /**
    * Constructs a new <code>OperationResponse</code>.
    * @alias module:model/OperationResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>OperationResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OperationResponse} obj Optional instance to populate.
    * @return {module:model/OperationResponse} The populated <code>OperationResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationResponse();
                        
            
            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], [Message]);
            }
            if (data.hasOwnProperty('confirmation')) {
                obj['confirmation'] = OperationConfirmation.constructFromObject(data['confirmation']);
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
    * @member {module:model/OperationConfirmation} confirmation
    */
    'confirmation' = undefined;




}
