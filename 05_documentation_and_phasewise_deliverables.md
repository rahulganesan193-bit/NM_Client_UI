# 5. Project Documentation and Phase-wise Deliverables

| Phase | Name | Activities | Deliverables |
|---|---|---|---|
| 1 | Requirement Analysis and Planning | Study the Incident form, list required dynamic behaviours, assign team roles | Requirements list, team roles table |
| 2 | Environment Setup | Create the ServiceNow PDI, open the Incident table, set up GitHub repo | Working instance, repository |
| 3 | UI Policy Implementation | Milestone 1 (UI Policy) and Milestone 2 (Urgency action) | UI Policy and Action screenshots, `docs/01` |
| 4 | Client Script Implementation | Milestone 3 (onChange), 4 (onSubmit), 5 (onCellEdit) | Three script files in `scripts/`, screenshots |
| 5 | Testing and Validation | Milestone 6, manual tests plus ATF suite | Test results, ATF suite, `docs/07` |
| 6 | Documentation and Deployment | Final README, DOCX/PDF packages, push to GitHub | Final repo, `deliverables/` |

## Team Responsibilities

| Member | Role | Suggested focus |
|---|---|---|
| Rahul | Team Lead | Planning, GitHub, final review |
| Dinesh kumar | Member | UI Policy and Policy Action (M1, M2) |
| Abisheknathan | Member | Client Scripts (M3, M4, M5) |
| Dakshanraj | Member | Testing and documentation (M6) |

## Documentation Checklist
- [ ] README with overview and phases
- [ ] Milestone implementation document
- [ ] Architecture and workflow document
- [ ] Project structure document
- [ ] Business impact and results
- [ ] Screenshots for every milestone
- [ ] Test results (manual and ATF)
- [ ] DOCX and PDF packages
- [ ] Everything pushed to GitHub

## Phase Exit Criteria
- **Phase 3 done** when Urgency is mandatory on active incidents.
- **Phase 4 done** when all three scripts are active and fire correctly.
- **Phase 5 done** when every test case has an Actual result and the ATF suite passes.
- **Phase 6 done** when the repository matches the structure in `docs/03`.
