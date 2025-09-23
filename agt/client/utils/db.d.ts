export interface Db {
  /**
   * Filters and joins data based on the specified steps.
   * @param steps - Steps to perform the join operation
   * @returns A promise resolving to the joined data
   * @example
   * ```typescript
   * const steps = [
   *   { doctype: 'Customer', filters: { customer_group: 'Retail' }, fields: ['name', 'customer_name'] },
   *   { doctype: 'Sales Order', filters: { docstatus: 1 }, fields: ['name', 'grand_total'], joinOn: { sourceField: 'name', targetField: 'customer' } },
   * ];
   *
   * const result = await agt.utils.filterJoin(steps);
   * ```
   */
  filterJoin: <Steps extends readonly JoinStep[]>(
    steps: Steps
  ) => Promise<
    Steps extends [...any, infer Last]
    ? Last extends JoinStep<infer T>
    ? T[]
    : any[]
    : any[]
  >; // agt.utils.filterJoin
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