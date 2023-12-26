//jQuery(document).ready(function($) {
	// Custom codes.
// });

jQuery(document).ready(function($) {
	jQuery( '#gform_10 input' ).attr( 'autocomplete', 'nope' );
	

	if( jQuery( 'body' ).hasClass( 'page-template-aktivate-landing-page' ) ) {
		jQuery('body').addClass(' rs-cvent-landing-page rs-aktivate-landing-page');
	}
	jQuery( document ).on( 'change', '#input_7_34', function() {
		if( jQuery( '#input_7_34' ).val() == ''){
			jQuery( '.gf_date_treated' ).addClass('gfield_visibility_hidden');
			jQuery( '.gf_date_treated' ).removeClass('gfield_visibility_visible');
		} else {
			jQuery( '.gf_date_treated' ).addClass('gfield_visibility_visible');
			jQuery( '.gf_date_treated' ).removeClass('gfield_visibility_hidden');
		}
	});
	jQuery( document ).on( 'change', '#input_7_40', function() {
		if( jQuery( '#input_7_40' ).val() == ''){
			jQuery( '.gf_date_symptom' ).addClass('gfield_visibility_hidden');
			jQuery( '.gf_date_symptom' ).removeClass('gfield_visibility_visible');
		} else {
			jQuery( '.gf_date_symptom' ).addClass('gfield_visibility_visible');
			jQuery( '.gf_date_symptom' ).removeClass('gfield_visibility_hidden');
		}
	});
	jQuery( document ).on( 'change', '#input_7_47', function() {
		if( jQuery( '#input_7_47' ).val() == ''){
			jQuery( '.gf_date_discharged' ).addClass('gfield_visibility_hidden');
			jQuery( '.gf_date_discharged' ).removeClass('gfield_visibility_visible');
		} else {
			jQuery( '.gf_date_discharged' ).addClass('gfield_visibility_visible');
			jQuery( '.gf_date_discharged' ).removeClass('gfield_visibility_hidden');
		}
	});
	jQuery( document ).on( 'change', '#input_7_63', function() {
		if( jQuery( '#input_7_63' ).val() == ''){
			jQuery( '.gf_date_expiration' ).addClass('gfield_visibility_hidden');
			jQuery( '.gf_date_expiration' ).removeClass('gfield_visibility_visible');
		} else {
			jQuery( '.gf_date_expiration' ).addClass('gfield_visibility_visible');
			jQuery( '.gf_date_expiration' ).removeClass('gfield_visibility_hidden');
		}
	});

	jQuery( document ).on( 'change', '#choice_7_42_0', function() {
		//jQuery( '.gf_date_discharged' ).hide();
		jQuery( '.gf_date_discharged' ).addClass('gfield_visibility_hidden');
		jQuery( '.gf_date_discharged' ).removeClass('gfield_visibility_visible');
	});
	jQuery( document ).on( 'change', '#choice_7_61_0', function() {
		//jQuery( '.gf_date_expiration' ).hide();
		jQuery( '.gf_date_expiration' ).addClass('gfield_visibility_hidden');
		jQuery( '.gf_date_expiration' ).removeClass('gfield_visibility_visible');
	});

	gform.addFilter( 'gform_datepicker_options_pre_init', function( optionsObj, formId, fieldId ) {
		if ( formId == 4 && ( fieldId == 6 || fieldId == 7 ) ) {
			optionsObj.minDate = 0;
		}
		if ( formId == 4 && fieldId == 6 ) {
			optionsObj.minDate = 0;
			optionsObj.onClose = function (dateText, inst) {
				jQuery('#input_4_7').datepicker('option', 'minDate', dateText).datepicker('setDate', dateText);
			};
		}
		if( formId == 4 ) {
			var main_fieldid = fieldId.split("-");
			if ( formId == 4 && ( main_fieldid[0] == 105 ) ) {
				optionsObj.maxDate = 0;
			}
		}
		if(typeof fieldId === 'undefined' && typeof formId === 'undefined') {
			optionsObj.maxDate = 0;
		}
		if ( formId == 10 && ( fieldId == 6 || fieldId == 7 ) ) {
			optionsObj.minDate = 0;
		}
		if ( formId == 10 && fieldId == 6 ) {
			optionsObj.minDate = 0;
			optionsObj.onClose = function (dateText, inst) {
				jQuery('#input_10_7').datepicker('option', 'minDate', dateText).datepicker('setDate', dateText);
			};
		}
		if( formId == 10 && fieldId == 127) {
			optionsObj.maxDate = 0;
		}
		// if( formId == 10 ) {
		// 	var main_fieldid = fieldId.split("-");
		// 	if ( formId == 10 && ( main_fieldid[0] == 105 ) ) {
		// 		optionsObj.maxDate = 0;
		// 	}
		// }

		//past date
		if ( formId == 7 && (  fieldId == 17 || fieldId == 34 || fieldId == 40 ||  fieldId == 47 || fieldId == 63 ) ) {
			if( fieldId == 17 ){
				optionsObj.maxDate = 0;
			}
			//Date injury occurred or when symptoms began*
			if( fieldId == 34 ){
				optionsObj.maxDate = 0;
				optionsObj.onClose = function (dateText, inst) {
					jQuery('#input_7_35').datepicker('option', 'minDate', dateText).datepicker('option', 'maxDate', 0).datepicker('setDate', dateText);
				};
			}

			//Date of First Symptom of Illness or Injury
			if( fieldId == 40 ){
				optionsObj.maxDate = 0;
				optionsObj.onClose = function (dateText, inst) {
					jQuery('#input_7_41').datepicker('option', 'minDate', dateText).datepicker('option', 'maxDate', 0).datepicker('setDate', dateText);
				};
			}

			//Admitted
			if( fieldId == 47 ){
				optionsObj.maxDate = 0;
				optionsObj.onClose = function (dateText, inst) {
					jQuery('#input_7_48').datepicker('option', 'minDate', dateText).datepicker('option', 'maxDate', 0).datepicker('setDate', dateText);
				};
			}

			// Effective date
			if( fieldId == 63 ){
				optionsObj.maxDate = 0;
				optionsObj.onClose = function (dateText, inst) {
					jQuery('#input_7_64').datepicker('option', 'minDate', dateText).datepicker('option', 'maxDate', 0).datepicker('setDate', dateText);
				};
			}

		}
		return optionsObj;
	});


	$("li.gf-participant-datepicker .gfield_list_8_cell5 input[name*='input_8']").datepicker({dateFormat: 'dd/mm/yy' });
	//console.log( $("li.gf-participant-datepicker .gfield_list_53_cell1 input[name*='input_53']"));

	$( document ).on( 'click', '.add_repeater_item', function(){
		var datepicker_img_url = $( '.ms-get-started-form .ui-datepicker-trigger' ).attr( 'src' );
		$( ".ms-get-started-form .gfield_repeater input[name*='input_105']" ).datepicker({
			dateFormat: 'mm/dd/yy',
			maxDate: '0',
			changeMonth: true,
    		changeYear: true,
			yearRange: "-100:+0",
		});
		$( ".ms-get-started-form .gfield_repeater input[name*='input_105']" ).after( '<img class="ui-datepicker-trigger" src="' + datepicker_img_url + '" alt="" title="">' );
	} );


	jQuery(".ms-gravity-participant-info-step .gform_next_button").on('click', function(){
		var windo = jQuery(document).height();
		jQuery('body.rs-cvent-landing-page').css( 'min-height', windo +'px' );
		jQuery("body").addClass("ms-quote-popup-overlay");
		jQuery( ".rs-tourney-banner-right" ).css( 'z-index','auto' );
		jQuery(".ms-quote-popup-text").show();
	});
	select_placeholder();
	
	jQuery( document ).on( 'change', '.rs-tourney-application-form-main select', function(){
		select_placeholder();
		var select_val = jQuery( this ).val();
		if(  select_val != '' != ''){
			jQuery( this ).removeClass( 'select-placeholder' );
		}

	} );
});


jQuery( document ).on( 'gform_post_render', function (event, form_id, current_page ) {

	if( form_id == 10 ) {
		
		if( current_page == 2 ) {
			jQuery( '.rs-tourney-step' ).hide();
			jQuery( '.rs-tourney-second-step' ).show();
			jQuery( '.rs-tourney-second-step-content' ).show();
			jQuery( '.rs-cvent-quote-preview-mobile' ).removeClass( 'rs-cvent-quote-preview-firststep-only' );		
			
			selected_sport();
		
		} else if( current_page == 3 ) {

			//display_cvent_attendees();
			selected_sport();

			jQuery( '.rs-tourney-step' ).hide();
			jQuery( '.rs-tourney-third-step' ).show();
			jQuery( '.rs-cvent-quote-preview-mobile' ).removeClass( 'rs-cvent-quote-preview-firststep-only' );
			
		} else if( current_page == 4 ) {
			jQuery( '.rs-tourney-step' ).hide();
			jQuery( '.rs-tourney-forth-step' ).show();
			jQuery( '.rs-cvent-quote-preview-mobile' ).removeClass( 'rs-cvent-quote-preview-firststep-only' );
		} else {
			jQuery( '.rs-tourney-step' ).hide();
			jQuery( '.rs-tourney-first-step' ).show();
			jQuery( '.rs-cvent-quote-preview-mobile' ).addClass( 'rs-cvent-quote-preview-firststep-only' );
		}
	}
});

function select_placeholder() {
	jQuery( '.rs-tourney-application-form-main select' ).each( function(){
		var select_val = jQuery( this ).val();
		var first_val = jQuery(this).children( 'option:first-child').val();

		if( select_val != first_val ) {
			jQuery( this ).removeClass( 'select-placeholder' );
		}else {
			jQuery( this ).addClass( 'select-placeholder' );
		}
		if(document.location.search.length) {
			if( select_val != ''){
					jQuery( this ).removeClass( 'select-placeholder' );
				}	
		}
	} );
}

function display_cvent_attendees() {

	var rs_attendee_detail = jQuery( '.rs-more-attendee-detail' ).val();
	if( rs_attendee_detail != '' && jQuery( '.rs-more-attendee-detail' ).length ) {
		var rs_attendee_detail_json = atob( rs_attendee_detail );
		var rs_attendee_detail_parse = jQuery.parseJSON( rs_attendee_detail_json );
		
			jQuery( '#input_10_101_3-0' ).val( rs_attendee_detail_parse.participantfirstname );
			jQuery( '#input_10_101_6-0').val( rs_attendee_detail_parse.participantlastname );
			jQuery( '#input_10_105-0'  ).val( rs_attendee_detail_parse.participantbirthdate );
	}
}

function selected_sport(){
	var api_sport = jQuery('.step-2-sport-type').text();
	var selected_sport = jQuery('.slected-sport select :selected').text();
	if( api_sport != selected_sport ){
		jQuery( '.step-2-sport-type').text( selected_sport );
	}
}