var $builtinmodule=function e(t){mod={};mod.wait=new Sk.builtin.func(function(e){var t=Sk.importModule("time",false,true);var i=Sk.ffi.remapToJs(e)/1e3;return Sk.misceval.callsimOrSuspend(t.$d["sleep"],Sk.ffi.remapToPy(i))});mod.get_ticks=new Sk.builtin.func(function(){return Sk.ffi.remapToPy(new Date-PygameLib.initial_time)});mod.delay=new Sk.builtin.func(function(e){var t=Sk.importModule("time",false,false);var i=Sk.ffi.remapToJs(e)/1e3;return Sk.misceval.callsimOrSuspend(t.$d["sleep"],Sk.ffi.remapToPy(i))});mod.set_timer=new Sk.builtin.func(function(e,t){var i=Sk.ffi.remapToJs(e);var a=Sk.ffi.remapToJs(t);if(PygameLib.eventTimer[i]){clearInterval(PygameLib.eventTimer[i].timer)}else{PygameLib.eventTimer[i]={};PygameLib.eventTimer[i].f=function(){var e=[i,{}];PygameLib.eventQueue.unshift(e)}}if(a){PygameLib.eventTimer[i].timer=setInterval(PygameLib.eventTimer[i].f,a)}return mod});mod.Clock=Sk.misceval.buildClass(mod,time_Clock,"Clock",[]);PygameLib.ClockType=mod.Clock;return mod};function time_Clock(e,t){var o=new Sk.builtin.str("prevTime"),k=new Sk.builtin.str("getTime"),m=new Sk.builtin.str("rawTime"),S=new Sk.builtin.str("fpsArray"),l=new Sk.builtin.str("fpsIdx");t.__init__=new Sk.builtin.func(function(e){Sk.abstr.sattr(e,o,Sk.ffi.remapToPy(Date.now()),false);Sk.abstr.sattr(e,k,Sk.builtin.none.none$,false);Sk.abstr.sattr(e,m,Sk.ffi.remapToPy(0),false);Sk.abstr.sattr(e,S,Sk.ffi.remapToPy([]),false);Sk.abstr.sattr(e,l,Sk.ffi.remapToPy(0));return Sk.builtin.none.none$},e);t.__init__.co_name=new Sk.builtin.str("__init__");t.tick=new Sk.builtin.func(function(i,e){var a=Date.now();var r=0;if(Sk.ffi.remapToJs(Sk.abstr.gattr(i,o)!==null)){var t=Sk.ffi.remapToJs(Sk.abstr.gattr(i,o,false));r=a-t}Sk.abstr.sattr(i,o,Sk.ffi.remapToPy(a),false);Sk.abstr.sattr(i,k,Sk.ffi.remapToPy(r),false);var n=Sk.ffi.remapToJs(Sk.abstr.gattr(i,S,false));var f=Sk.ffi.remapToJs(Sk.abstr.gattr(i,l,false));if(n.length<10){n.push(r)}else{n[f]=r}f=(f+1)%10;Sk.abstr.sattr(i,S,Sk.ffi.remapToPy(n),false);Sk.abstr.sattr(i,l,Sk.ffi.remapToPy(f),false);if(e!==undefined){var s=1e3/Sk.ffi.remapToJs(e);return new Sk.misceval.promiseToSuspension(new Promise(function(t){var e=function e(){Sk.abstr.sattr(i,m,Sk.ffi.remapToPy(Date.now()-a),false);t(r)};if(PygameLib.running){Sk.setTimeout(e,s)}}))}Sk.abstr.sattr(i,m,Sk.ffi.remapToPy(Date.now()-a),false);return Sk.ffi.remapToPy(r)},e);t.tick.co_name=new Sk.builtin.str("tick");t.tick.co_varnames=["framerate"];t.tick.$defaults=[Sk.ffi.remapToPy(0)];t.tick_busy_loop=new Sk.builtin.func(function(i,e){var a=Date.now();var r=0;if(Sk.ffi.remapToJs(Sk.abstr.gattr(i,o,false))!==null){var t=Sk.ffi.remapToJs(Sk.abstr.gattr(i,o,false));r=a-t}Sk.abstr.sattr(i,o,Sk.ffi.remapToPy(a),false);Sk.abstr.sattr(i,k,Sk.ffi.remapToPy(r),false);if(e!==undefined){var n=1e3/Sk.ffi.remapToJs(e);return new Sk.misceval.promiseToSuspension(new Promise(function(t){var e=function e(){Sk.abstr.sattr(i,m,Sk.ffi.remapToPy(Date.now()-a),false);t(r)};if(PygameLib.running){Sk.setTimeout(e,n)}}))}Sk.abstr.sattr(i,m,Sk.ffi.remapToPy(Date.now()-a),false);return Sk.ffi.remapToPy(r)},e);t.tick_busy_loop.co_name=new Sk.builtin.str("tick_busy_loop");t.tick_busy_loop.co_varnames=["framerate"];t.tick_busy_loop.$defaults=[Sk.ffi.remapToPy(0)];t.get_time=new Sk.builtin.func(function(e){return Sk.abstr.gattr(e,k,false)});t.get_time.co_name=new Sk.builtin.str("get_time");t.get_rawtime=new Sk.builtin.func(function(e){return Sk.abstr.gattr(e,m,false)});t.get_rawtime.co_name=new Sk.builtin.str("get_rawtime");t.get_fps=new Sk.builtin.func(function(e){var t=Sk.ffi.remapToJs(Sk.abstr.gattr(e,S,false));if(t.length<10||t[0]===0){return Sk.ffi.remapToPy(0)}var i=0;for(var a=0;a<10;a++){i+=t[a]}return Sk.ffi.remapToPy(i/10)})}time_Clock.co_name=new Sk.builtin.str("Clock");