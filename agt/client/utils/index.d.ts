import { FrappeForm } from "@anygridtech/frappe-types/client/frappe/core";

/**
 * Configuração de campo para renderização de tabelas de documentos.
 */
export type DocFieldConfig = {
  fieldname: string;
  label?: string;
  formatter?: (value: unknown, doc: Record<string, unknown>, meta?: { label: string; fieldtype: string; options?: unknown }) => string;
};

/**
 * Represents the custom utilities module in Frappe.
 */
export interface ClientUtils {
  /**
   * Normalize text for tolerant search (removes accents, spaces, hyphens, special characters, case-insensitive)
   */
  normalize_text: (text: string) => string;

  /**
   * Checks if a given value is valid.
   * - Returns `true` if the value is non-null, non-undefined, and (if a string) not empty after trimming.
   * 
   * @param v - The value to validate.
   * @returns `true` if valid, otherwise `false`.
   */
  is_valid: (v: any) => boolean;

  /**
   * Converts a string to snake_case format.
   * 
   * @param str - The string to convert.
   * @returns The converted string in snake_case format.
   */
  to_snake_case: (str: string) => string;

  /**
   * 
   * @param str - The string to convert.
   * @returns The Converted string in Pascal Case Spaced.
   * @example "kebab-case-text" -> "Kebab Case Text"
   * @example "snake_case_text" -> "Snake Case Text"
   * @example "camelCaseText" -> "Camel Case Text"
   * @example "PascalCaseText" -> "Pascal Case Text"
   */
  to_pascal_case_spaced: (str: string) => string;

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
  ) => Promise<void>;

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
  }) => Promise<T | undefined>;

  // fieldname: Map<Doctype, {filters: Record<field, value}, fields: campos_a_retornar[]>
  /**
   * Filters and joins data based on the specified steps.
   * @param steps - Steps to perform the join operation
   * @returns A promise resolving to the joined data
   */
  filterJoin: <Steps extends readonly JoinStep[]>(
    steps: Steps
  ) => Promise<
    Steps extends [...any, infer Last]
    ? Last extends JoinStep<infer T>
    ? T[]
    : any[]
    : any[]
  >;


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
  redirect_by_ref(ref?: string, title?: string, message?: string, indicator?: string, url?: string, delay?: number, newTab?: boolean): void;
}

type JoinStep<T = any> = {
  doctype: string;
  filters: Record<string, any>;
  fields: (keyof T)[];
  joinOn?: {
    sourceField: keyof T;
    targetField: string;
  };
};