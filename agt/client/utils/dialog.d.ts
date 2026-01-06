import { DialogInstance, DialogConfiguration } from "@anygridtech/frappe-types/client/frappe/ui/Dialog";
import { FrappeForm } from "@anygridtech/frappe-types/client/frappe/core";

export interface Dialog {
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

  /**
   * Shows a non-dismissible loading modal with a spinner.
   * Useful for blocking user interaction during critical operations.
   * 
   * @param title - The title of the modal
   * @param message - The message to display
   * @returns The dialog instance
   * 
   * @example
   * const loadingModal = agt.utils.dialog.show_loading_modal(
   *   'Processing',
   *   'Please wait while we process your request...'
   * );
   * // ... perform operation ...
   * loadingModal.hide();
   */
  show_loading_modal: (title: string, message: string) => DialogInstance;

  /**
   * Shows a confirmation modal with primary and secondary actions.
   * Automatically prevents duplicate modals with the same title.
   * 
   * @param title - The title of the modal
   * @param message - The message to display
   * @param primaryLabel - Label for the primary action button
   * @param secondaryLabel - Label for the secondary action button
   * @param onPrimary - Callback function for primary action
   * @param onSecondary - Optional callback function for secondary action
   * @returns The dialog instance or undefined if a duplicate modal is prevented
   * 
   * @example
   * agt.utils.dialog.show_confirmation_modal(
   *   'Confirm Action',
   *   'Are you sure you want to proceed?',
   *   'Yes, Continue',
   *   'No, Cancel',
   *   async () => {
   *     console.log('User confirmed');
   *     // perform action
   *   }
   * );
   */
  show_confirmation_modal: (
    title: string,
    message: string,
    primaryLabel: string,
    secondaryLabel: string,
    onPrimary: () => void | Promise<void>,
    onSecondary?: () => void | Promise<void>
  ) => DialogInstance | undefined;

  /**
   * Creates a beforeunload handler to prevent browser tab close during critical operations.
   * Returns a function to remove the handler when no longer needed.
   * 
   * @returns Function to remove the beforeunload handler
   * 
   * @example
   * const removeHandler = agt.utils.dialog.prevent_tab_close();
   * // ... perform critical operation ...
   * removeHandler(); // Allow tab close again
   */
  prevent_tab_close: () => () => void;
}
