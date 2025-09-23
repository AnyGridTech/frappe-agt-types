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
     * @param value - The CPF number to format.
     * @returns The formatted CPF number.
     */
    format: (value: string) => void; // agt.utils.brazil.cpf.format
    /**
     * Validates a CPF number.
     * @param value - The CPF number to validate.
     * @returns `true` if the CPF number is valid, otherwise `false`.
     */
    validate: (value: string) => boolean; // agt.utils.brazil.cpf.validate
  }

  /**
   * Everything related to CNPJ (Cadastro Nacional da Pessoa Jurídica - Brazilian corporate taxpayer registry identification)
   */
  cnpj: {
    /**
     * Regular Expression a CNPJ number.
     * @returns `true` if the CNPJ number is valid, otherwise `false`.
     */
    regex: RegExp; // agt.utils.brazil.cnpj.regex
    /**
     * Formats a CNPJ number field to the standard format (xx.xxx.xxx/xxxx-xx).
     * @param value - The CNPJ number to format.
     * @returns The formatted CNPJ number.
     */
    format: (value: string) => void; // agt.utils.brazil.cnpj.format
    /**
     * Validates a CNPJ number.
     * @param value - The CNPJ number to validate.
     * @returns `true` if the CNPJ number is valid, otherwise `false`.
     */
    validate: (value: string) => boolean; // agt.utils.brazil.cnpj.validate
    /**
     * Checks if a CNPJ exists by making an API call to validate it.
     * @param cnpj - The CNPJ number to validate
     * @returns A promise that resolves to true if the CNPJ exists, false otherwise
     */
    validate_existence: (cnpj: string) => Promise<boolean>; // agt.utils.brazil.cnpj.validate_existence
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
     * @param value - The phone number to format.
     * @param fieldName - The field name containing the phone number.
     * @returns The formatted phone number.
     */
    format: (value: string) => void; // agt.utils.brazil.phone.format

    /**
     * Validates and formats phone numbers with international codes (DDI).
     * Applies real-time masking and formatting based on country standards.
     * 
     * @param frm - The Frappe form containing the phone field
     * @param phoneFieldName - The name of the field containing the phone number
     * @param ddiFieldName - Optional. The name of the field containing the DDI code
     * @param countryFieldName - Optional. The name of the field containing the country
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
    validate: (frm: FrappeForm, phoneFieldName: string, ddiFieldName?: string, countryFieldName?: string) => Promise<void>; // agt.utils.brazil.phone.validate TODO: Conversar com Marco para ver como refazer essa função pq atualmente ela tem muitas responsabilidades.
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
     * Validates a Brazilian ZIP code (CEP) and auto-fills address fields.
     * Makes an API call to check the ZIP code and update related fields.
     * @param frm - The Frappe form instance
     * @param field - The field containing the ZIP code
     * @param addr - The field to store the address
     * @param neigh - The field to store the neighborhood
     * @param town - The field to store the city
     * @param state - The field to store the state
     */
    validate: (frm: FrappeForm, field: string, addr: string, neigh: string, town: string, state: string) => Promise<void>; // agt.utils.brazil.cep.validate
  }

  /**
   * Sets up document ID validation and formatting on a form.
   * Handles both CPF and CNPJ validation depending on the type field.
   * @param frm - The Frappe form instance
   * @param fieldName - The field name containing the document ID
   * @param documentType - The field name containing the document type (CPF/CNPJ)
   */
  validate_cnpj_or_cpf: (frm: FrappeForm, fieldName: string, documentType: 'cpf' | 'cnpj') => void; // agt.utils.brazil.validate_cnpj_or_cpf

  /**
   * Formats a Brazilian document ID (CPF/CNPJ) on a form.
   * @param frm - The Frappe form instance
   * @param fieldName - The field name containing the document ID
   * @param documentType - The type of document ('cpf' or 'cnpj')
   */
  format_cnpj_or_cpf: (frm: FrappeForm, fieldName: string, documentType: 'cpf' | 'cnpj') => void; // agt.utils.brazil.format_cnpj_or_cpf
}