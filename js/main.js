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

function hideExtraVersions(form) {
    $.each(version_prefixes, function(version, prefix) {
        if (prefix == 'kr_' || prefix == 'tw_'){
	    let input = form.find('#id_c_versions [value="' + version + '"]');
	    let field = input.closest('label');
            field.hide('slow');
            input.val('');
    }
    });
}

function onLocationChange(form){
//firstly, check hits, daily, b-sides. If hits or b-side, hide daily. If daily, hide b-sides and hits.
//then, go through again and hide/show based off of each attribute
        let checkbox_h=form.find('#id_c_locations [value="hits"]');
        let checkbox_d=form.find('#id_c_locations [value="daily"]');
        let checkbox_b=form.find('#id_c_locations [value="bsides"]');
        if(checkbox_h.prop('checked') || checkbox_b.prop('checked')){
            let field_d_e = form.find('#id_daily')
            let field_d = form.find('#id_c_locations_1');
            let input_d_e = field_d_e.closest('.form-group');
            let input_d = field_d.closest('label');
            input_d_e.hide('slow');
            input_d.hide('slow');
            field_d_e.val('');
            field_d.val('');
            
        if(location == 'daily'){
            let field = form.find('#id_daily')
            let input = input.closest('.form-group');
            if(checkbox.prop('checked')){
                field.show('slow');
            }
            else{
                field.hide('slow');
                input.val('');
            }
        }
    }
}

function loadSongs() {
    let form = $('[data-form-name$="_song"]');
    console.log(form);
    hideExtraVersions(form);
    onLocationChange(form);
    form.find('#id_c_locations').change(function () { onLocationChange(form)});
}
