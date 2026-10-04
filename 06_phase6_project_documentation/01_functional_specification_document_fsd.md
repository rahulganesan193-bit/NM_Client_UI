# Functional Specification Document

## 1. Purpose
Improve incident data quality on the form using Client Scripts and UI Policies.

## 2. Scope
In: `incident` form behaviour (desktop UI). Out: server-side enforcement, Service Portal, other tables.

## 3. Functional components
See `05_phase5_development_and_testing/01_implementation_artifacts/client_scripts.js` and `ui_policy_specs.md`.

## 4. Business rules summary
| Rule | Mechanism |
|------|-----------|
| Short description >= 10 chars | onSubmit |
| Subcategory cleared on category change | onChange |
| P1 warning | onChange |
| Hold reason required when On Hold | UI Policy |
| Resolution code/notes required when Resolved | UI Policy |
| Assignment group required for P1 | UI Policy |

## 5. Acceptance
All UAT cases in `uat_test_plan.md` pass.
