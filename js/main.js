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
        let checkbox_h=form.find('#id_c_locations [value="hits"]');
        let checkbox_d=form.find('#id_c_locations [value="daily"]');
        let checkbox_b=form.find('#id_c_locations [value="bside"]');

        form.find('#id_unlock').closest('.form-group').hide('fast');
        form.find('#id_daily').closest('.form-group').hide('fast');
        form.find('#id_b_side_master').closest('label').hide('fast');
        form.find('#id_b_side_start').closest('.form-group').hide('fast');
        form.find('#id_b_side_end').closest('.form-group').hide('fast');

        if(checkbox_h.prop('checked')){
        form.find('#id_unlock').closest('.form-group').show('fast');
        }
        else{
        form.find('#id_unlock').val('');
        }
        if(checkbox_d.prop('checked')){
        form.find('#id_daily').closest('.form-group').show('fast');
        }
        else{
        form.find('#id_daily').val('');
        }
        if(checkbox_b.prop('checked')){
        form.find('#id_b_side_master').closest('label').show('fast');
        form.find('#id_b_side_start').closest('.form-group').show('fast');
        form.find('#id_b_side_end').closest('.form-group').show('fast');
        }
        else{
        form.find('#id_b_side_master').val('');
        form.find('#id_b_side_start').val('');
        form.find('#id_b_side_end').val('');
        }
}

function loadSongs() {
    let form = $('[data-form-name$="_song"]');
    onLocationChange(form);
    form.find('#id_c_locations').change(function () { onLocationChange(form)});
}