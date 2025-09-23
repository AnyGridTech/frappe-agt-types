import { FieldDict, FrappeForm } from "@anygridtech/frappe-types/client/frappe/core";

export interface Form {

  /**
   * Everything related to form fields
   */
  field: {
    /**
     * Checks if a field value is empty by trimming and checking length.
     * @param value - The string value to check
     * @returns true if the field is empty, false otherwise
     */
    is_empty: (value: string) => boolean;

    /**
     * Controls field properties in the form
     * @param frm - The current form
     * @param configs - Object with fieldname -> options mapping
     * @example1
     *   set_properties(
     *     frm,
     *     {
     *       posting_date: { hidden: true },
     *       customer: { readonly: true },
     *       column_break_1: { hidden: true },
     *       due_date: { reqd: true, label: "New Due Date" }
     *     }
     *   );
     */
    set_properties(frm: any, configs: Record<string, any>): void;


    /**
     * Validates the visible fields based on the JavaScript conditions
     * applied to them via the `depends_on` property.
     * @param form 
     * @param workflow_state 
     * @returns 
     */
    validate_js_visible_fields: (form: FrappeForm, workflow_state: string) => { throw_error: () => void; msgprint: () => void; };

    /**
     * Gets all fields that are visible based on the JavaScript conditions
     * applied to them via the `depends_on` property.
     * @param form the form object to check for visible fields
     * @returns a field_dict array of visible fields
     */
    get_js_visible_fields: (form: FrappeForm) => FieldDict[];

    /**
     * Turns the specified field into a link to the corresponding document.
     * @param frm - The FrappeForm instance.
     * @param fieldName - The name of the field to make a link.
     * @param docType - The DocType to use in the link URL.
     */
    turn_into_link: (frm: FrappeForm, fieldName: string, docType: string) => void;
  }

  /**
   * Mirrors a checklist table from the Service Protocol form to the specified doctype and table field.
   * This function is used to synchronize checklist data between the Service Protocol and its related checklists.
   * 
   * @param form - The FrappeForm instance containing the Service Protocol data.
   * @param doctype - The DocType of the checklist to mirror.
   * @param tableField - The field name of the checklist table in the Service Protocol form.
   * @param childname - The field name in the linked doctype that references the current form.
   * @param docname - The field name in the current form that references the linked documents.
   * @param workflowStateField - Optional field name to store the workflow state of the linked document.
   */
  mirror_checklist_table: (form: FrappeForm, doctype: string, tableField: string, childname: string, docname: string, workflowStateField?: string) => Promise<void>;


  /**
   * Assigns the 'parent_doc_name' (if present) based on the form's DocType name.
   * @param form The form object to check and update.
   */
  assign_parent_doc_name: (form: any) => void;

  /**
   * Adjusts the visibility of form elements based on user roles and specified options.
   * @param form The form object to modify.
   * @param options Configuration options for adjusting visibility.
   * @returns void
   */
  adjust_html_elements: (
    form: FrappeForm,
    options: Record<string, boolean>
  ) => void;

  /**
   * Renders a table formed by fields from a doctype or fields from 
   * a child table within a doctype, with the goal of providing a 
   * pleasant end-user experience. 
   * 
   * @note This function is not intended to replace Frappe's native table 
   * rendering functions; it simply acts as a kind of "mask".
   * All tables from which the data is mirrored should be hidden but kept in the form.
   * Accepts only fieldname/label/formatter and detects fieldtype/options automatically via metadata.
   *
   * @param wrapper Target HTML element or jQuery object to render the table
   * @param docOrRows Object or array of objects (can be a single doc or a child table array)
   * @param fields Array of fields to display: [{ fieldname, label?, formatter? }]
   * @param meta Meta of the DocType (optional, but recommended)
   *
   * @example // Render fields from a single document (summary table)
   * await growatt.utils.render_doc_fields_table(
   *   form.fields_dict.summary_html.$wrapper,
   *   form.doc,
   *   [
   *     { fieldname: 'name', label: 'Code' },
   *     { fieldname: 'customer', label: 'Customer' },
   *     { fieldname: 'status', label: 'Status' }
   *   ]
   * );
   *
   * @example // Render a child table (array of rows)
   * await growatt.utils.render_doc_fields_table(
   *   form.fields_dict.items_html.$wrapper,
   *   form.doc.items,
   *   [
   *     { fieldname: 'item_code', label: 'Item Code' },
   *     { fieldname: 'qty', label: 'Quantity' },
   *     { fieldname: 'rate', label: 'Unit Price' }
   *   ]
   * );
   */
  render_doc_fields_table: (
    wrapper: HTMLElement | JQuery<HTMLElement> | { html: (html: string) => void } | undefined,
    docOrRows: Record<string, unknown> | Record<string, unknown>[] | undefined,
    fields: Array<{ fieldname: string; label?: string; formatter?: (value: unknown, doc: Record<string, unknown>, meta?: any) => string }>,
    meta?: { fields: Array<{ fieldname: string; label?: string; fieldtype: string; options?: unknown }> }
  ) => Promise<void>;

  /**
   * Sets the primary style for a button field using Bootstrap classes.
   * @param frm - The Frappe form
   * @param fieldname - The field name of the button
   */
  set_button_primary_style(frm: any, fieldname: string): void;

  /**
   * Transfers field values from a source form to a target form.
   * Only updates fields that exist in the target form and have different values.
   * 
   * @param sourceForm - The form to copy values from.
   * @param targetForm - The form to apply values to.
   */
  transport_values: (targetForm: FrappeForm, field: string) => void;
}