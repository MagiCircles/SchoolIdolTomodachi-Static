function onVersionChange(form, animation) {
    if (typeof version_prefixes == 'undefined' || typeof fields_per_version == 'undefined'
        || !version_prefixes || !fields_per_version) {
        return;
    }
    $.each(version_prefixes, function(version, prefix) {
        let checkbox = form.find('#id_c_versions [value="' + version + '"]');
        $.each(fields_per_version, function(i, field_name) {
            let input = form.find('#id_' + prefix + field_name);
            let field = input.closest('.form-group');
            if (checkbox.prop('checked')) {
                field.show(animation);
            } else {
                field.hide(animation);
                input.val('');
            }
        });
    });
}

function loadVersions() {
    let form = $('[data-form-name$="_event"]');
    onVersionChange(form);
    form.find('#id_c_versions').change(function () { onVersionChange(form, 'slow') });
}

function onLocationChange(form){
    $.each(locations_related, function(num, related) {
        let checked = form.find('#id_c_locations [value="' + related[0] + '"]').prop('checked');
        $.each(related[1], function(_num, _field) {
            if (checked) {
                form.find('#id_' + _field).closest('.form-group').show();
            } else {
                form.find('#id_' + _field).prop('checked', false);
                form.find('#id_' + _field).val('');
                form.find('#id_' + _field).closest('.form-group').hide();
            }
        });
    });
    console.log('----');
}

function loadSongs() {
    let form = $('[data-form-name$="_song"]');
    onLocationChange(form);
    form.find('#id_c_locations').change(function () { onLocationChange(form); })
}