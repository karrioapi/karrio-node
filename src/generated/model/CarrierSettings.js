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
* The CarrierSettings model module.
* @module model/CarrierSettings
* @version v1-2021.2
*/
export default class CarrierSettings {
    /**
    * Constructs a new <code>CarrierSettings</code>.
    * @alias module:model/CarrierSettings
    * @class
    * @param id {String} A unique address identifier
    * @param carrier_name {module:model/CarrierSettings.CarrierNameEnum} Indicates a carrier (type)
    * @param carrier_id {String} Indicates a specific carrier configuration name.
    * @param test {Boolean}  The test flag indicates whether to use a carrier configured for test.  
    * @param active {Boolean}  The active flag indicates whether the carrier account is active or not.  
    */

    constructor(id, carrier_name, carrier_id, test, active) {
        
        
        this['id'] = id;
        this['carrier_name'] = carrier_name;
        this['carrier_id'] = carrier_id;
        this['test'] = test;
        this['active'] = active;
        
    }

    /**
    * Constructs a <code>CarrierSettings</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CarrierSettings} obj Optional instance to populate.
    * @return {module:model/CarrierSettings} The populated <code>CarrierSettings</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CarrierSettings();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('carrier_name')) {
                obj['carrier_name'] = ApiClient.convertToType(data['carrier_name'], 'String');
            }
            if (data.hasOwnProperty('carrier_id')) {
                obj['carrier_id'] = ApiClient.convertToType(data['carrier_id'], 'String');
            }
            if (data.hasOwnProperty('test')) {
                obj['test'] = ApiClient.convertToType(data['test'], 'Boolean');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * A unique address identifier
    * @member {String} id
    */
    'id' = undefined;
    /**
    * Indicates a carrier (type)
    * @member {module:model/CarrierSettings.CarrierNameEnum} carrier_name
    */
    'carrier_name' = undefined;
    /**
    * Indicates a specific carrier configuration name.
    * @member {String} carrier_id
    */
    'carrier_id' = undefined;
    /**
    *  The test flag indicates whether to use a carrier configured for test.  
    * @member {Boolean} test
    */
    'test' = undefined;
    /**
    *  The active flag indicates whether the carrier account is active or not.  
    * @member {Boolean} active
    */
    'active' = undefined;



    /**
    * Allowed values for the <code>carrier_name</code> property.
    * @enum {String}
    * @readonly
    */
    static CarrierNameEnum = {
        /**
         * value: "aramex"
         * @const
         */
        "aramex": "aramex",
        /**
         * value: "australiapost"
         * @const
         */
        "australiapost": "australiapost",
        /**
         * value: "canadapost"
         * @const
         */
        "canadapost": "canadapost",
        /**
         * value: "canpar"
         * @const
         */
        "canpar": "canpar",
        /**
         * value: "dhl_express"
         * @const
         */
        "dhl_express": "dhl_express",
        /**
         * value: "dhl_universal"
         * @const
         */
        "dhl_universal": "dhl_universal",
        /**
         * value: "dicom"
         * @const
         */
        "dicom": "dicom",
        /**
         * value: "fedex_express"
         * @const
         */
        "fedex_express": "fedex_express",
        /**
         * value: "purolator_courier"
         * @const
         */
        "purolator_courier": "purolator_courier",
        /**
         * value: "royalmail"
         * @const
         */
        "royalmail": "royalmail",
        /**
         * value: "sendle"
         * @const
         */
        "sendle": "sendle",
        /**
         * value: "sf_express"
         * @const
         */
        "sf_express": "sf_express",
        /**
         * value: "ups_package"
         * @const
         */
        "ups_package": "ups_package",
        /**
         * value: "usps"
         * @const
         */
        "usps": "usps",
        /**
         * value: "yanwen"
         * @const
         */
        "yanwen": "yanwen",
        /**
         * value: "yunexpress"
         * @const
         */
        "yunexpress": "yunexpress",
        /**
         * value: "freightcom"
         * @const
         */
        "freightcom": "freightcom",
        /**
         * value: "eshipper"
         * @const
         */
        "eshipper": "eshipper"    };

}