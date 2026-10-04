# Implementation Guide (manual, in a ServiceNow PDI)

## A. Client Scripts  (System Definition > Client Scripts > New)
Table: **Incident [incident]**. Code is in `05_phase5_development_and_testing/01_implementation_artifacts/client_scripts.js`.

| # | Name | Type | Field | Notes |
|---|------|------|-------|-------|
| 1 | Incident - Welcome Message | onLoad | – | Info message on new records |
| 2 | Incident - Clear Subcategory | onChange | Category | Clears Subcategory |
| 3 | Incident - Critical Priority Warning | onChange | Priority | Message when value = 1 |
| 4 | Incident - Validate Short Description | onSubmit | – | Min 10 characters |

Tick **Active**; leave **Global** and **UI Type = Desktop** (or All).

## B. UI Policies  (System UI > UI Policies > New)
Table: **Incident [incident]**, Active, **On load** ticked, **Reverse if false** ticked.

| # | Short description | Condition | UI Policy Actions |
|---|-------------------|-----------|-------------------|
| 1 | Incident - On Hold reason required | State is On Hold | On hold reason: Mandatory = True, Visible = True |
| 2 | Incident - Resolution details required | State is Resolved | Resolution code: Mandatory; Resolution notes: Mandatory |
| 3 | Incident - Assignment group for P1 | Priority is 1 - Critical | Assignment group: Mandatory |

Save each policy, then use the **UI Policy Actions** related list (New) to add the field actions.

## C. Test
Open **Incident > Create New** and run the UAT scenarios.

> Field labels and names can differ slightly between ServiceNow releases (e.g. `hold_reason`, `close_code`, `close_notes`). Check them via right-click field label > *Show Name*.
