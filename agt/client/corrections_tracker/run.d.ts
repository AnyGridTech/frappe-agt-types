/**
 * Corrections tracker run interface for managing correction workflows
 */
export interface CorrectionsTrackerRun {
  /** Status constants for correction tracker states */
  status: {
    /** Initial state - correction pending processing */
    pending: string;
    /** Intermediate state - correction under review */
    review: string;
    /** Final state - correction completed */
    finished: string;
  }
  /** Action name constants for workflow transitions */
  action: {
    request_review_name: string;
    approve_correction_name: string;
  }
  /** Executes the corrections tracker run */
  run: () => Promise<void>;
}