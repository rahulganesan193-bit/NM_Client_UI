# Phase 2 – Solution Requirements

## Functional
- FR1 Validate short description length (>= 10 chars) on submit.
- FR2 Clear Subcategory when Category changes.
- FR3 Show a warning when Priority = 1.
- FR4 Enforce mandatory fields via UI Policies (UP-01 to UP-03).
- FR5 Fields revert when the condition is no longer true (Reverse if false).

## Non-functional
- Runs client-side with no noticeable delay.
- Easy to maintain: one record per rule, clear naming (`Incident - ...`).
- Scoped to the `incident` table only.

## Constraints
- Client-side rules can be bypassed by imports/API; server-side Business Rules or Data Policies would be needed for strict enforcement (future scope).
