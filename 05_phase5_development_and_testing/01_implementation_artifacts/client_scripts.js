/* ============================================================
   Client Scripts - Table: incident
   Create each as a separate record (System Definition > Client Scripts)
   ============================================================ */

/* 1. Incident - Welcome Message | Type: onLoad */
function onLoad() {
    if (g_form.isNewRecord()) {
        g_form.addInfoMessage('Please enter a clear short description and select the correct category.');
    }
}

/* 2. Incident - Clear Subcategory | Type: onChange | Field: category */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === oldValue) {
        return;
    }
    g_form.clearValue('subcategory');
}

/* 3. Incident - Critical Priority Warning | Type: onChange | Field: priority */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    if (newValue == '1') {
        g_form.addInfoMessage('Critical incident: assign it to a group and notify the Incident Manager.');
    } else {
        g_form.clearMessages();
    }
}

/* 4. Incident - Validate Short Description | Type: onSubmit */
function onSubmit() {
    var desc = g_form.getValue('short_description').trim();
    if (desc.length < 10) {
        g_form.addErrorMessage('Short description must be at least 10 characters.');
        return false; // blocks the submit
    }
    return true;
}
