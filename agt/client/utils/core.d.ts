import { FrappeForm } from "@anygridtech/frappe-types/client/frappe/core";

/**
 * Represents the custom utilities module in Frappe.
 */
export interface UtilsExtendedFunctions {
  /**
   * Handles workflow transitions for a form.
   * Executes the specified action and triggers related workflow events (`before_workflow_action`, `after_workflow_action`).
   * 
   * @param form - The form to apply the workflow action on.
   * @param action - The workflow action to execute.
   * @param callback - (Optional) A callback function to execute after the workflow action is completed.
   * @returns A promise resolving to void.
   */
  workflow_transition: (
    form: FrappeForm,
    action: string,
    callback?: (f: FrappeForm) => void | Promise<void>
  ) => Promise<void>; // agt.utils.workflow_transition

  /**
   * Updates the workflow state for a document.
   * Differently from `workflow_transition`, this method directly sets the workflow state without executing actions.
   * @tip Use this method when you need to set the workflow state without triggering actions.
   * @tip This method does validate the workflow state transition. But can be turned off by setting `ignore_workflow_validation` to `true`.
   * @param doctype - The name of the DocType.
   * @param docname - The name of the document to update.
   * @param workflow_state - The new workflow state to set.
   * @param ignore_workflow_validation - Whether to ignore workflow state validation.
   * @param callback - (Optional) A callback function to execute after the workflow state is updated.
   * @returns A promise resolving to the document fields as a dict.
   */
  update_workflow_state: <T>(params: {
    doctype: string;
    docname: string;
    workflow_state: string;
    ignore_workflow_validation?: boolean;
    callback?: () => Promise<void>;
  }) => Promise<T | undefined>; // agt.utils.update_workflow_state

  /**
   * Displays a message to the user and redirects to a URL after a specified delay.
   * 
   * @param ref - The document reference (required for validation)
   * @param title - Title of the displayed message
   * @param message - Content of the displayed message
   * @param indicator - Color of the indicator (blue, green, red, etc.)
   * @param url - URL to redirect to
   * @param delay - Wait time in ms before redirection (default: 3000ms)
   * @param newTab - Whether to open in a new tab (default: true)
   */
  redirect_by_ref(ref?: string, title?: string, message?: string, indicator?: string, url?: string, delay?: number, newTab?: boolean): void; // agt.utils.redirect_by_ref

  /**
   * Force-refresh the current document (`cur_frm`).
   * Clears the cached version of the document and fetches an updated copy via `agt.utils.doc.get_doc`.
   * Returns the reloaded document or `undefined` if `cur_frm` is missing or an error occurs.
   */
  refresh_force(): Promise<any | undefined>;

  /**
   * Quick regex check for a formatted CPF string (e.g. 000.000.000-00).
   */
  validate_cpf_regex(cpf: string): boolean;

  /**
   * Quick regex check for a formatted CNPJ string (e.g. 00.000.000/0000-00).
   */
  validate_cnpj_regex(cnpj: string): boolean;

  /**
   * Full CPF validation including verification digits.
   */
  validate_cpf(cpf: string): boolean;

  /**
   * Full CNPJ validation including verification digits.
   */
  validate_cnpj(cnpj: string): boolean;

  /**
   * Check CNPJ existence via a remote service (uses `frappe.call`).
   * Returns `true` if the CNPJ exists and matches the provided value, `false` otherwise.
   */
  validate_cnpj_existence(cnpj: string): Promise<boolean>;

  /**
   * Format a document string (CPF/CNPJ) according to the provided type or
   * by inferring the format from the number of digits when type is omitted.
   */
  format_doc(doc: string, type?: string): string;

  /**
   * Attach visual validation and input masking behavior for CPF/CNPJ fields.
   * Adds listeners to the specified field for real-time formatting and validation.
   */
  document_id(frm: FrappeForm, docField: string, typeField?: string, nameField?: string): Promise<void>;

  /**
   * Build a friendly URL for a document in the app (e.g. /app/my-doctype/My%20Doc).
   */
  build_doc_url(doctype: string, docname: string): string;

  /**
   * Show a message and redirect after creating or identifying a document.
   * Used to guide the user after creation or when the document already exists.
   */
  redirect_after_create_doc(success: boolean, url: string, docname: string, doctype: string): void;

  /**
   * Retrieve item information by name (and optional serial). If multiple
   * items share the same name but different MPPT values, show a dialog to select one.
   */
  get_item_info(item_name: string, sn?: string): Promise<any | undefined>;

  /**
   * Retrieve Growatt serial information via server-side call (`frappe.call`).
   * Returns the SN data or `undefined` when not found or on error.
   */
  get_growatt_sn_info(serial_no: string): Promise<any | undefined>;

  /**
   * Validate serial numbers with rules that depend on the equipment type.
   * Accepted types: 'inverter' | 'battery' | 'ev_charger' | 'transformer' | 'smart_meter' | 'smart_energy_manager' | 'other'
   */
  validate_serial_number(sn: string, type?: 'inverter' | 'battery' | 'ev_charger' | 'transformer' | 'smart_meter' | 'smart_energy_manager' | 'other'): boolean;

  /**
   * Retrieve the value of a field from any document (`doctype`) referenced in the form.
   * Returns `null` on error or if the field is not found.
   */
  get_value_from_any_doc(frm: any, doctype: string, docnameField: string, fieldName: string): Promise<any>;
}

