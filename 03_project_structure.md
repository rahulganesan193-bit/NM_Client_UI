# 3. Project Structure

## Repository Layout

```
NM-project_rahul/
├── README.md
├── scripts/
│   ├── milestone3_onchange_urgency.js
│   ├── milestone4_onsubmit_validation.js
│   └── milestone5_oncelledit_urgency.js
├── docs/
│   ├── 01_milestones_and_implementation.md
│   ├── 02_architecture_and_workflow.md
│   ├── 03_project_structure.md
│   ├── 04_business_impact_and_results.md
│   ├── 05_documentation_and_phasewise_deliverables.md
│   ├── 06_docx_pdf_deliverables_package.md
│   └── 07_automated_test_suite.md
├── deliverables/
│   ├── docx/
│   └── pdf/
├── tests/
│   └── atf_test_cases.md
└── screenshots/
    ├── m1_ui_policy.png
    ├── m2_ui_policy_action.png
    ├── m3_onchange.png
    ├── m4_onsubmit.png
    ├── m5_oncelledit.png
    └── m6_testing.png
```

## Folder Purpose

| Folder / File | Contents |
|---|---|
| `README.md` | Project overview, team, phases |
| `scripts/` | Client Script code, one file per milestone |
| `docs/` | All markdown documentation |
| `deliverables/` | Final Word and PDF packages |
| `tests/` | Automated test (ATF) notes and results |
| `screenshots/` | Evidence for each milestone |

## ServiceNow Components (inside the instance)

| Component | Name | Table |
|---|---|---|
| UI Policy | Urgency required for active incidents | Incident |
| UI Policy Action | Urgency: mandatory = true | Incident |
| Client Script (onChange) | Incident - Urgency onChange | Incident |
| Client Script (onSubmit) | Incident - Save Validation | Incident |
| Client Script (onCellEdit) | Incident - Urgency onCellEdit | Incident |
| ATF Test Suite | Incident Form Behavior Suite | - |

## Naming Conventions
- Scripts: `milestoneN_<type>_<field>.js`
- Docs: numbered prefix (`01_`, `02_`) in reading order
- Screenshots: `mN_<short_name>.png`
