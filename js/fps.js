if(window.localStorage.getItem("fpson")==undefined||window.localStorage.getItem("fpson")=="1"){var rAF=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();var frame=0;var allFrameCount=0;var lastTime=Date.now();var lastFameTime=Date.now();var loop=function(){var e=Date.now();var a=e-lastFameTime;var n=Math.round(1e3/a);lastFameTime=e;allFrameCount++;frame++;if(e>1e3+lastTime){var n=Math.round(frame*1e3/(e-lastTime));if(n<=5){var o=`<span style="color:#bd0000">卡成ppt🤢</span>`}else if(n<=15){var o=`<span style="color:red">电竞级帧率😖</span>`}else if(n<=25){var o=`<span style="color:orange">有点难受😨</span>`}else if(n<35){var o=`<span style="color:#9338e6">不太流畅🙄</span>`}else if(n<=45){var o=`<span style="color:#08b7e4">还不错哦😁</span>`}else{var o=`<span style="color:#39c5bb">十分流畅🤣</span>`}document.getElementById("fps").innerHTML=`FPS:${n} ${o}`;frame=0;lastTime=e}rAF(loop)};loop()}else{document.getElementById("fps").style="display:none!important"}