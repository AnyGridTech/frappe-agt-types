export interface Text {
  /**
   * Normalize text for tolerant search (removes accents, spaces, hyphens, special characters, case-insensitive)
   */
  normalize: (text: string) => string; // agt.utils.text.normalize

  /**
   * Checks if a given value is valid.
   * - Returns `true` if the value is non-null, non-undefined, and (if a string) not empty after trimming.
   * 
   * @param v - The value to validate.
   * @returns `true` if valid, otherwise `false`.
   */
  is_valid: (v: any) => boolean; // agt.utils.text.is_valid

  /**
   * Converts a string to snake_case format.
   * 
   * @param str - The string to convert.
   * @returns The converted string in snake_case format.
   */
  to_snake_case: (str: string) => string; // agt.utils.text.to_snake_case

  /**
   * 
   * @param str - The string to convert.
   * @returns The Converted string in Pascal Case Spaced.
   * @example "kebab-case-text" -> "Kebab Case Text"
   * @example "snake_case_text" -> "Snake Case Text"
   * @example "camelCaseText" -> "Camel Case Text"
   * @example "PascalCaseText" -> "Pascal Case Text"
   */
  to_pascal_case_spaced: (str: string) => string; // agt.utils.text.to_pascal_case_spaced
}