import type { FrappeForm } from "@anygridtech/frappe-types/client/frappe/core";
import type { WorkflowActionExtended } from "./before_workflow_action";

export interface Workflow {
  /**
   * Validates the workflow for the given form.
   * 
   * @param form - The form to validate the workflow for.
   */
  validate: (action_extended?: WorkflowActionExtended) => Promise<void>;
  /**
   * Executes a pre-action before the workflow validations and other stuff run.
   */
  pre_action: () => Promise<void>
  /**
   * Loads the HTML field for workflow history data tracking.
   */
  load_history_field: () => Promise<void>;
}

export type WorkflowPreActions = {[key: string]: {[key: string]: (form: FrappeForm) => Promise<void>}}