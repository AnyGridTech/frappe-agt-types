import { FrappeDoc, FrappeForm } from "@anygridtech/frappe-types/client/frappe/core";
import { ChecklistTable } from "../../doctype/ChecklistTable";
export interface Table {
  row: {
    /**
     * Adds a new row to a child table within a form.
     * Fields in the new row are set using `frappe.model.add_child` and `frappe.model.set_value`.
     * 
     * @param form - The parent form containing the child table.
     * @param child_doctype - The name of the child table's DocType.
     * @param fields_record - A dictionary of fields to set for the new row.
     */
    add_one: <T>(
      form: FrappeForm,
      child_doctype: string,
      fields_record: T
    ) => Promise<T>;

    /**
     * Adds multiple rows to a child table within a form.
     * Fields in the new rows are set using `frappe.model.add_child` and `frappe.model.set_value`.
     * 
     * @template T - The type of the rows to add.
     * @param form - The parent form containing the child table.
     * @param child_doctype - The name of the child table's DocType.
     * @param fields_record - An array of field dictionaries for the new rows.
     */
    add_many: <T>(
      form: FrappeForm,
      child_doctype: string,
      fields_record: T[]
    ) => Promise<T[]>;

    /**
     * Fetches a single row from a child table that matches specified filters.
     * 
     * @template T - The type of the row to fetch.
     * @param form - The parent form containing the child table.
     * @param child_doctype - The name of the child table's DocType.
     * @param filters - Filtering conditions for the row to fetch.
     * @returns The row that matches the filters, or `undefined` if no match is found.
     */
    get_one: <T>(
      form: FrappeForm,
      child_doctype: string,
      filters: Record<string, any>
    ) => T | undefined;

    /**
     * Fetches the last row from a child table.
     * 
     * @template T - The type of the row to fetch.
     * @param form - The parent form containing the child table.
     * @param child_doctype - The name of the child table's DocType.
     * @returns The last row in the child
     */
    get_last: <T>(
      form: FrappeForm,
      child_doctype: string
    ) => T | undefined;

    /**
     * Searches for rows in a child table that match specified filters.
     * Supports both AND and OR conditions for filtering.
     * 
     * @param form - The parent form containing the child table.
     * @param child_doctype - The name of the child table's DocType.
     * @param filters - Filtering conditions (AND/OR) for matching rows.
     * @returns An array of rows that match the filters.
     */
    find: (
      form: FrappeForm,
      child_doctype: string,
      filters: { or?: Record<string, any>; and?: Record<string, any> }
    ) => any[];

    /**
     * Updates a row from child table within a form.
     * Fields in the child table are updated for the specified child document using `frappe.model.set_value`.
     * @attention the `doc` parameter must be the child table doc, not the form.doc;
     * @param doc - The doc object containing the child table information.
     * @param docname - The name of the child document to update.
     * @param fields_record - A dictionary of fields to update.
     * @returns A promise resolving to void.
     */
    update_one: (
      doc: FrappeDoc,
      fields_record: Record<string, string | number | null>
    ) => Promise<void>;

    /**
     * Updates the last row in a child table within a form.
     * Fields in the last row are updated using `frappe.model.set_value`.
     * 
     * @param form - The parent form containing the child table.
     * @param child_doctype - The name of the child table's DocType.
     * @param fields_record - A dictionary of fields to update in the last row.
     */
    update_last(form: FrappeForm, child_doctype: string, fields_record: Record<string, string | number | null>): Promise<void>;

    /**
     * Deletes a row from a child table within a form.
     * 
     * @param form - The parent form containing the child table.
     * @param child_doctype - The name of the child table's DocType.
     * @param docname - The name of the child document to delete.
     */
    delete_one: (
      form: FrappeForm,
      child_doctype: string,
      docname: string
    ) => Promise<void>;
  }

  /**
   * Adjusts the visibility of table elements in a Frappe form according to the provided options.
   * Allows hiding or showing specific table elements, such as add/remove row buttons, config columns, checkboxes, shortcuts, etc.
   * Useful for customizing the child table interface, removing unwanted actions, or simplifying the user experience.
   *
   * @param form - The FrappeForm instance containing the table.
   * @param options - Configuration object, where each key represents an element to hide/show (e.g., hideChildTableAddRow, hideChildTableRemoveRows, hideTableConfigColumns, etc.).
   * @param fieldname - The field name of the child table in the form.
   * @param add_row_label - The label to set for the "Add Row" button.
   * @returns void
   *
   * @example
   *   growatt.utils.custom_table(frm, {
   *     hideChildTableAddRow: true,
   *     hideChildTableRemoveRows: true,
   *     hideTableConfigColumns: true
   *   }, 'items', 'Add Item');
   */
  set_custom_properties: (
    form: FrappeForm,
    options: Record<string, boolean | string>,
    fieldname: string,
    add_row_label?: string,
    default_values?: Record<string, any>[],
    apply_only_first?: boolean
  ) => Promise<void>;

  /**
   * Customizes the label of the "Add Row" button for child table via DOM.
   * @param frm - The Frappe form
   * @param fieldname - The field name of the child table
   * @param label - The new button text
   */
  custom_add_row_button(frm: any, fieldname: string, label: string): void;

  /**
   * Checks if a child table is synchronized with the remote data.
   * Compares the current child table rows with the remote data to ensure they match.
   *
   * @param current - The current child table rows.
   * @param remote - The remote data to compare against.
   * @param docname - The field name in the current table that references the name in the remote data.
   * @param workflowStateField - Optional field name for workflow state comparison.
   * @returns `true` if the child table is synchronized, otherwise `false`.
   */
  is_sync: (current: ChecklistTable[], remote: FrappeDoc[], docname: string, workflowStateField?: string) => Promise<boolean>;


}