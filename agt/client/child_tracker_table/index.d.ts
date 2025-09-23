import type { FrappeForm } from "@anygridtech/frappe-types/client/frappe/core";

export interface ChildTrackerTable {
  /**
   * Mirrors the child tracker table for the given doctypes in the specified Frappe form.
   * It depends of the existence of the doctype "Child Tracker Table" with fields:
   * - child_tracker_docname: The name of the document.
   * - child_tracker_doctype: The name of the doctype.
   * - child_tracker_workflow_state: The current workflow state of the document.
   *
   * @param frm - The Frappe form instance to operate on.
   * @param doctypes - An array of doctype names whose child tracker tables should be mirrored.
   * @returns A promise that resolves when the operation is complete.
   */
  mirror(frm: FrappeForm, doctypes: string[], field: string): Promise<void>; // agt.child_tracker_table.mirror

  /**
   * Sets up Child Tracker Table custom integrations.
   * 
   */
  setup: () => Promise<void>; // agt.child_tracker_table.setup
}