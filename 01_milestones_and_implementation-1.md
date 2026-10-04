# 1. Milestones and Implementation Details

**Project:** Streamlining Incident Management: Implementing Client Script and UI Policy for Dynamic Form Behavior – ServiceNow
**Team:** Rahul (Team Lead), Dinesh kumar, Abisheknathan, Dakshanraj

> Adjust field names, conditions and messages to match what your team actually configured in your instance.

## Milestone Summary

| # | Milestone | Type | Table |
|---|---|---|---|
| 1 | Create UI Policy on Incident | UI Policy | Incident |
| 2 | Create UI Policy Action – Urgency | UI Policy Action | Incident |
| 3 | Create onChange Client Script | Client Script | Incident |
| 4 | Create onSubmit Client Script (Save Validation) | Client Script | Incident |
| 5 | Create onCellEdit Client Script | Client Script | Incident (list) |
| 6 | Testing the Configuration | Testing | Incident |

---

## Milestone 1: Create UI Policy on Incident

**Goal:** Control how the Incident form behaves based on a condition.

**Steps**
1. Log in to your PDI as admin.
2. Open **System UI > UI Policies** and click **New**.
3. Fill in:
   - Table: `Incident`
   - Short description: `Urgency required for active incidents`
   - Active: checked
   - Condition: `State` `is not` `Closed`
   - Reverse if false: checked
4. Right-click the header and choose **Save** (do not submit yet, so the Actions tab appears).

## Milestone 2: Create UI Policy Action – Urgency

**Activity 1: Configure the Urgency Field**

1. In the saved UI Policy, scroll to the **UI Policy Actions** related list and click **New**.
2. Fill in:
   - Field name: `Urgency`
   - Mandatory: `True`
   - Visible: `True`
   - Read only: `Leave alone`
3. Submit.

**Result:** Urgency is mandatory on active incidents and returns to normal when the incident is closed.

## Milestone 3: Create onChange Client Script

**Goal:** React instantly when Urgency is changed on the form.

1. Open **System Definition > Client Scripts > New**.
2. Fill in:
   - Name: `Incident - Urgency onChange`
   - Table: `Incident`
   - UI Type: `All`
   - Type: `onChange`
   - Field name: `Urgency`
   - Active: checked
3. Script:

```javascript
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    if (newValue == '1') { // 1 - High
        g_form.addInfoMessage('High urgency: please assign this incident to a group.');
        g_form.setMandatory('assignment_group', true);
    } else {
        g_form.setMandatory('assignment_group', false);
    }
}
```

## Milestone 4: Create onSubmit Client Script (Save Validation)

**Goal:** Stop a bad record from being saved.

1. Create a new Client Script:
   - Name: `Incident - Save Validation`
   - Table: `Incident`
   - Type: `onSubmit`
2. Script:

```javascript
function onSubmit() {
    var shortDesc = g_form.getValue('short_description');
    if (shortDesc.length < 10) {
        g_form.addErrorMessage('Short description must be at least 10 characters.');
        return false; // blocks the save
    }
    if (g_form.getValue('urgency') == '1' && g_form.getValue('description') == '') {
        g_form.addErrorMessage('Description is required for High urgency incidents.');
        return false;
    }
    return true;
}
```

## Milestone 5: Create onCellEdit Client Script

**Goal:** Apply a rule when a field is edited directly in the **list view** (double-click a cell).

1. Create a new Client Script:
   - Name: `Incident - Urgency onCellEdit`
   - Table: `Incident`
   - Type: `onCellEdit`
   - Field name: `Urgency`
2. Script:

```javascript
function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
    var saveAndClose = true;
    if (newValue == '1') {
        saveAndClose = confirm('Set urgency to High for the selected incident(s)?');
    }
    callback(saveAndClose);
}
```

## Milestone 6: Testing the Configuration

| # | Test | Expected result |
|---|---|---|
| 1 | Open a new incident | Urgency is mandatory |
| 2 | Set State = Closed | Urgency no longer mandatory |
| 3 | Change Urgency to 1 - High | Info message appears, Assignment group becomes mandatory |
| 4 | Change Urgency to 2 or 3 | Assignment group no longer mandatory |
| 5 | Save with short description under 10 characters | Error shown, record not saved |
| 6 | Save High urgency with empty Description | Error shown, record not saved |
| 7 | In list view, edit Urgency to High | Confirmation prompt appears |

Take a screenshot of each result and store it in `screenshots/`.

---

## Conclusion

This project made the ServiceNow Incident form dynamic by combining a **UI Policy** with three **Client Scripts**, built across six milestones.

- **Milestones 1 and 2** used a UI Policy and a Policy Action to make the Urgency field mandatory on active incidents, with no code.
- **Milestone 3** (onChange) gave instant feedback when Urgency changed and required an Assignment group for High urgency.
- **Milestone 4** (onSubmit) stopped incomplete or poor-quality records from being saved.
- **Milestone 5** (onCellEdit) extended the same control to quick edits in the list view.
- **Milestone 6** confirmed that every rule behaves as expected.

Together, these rules improve data quality, speed up prioritisation and reduce errors. They also show that simple rules are best handled by UI Policies, with Client Scripts used for logic a policy cannot express. The same approach can be applied to other tables such as Problem and Change, and backed by server-side Business Rules for stronger enforcement.
