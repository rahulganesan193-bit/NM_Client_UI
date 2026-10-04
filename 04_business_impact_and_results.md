# 4. Business Impact and Results

## Problem Statement
On the default Incident form, agents can leave key fields empty, enter vague descriptions and change urgency without any checks. This leads to incomplete tickets, wrong prioritisation and extra follow-up work.

## Business Impact

| Area | Impact of this solution |
|---|---|
| Data quality | Urgency is always filled and short descriptions meet a minimum length |
| Prioritisation | High urgency incidents force an assignment group, so they are routed sooner |
| Agent productivity | Instant on-screen feedback; no waiting for a server error |
| Fewer errors | Invalid saves are blocked before they reach the database |
| List editing control | Bulk or quick edits in the list view need confirmation for High urgency |
| Maintainability | UI Policies handle simple rules without code; scripts are used only when needed |
| Cost | Built with standard platform features, no extra licences or plugins |

## Results

Fill the "Actual" column after you run the tests in Milestone 6.

| Objective | Target | Actual |
|---|---|---|
| Urgency mandatory on active incidents | Pass | |
| onChange message and mandatory assignment group on High urgency | Pass | |
| onSubmit blocks short description under 10 characters | Pass | |
| onSubmit blocks High urgency with empty description | Pass | |
| onCellEdit confirmation on High urgency | Pass | |
| ATF suite pass rate | 100% | |

## Observations
- Client-side validation gives immediate feedback and reduces failed submissions.
- UI Policies are the better choice for simple show/hide/mandatory rules; Client Scripts are for logic a policy cannot express.
- Client-side checks can be bypassed by integrations or imports, so critical rules should also exist as server-side Business Rules in a production setup.

## Future Enhancements
- Add a server-side Business Rule that repeats the key validations.
- Auto-set Priority from Impact and Urgency.
- Extend the same pattern to Problem and Change tables.
