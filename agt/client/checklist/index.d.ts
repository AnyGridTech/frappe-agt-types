import type { ChecklistTable } from "./table";

export interface Checklist {
  /**
   * Randy checklist table functions to be used in other doctypes.
   */
  table: ChecklistTable; // agt.checklist.table

  /**
   * Child tracker table functions for checklists.
   */
  tracker_table: ChecklistTable; // agt.checklist.tracker_table

  /**
   * Sets up a checklist.
   * This function must be used at the 'setup' event of the Frappe form.
   * Therefore, the checklist will be set up with all custom integrations and functionallities.
   */
  setup: () => Promise<void>; // agt.checklist.setup
}