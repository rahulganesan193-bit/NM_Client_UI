# 6. Formatted DOCX and PDF Deliverables Package

## Package Contents

| File | Format | Source | Purpose |
|---|---|---|---|
| `NM_Project_Report.docx` | Word | All `docs/*.md` combined | Editable report for submission |
| `NM_Project_Report.pdf` | PDF | Same report | Final read-only copy |
| `Milestones_Implementation.docx` / `.pdf` | Word / PDF | `01_...md` | Step-by-step guide |
| `Architecture_Workflow.docx` / `.pdf` | Word / PDF | `02_...md` | Diagrams and flow |
| `Test_Report.docx` / `.pdf` | Word / PDF | `07_...md` + screenshots | Test evidence |

Place the files in:
```
deliverables/
├── docx/
└── pdf/
```

## Report Structure (DOCX / PDF)

1. Cover page: project title, team names, college, subject, date
2. Table of contents
3. Introduction and problem statement
4. Milestones and implementation (with screenshots)
5. Architecture and workflow
6. Project structure
7. Testing and results
8. Business impact
9. Conclusion and future scope
10. Appendix: scripts

## Formatting Standards

| Item | Standard |
|---|---|
| Font | Times New Roman or Calibri, 12 pt body |
| Headings | Heading 1 (16 pt bold), Heading 2 (14 pt bold) |
| Line spacing | 1.5 |
| Margins | 1 inch on all sides |
| Code | Consolas or Courier New, 10 pt, shaded box |
| Screenshots | Centered, captioned (Figure 1, Figure 2...) |
| Page numbers | Bottom centre |

## How to Create Them

**Option A: Pandoc (laptop)**
```bash
pandoc 01_milestones_and_implementation.md 02_architecture_and_workflow.md \
  03_project_structure.md 04_business_impact_and_results.md \
  05_documentation_and_phasewise_deliverables.md 07_automated_test_suite.md \
  -o NM_Project_Report.docx --toc
```
Then open the DOCX in Word, adjust formatting and use **File > Export > PDF**.

**Option B: Word only**
Paste each markdown file into Word, apply Heading styles, insert screenshots, then Save As PDF.

**Option C:** Ask Claude to generate the DOCX and PDF directly from these markdown files.

## Quality Checklist
- [ ] Team names and title on cover page
- [ ] Table of contents updates correctly
- [ ] All screenshots visible and captioned
- [ ] Code blocks readable
- [ ] PDF fonts and layout match the DOCX
