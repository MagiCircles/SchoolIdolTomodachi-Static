function onVersionChange(animation) {
//for JP
       if ($('.container-for-generic-form #id_c_versions_0').val() == true) {

           $('.container-for-generic-form #id_jp_banner').closest('.form-group').show(animation);
	   $('.container-for-generic-form #id_jp_start_date').closest('.form-group').show(animation);
           $('.container-for-generic-form #id_jp_end_date').closest('.form-group').show(animation);
        }
       else {
           $('.container-for-generic-form #id_jp_banner').closest('.form-group').hide(animation);
	   $('.container-for-generic-form #id_jp_start_date').closest('.form-group').hide(animation);
           $('.container-for-generic-form #id_jp_end_date').closest('.form-group').hide(animation);

           $('.container-for-generic-form #id_jp_banner').prop('value', "");
	   $('.container-for-generic-form #id_jp_start_date').prop('value', "");
	   $('.container-for-generic-form #id_jp_end_date').prop('value', "");
        }
//for WW
       if ($('.container-for-generic-form #id_c_versions_1').val() == true) {
           $('.container-for-generic-form #id_ww_banner').closest('.form-group').show(animation);
	   $('.container-for-generic-form #id_ww_start_date').closest('.form-group').show(animation);
           $('.container-for-generic-form #id_ww_end_date').closest('.form-group').show(animation);
        }
       else {
           $('.container-for-generic-form #id_ww_banner').closest('.form-group').hide(animation);
	   $('.container-for-generic-form #id_ww_start_date').closest('.form-group').hide(animation);
           $('.container-for-generic-form #id_ww_end_date').closest('.form-group').hide(animation);
//I don't think banner and start dates have a 'checked' property, and I didn't see anything else
//that might be relevant other than value for dates (i have no clue about banner) so yea
           $('.container-for-generic-form #id_ww_banner').prop('value', "");
	   $('.container-for-generic-form #id_ww_start_date').prop('value', "");
	   $('.container-for-generic-form #id_ww_end_date').prop('value', "");
        }
//Lather rinse repeat for all versions once this works 0w0
}
function loadVersions() {
        onVersionChange();
//I thought these would be specific enough selectors, but if they're wrong lemme know
        $('.container-for-generic-form #id_c_versions').change(function () { onVersionChange('slow') });
}

