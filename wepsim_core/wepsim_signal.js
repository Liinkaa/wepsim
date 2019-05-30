/*
 *  Copyright 2015-2019 Felix Garcia Carballeira, Alejandro Calderon Mateos, Javier Prieto Cepeda, Saul Alonso Monsalve
 *
 *  This file is part of WepSIM.
 *
 *  WepSIM is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  WepSIM is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with WepSIM.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


        function wepsim_update_signal_dialog ( key )
        {
		// check signal
		var signal_obj = simhw_sim_signal(key) ;
		if (typeof signal_obj === "undefined") {
		    return ;
	        }

		// update signal
		var checkvalue  = (signal_obj.value >>> 0) ;
		var str_bolded  = '' ;
		var str_checked = '' ;
		var input_help  = '' ;
		var behav_raw   = '' ;
		var behav_str   = '' ;
		var n = 0;

		var nvalues = Math.pow(2, signal_obj.nbits) ;
		if (signal_obj.behavior.length == nvalues)
		{
		    input_help = '<ol start="0" class="list-group list-group-flush">' ;

		    for (var k = 0; k < signal_obj.behavior.length; k++)
		    {
			 str_checked = ' ' ;
			 if (k == checkvalue) {
			     str_checked = ' checked="checked" ' ;
			 }
			 str_bolded = ' ' ;
			 if (k == signal_obj.default_value) {
			     str_bolded = '<span class="badge badge-info">default value</span>' ;
			 }

			 behav_raw = signal_obj.behavior[k] ;
			 behav_str = compute_signal_verbals(key, k) ; 
			 if ('' == behav_str.trim()) {
			     behav_str = '&lt;without main effect&gt;' ;
			 }

			 n = k.toString(10) ;
			 input_help += '<li class="list-group-item p-1">' + 
				       '<label class="m-1">' +
				       '  <input aria-label="value ' + n + '" type="radio" name="ask_svalue" ' +
				       '         value="' + n + '" ' + str_checked + ' />' + 
				       '  <span class="badge badge-secondary badge-pill">' + n + '</span>' + '&nbsp;' + 
				       '  <span>' + behav_str + '</span>&nbsp;' + str_bolded +
				       '  <p class="m-0 ml-3 bg-light collapse bh-all"><small>' + behav_raw + '</small></p>' +
				       '</label>' + 
				       '</li>' ;
		    }

		    input_help += '</ol>' ;
		}
		else 
		{
		    input_help += '<ol start="0">' +
				  '<span><center><label>' +
				  '<input aria-label="value for ' + key + '" type="number" size=4 min=0 max=' + (nvalues - 1) + ' class=dial ' +
				  '       name="ask_svalue" value="' + signal_obj.value + '"/>' + '&nbsp;&nbsp;' + ' 0 - ' + (nvalues - 1) +
				  '</center></label></span>\n' +
				  '</ol>' ;
		}

		var curr_hw = simhw_short_name() ;
		if ("" == curr_hw) {
		    curr_hw = "ep" ;
		}

	        var o_l = i18n_get_dropdown(['gui'], 
			                    '$(\'#bot_signal\').carousel(1); ' +
			                    'update_signal_loadhelp(\'#help2\',$(\'#ask_shard\').val(),$(\'#ask_skey\').val());" ') ;

		var bb = bootbox.dialog({
		       title:   '<center>' + key + ': ' +
				' <div class="btn-group">' +
				'   <button onclick="$(\'#bot_signal\').carousel(0);" ' +
				'           type="button" class="btn btn-info">Value</button>' +
				'   <button onclick="$(\'#bot_signal\').carousel(1); update_signal_loadhelp(\'#help2\',$(\'#ask_shard\').val(),$(\'#ask_skey\').val());" ' +
				'           type="button" class="btn btn-success">Help</button>' +
				'   <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" ' +
				'           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
				'     <span class="caret"></span>' +
				'     <span class="sr-only">Toggle Help Idiom</span>' +
				'   </button>' + 
			        '   <div class="dropdown-menu">' + o_l + '</div>' + 
				' </div>' +
				'</center>',
		       message: '<div id="bot_signal" class="carousel" data-ride="carousel" data-interval="false">' +
				'  <div class="carousel-inner" role="listbox">' +
				'    <div class="carousel-item active">' +
				'         <div style="max-height:70vh; width:inherit; overflow:auto; -webkit-overflow-scrolling:touch;">' +
				'         <form class="form-horizontal" style="white-space:wrap;">' +
				'         <input aria-label="value for ' + key     + '" id="ask_skey"  name="ask_skey"  type="hidden" value="' + key     + '" class="form-control input-md"> ' +
				'         <input aria-label="value for ' + curr_hw + '" id="ask_shard" name="ask_shard" type="hidden" value="' + curr_hw + '" class="form-control input-md"> ' +
					  input_help +
				'         </form>' +
				'         </div>' +
				'    </div>' +
				'    <div class="carousel-item">' +
				'         <div id=help2 style="max-height:65vh; width:inherit; overflow:auto; -webkit-overflow-scrolling:touch;">Loading...</div>' +
				'    </div>' +
				'  </div>' +
				'</div>',
		       value:   signal_obj.value,
		       animate: false,
		       size:    'large',
		       buttons: {
				    description: {
					label:     '&plusmn; <span data-langkey="Description">Description</span>',
					className: 'btn-outline-dark btn-sm col-xs-3 col-sm-3 col-lg-2 mr-auto',
					callback:  function() 
						   {
						      $('.bh-all').collapse('toggle') ;
						      return false ;
						   }
				    },
				    success: {
					label:     '<span data-langkey="Save">Save</span>',
					className: 'btn-primary btn-sm col-xs-3 col-sm-2 float-right',
					callback:  function ()
						   {
						      key        = $('#ask_skey').val();
						      user_input = $("input[name='ask_svalue']:checked").val();
						      if (typeof user_input == "undefined") {
						 	 user_input = $("input[name='ask_svalue']").val();
						      }

                                                      wepsim_update_signal_with_value(key, user_input) ;
						      wsweb_dialogbox_close_updatesignal() ;
						   }
				    },
				    close: {
					label:     '<span data-langkey="Close">Close</span>',
					className: 'btn-danger btn-sm col-xs-3 col-sm-2 float-right',
					callback:  function() { 
						      wsweb_dialogbox_close_updatesignal() ;
					           }
				    }
				}
		});

		bb.find(".modal-title").addClass("mx-auto") ;
		bb.find(".bootbox-close-button").addClass("mx-1") ;
		bb.attr("id", "dlg_updatesignal") ;

		$(".dial").knob({ 'min':0, 'max':(nvalues-1) })
			  .val(signal_obj.value)
			  .trigger('change');

	    show_states();
	    show_rf_values();
        }

        function wepsim_update_signal_quick ( key )
        {
		// check signal
		var signal_obj = simhw_sim_signal(key) ;
		if (typeof signal_obj === "undefined") {
		    return ;
	        }

		// update signal
		var curr_hw = simhw_short_name() ;
		if ("" == curr_hw) {
		    curr_hw = "ep" ;
		}

		var nvalues = Math.pow(2, simhw_sim_signal(key).nbits) ;
		var user_input = simhw_sim_signal(key).value ;
		user_input = (user_input + 1) % nvalues ;

                wepsim_update_signal_with_value(key, user_input) ;

	    show_states();
	    show_rf_values();
        }

        function wepsim_update_signal_with_value ( key, value )
        {
                // update signal
		simhw_sim_signal(key).value = value ;
		propage_signal_update(key) ;

                // add if recording
                simcore_record_append_new('Update signal ' + key + ' with value ' + value,
                                          'wepsim_update_signal_with_value("' + key + '", ' + value + ');\n') ;
        }
