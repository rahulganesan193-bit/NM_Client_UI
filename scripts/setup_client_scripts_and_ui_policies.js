/*
 * OPTIONAL helper. Run in: System Definition > Scripts - Background.
 * Creates the 4 client scripts and 3 UI policies for the incident table.
 * NOTE: Field names on system tables can vary by release. If it errors,
 * follow docs/IMPLEMENTATION_GUIDE.md and create the records manually.
 * Re-running creates duplicates; delete old records first.
 */
(function () {
    function addClientScript(name, type, field, script) {
        var cs = new GlideRecord('sys_script_client');
        cs.initialize();
        cs.name = name;
        cs.table = 'incident';
        cs.type = type;          // onLoad | onChange | onSubmit
        if (field) cs.field_name = field;
        cs.script = script;
        cs.active = true;
        cs.global = true;
        return cs.insert();
    }

    addClientScript('Incident - Welcome Message', 'onLoad', '',
        "function onLoad() {\n if (g_form.isNewRecord()) {\n  g_form.addInfoMessage('Please enter a clear short description and select the correct category.');\n }\n}");

    addClientScript('Incident - Clear Subcategory', 'onChange', 'category',
        "function onChange(control, oldValue, newValue, isLoading, isTemplate) {\n if (isLoading || newValue === oldValue) { return; }\n g_form.clearValue('subcategory');\n}");

    addClientScript('Incident - Critical Priority Warning', 'onChange', 'priority',
        "function onChange(control, oldValue, newValue, isLoading, isTemplate) {\n if (isLoading || newValue === '') { return; }\n if (newValue == '1') { g_form.addInfoMessage('Critical incident: assign it to a group and notify the Incident Manager.'); } else { g_form.clearMessages(); }\n}");

    addClientScript('Incident - Validate Short Description', 'onSubmit', '',
        "function onSubmit() {\n var desc = g_form.getValue('short_description').trim();\n if (desc.length < 10) { g_form.addErrorMessage('Short description must be at least 10 characters.'); return false; }\n return true;\n}");

    function addPolicy(desc, conditions, actions) {
        var p = new GlideRecord('sys_ui_policy');
        p.initialize();
        p.short_description = desc;
        p.table = 'incident';
        p.conditions = conditions;   // encoded query
        p.active = true;
        p.global = true;
        p.on_load = true;
        p.reverse = true;
        var id = p.insert();
        actions.forEach(function (a) {
            var act = new GlideRecord('sys_ui_policy_action');
            act.initialize();
            act.ui_policy = id;
            act.field = a.field;
            act.mandatory = a.mandatory || 'ignore';
            act.visible = a.visible || 'ignore';
            act.disabled = 'ignore';
            act.insert();
        });
    }

    addPolicy('Incident - On Hold reason required', 'state=3',
        [{ field: 'hold_reason', mandatory: 'true', visible: 'true' }]);
    addPolicy('Incident - Resolution details required', 'state=6',
        [{ field: 'close_code', mandatory: 'true' }, { field: 'close_notes', mandatory: 'true' }]);
    addPolicy('Incident - Assignment group for P1', 'priority=1',
        [{ field: 'assignment_group', mandatory: 'true' }]);

    gs.info('Client scripts and UI policies created.');
})();
