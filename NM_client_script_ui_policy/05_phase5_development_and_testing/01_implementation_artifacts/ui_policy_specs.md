# UI Policy Specifications (table: incident)

| ID | Short description | Conditions | Field | Mandatory | Visible | Read-only |
|----|-------------------|-----------|-------|-----------|---------|-----------|
| UP-01 | Incident - On Hold reason required | State is On Hold | On hold reason | True | True | Leave alone |
| UP-02 | Incident - Resolution details required | State is Resolved | Resolution code | True | Leave alone | Leave alone |
| UP-02 | (same policy) | State is Resolved | Resolution notes | True | Leave alone | Leave alone |
| UP-03 | Incident - Assignment group for P1 | Priority is 1 - Critical | Assignment group | True | Leave alone | Leave alone |

Common settings: Active = true, Global = true, On load = true, **Reverse if false = true** (so fields go back to normal when the condition no longer holds).

## Client Script vs UI Policy – when to use which
- Use a **UI Policy** for mandatory / visible / read-only behaviour (no code, runs on load and change).
- Use a **Client Script** for validation logic, messages, and clearing or calculating values.
