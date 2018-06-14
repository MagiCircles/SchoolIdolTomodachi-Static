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
        let checkbox_b=form.find('#id_c_locations [value="bside"]');
            let field_h_e = form.find('#id_unlock');
            let field_d_e = form.find('#id_daily');
            let field_b_e1 = form.find('#id_b_side_master');
            let field_b_e2 = form.find('#id_b_side_start');
            let field_b_e3 = form.find('#id_b_side_end');
            let field_h = form.find('#id_c_locations_0');
            let field_d = form.find('#id_c_locations_1');
            let_field_b = form.find('#id_c_locations_2');
            let input_h_e = field_h_e.closest('.form-group');
            let input_d_e = field_d_e.closest('.form-group');
            let input_b_e1 = field_b_e1.closest('label');
            let input_b_e2 = field_b_e2.closest('.form-group');
            let input_b_e3 = field_b_e3.closest('.form-group');
            let input_d = field_d.closest('label');
            let input_b = field_d.closest('label');
            let input_h = field_d.closest('label');
        if(checkbox_h.prop('checked') || checkbox_b.prop('checked')){
            input_d_e.hide('slow');
            input_d.hide('slow');
            field_d_e.val('');
         }
         else{
            input_d_e.show('slow');
            input_d.show('slow');
        }
        if(checkbox_d.prop('checked')){
            input_h_e.hide('slow');
            input_b_e1.hide('slow');
	    input_b_e2.hide('slow');
	    input_b_e3.hide('slow');
            input_b.hide('slow');
            input_h.hide('slow');
            field_h_e.val('');
            field_b_e1.val('');
            field_b_e2.val('');
            field_b_e3.val('');
        }
        else{
            input_h_e.show('slow');
            input_h.show('slow');
            input_b_e1.show('slow');
            input_b_e2.show('slow');
            input_b_e3.show('slow');
            input_b.show('slow');
        }
}

function loadSongs() {
    let form = $('[data-form-name$="_song"]');
    console.log(form);
    hideExtraVersions(form);
    onLocationChange(form);
    form.find('#id_c_locations').change(function () { onLocationChange(form)});
}
