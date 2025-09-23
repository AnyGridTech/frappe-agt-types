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
}

