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


    //
    // WepSIM API
    //

    //  To change Workspaces

    function wsweb_change_workspace_simulator ( )
    {
	    sim_change_workspace('#main1', 0) ;

	    setTimeout(function(){
			    // stats about ui
			    ga('send', 'event', 'ui', 'ui.workspace', 'ui.workspace.simulator');
	               }, 50) ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Change to workspace simulator',
		              'wsweb_change_workspace_simulator();\n') ;

            // return ok
            return true ;
    }

    function wsweb_change_workspace_microcode ( )
    {
	    sim_change_workspace('#main3', 1) ;

	    setTimeout(function(){
		            inputfirm.refresh() ; 

			    // stats about ui
			    ga('send', 'event', 'ui', 'ui.workspace', 'ui.workspace.microcode');
	               }, 50) ;

            // add if recording
            wepsim_record_add('record_msg',
	 		      'Change to workspace microcode',
		              'wsweb_change_workspace_microcode();\n') ;

            // return ok
            return true ;
    }

    function wsweb_change_workspace_assembly ( )
    {
	    sim_change_workspace('#main4', 2) ;

	    setTimeout(function(){
		            inputasm.refresh() ; 

			    // stats about ui
			    ga('send', 'event', 'ui', 'ui.workspace', 'ui.workspace.assembly');
	               }, 50) ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Change to workspace assembly',
		              'wsweb_change_workspace_assembly();\n') ;

            // return ok
            return true ;
    }

    function wsweb_change_show_processor ( )
    {
	    $("#tab26").tab('show') ;
	    start_drawing() ;
	    refresh() ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Show processor details',
		              'wsweb_change_show_processor();\n') ;

            // return ok
            return true ;
    }

    function wsweb_change_show_asmdbg ( )
    {
            stop_drawing() ;
	    $("#tab24").tab('show') ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Show assembly debugger',
		              'wsweb_change_show_asmdbg();\n') ;

            // if code then move scroll
	    var o1 = fullshow_asmdbg_pc() ;
	    if (typeof o1[0] == 'undefined') {
	        return true ;
            }

	    var obj_byid = $('#asm_debugger_container') ;
	    obj_byid[0].scrollTop = o1[0].offsetTop ;

            // return ok
            return true ;
    }

    //  Workspace simulator: execution

    function wsweb_execution_reset ( )
    {
	    wepsim_execute_reset(true, true) ;
	    simcoreui_show_hw() ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Reset',
		              'wsweb_execution_reset();\n') ;

            // return ok
            return true ;
    }

    function wsweb_execution_microinstruction ( )
    {
	    wepsim_execute_microinstruction() ;
	    simcoreui_show_hw() ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Execute microinstruction',
		              'wsweb_execution_microinstruction();\n') ;

            // return ok
            return true ;
    }

    function wsweb_execution_instruction ( )
    {
	    wepsim_execute_instruction() ;
	    simcoreui_init_hw('#config_HW') ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Execute instruction',
		              'wsweb_execution_instruction();\n') ;

            // return ok
            return true ;
    }

    function wsweb_execution_run ( )
    {
            var mode = get_cfg('ws_mode') ;
	    if ('tutorial' == mode) {
		 wepsim_notify_success('<strong>INFO</strong>',
				       'Tutorial mode on. Use the configuration to change it.') ;
	    }

	    wepsim_execute_toggle_play('#qbp', (mode == 'tutorial')) ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Run',
		              'wsweb_execution_run();\n') ;
	    $("#current_state2").on("hidden.bs.modal", 
		                     function () { 
					 wepsim_record_add('record_msg', 
						           'Close execution summary', 
						           'wsweb_dialogbox_close_all();\n'); 
				     });

            // return ok
            return true ;
    }

    //  Workspace simulator: dialog-boxes

    function wsweb_dialogbox_open_examples ( )
    {
            wepsim_open_examples_index(); 
	    $('[data-toggle=tooltip]').tooltip('hide');

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Open examples',
		              'wsweb_dialogbox_open_examples();\n') ;
	    $("#example1").on("hidden.bs.modal", 
		               function () { 
				   wepsim_record_add('record_msg', 
					             'Close examples', 
					             'wsweb_dialogbox_close_all();\n'); 
			       });

            // return ok
            return true ;
    }

    function wsweb_dialogbox_open_help ( )
    {
	    wepsim_open_help_index();
	    wepsim_help_refresh(); 
	    $('[data-toggle=tooltip]').tooltip('hide');

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Open help',
		              'wsweb_dialogbox_open_help();\n') ;
	    $("#help1").on("hidden.bs.modal", 
		            function () { 
				wepsim_record_add('record_msg', 
					          'Close help', 
					          'wsweb_dialogbox_close_all();\n'); 
			    });

            // return ok
            return true ;
    }

    function wsweb_dialogbox_open_config ( )
    {
	    wepsim_open_config_index() ;
	    $('[data-toggle=tooltip]').tooltip('hide') ;

            // add if recording
            wepsim_record_add('record_msg',
		   	      'Open configuration',
		              'wsweb_dialogbox_open_config();\n') ;
	    $("#config2").on("hidden.bs.modal", 
		              function () { 
				  wepsim_record_add('record_msg', 
					            'Close configuration', 
					            'wsweb_dialogbox_close_all();\n'); 
			      });

            // return ok
            return true ;
    }

    function wsweb_dialogbox_open_state ( )
    {
            wepsim_dialog_current_state() ;
	    $('[data-toggle=tooltip]').tooltip('hide') ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Open state',
		              'wsweb_dialogbox_open_state();\n') ;
	    $("#current_state1").on("hidden.bs.modal", 
		                     function () {
					 wepsim_record_add('record_msg', 
						           'Close state', 
						           'wsweb_dialogbox_close_all();\n'); 
				     });

            // return ok
            return true ;
    }

    function wsweb_dialogbox_open_binary_assembly ( )
    {
            var textToCompile = inputasm.getValue() ;
	    var ok = wepsim_compile_assembly(textToCompile) ;
	    if (true == ok) {
		 wepsim_show_binary_code('#bin2', '#compile_results') ;
	    }

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Open binary assembly',
		              'wsweb_dialogbox_open_binary_assembly();\n') ;
	    $("#bin2").on("hidden.bs.modal", 
		           function () { 
			       wepsim_record_add('record_msg', 
				                 'Close binary assembly', 
				                 'wsweb_dialogbox_close_all();\n'); 
			   });

            // return ok
            return true ;
    }

    function wsweb_dialogbox_open_binary_firmware ( )
    {
            var textToMCompile = inputfirm.getValue() ;
	    var ok = wepsim_compile_firmware(textToMCompile) ;
	    if (true == ok) {
		 wepsim_show_binary_microcode('#bin2', '#compile_results') ;
		 wepsim_notify_success('<strong>INFO</strong>',
				       'Please remember to recompile the assembly code if needed.') ;
	    }

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Open binary firmware',
		              'wsweb_dialogbox_open_binary_firmware();\n') ;
	    $("#bin2").on("hidden.bs.modal", 
		           function () { 
			       wepsim_record_add('record_msg', 
				                 'Close binary firmware', 
				                 'wsweb_dialogbox_close_all();\n');
			   });

            // return ok
            return true ;
    }

    function wsweb_dialogbox_open_hardware_summary ( )
    {
            var ahw2 = simhw_active().sim_short_name ;
	    var img2 = 'examples/hardware/' + ahw2 + '/images/cpu.svg?time=20190102' ;
	    var lyr2 =  '<object id=svg_p2 ' + 
			'        data=\'' + img2 + '\' ' + 
			'        type=\'image/svg+xml\'>' + 
			'Your browser does not support SVG' + 
			'</object>' ;
	    wepsim_open_help_content(lyr2) ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Open hardware summary',
		              'wsweb_dialogbox_open_hardware_summary();\n') ;
	    $("#help1").on("hidden.bs.modal", 
		            function () { 
				wepsim_record_add('record_msg', 
					          'Open hardware summary', 
					          'wsweb_dialogbox_close_all();\n'); 
			    });

            // return ok
            return true ;
    }

    function wsweb_dialogbox_close_state ( )
    {
	    $('#current_state1').modal('hide') ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Close states dialogbox',
		              'wsweb_dialogbox_close_state();\n') ;

            // return ok
            return true ;
    }

    function wsweb_dialogbox_close_all ( )
    {
	    // Close all dialogbox before open this one
	          $('#example1').modal('hide') ;
	             $('#help1').modal('hide') ;
	           $('#config2').modal('hide') ;
	    $('#current_state1').modal('hide');
	    $('#current_state2').modal('hide');
	              $('#bin2').modal('hide');

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Close all dialogboxes',
		              'wsweb_dialogbox_close_all();\n') ;

            // return ok
            return true ;
    }

    //  Workspace simulator: Selects

    function wsweb_set_details_select ( opt )
    {
	    // update interface
	    $('#tab'  + opt).trigger('click') ;
	    $('#select5a').val(opt) ;

	    // set button label...
	    var ed=$('#s5b_' + opt).html() ;
	    $('#select5b').html(ed) ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Change select details to ' + opt,
		              'wsweb_set_details_select(' + opt + ');\n') ;

            // return ok
            return true ;
    }

    var hash_detail2action = {
	    "CLOCK":          function(){ wepsim_execute_microinstruction(); },
	    "REGISTER_FILE":  function(){ wsweb_set_details_select(11); show_rf_values(); },
	    "CONTROL_MEMORY": function(){ wsweb_set_details_select(16); show_memories_values(); },
	    "CPU_STATS":      function(){ wsweb_set_details_select(17); show_memories_values(); },
	    "MEMORY":         function(){ wsweb_set_details_select(14); show_memories_values(); }, 
	    "MEMORY_CONFIG":  function(){ wsweb_set_details_select(18); show_memories_values(); },
	    "KEYBOARD":       function(){ wsweb_set_details_select(12); show_memories_values(); },
	    "SCREEN":         function(){ wsweb_set_details_select(12); show_memories_values(); },
	    "IO_STATS":       function(){ wsweb_set_details_select(15); show_memories_values(); }, 
	    "IO_CONFIG":      function(){ wsweb_set_details_select(19); show_memories_values(); },

	    "FRM_EDITOR":     function(){ wsweb_set_details_select(20); inputfirm.refresh(); },
	    "ASM_EDITOR":     function(){ wsweb_set_details_select(21); inputasm.refresh(); },
	    "HARDWARE":       function(){ wsweb_set_details_select(22); 
					  $('[data-toggle=tooltip]').tooltip('hide');
					  simcoreui_init_hw('#config_HW') ;
					  var ws_idiom = get_cfg('ws_idiom');
					  i18n_update_tags('gui', ws_idiom) ;
                                        }
        } ;

    function wsweb_set_details ( opt )
    {
            if (typeof hash_detail2action[opt] !== "undefined") {
                hash_detail2action[opt]() ;
            }

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Set details to ' + opt,
		              'wsweb_set_details(\'' + opt + '\');\n') ;

            // return ok
            return true ;
    }


    //  Workspace simulator: Mode

    function wepsim_show_wepmips ( )
    {
            $(".multi-collapse-2").collapse("show") ;
	    $("#slider_cpucu").hide() ;

	    $("#tab26").hide() ;
	    $("#tab21").hide() ;
	    $("#tab24").click() ;

            inputfirm.setOption('readOnly', true) ;
            $("#btn_micro1").addClass('d-none') ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Set wepmips mode',
		              'wepsim_show_wepmips();\n') ;

            // return ok
            return true ;
    }

    function wepsim_hide_wepmips ( )
    {
            $(".multi-collapse-2").collapse("show") ;
	    $("#slider_cpucu").show() ;

	    $("#tab26").show() ;
	    $("#tab21").show() ;

            inputfirm.setOption('readOnly', false) ;
            $("#btn_micro1").removeClass('d-none') ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Reset wepmips mode',
		              'wepsim_hide_wepmips();\n') ;

            // return ok
            return true ;
    }

    function wepsim_activehw ( mode )
    {
	    simhw_setActive(mode) ;

            // reload images
	    var o = document.getElementById('svg_p') ;
	    if (o != null) o.setAttribute('data',  simhw_active().sim_img_processor) ;
	        o = document.getElementById('svg_cu') ;
	    if (o != null) o.setAttribute('data', simhw_active().sim_img_controlunit) ;
	        o = document.getElementById('svg_p2') ;
	    if (o != null) o.setAttribute('data', simhw_active().sim_img_cpu) ;

            // reload images event-handlers
	    var a = document.getElementById("svg_p");
	    a.addEventListener("load",function() {
		simcore_init_eventlistener("svg_p", hash_detail2action);
		refresh();
	    }, false);

	    var b = document.getElementById("svg_cu");
	    b.addEventListener("load",function() {
		simcore_init_eventlistener("svg_cu", hash_detail2action);
		refresh();
	    }, false);

            // info + warning
	    wepsim_notify_warning('<strong>WARNING</strong>',
                                  'Please remember the current firmware and assembly might need to be reloaded, ' +
                                  'because previous working session of the simulated hardware are not kept.') ;
	    wepsim_notify_success('<strong>INFO</strong>',
                                  '"' + simhw_active().sim_name + '" has been activated.') ;

            // update UI
            var SIMWARE = get_simware() ;
    	    update_memories(SIMWARE) ;
            simcore_reset() ;

            // update asmdbg
            var asmdbg_content = default_asmdbg_content_horizontal() ;
	    for (var l in SIMWARE.assembly) // <===> if (SIMWARE.assembly != {})
	    {
                 asmdbg_content = assembly2html(SIMWARE.mp, SIMWARE.labels2, SIMWARE.seg, SIMWARE.assembly) ;
		 break ;
	    }
            $("#asm_debugger").html(asmdbg_content);

            showhideAsmElements();

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Set a new work mode to ' + mode,
		              'wepsim_activehw(' + mode + ');\n') ;

            // return ok
            return true ;
    }

    function wepsim_change_mode ( optValue )
    {
            // add if recording
            wepsim_record_add('record_msg',
		    	      'Change work mode to ' + optValue,
		              'wepsim_change_mode(' + optValue + ');\n') ;

	    // switch active hardware by name...
            var hwid = -1 ;
            switch (optValue)
            {
	      case 'newbie':
	      case 'intro':
	      case 'wepmips':
	      case 'tutorial':
                               hwid = simhw_getIdByName('ep') ;
                               wepsim_activehw(hwid) ;
                               break;
	      default:
	                       hwid = simhw_getIdByName(optValue) ;
                               wepsim_activehw(hwid) ;
                               break;
            }

	    // show/hide wepmips...
	    if ('wepmips' == optValue)
	         wepsim_show_wepmips() ;
	    else wepsim_hide_wepmips() ;

	    // intro mode...
	    if ('intro' == optValue)
	    {
	        sim_tutorial_showframe('welcome', 0);
                return true ;
	    }

	    // newbie mode...
            if ('newbie' == optValue)
            {
                wepsim_newbie_tour() ;
                return true ;
            }

            // return ok
            return true ;
    }

    function wsweb_select_main ( opt )
    {
	    // save ws_mode
	    set_cfg('ws_mode', opt) ;
	    save_cfg() ;

	    // update select4
	    wepsim_change_mode(opt) ;

	    // tutorial mode -> set green background...
	    $('#select4').css('background-color', '#F6F6F6') ;
	    if ('tutorial' == opt) {
	        $('#select4').css('background-color', '#D4DB17') ;
	    }

	    // set button label...
	    var ed = $('#s4_' + opt).html() ;
	    $('#select4').html(ed) ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Set main work mode to ' + opt,
		              'wsweb_select_main(' + opt + ');\n') ;

            // return ok
            return true ;
    }

    function wsweb_mode_update ( new_mode )
    {
            wsweb_select_main(new_mode);

	    // initialize hw
	    simcore_init_ui('#states_ALL', '#states_BR', '#io_ALL', 
                            '#cpu_ALL',    '#config_MP', '#config_IO') ;
	    simcoreui_init_hw('#config_HW') ;

	    // adapt to idiom
	    var ws_idiom = get_cfg('ws_idiom') ;
	    i18n_update_tags('gui', ws_idiom) ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Update work mode to ' + new_mode,
		              'wsweb_mode_update(' + new_mode + ');\n') ;

            // return ok
            return true ;
    }

    //  Workspace simulator: Sliders

    function wsweb_set_cpucu_size ( new_value )
    {
	    $('#slider2b').val(new_value) ;
	    set_ab_size('#eltos_cpu_a', '#eltos_cpu_b', new_value) ;

	    set_cfg('CPUCU_size', new_value) ;
	    save_cfg() ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Set cpu-cu size to ' + new_value,
		              'wsweb_set_cpucu_size(' + new_value + ');\n') ;

            // return ok
            return true ;
    }

    function wsweb_set_c1c2_size ( new_value )
    {
	    $("#slider2a").val(new_value) ;
	    set_ab_size('#col1', '#col2', new_value);

	    set_cfg('C1C2_size', new_value);
	    save_cfg() ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Set c1-c2 size to ' + new_value,
		              'wsweb_set_c1c2_size(' + new_value + ');\n') ;

            // return ok
            return true ;
    }

    //  Workspace simulator: Compile

    function wsweb_assembly_compile ( )
    {
            var textToCompile = inputasm.getValue() ;
	    var ok = wepsim_compile_assembly(textToCompile) ;

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Compile assembly',
		              'wsweb_assembly_compile();\n') ;

            // return ok
            return true ;
    }

    function wsweb_firmware_compile ( )
    {
	    var textToMCompile = inputfirm.getValue();
	    wepsim_compile_firmware(textToMCompile);
	    var o = '<div class=\'card m-3 border\'><div class=\'card-body m-1\'>' + 
		    'Please remember that after updates on the microcode, the assembly code has be re-compiled too.' +
		    '</div></div>' ;
	    $('#asm_debugger').html(o);

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Compile firmware',
		              'wsweb_firmware_compile();\n') ;

            // return ok
            return true ;
    }

    //  Workspace simulator: Files

    function wsweb_save_controlmemory_to_file ( )
    {
            var q = 'Do you want me to save the current Control Memory contents ' + 
                    ' rather than the editor contents?.\n\n' ;
            if (confirm(q))
	    {
	        var SIMWARE = get_simware() ;
	        var simware_as_text = saveFirmware(SIMWARE);
	        if (simware_as_text.trim() == '') {
		    alert('The Microcode loaded in memory is empty!\n' +
	   	   	  'Please load a Microcode first in memory in order to save it.');
                }
	        else inputfirm.setValue(simware_as_text);

	        var fileNameToSaveAs = document.getElementById('inputFileNameToSaveAs').value;
	        var textToWrite      = inputfirm.getValue();
	        wepsim_save_to_file(textToWrite, fileNameToSaveAs);
	    }

            // add if recording
            wepsim_record_add('record_msg',
		    	      'Save control memory to file',
		              'wsweb_save_controlmemory_to_file();\n') ;

            // return ok
            return true ;
    }

    //  Workspace simulator: record

    function wsweb_record_on ( )
    {
	    wepsim_record_on('record_msg') ;

            // return ok
            return true ;
    }

    function wsweb_record_off ( )
    {
	    wepsim_record_off('record_msg') ;

            // return ok
            return true ;
    }

    function wsweb_record_reset ( )
    {
	    wepsim_record_reset('record_msg') ;

            // return ok
            return true ;
    }

    function wsweb_record_play ( )
    {
	    wepsim_record_play('record_msg') ;

            // return ok
            return true ;
    }

    function wsweb_record_pause ( )
    {
	    wepsim_record_pause('record_msg') ;

            // return ok
            return true ;
    }
