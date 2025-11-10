export interface CorrectionsTracker{
  status: {
    PENDING: string;
    REVIEW: string;
    COMPLETED: string;
  } // agt.doctype_namespace.corrections_tracker.status
  action: {
    REQUEST_REVIEW: string;
    APPROVE_CORRECTION: string;
  } // agt.doctype_namespace.corrections_tracker.action
  run: () => Promise<void>; // agt.doctype_namespace.corrections_tracker.run
}