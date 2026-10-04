# UAT Test Plan – Client Script & UI Policy (Incident)

Fill **Actual Result**, **Status** and attach screenshots after executing on your instance.

| ID | Scenario | Steps | Expected Result | Actual Result | Status |
|----|----------|-------|-----------------|---------------|--------|
| TC01 | Welcome message | Incident > Create New | Info message appears on the new form | | |
| TC02 | Short description too short | Enter "Help", fill caller, Submit | Error message, record not saved | | |
| TC03 | Valid short description | Enter 10+ char text, Submit | Record saved | | |
| TC04 | Clear subcategory | Select Category + Subcategory, change Category | Subcategory is cleared | | |
| TC05 | Critical priority warning | Set Impact/Urgency so Priority = 1 | Warning message shown | | |
| TC06 | P1 needs assignment group | Priority 1, leave Assignment group empty, Save | Assignment group marked mandatory; save blocked | | |
| TC07 | On Hold reason | Set State = On Hold | On hold reason visible and mandatory | | |
| TC08 | Reverse if false | Change State back from On Hold | On hold reason no longer mandatory | | |
| TC09 | Resolution details | Set State = Resolved, leave code/notes empty, Save | Both fields mandatory; save blocked | | |
