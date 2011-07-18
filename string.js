(function(){
	if (window.MUIL == null){
		MUIL = new Object;
	}
	
	// Replace {n} parameters in a string
	// n starts at 1
	MUIL.format = function (iStr){
		var s = iStr,
		i = arguments.length;

		while ((i--)>0) {
			s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
		}
		return s;
	};
	
})();