# Phase 3 – Proposed Solution

| Trigger | Mechanism | Result |
|---------|-----------|--------|
| Form load (new) | onLoad Client Script | Guidance message |
| Category changes | onChange Client Script | Subcategory cleared |
| Priority = 1 | onChange script + UI Policy | Warning; Assignment group mandatory |
| State = On Hold | UI Policy | Hold reason visible + mandatory |
| State = Resolved | UI Policy | Close code + notes mandatory |
| Submit | onSubmit Client Script | Short description validated |

**Exception handling:** If a script errors, check the browser console and Client Script *Active*/*UI Type* settings; UI Policies with *Reverse if false* undo themselves automatically.
