import { DialogInstance, DialogConfiguration } from "@anygridtech/frappe-types/client/frappe/ui/Dialog";
import { FrappeForm } from "@anygridtech/frappe-types/client/frappe/core";

export interface ClientUtilsDialog {
  /**
   * Stores all created dialog instances using `load_dialog` method.
   * Can be used to access or manipulate the dialog after its creation.
   */
  created: DialogInstance[];

  /**
   * Creates and displays a dialog using the specified configuration.
   * Stores the dialog instance in the `createdDialog` variable for future use.
   * 
   * @param diagConfig - The configuration for the dialog (e.g., title, fields, actions).
   * @returns The created `DialogInstance`.
   */
  load: (diagConfig: DialogConfiguration) => DialogInstance;

  /**
   * Closes all open dialogs created using the `load_dialog` method.
   */
  close_all: () => void;

  /**
   * Closes a dialog with a specific title.
   * 
   * @param title - The title of the dialog to close.
   */
  close_by_title: (title: string) => void;

    /**
   * Shows an alert message for debugging purposes.
   * Only visible to users with specific roles (IT, Administrator, System Manager).
   * @param frm - The form instance to show the alert on.
   * @param message - The message to display in the alert.
   * @param indicator - The type of alert (e.g., 'green', 'red').
   * @param timeout - Optional timeout for the alert in seconds (default is 10).
   */
  show_debugger_alert: (frm: FrappeForm, message: string, indicator: string, timeout?: number) => void;

  /**
   * 
   * This function will reshuffle the dialogs in the screen.
   * It should make the last dialog created appear on top of the stack of dialogs.
   * The first dialog created will, eventually, be at the bottom of the stack.
   */
  refresh_dialog_stacking: () => void;
}