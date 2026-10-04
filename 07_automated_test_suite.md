# 7. Automated Test Suite and Verification

ServiceNow provides the **Automated Test Framework (ATF)** to test forms and scripts without clicking through manually.

## Setup
1. Search **Automated Test Framework** in the filter navigator.
2. Open **Properties** and make sure ATF is enabled.
3. Open **Client Test Runner** in a separate browser tab and keep it open while tests run.

## Test Suite

**Suite name:** `Incident Form Behavior Suite`
Create via **Automated Test Framework > Suites > New**, then add the tests below.

| ID | Test name | ATF steps | Expected result |
|---|---|---|---|
| T1 | Urgency mandatory on new incident | Open new form (Incident) > Field state validation: Urgency mandatory = true | Pass |
| T2 | Urgency not mandatory when closed | Open form > Set State = Closed > Field state validation: Urgency mandatory = false | Pass |
| T3 | High urgency requires assignment group | Open new form > Set field values: Urgency = 1 - High > Field state validation: Assignment group mandatory = true | Pass |
| T4 | Low urgency removes requirement | Open new form > Set Urgency = 3 - Low > Assignment group mandatory = false | Pass |
| T5 | Short description too short | Open form > Set Short description = `abc` > Submit form > Assert form is not submitted | Pass |
| T6 | Valid incident saves | Open form > Set Short description (10+ chars), Urgency, Caller > Submit form > Record validation | Pass |
| T7 | High urgency needs description | Open form > Urgency = 1 > Short description valid, Description empty > Submit > not submitted | Pass |

## Step-by-step: Creating One Test (T3 example)
1. **Automated Test Framework > Tests > New**. Name: `T3 High urgency requires assignment group`.
2. Save, then in **Test Steps** click **Add Test Step**.
3. Add **Open a New Form** (Table: Incident).
4. Add **Set Field Values** (Urgency = 1 - High).
5. Add **Field State Validation** (Assignment group: Mandatory).
6. Run the test with **Run Test** and watch the Client Test Runner tab.

## Not Covered by ATF
`onCellEdit` runs in the list view, which ATF form steps cannot drive. Verify it manually:
1. Open the Incident list.
2. Double-click an Urgency cell and change it to 1 - High.
3. Confirm the prompt appears; test both OK and Cancel.

## Verification Report

| ID | Result (Pass/Fail) | Run date | Notes |
|---|---|---|---|
| T1 | | | |
| T2 | | | |
| T3 | | | |
| T4 | | | |
| T5 | | | |
| T6 | | | |
| T7 | | | |
| Manual: onCellEdit | | | |

**Suite result:** ____ of 7 automated tests passed.

Take a screenshot of the suite result page and save it as `screenshots/m6_atf_suite_result.png`.

## Exit Criteria
- All automated tests pass (or failures are explained and fixed).
- The manual onCellEdit check is done.
- Results are recorded in the table above and in `04_business_impact_and_results.md`.
