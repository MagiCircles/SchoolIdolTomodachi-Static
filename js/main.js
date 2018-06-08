﻿function onVersionChange(form, animation) {
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

function loadSongs() {
    let form = $('[data-form-name$="_song"]');
    console.log(form);
    $.each(version_prefixes, function(version, prefix) {
    console.log(version);
    console.log(prefix);
    if (prefix == 'kr_' || prefix == 'tw_'){
	let input = form.find('#id_c_versions [value="' + version + '"]');
	let field = input.closest('label');
    console.log(input);
    console.log(field);
        field.hide('slow');
        input.val('');
    }
    });
}
