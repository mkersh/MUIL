(function(){
	if (window.MUIL == null){
		MUIL = new Object;
	}
	
	MUIL.FileInit = function (){
		$("#FileIOApplet").remove();
	}
	
	MUIL.writeFile = function (iToPath, iStr){
		iStr = iStr.replace(/'/g,"$q");
		_createIOApplet("write", iToPath, iStr);
	}
	
	MUIL.copyFile = function (iToPath, iUrl){
		_createIOApplet("copy", iToPath, iUrl);
	}
	
	function _createIOApplet(iCmd, iToPath, iData){
		var appStr = "<applet id='FileIOApplet' code='localfile.class' archive='localfile.jar'  width='10' height='10' style='visibility:hidden;'>";
		appStr += "<param name='command' value='" + iCmd + "'/>";
		appStr += "<param name='topath' value='" + iToPath + "'/>";
		appStr += "<param name='data' value='" + iData + "'/>";
		appStr += "</applet>";
		
		if ($.browser.mozilla){
			// You need to do this in Mozilla else you lose some writes
			$("#FileIOApplet").remove(); // This does not work on IE and Chrome. It deletes the Applet before it runs
		}
		$(appStr).appendTo($("body"));
	}
	
})();