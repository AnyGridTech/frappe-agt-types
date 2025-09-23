import { FrappeForm } from "@anygridtech/frappe-types/client/frappe/core";

export interface Brazil {
  /**
   * Everything related to CPF (Cadastro de Pessoas Físicas - Brazilian individual taxpayer registry identification)
   */
  cpf: {
    /**
     * Regular Expression a CPF number.
     * @returns `true` if the CPF number is valid, otherwise `false`.
     */
    regex: RegExp; // agt.utils.brazil.cpf.regex
    
    /**
     * Formats a CPF number field to the standard format (xxx.xxx.xxx-xx).
     * @param frm - The Frappe form instance
     * @param cpf_field - The field containing the CPF number
     */
    format: (frm: FrappeForm, cpf_field: string) => void; // agt.utils.brazil.cpf.format
    
    /**
     * Validates a CPF number.
     * @param frm - The Frappe form instance
     * @param cpf_field - The field containing the CPF number
     */
    validate: (frm: FrappeForm, cpf_field: string) => void; // agt.utils.brazil.cpf.validate
  }

  /**
   * Everything related to CNPJ (Cadastro Nacional da Pessoa Jurídica - Brazilian corporate taxpayer registry identification)
   */
  cnpj: {
    /**
     * Regular Expression for a CNPJ number.
     */
    regex: RegExp;

    /**
     * Formats a CNPJ number field to the standard format (xx.xxx.xxx/xxxx-xx).
     * @param frm - The Frappe form instance
     * @param cnpj_field - The field containing the CNPJ number
     */
    format: (frm: FrappeForm, cnpj_field: string) => void; // agt.utils.brazil.cnpj.format
    
    /**
     * Validates a CNPJ number.
     * @param frm - The Frappe form instance
     * @param cnpj_field - The field containing the CNPJ number
     * @returns `true` if the CNPJ number is valid, otherwise `false`.
     */
    validate: (frm: FrappeForm, cnpj_field: string) => void; // agt.utils.brazil.cnpj.validate
    
    /**
     * Checks if a CNPJ exists by making an API call to validate it.
     * @param frm - The Frappe form instance
     * @param cnpj_field - The field containing the CNPJ number
     */
    validate_existence: (frm: FrappeForm, cnpj_field: string) => Promise<void>; // agt.utils.brazil.cnpj.validate_existence
  }

  /**
   * Everything related to Brazilian phone numbers
   */
  phone: {
    /**
     * Regular Expression to validate Brazilian phone numbers.
     */
    regex: RegExp; // agt.utils.brazil.phone.regex

    /**
     * Formats a phone number field to a standard format.
     * @param frm - The Frappe form instance.
     * @param phone_field - The field containing the phone number.
     */
    format: (frm: FrappeForm, phone_field: string) => void; // agt.utils.brazil.phone.format

    /**
     * Validates and formats phone numbers with international codes (DDI).
     * Applies real-time masking and formatting based on country standards.
     * 
     * @param frm - The Frappe form containing the phone field
     * @param phone_field - The name of the field containing the phone number
     * @param ddi_field - Optional. The name of the field containing the DDI code
     * @param country_field - Optional. The name of the field containing the country
     * 
     * @example
     * // Basic usage with just the phone field
     * agt.utils.brazil.phone.validate(frm, 'phone_field');
     * 
     * // Usage with phone and DDI fields
     * agt.utils.brazil.phone.validate(frm, 'phone_field', 'ddi_code_field');
     * 
     * // Full usage with country field that will auto-set the DDI
     * agt.utils.brazil.phone.validate(frm, 'phone_field', 'ddi_code_field', 'country_field');
     */
    validate: (frm: FrappeForm, phone_field: string, ddi_field?: string, country_field?: string) => Promise<void>; // agt.utils.brazil.phone.validate TODO: Conversar com Marco para ver como refazer essa função pq atualmente ela tem muitas responsabilidades.
  }

  /**
   * Everything related to Brazilian ZIP codes (CEP - Código de Endereçamento Postal)
   */
  cep: {
    /**
     * Regular Expression to validate Brazilian ZIP codes (CEP).
     */
    regex: RegExp; // agt.utils.brazil.cep.regex

    /**
     * Formats a Brazilian ZIP code (CEP) to the standard format (xxxxx-xxx).
     * @param frm - The Frappe form instance
     * @param cep_field - The field containing the ZIP code
     * @returns The formatted ZIP code.
     */
    format: (frm: FrappeForm, cep_field: string) => string; // agt.utils.brazil.cep.format

    /**
     * Validates a Brazilian ZIP code (CEP) and auto-fills address fields.
     * Makes an API call to check the ZIP code and update related fields.
     * @param frm - The Frappe form instance
     * @param cep_field - The field containing the ZIP code
     * @param addr_field - The field to store the address
     * @param neighborhood_field - The field to store the neighborhood
     * @param town_field - The field to store the city
     * @param state_field - The field to store the state_field
     */
    validate: (frm: FrappeForm, cep_field: string, addr_field: string, neighborhood_field: string, town_field: string, state_field: string) => Promise<void>; // agt.utils.brazil.cep.validate
  }

  /**
   * Sets up document ID validation and formatting on a form.
   * Handles both CPF and CNPJ validation depending on the type field.
   * @param frm - The Frappe form instance
   * @param field - The field name containing the document ID
   * @param documentType - The field name containing the document type (CPF/CNPJ)
   */
  validate_cnpj_or_cpf: (frm: FrappeForm, field: string, documentType: 'cpf' | 'cnpj') => void; // agt.utils.brazil.validate_cnpj_or_cpf

  /**
   * Formats a Brazilian document ID (CPF/CNPJ) on a form.
   * @param frm - The Frappe form instance
   * @param field - The field name containing the document ID
   * @param documentType - The type of document ('cpf' or 'cnpj')
   */
  format_cnpj_or_cpf: (frm: FrappeForm, field: string, documentType: 'cpf' | 'cnpj') => void; // agt.utils.brazil.format_cnpj_or_cpf
}