var tutorials=new Object();tutorials.welcome=new Object();tutorials.simpleusage=new Object();tutorials.welcome["en"]=new Array();tutorials.welcome["en"].push({id:"welcome",title:"Welcome to the WepSIM simulator!",message:"<img src='help/simulator/simulator012.jpg' style='width:100%; max-height:50vh'><br><h4>This brief tutorial is going to show you how to:<ol><li>Load an example.</li><li>Execute an example.</li><li>Configure the simulation.</li><li>Get help.</li></ol></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.welcome["en"].push({id:"welcome",title:"The menu button",message:"<img src='tutorials/welcome/menu_open.gif' style='max-height:50vh'><br><h4>On the top, it let you access to the microcode editor, the assembly editor, and the simulation screen. On the bottom, help, examples, and the configuration dialogs.<br></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.welcome["en"].push({id:"welcome",title:"How to load some example.",message:"<img src='tutorials/welcome/example_usage.gif' style='width:100%; max-height:60vh'><br><h4>Click in the menu button and then in the example button, <br>then click in the example 'title' name.<br></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.welcome["en"].push({id:"welcome",title:"How to execute an example.",message:"<img src='tutorials/welcome/simulation_xinstruction.gif' style='width:100%; max-height:60vh'><br><h4>Click on next instruction/microinstruction to execute step by step. <br>Click on run button to execute until the first breakpoint or the end of the assembly program.<br></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.welcome["en"].push({id:"welcome",title:"How to configure WepSIM.",message:"<img src='tutorials/welcome/config_usage.gif' style='width:100%; max-height:60vh'><br><h4>Click in the menu again, then click in the configuration button.<br></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.welcome["en"].push({id:"welcome",title:"How to get the basic help.",message:"<img src='tutorials/welcome/help_usage.gif' style='width:100%; max-height:60vh'><br><h4>Click in the menu again, <br>then click in the green help button.<br>You can get Spanish/English version, go to the help index, or close the help popup.<br></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.welcome["en"].push({id:"welcome",title:"Welcome to WepSIM!",message:"<img src='tutorials/welcome/help_usage.gif' style='width:100%; max-height:60vh'><br><h4><br>Please explorer the help sections for more information. <br>If you click on the end button of the tutorial then WepSIM is going to load the first example for you. Enjoy!<br></h4>",code_pre:function(){},code_post:function(){load_from_example_firmware("S1E1",true)},wait_next:100});tutorials.welcome["es"]=new Array();tutorials.welcome["es"].push({id:"welcome",title:"¡Bienvenidos al simulador WepSIM!",message:"<img src='help/simulator/simulator012.jpg' style='width:100%; max-height:50vh'><br><h4>Este breve tutorial le mostrar&aacute;:<ol><li>Carga de un ejemplo.</li><li>Ejecución de ejemplo.</li><li>Configuraci&oacute;n del simulador.</li><li>Obtener ayuda.</li></ol></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.welcome["es"].push({id:"welcome",title:"El bot&oacute;n de men&uacute;",message:"<img src='tutorials/welcome/menu_open.gif' style='max-height:50vh'><br><h4>En la parte superior, le permite acceder a las pantallas de trabajo de microc&oacute;digo, ensamblador, y el simulador. En la parte inferior, permite acceder a la ayuda, ejemplos y configuraci&oacute;n.<br></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.welcome["es"].push({id:"welcome",title:"C&oacute;mo cargar algunos ejemplos.",message:"<img src='tutorials/welcome/example_usage.gif' style='width:100%; max-height:60vh'><br><h4>Haga click en el bot&oacute;n de men&uacute y a continuaci&oacute;n en el bot&oacute;n de ejemplo, finalmente haga click en el 't&iacute;tulo' del ejemplo.<br></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.welcome["es"].push({id:"welcome",title:"C&oacute;mo cargar algunos ejemplos.",message:"<img src='tutorials/welcome/simulation_xinstruction.gif' style='width:100%; max-height:60vh'><br><h4>Haga click en next instruction/microinstruction para ejecutar paso a paso. <br>Haga click en run para ejecutar hasta el primer punto de ruptura o el fin del programa en ensamblador.<br></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.welcome["es"].push({id:"welcome",title:"C&oacute;mo configurar WepSIM.",message:"<img src='tutorials/welcome/config_usage.gif' style='width:100%; max-height:60vh'><br><h4>Haga click en el men&uacute; de nuevo y a continuaci&oacute;n en el bot&oacute;n de configuraci&oacute;n.<br></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.welcome["es"].push({id:"welcome",title:"C&oacute;mo conseguir la ayuda b&aacute;sica.",message:"<img src='tutorials/welcome/help_usage.gif' style='width:100%; max-height:60vh'><br><h4>Haga click en el men&uacute; otra vez, y a continuaci&oacute;n en el bot&oacute;n verde de ayuda.<br>Puede obtener la versi&oacute;n Spanish/English, ir al &iacute;ndice de la ayuda o cerrar la pantalla de ayuda.<br></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.welcome["es"].push({id:"welcome",title:"¡Bienvenido a WepSIM!",message:"<img src='tutorials/welcome/help_usage.gif' style='width:100%; max-height:60vh'><br><h4><br>Por favor explorer las secciones de la ayuda para m&aacute;s informaci&oacute;n. <br>Si hace click en el bot&oacute;n 'end' del tutorial entonces WepSIM cargar&aacute; el primer ejemplo por usted. ¡Diviertase aprendiendo!<br></h4>",code_pre:function(){},code_post:function(){load_from_example_firmware("S1E1",true)},wait_next:100});tutorials.simpleusage["en"]=new Array();tutorials.simpleusage["en"].push({id:"simpleusage",title:"Simple WepSIM experience: microprogramming and programming",message:"<img src='help/simulator/simulator011.jpg' style='width:100%; max-height:50vh'><br><h4>This brief tutorial is going to show you how to:<ol><li>You can edit your microcode.</li><li>You can edit your assembly (based on the previous microcode).</li><li>Execution of the former assembly in the simulation.</li></ol></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.simpleusage["en"].push({id:"simpleusage",title:"Simple WepSIM experience: microprogramming and programming",message:"<img src='help/simulator/firmware001.jpg' style='width:100%; max-height:50vh'><br><h4>The first step is to microprogramming the firmware to be used. Please use the menu button, then please select the 'Microcode' option.</h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.simpleusage["en"].push({id:"simpleusage",title:"Simple WepSIM experience: microprogramming and programming",message:"<img src='help/simulator/firmware002.jpg' style='width:100%; max-height:50vh'><br><h4>The microprogramming screen provides:<ul><li>The editor for the microcode.</li><li>The microcompiler.</li><li>The hardware summary and help.</li></ul></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.simpleusage["en"].push({id:"simpleusage",title:"Simple WepSIM experience: microprogramming and programming",message:"<img src='help/simulator/assembly002.jpg' style='width:100%; max-height:50vh'><br><h4>The second step is to programming the assembly to be executed. Please use the menu button, then please select the 'Assembly' option.</h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.simpleusage["en"].push({id:"simpleusage",title:"Simple WepSIM experience: microprogramming and programming",message:"<img src='help/simulator/assembly003.jpg' style='width:100%; max-height:50vh'><br><h4>The programming screen provides:<ul><li>The editor for the assembly code.</li><li>The assembly compiler.</li><li>The memory map viewer and help.</li></ul></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.simpleusage["en"].push({id:"simpleusage",title:"Simple WepSIM experience: microprogramming and programming",message:"<img src='help/simulator/simulator010.jpg' style='width:100%; max-height:50vh'><br><h4>The third step is to execute the assembly code in the simulator.The simulator screen provides:<ul><li>The assembly and hardware view.</li><li>The detail view of registers, control memory, main memory, etc.</li><li>The reset, step by step or run until breakpoint/end actions.</li><li>The in-screen help.</li></ul></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.simpleusage["es"]=new Array();tutorials.simpleusage["es"].push({id:"simpleusage",title:"Experiencia simple con WepSIM: microprogramar y ensamblar",message:"<img src='help/simulator/simulator011.jpg' style='width:100%; max-height:50vh'><br><h4>Este breve tutorial le mostrar&aacute;:<ol><li>La edici&oacute;n de microc&oacute;digo.</li><li>La edici&oacute;n de c&oacute;digo ensamblador.</li><li>Ejecución del anterior ensamblador definido anteriormente.</li></ol></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.simpleusage["es"].push({id:"simpleusage",title:"Experiencia simple con WepSIM: microprogramar y ensamblar",message:"<img src='help/simulator/firmware001.jpg' style='width:100%; max-height:50vh'><br><h4>El primer paso es microprogramar el firmware a ser usado. Por favor use el bot&oacute;n de men&uacute; y a continuaci&oacute;n seleccione la opción 'Microcode'.</h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.simpleusage["es"].push({id:"simpleusage",title:"Experiencia simple con WepSIM: microprogramar y ensamblar",message:"<img src='help/simulator/firmware002.jpg' style='width:100%; max-height:50vh'><br><h4>La pantalla de microprogramación ofrece:<ul><li>El editor de microcr&oacute;digo.</li><li>El microcompilador.</li><li>El resumen del hardware y la ayuda.</li></ul></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.simpleusage["es"].push({id:"simpleusage",title:"Experiencia simple con WepSIM: microprogramar y ensamblar",message:"<img src='help/simulator/assembly002.jpg' style='width:100%; max-height:50vh'><br><h4>El segundo paso es programar el ensamblador a ser ejecutado. Por favor use el bot&oacute;n de men&uacute; y a continuaci&oacute;n la opci&oacute;n de 'Assembly'.</h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.simpleusage["es"].push({id:"simpleusage",title:"Experiencia simple con WepSIM: microprogramar y ensamblar",message:"<img src='help/simulator/assembly003.jpg' style='width:100%; max-height:50vh'><br><h4>La pantalla de programaci&oacute;n en ensamblador ofrece:<ul><li>El editor para el c&oacute;digo ensamblador.</li><li>El compilador de ensamblador.</li><li>El visualizador de mapa de memoria y ayuda.</li></ul></h4>",code_pre:function(){},code_post:function(){},wait_next:100});tutorials.simpleusage["es"].push({id:"simpleusage",title:"Experiencia simple con WepSIM: microprogramar y ensamblar",message:"<img src='help/simulator/simulator010.jpg' style='width:100%; max-height:50vh'><br><h4>El tercer paso es ejecutar el c&oacute;digo ensamblador en el ensamblador.La pantalla de simulación ofrece:<ul><li>Las vista de ensamblador y hardware.</li><li>Los detalles de registros, memoria de control, memoria principal, etc.</li><li>Las acciones de reinicio, ejecución paso a paso o hasta punto de ruptura (o fin).</li><li>La ayuda en pantalla.</li></ul></h4>",code_pre:function(){},code_post:function(){},wait_next:100});var help=new Object();help.en=new Array();help.en.push({id:"simulator",title:"Simulator usage",type:"relative",reference:"#help_simulator_screens",description:"Description of how the simulator works.<br>"});help.en.push({id:"microcode",title:"Microcode format",type:"relative",reference:"#help_firmware_format",description:"Syntax of the microcode used.<br>"});help.en.push({id:"assembly",title:"Assembly format",type:"relative",reference:"#help_assembly_format",description:"Syntax of the assembly elements.<br>"});help.en.push({id:"architecture",title:"Simulated architecture",type:"relative",reference:"#help_simulator_arch",description:"Description of the elemental processor architecture.<br>"});help.en.push({id:"architecture",title:"Simulated signals",type:"absolute",reference:"signals",description:"Main signals summary of the simulated elemental processor.<br>"});help.en.push({id:"architecture",title:"Hardware summary",type:"code",reference:"wepsim_open_help_content('<object id=svg_p2 data=\\'images/cpu6.svg?time=20170108\\' type=image/svg+xml>Your browser does not support SVG</object>');",description:"Reference card for the simulated elemental processor hardware.<br>"});help.en.push({id:"simulator",title:"Signal dependencies",type:"code",reference:"wepsim_open_help_content('<div id=depgraph1>...</div>'); show_visgraph(jit_fire_dep, jit_fire_order);",description:"Graph of the signal dependencies (it needs several seconds to be displayed).<br>"});help.en.push({id:"about",title:"License, platforms, etc.",type:"absolute",reference:"about",description:"WepSIM license, supported platforms, technologies used.<br>"});help.en.push({id:"simulator",title:"Welcome tutorial.",type:"code",reference:"wepsim_close_help(); sim_tutorial_showframe('welcome', 0);",description:"Open the welcome tutorial, it can be enable in the configuration.<br>"});help.en.push({id:"simulator",title:"Simple usage tutorial.",type:"code",reference:"wepsim_close_help(); sim_tutorial_showframe('simpleusage', 0);",description:"Open the simple usage tutorial, for microprogramming and assembly programming.<br>"});help.es=new Array();help.es.push({id:"simulator",title:"Uso del simulador",type:"relative",reference:"#help_simulator_screens",description:"Descripción de cómo funciona el simulador.<br>"});help.es.push({id:"microcode",title:"Formato del microcódigo",type:"relative",reference:"#help_firmware_format",description:"Sintáxis del microcódigo usado.<br>"});help.es.push({id:"assembly",title:"Formato del ensamblador",type:"relative",reference:"#help_assembly_format",description:"Sintáxis del ensamblador.<br>"});help.es.push({id:"architecture",title:"Arquitectura del simulador",type:"relative",reference:"#help_simulator_arch",description:"Descripción de la arquitectura del procesador elemental.<br>"});help.es.push({id:"architecture",title:"Señales simuladas",type:"absolute",reference:"signals",description:"Resumen de las señales principales del procesador elemental.<br>"});help.es.push({id:"architecture",title:"Resumen del Hardware",type:"code",reference:"wepsim_open_help_content('<object id=svg_p2 data=\\'images/cpu6.svg?time=20170108\\' type=image/svg+xml>Your browser does not support SVG</object>');",description:"Resumen del hardware del procesador elemental simulado.<br>"});help.es.push({id:"simulator",title:"Dependencias de las señales",type:"code",reference:"wepsim_open_help_content('<div id=depgraph1>...</div>'); show_visgraph(jit_fire_dep, jit_fire_order);",description:"Gráfico de las dependencias entre señales (puede necesitar varios segundos para generarse).<br>"});help.es.push({id:"about",title:"Licencia, plataformas, etc.",type:"absolute",reference:"about",description:"Licencia de WepSIM, plataformas disponibles, tecnologías usadas.<br>"});help.es.push({id:"simulator",title:"Tutorial de bienvenida.",type:"code",reference:"wepsim_close_help(); sim_tutorial_showframe('welcome', 0);",description:"Tutorial de bienvenida, puede activarse en la configuraci&oacute;n.<br>"});help.es.push({id:"simulator",title:"Tutorial simple de uso.",type:"code",reference:"wepsim_close_help(); sim_tutorial_showframe('simpleusage', 0);",description:"Tutorial de uso simple, ejemplo básico para microprogramar y programar en ensamblador.<br>"});var examples=new Array();examples.push({id:"S1E1",title:"Instructions",level:"Initial",description:"Simple example with fetch, arithmetic instructions, and basic .text segment.<br>"});examples.push({id:"S1E2",title:"Memory access",level:"Initial",description:"Simple example with fetch, memory access, and basic .text/.data segment.<br>"});examples.push({id:"S1E3",title:"Looping",level:"Initial",description:"Simple example with fetch, branch, and basic .text segment.<br>"});examples.push({id:"S1E4",title:"Vector",level:"Initial",description:"Simple example with fetch, branch, and basic .text/.data segment.<br>"});examples.push({id:"S2E1",title:"I/O",level:"Intermediate",description:"Example with programmed I/O access, and basic .text/.data segment.<br>"});examples.push({id:"S2E2",title:"Subrutine",level:"Intermediate",description:"Extended example with more instructions and I/O (keyboard, display).<br>"});examples.push({id:"S2E3",title:"Masks & shift",level:"Intermediate",description:"More extended example with masks, shift, and basic .text/.data segment.<br>"});examples.push({id:"S2E4",title:"Matrix",level:"Intermediate",description:"Extended example with subrutine and matrix.<br>"});examples.push({id:"S3E1",title:"Interruptions",level:"Advanced",description:"Advanced example with interruptions support: fetch, RETI, and .ktext/.kdata.<br>"});examples.push({id:"S3E2",title:"System call",level:"Advanced",description:"Advanced example with system call support.<br>"});examples.push({id:"S3E3",title:"Exception",level:"Advanced",description:"Advanced example with floating point exception.<br>"});examples.push({id:"S3E4",title:"Int. + syscall + except.",level:"Advanced",description:"Advanced example with interruption, system call, and exception.<br>"});examples.push({id:"S4E1",title:"addv + seqv.",level:"Special",description:"Example of instructions addv and seqv.<br>"});