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
* The References model module.
* @module model/References
* @version v1-2021.2
*/
export default class References {
    /**
    * Constructs a new <code>References</code>.
    * @alias module:model/References
    * @class
    * @param countries {Object} 
    * @param currencies {Object} 
    * @param carriers {Object} 
    * @param customs_content_type {Object} 
    * @param incoterms {Object} 
    * @param states {Object} 
    * @param services {Object} 
    * @param options {Object} 
    * @param package_presets {Object} 
    * @param packaging_types {Object} 
    * @param payment_types {Object} 
    */

    constructor(countries, currencies, carriers, customs_content_type, incoterms, states, services, options, package_presets, packaging_types, payment_types) {
        
        
        this['countries'] = countries;
        this['currencies'] = currencies;
        this['carriers'] = carriers;
        this['customs_content_type'] = customs_content_type;
        this['incoterms'] = incoterms;
        this['states'] = states;
        this['services'] = services;
        this['options'] = options;
        this['package_presets'] = package_presets;
        this['packaging_types'] = packaging_types;
        this['payment_types'] = payment_types;
        
    }

    /**
    * Constructs a <code>References</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/References} obj Optional instance to populate.
    * @return {module:model/References} The populated <code>References</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new References();
                        
            
            if (data.hasOwnProperty('countries')) {
                obj['countries'] = ApiClient.convertToType(data['countries'], Object);
            }
            if (data.hasOwnProperty('currencies')) {
                obj['currencies'] = ApiClient.convertToType(data['currencies'], Object);
            }
            if (data.hasOwnProperty('carriers')) {
                obj['carriers'] = ApiClient.convertToType(data['carriers'], Object);
            }
            if (data.hasOwnProperty('customs_content_type')) {
                obj['customs_content_type'] = ApiClient.convertToType(data['customs_content_type'], Object);
            }
            if (data.hasOwnProperty('incoterms')) {
                obj['incoterms'] = ApiClient.convertToType(data['incoterms'], Object);
            }
            if (data.hasOwnProperty('states')) {
                obj['states'] = ApiClient.convertToType(data['states'], Object);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], Object);
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], Object);
            }
            if (data.hasOwnProperty('package_presets')) {
                obj['package_presets'] = ApiClient.convertToType(data['package_presets'], Object);
            }
            if (data.hasOwnProperty('packaging_types')) {
                obj['packaging_types'] = ApiClient.convertToType(data['packaging_types'], Object);
            }
            if (data.hasOwnProperty('payment_types')) {
                obj['payment_types'] = ApiClient.convertToType(data['payment_types'], Object);
            }
        }
        return obj;
    }

    /**
    * @member {Object} countries
    */
    'countries' = undefined;
    /**
    * @member {Object} currencies
    */
    'currencies' = undefined;
    /**
    * @member {Object} carriers
    */
    'carriers' = undefined;
    /**
    * @member {Object} customs_content_type
    */
    'customs_content_type' = undefined;
    /**
    * @member {Object} incoterms
    */
    'incoterms' = undefined;
    /**
    * @member {Object} states
    */
    'states' = undefined;
    /**
    * @member {Object} services
    */
    'services' = undefined;
    /**
    * @member {Object} options
    */
    'options' = undefined;
    /**
    * @member {Object} package_presets
    */
    'package_presets' = undefined;
    /**
    * @member {Object} packaging_types
    */
    'packaging_types' = undefined;
    /**
    * @member {Object} payment_types
    */
    'payment_types' = undefined;




}
