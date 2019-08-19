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


    /*
     * Checkpointing
     */

    function wepsim_checkpoint_Obj2NB ( elements )
    {
         // fill cells
         var val  = null ;
         var key  = null ;
         var type = null ;

         var cells = [] ;
         for (var i=0; i<elements.length; i++)
         {
              key  = elements[i].name ;
              type = typeof elements[i].value ;
              if (type === "string")
                   val  = elements[i].value ;
              else val = JSON.stringify(elements[i].value, null, 2) ;

	      cells.push({
			    "cell_type": "markdown",
			    "source": "## " + key,
			    "metadata": {}
			 }) ;

	      cells.push({
			    "cell_type": "code",
			    "source": val,
			    "outputs": [],
			    "execution_count": 1,
			    "metadata": {
			        "name": key,
			        "type": type,
			        "collapsed": false,
			        "deletable": false,
			        "editable": "false"
			    }
			 }) ;
         }

         // fill nb
	 var nbObj = {
			  "metadata": {
			    "kernelspec": {
			        "name": "node_nteract",
			        "language": "javascript",
			        "display_name": "Node.js (nteract)"
			    },
			    "kernel_info": {
			        "name": "node_nteract"
			    },
			    "language_info": {
			        "name": "javascript",
			        "version": "8.2.1",
			        "mimetype": "application/javascript",
			        "file_extension": ".js"
			    },
			    "title": "WepSIM " + get_cfg("version"),
			    "nteract": {
			        "version": "nteract-on-jupyter@2.0.0"
			    }
			  },
			  "nbformat": 4,
			  "nbformat_minor": 0,
			  "cells": cells
	             } ;

         return nbObj ;
    }

    function wepsim_checkpoint_NB2Obj ( nbObj )
    {
	 var key   = "" ;
	 var type  = "" ;
	 var value = "" ;

	 var elements = {} ;
         for (var i=0; i<nbObj.cells.length; i++)
         {
	      if (nbObj.cells[i].cell_type !== "code") {
                  continue ;
              }

              key   = nbObj.cells[i].metadata.name ;
              type  = nbObj.cells[i].metadata.type ;
              value = nbObj.cells[i].source ;

              if (type !== "string") {
                  value = JSON.parse(value) ;
              }

	      elements[key] = value ;
         }

         return elements ;
    }

    function wepsim_checkpoint_get ( id_tagname )
    {
	    // get & check params
	    var obj_tagName = document.getElementById(id_tagname) ;
	    if (obj_tagName === null) {
		return false ;
	    }

	    // get mode and history
	    var ws_mode           = get_cfg('ws_mode') ;
            var history_obj       = wepsim_state_history_get() ;

	    // get current state
	    var state_current     = wepsim_state_get_clk() ;
	    var state_obj         = simcore_simstate_current2state() ;
	    state_current.content = simcore_simstate_state2checklist(state_obj) ;

	    // pack elements
	    var elements = [
		              { "name": "mode",          "value": ws_mode              },
		              { "name": "firmware",      "value": inputfirm.getValue() },
			      { "name": "assembly",      "value": inputasm.getValue()  },
			      { "name": "state_current", "value": state_current        },
			      { "name": "state_history", "value": history_obj          },
			      { "name": "record",        "value": simcore_record_get() },
			      { "name": "tag",           "value": obj_tagName.value    },
			      { "name": "notify",        "value": true                 }
	                   ] ;

	    // return object
	    return wepsim_checkpoint_Obj2NB(elements) ;
    }

    function wepsim_checkpoint_save ( id_filename, id_tagname, checkpointObj )
    {
	    // get & check params
            var obj_fileName = document.getElementById(id_filename) ;
	    var obj_tagName  = document.getElementById(id_tagname) ;

	    if ( (obj_fileName === null) || (obj_tagName === null) )
	    {
		return false ;
	    }

	    // save checkpoint
	    var checkpointStr = JSON.stringify(checkpointObj, null, 2) ;
	    wepsim_save_to_file(checkpointStr, obj_fileName.value) ;

	    return true ;
    }

    function wepsim_checkpoint_load ( id_filename, id_tagname, id_file_to_load )
    {
	    // get & check params
            var obj_fileName   = document.getElementById(id_filename) ;
	    var obj_tagName    = document.getElementById(id_tagname) ;
	    var obj_fileToLoad = document.getElementById(id_file_to_load).files[0] ;

	    if ( (obj_fileName === null) || (obj_tagName === null) || (obj_fileToLoad === null) )
	    {
		return false ;
	    }

	    // lambda (auxiliar) function
	    var function_after_loaded = function (textLoaded)
	                                {
				           var current_checkpoint = JSON.parse(textLoaded) ;
                                               current_checkpoint = wepsim_checkpoint_NB2Obj(current_checkpoint) ;
                                           wepsim_checkpoint_loadFromObj(current_checkpoint,
						                         obj_fileName,obj_tagName,obj_fileToLoad) ;
			                } ;

	    // load checkpoint
	    wepsim_load_from_file(obj_fileToLoad, function_after_loaded) ;
	    return true ;
    }

    function wepsim_checkpoint_loadURI ( obj_uri, id_filename, id_tagname )
    {
	    // get & check params
	    var obj_fileName = document.getElementById(id_filename) ;
	    var obj_tagName  = document.getElementById(id_tagname) ;

	    if ( (obj_fileName === null) || (obj_tagName === null) || (obj_uri === null) )
	    {
		return false ;
	    }

	    // load checkpoint
	    try
	    {
	        wepsim_preload_json(obj_uri.href,
			            function(data) {
	                                var obj_refName  = { name: obj_uri.href } ;
				        wepsim_checkpoint_loadFromObj(data,
					                              obj_fileName, obj_tagName, obj_refName) ;
			            }) ;
	        return true ;
	    }
	    catch (e) {
		return false ;
	    }
    }

    function wepsim_checkpoint_loadFromObj ( checkpointObj, obj_fileName, obj_tagName, obj_fileToLoad )
    {
	   var o = '' ;
	   var u = '' ;

	   // 1.- check params
	   if (checkpointObj === null) {
	       return 'null checkpoint' ;
	   }

	   if (typeof checkpointObj.mode     === 'undefined')
	       checkpointObj.mode = 'ep' ;
	   if (typeof checkpointObj.firmware === 'undefined')
	       checkpointObj.firmware = '' ;
	   if (typeof checkpointObj.assembly === 'undefined')
	       checkpointObj.assembly = '' ;
	   if (typeof checkpointObj.state_history === 'undefined')
	       checkpointObj.state_history = [] ;

	   // 2.- restore state(s)

		// all saved states are loaded into state history
	        wepsim_state_history_reset() ;
	        for (var i=0; i<checkpointObj.state_history.length; i++) {
	             state_history.push(checkpointObj.state_history[i]) ;
	        }
	        wepsim_state_history_list() ;

	        o += '<li>State: restored into the state history.</li>' ;

	   // 3.- restore firmware + assembly

		// set associated mode
	        wsweb_select_main(checkpointObj.mode) ;

		// firmware + assembly: load into editor
		inputfirm.setValue(checkpointObj.firmware) ;
		 inputasm.setValue(checkpointObj.assembly) ;

		o += '<li>Firmware and Assembly: Loaded' ;

		// firmware + assembly: compile
		u = '' ;
		if (checkpointObj.firmware.trim() !== "") {
		    wepsim_compile_firmware(checkpointObj.firmware) ;
		    u += 'Firmware' ;
		}
		if (checkpointObj.assembly.trim() !== "") {
		    wepsim_compile_assembly(checkpointObj.assembly) ;
		    u += ' + Assembly' ;
		}

		if (u !== '') {
		    o += ' + Compiled' ;
		}
		o += '.</li>' ;

	   // 4.- restore user interface elements

		// load tag
	        if ((typeof obj_fileName !== "undefined") && (obj_fileName !== null)) {
		     obj_fileName.value = obj_fileToLoad.name ;
		}
	        if ((typeof obj_fileName !== "undefined") && (obj_tagName !== null)) {
		     obj_tagName.value  = checkpointObj.tag ;
		}

		o += '<li>Tag: <strong>' + checkpointObj.tag + '</strong></li>' ;

	   // 5.- restore record

		// set the saved record
                simcore_record_set(checkpointObj.record) ;

	   // 6.- notify
	   if (o !== '') {
	       o = 'WepSIM has been instructed to restore a checkpoint:<br>' +
		   '<ul>' +
		   o +
		   '</ul>' +
		   'To close this notification please press in the ' +
		   '<span class="btn btn-sm btn-info py-0" data-dismiss="alert">X</span> mark. <br>' ;
	   }

	   if (checkpointObj.notify === true) {
	       wepsim_notify_do_notify('Restored Checkpoint', o, 'info', get_cfg('NOTIF_delay')) ;
	   }

	   // return
	   return o ;
    }

