/**
 * UltraDialog - Advanced Dialog Component Documentation
 * @version 1.0.0
 *
 * A highly customizable dialog component that provides enhanced functionality
 * for modal dialogs with form fields, dynamic state management, and theming support.
 * This represents our custom dialog constructor.
 * It is a totally different implementation compared to the Frappe dialog.
 * 
 * @warning This is not a Frappe dialog, but a custom implementation.
 * @warning This is experimental, use with caution.
 *
 *
 * @example Basic Usage
 * ```typescript
 * const dialog = new growatt.ui.UltraDialog({
 *   title: "My Dialog",
 *   message: "Hello World",
 *   visible: true
 * });
 * ```
 *
 * @example Form Fields
 * ```typescript
 * const formDialog = new growatt.ui.UltraDialog({
 *   title: "User Form",
 *   message: "Please fill in your details:"
 * })
 * .add_field({
 *   fieldname: "name",
 *   label: "Full Name",
 *   fieldtype: "Text",
 *   reqd: true
 * })
 * .add_field({
 *   fieldname: "age",
 *   label: "Age",
 *   fieldtype: "Int"
 * })
 * .add_field({
 *   fieldname: "submit",
 *   fieldtype: "Button",
 *   label: "Submit",
 *   click: () => console.log("Submitted!")
 * });
 * ```
 *
 * @example Loading State
 * ```typescript
 * const loadingDialog = new growatt.ui.UltraDialog({
 *   title: "Processing",
 *   message: "Please wait...",
 *   can_close: false
 * }).set_state("waiting");
 *
 * // After process completes:
 * loadingDialog
 *   .set_state("default")
 *   .set_message("Process completed!")
 *   .show_close_btn(true);
 * ```
 *
 * @example Advanced Configuration
 * ```typescript
 * const advancedDialog = new growatt.ui.UltraDialog({
 *   title: "Advanced Settings",
 *   size: 600,
 *   can_drag: true,
 *   can_copy: true,
 *   can_hide: true
 * })
 * .set_z_order(2000)
 * .add_field({
 *   fieldname: "color",
 *   label: "Theme Color",
 *   fieldtype: "Color",
 *   default: "#ff0000"
 * });
 * ```
 * @warning This is not a Frappe dialog, but a custom implementation.
 * @warning This is experimental, use with caution.
 */
export interface UltraDialogConstructor {
  new(props: UltraDialogProps): UltraDialogInstance;
}

/**
 * Properties for a field that can be added to the dialog
 */
/**
 * Represents a field configuration for a Growatt Ultra Dialog UI component.
 * This interface defines the properties and behaviors of a dialog field.
 */
export interface UltraDialogField {
  /**
   * Unique identifier for the field.
   */
  fieldname: string;

  /**
   * Label text displayed above the field.
   */
  label: string;

  /**
   * Specifies the type of input field to render.
   */
  fieldtype: UltraDialogFieldType;

  /**
   * Options available for Select fields. Can be an array of strings or a single string.
   */
  options?: string[] | string;

  /**
   * Default value assigned to the field.
   */
  default?: any;

  /**
   * Placeholder text displayed in text input fields.
   */
  placeholder?: string;

  /**
   * Help text shown below the field for additional guidance.
   */
  description?: string;

  /**
   * Indicates whether the field is required.
   */
  reqd?: boolean;

  /**
   * A condition that determines whether the field should be displayed.
   */
  depends_on?: string;

  /**
   * Callback function triggered when the field value changes.
   */
  onchange?: () => void;

  /**
   * Callback function triggered when a Button field is clicked.
   */
  click?: () => void;

  /**
   * Indicates whether the field is read-only.
   */
  read_only?: boolean;

  /**
   * Current value of the field.
   */
  value?: any;

  /**
   * Function to retrieve the current value of the field.
   */
  get_value?: () => any;

  /**
   * Function to set a new value for the field.
   */
  set_value?: (value: any) => void;
}

/**
 * Props for the Growatt Ultra Dialog component.
 *
 * @property title - The title of the dialog.
 * @property message - The message to be displayed in the dialog.
 * @property visible - Optional flag to control the visibility of the dialog.
 * @property size - Optional initial size of the dialog.
 * @property zOrder - Optional initial z-index of the dialog.
 * @property can_drag - Optional flag to indicate if the dialog can be dragged.
 * @property can_copy - Optional flag to indicate if the dialog content can be copied.
 * @property can_hide - Optional flag to indicate if the dialog can be hidden.
 * @property can_close - Optional flag to indicate if the dialog can be closed.
 * @property backdrop_blur - Allow blur in the backdrop (useful for loading cases).
 * @property initial_state - Optional initial state of the dialog, which can be either "waiting" or "default".
 */
export interface UltraDialogProps {
  title: string;
  message: string;
  visible?: boolean;
  size?: number;
  zOrder?: number;
  can_drag?: boolean;
  can_drag_mobile?: boolean;
  can_copy?: boolean;
  can_hide?: boolean;
  can_close?: boolean;
  backdrop_blur?: boolean;
  initial_state?: UltraDialogState;
}

/**
 * Represents an instance of a Growatt Ultra Dialog, providing methods and properties
 * to manage and interact with the dialog's state, appearance, and behavior.
 *
 * @interface UltraDialogInstance
 *
 * @property {string} id - The unique identifier for the dialog instance.
 * @property {string} title - The title displayed at the top of the dialog window.
 * @property {string} message - The main content of the dialog, which can be updated dynamically.
 * @property {number} size - The size of the dialog window.
 * @property {number} zOrder - The stacking order of the dialog relative to other elements.
 * @property {UltraDialogState} state - The current state of the dialog, either "waiting" or "default".
 * @property {boolean} can_drag - Indicates whether the dialog can be dragged around the screen.
 * @property {boolean} can_copy - Indicates whether the copy button is visible and clickable.
 * @property {boolean} can_hide - Indicates whether the hide button is visible and clickable.
 * @property {boolean} can_close - Indicates whether the close button is visible and clickable.
 *
 * @method close - Closes the dialog and removes it from the DOM.
 * @returns {UltraDialogInstance} The current instance of the dialog.
 *
 * @method visible - Sets the visibility of the dialog.
 * @param {boolean} [is_visible] - If true, shows the dialog; if false, hides it. Defaults to showing the dialog.
 * @returns {UltraDialogInstance} The current instance of the dialog.
 *
 * @method set_message - Updates the content of the dialog with the provided message.
 * @param {string} message - The message to display in the dialog.
 * @returns {UltraDialogInstance} The current instance of the dialog.
 *
 * @method set_title - Updates the title of the dialog.
 * @param {string} title - The title to display in the dialog.
 * @returns {UltraDialogInstance} The current instance of the dialog.
 *
 * @method set_state - Updates the state of the dialog to either "waiting" or "default".
 * @param {UltraDialogState} state - The state to set for the dialog.
 * @returns {UltraDialogInstance} The current instance of the dialog.
 *
 * @method set_drag - Updates whether the dialog can be dragged around the screen.
 * @param {boolean} drag - The drag state to set for the dialog.
 * @returns {UltraDialogInstance} The current instance of the dialog.
 *
 * @method set_z_order - Updates the stacking order of the dialog.
 * @param {number} z - The z-order value to set for the dialog.
 * @returns {UltraDialogInstance} The current instance of the dialog.
 *
 * @method set_size - Updates the size of the dialog window.
 * @param {number} size - The size value to set for the dialog.
 * @returns {UltraDialogInstance} The current instance of the dialog.
 *
 * @method show_copy_btn - Toggles the visibility of the copy button.
 * @param {boolean} show - Indicates whether to show the copy button.
 * @returns {UltraDialogInstance} The current instance of the dialog.
 *
 * @method show_hide_btn - Toggles the visibility of the hide button.
 * @param {boolean} show - Indicates whether to show the hide button.
 * @returns {UltraDialogInstance} The current instance of the dialog.
 *
 * @method show_close_btn - Toggles the visibility of the close button.
 * @param {boolean} show - Indicates whether to show the close button.
 * @returns {UltraDialogInstance} The current instance of the dialog.
 *
 * @method add_field - Adds a new field to the dialog body.
 * @param {UltraDialogField} field - The field configuration object.
 * @returns {UltraDialogInstance} The current instance of the dialog.
 */

export interface UltraDialogInstance {
  /**
   * The ID of the dialog instance.
   * This is a unique identifier for the dialog, which can be used to reference it later.
   */
  id: string;
  /**
   * The Title of the dialog.
   * This is the text that will be displayed at the top of the dialog window.
   */
  title: string;
  /**
   * The Message of the dialog.
   * This is the main content of the dialog, which can be updated dynamically.
   */
  message: string;
  /**
   * The size of the dialog.
   * This can be a numeric value that represents the size of the dialog window.
   */
  size: number;
  /**
   * The z-order of the dialog.
   * This determines the stacking order of the dialog relative to other elements on the page.
   */
  zOrder: number;
  /**
   * The state of the dialog.
   * This can be either "waiting" or "default", indicating the current status of the dialog.
   * "waiting" typically means that the dialog is in a loading state, while "default" indicates that it is ready for user interaction.
   * This can be used to control the appearance and behavior of the dialog based on its state.
   */
  state: UltraDialogState;
  /**
   * The drag state of the dialog.
   * This indicates whether the dialog can be dragged around the screen or not.
   */
  can_drag: boolean;
  /**
 * The drag state of the dialog for mobile devices.
 * This indicates whether the dialog can be dragged around the screen or not.
 */
  can_drag_mobile: boolean;
  /**
   * The copy state of the dialog.
   * This indicates whether the copy button is visible and clickable or not.
   */
  can_copy: boolean;
  /**
   * The hide state of the dialog.
   * This indicates whether the hide button is visible and clickable or not.
   */
  can_hide: boolean;
  /**
   * The close state of the dialog.
   * This indicates whether the close button is visible and clickable or not.
   */
  can_close: boolean;
  /**
   * This function is used to close the dialog.
   * It will remove the dialog from the DOM and clean up any associated resources.
   * @returns {UltraDialogInstance} - Returns the current instance of the dialog.
   */
  close: () => UltraDialogInstance;
  /**
   * This function is used to set the visibility of the dialog.
   * If is_visible is true, the dialog will be shown.
   * If is_visible is false, the dialog will be hidden.
   * If is_visible is undefined, the dialog will be shown.
   * @param is_visible - This parameter is used to set the visibility of the dialog.
   * @returns {UltraDialogInstance} - Returns the current instance of the dialog.
   */
  visible: (is_visible?: boolean) => UltraDialogInstance;
  /**
   * This function is used to set the message of the dialog.
   * It updates the content of the dialog with the provided message.
   * @param {string} message - The message to be displayed in the dialog.
   * @returns {UltraDialogInstance} - Returns the current instance of the dialog.
   */
  set_message(message: string, options?: UltraDialogSetMessageOptions): UltraDialogInstance;
  /**
   * This function is used to set the title of the dialog.
   * It updates the title of the dialog with the provided title.
   * @param {string} title - The title to be displayed in the dialog.
   * @returns {UltraDialogInstance} - Returns the current instance of the dialog.
   */
  set_title: (title: string) => UltraDialogInstance;
  /**
   * This function is used to set the state of the dialog.
   * It updates the state of the dialog to either "waiting" or "default".
   * @param {UltraDialogState} state - The state to be set for the dialog.
   * @tip Use "waiting" when the dialog is in a loading state.
   * @tip Use "default" when the dialog is ready for user interaction.
   * @returns {UltraDialogInstance} - Returns the current instance of the dialog.
   */
  set_state: (state: UltraDialogState) => UltraDialogInstance;
  /**
   * This function is used to set the drag state of the dialog.
   * It updates whether the dialog can be dragged around the screen or not.
   * @param {boolean} drag - The drag state to be set for the dialog.
   * @returns {UltraDialogInstance} - Returns the current instance of the dialog.
   */
  set_drag: (drag: boolean) => UltraDialogInstance;
  /**
 * This function is used to set the drag state of the dialog.
 * It updates whether the dialog can be dragged around the screen or not.
 * @param {boolean} drag - The drag state to be set for the dialog.
 * @returns {UltraDialogInstance} - Returns the current instance of the dialog.
 */
  set_drag_mobile: (drag: boolean) => UltraDialogInstance;
  /**
   * This function is used to set the z-order of the dialog.
   * It updates the stacking order of the dialog relative to other elements on the page.
   * @param {number} z - The z-order value to be set for the dialog.
   * @returns {UltraDialogInstance} - Returns the current instance of the dialog.
   */
  set_z_order: (z: number) => UltraDialogInstance;
  /**
   * This function is used to set the size of the dialog.
   * It updates the size of the dialog window.
   * @param {number} size - The size value to be set for the dialog.
   * @returns {UltraDialogInstance} - Returns the current instance of the dialog.
   */
  set_size: (size: number) => UltraDialogInstance;
  /**
   * This function is used to show the dialog.
   * It makes the dialog visible on the screen.
   * @param {boolean} show - Indicates whether to show the dialog or not.
   * @returns {UltraDialogInstance} - Returns the current instance of the dialog.
   */
  show_copy_btn: (show: boolean) => UltraDialogInstance;
  /**
   * This function is used to show the hide button of the dialog.
   * It makes the hide button visible or hidden based on the provided parameter.
   * @param show - Indicates whether to show the hide button or not.
   * @returns {UltraDialogInstance} - Returns the current instance of the dialog.
   */
  show_hide_btn: (show: boolean) => UltraDialogInstance;
  /**
   * This function is used to show the close button of the dialog.
   * It makes the close button visible or hidden based on the provided parameter.
   * @param show - Indicates whether to show the close button or not.
   * @returns {UltraDialogInstance} - Returns the current instance of the dialog.
   */
  show_close_btn: (show: boolean) => UltraDialogInstance;

  /**
   * Adds a new field to the dialog body
   * @param field Field configuration object
   * @returns The dialog instance for chaining
   */
  add_field(field: UltraDialogField): UltraDialogInstance;

  /**
   * Removes a referenced element from the modal and clears the associated property.
   * Only removes the element if it exists and is contained within the modal.
   * @param propName - The property name holding the element reference.
   * @returns The current dialog instance for chaining.
   */
  removeElementByProperty(propName: RemovableProps): UltraDialogInstance;

  /**
   * Removes an element by its DOM `id`, but only if it's part of the current modal.
   * Prevents accidental removal of external elements.
   * @param elementId - The DOM id of the element to remove.
   * @returns The current dialog instance for chaining.
   */
  removeElementById(elementId: string): UltraDialogInstance;

  /**
   * Removes all elements with a given `name` attribute, limited to elements inside the modal.
   * Useful for targeting and cleaning up form fields scoped to the dialog.
   * @param name - The `name` attribute value to match.
   * @returns The current dialog instance for chaining.
   */
  removeElementsByName(name: string): UltraDialogInstance;

}

/**
 * Options for configuring the behavior of the UltraDialog's setMessage method.
 */
export type UltraDialogSetMessageOptions = {
  /**
   * If true, the dialog will automatically scroll to show the latest message.
   * @default false
   */
  auto_scroll?: boolean;
};

/**
 * Represents the possible states of the Growatt Ultra Dialog.
 * 
 * - `"waiting"`: Indicates that the dialog is in a waiting state.
 * - `"default"`: Indicates that the dialog is in its default state.
 */
export type UltraDialogState = "waiting" | "default";

/**
 * Represents a field type that can be added to the dialog
 */
/**
 * Represents the various field types that can be used in a Growatt Ultra Dialog UI component.
 * 
 * The available field types include:
 * - `'Data'`: A single-line text input for general data.
 * - `'Text'`: A multi-line text input.
 * - `'Select'`: A dropdown selection field.
 * - `'Check'`: A checkbox input.
 * - `'Button'`: A button element.
 * - `'Int'`: An input for integer values.
 * - `'Float'`: An input for floating-point numbers.
 * - `'Currency'`: An input for currency values.
 * - `'Date'`: A date picker input.
 * - `'Time'`: A time picker input.
 * - `'Datetime'`: A combined date and time picker input.
 * - `'Link'`: A field for linking to another resource.
 * - `'Rating'`: A rating input, such as stars or similar.
 * - `'Color'`: A color picker input.
 * - `'Small Text'`: A smaller multi-line text input.
 * - `'Long Text'`: A larger multi-line text input.
 */
export type UltraDialogFieldType =
  | 'Data'
  | 'Text'
  | 'Select'
  | 'Check'
  | 'Button'
  | 'Int'
  | 'Float'
  | 'Currency'
  | 'Date'
  | 'Time'
  | 'Datetime'
  | 'Link'
  | 'Rating'
  | 'Color'
  | 'Small Text'
  | 'Long Text';

export type RemovableProps =
  | 'modal'
  | 'header'
  | 'body'
  | 'footer'
  | 'backdrop'
  | 'hide_btn'
  | 'copy_btn'
  | 'close_btn'
  // …add any custom fields you expose, e.g.:
  // | 'myCustomerInput'
  // | 'alertBanner'
  ;