(function(){
	if (window.MUIL == null){
		MUIL = new Object;
	}
	
	MUIL.AddClassMethod = function (iClass, name, func) {
		iClass.prototype[name] = func;
		return iClass;
	};
	
	MUIL.Inherits = function (iClass, parent) {
		var d = {}, p = (iClass.prototype = new parent());
		MUIL.AddClassMethod(iClass, 'uber', function uber(name) {
			if (!(name in d)) {
				d[name] = 0;
			}        
			var f, r, t = d[name], v = parent.prototype;
			if (t) {
				while (t) {
					v = v.constructor.prototype;
					t -= 1;
				}
				f = v[name];
			} else {
				f = p[name];
				if (f == this[name]) {
					f = v[name];
				}
			}
			d[name] += 1;
			r = f.apply(this, Array.prototype.slice.apply(arguments, [1]));
			d[name] -= 1;
			return r;
		});
		return this;
	};
	
	MUIL.write = function (iStr, iDoFormat){
		iDoFormat = (iDoFormat == null) ? true : iDoFormat;
		// if iStr does not have any html in it then append <br/>
		if (iDoFormat == true) {
			iStr = iStr.replace(/</g,"&lt;");
			iStr = iStr.replace(/>/g,"&gt;");
			iStr = "<div>" + iStr + "</div>";
		}
		$(iStr).appendTo($("body"));
	}
	
	var defaultDisplayCodeCSS = {backgroundColor:"#dddddd", width:"80%", borderStyle:"solid", overflow:"scroll"};
	var defaultDisplayCodeCSS2 = {className:"brush: js"};
	MUIL.displayCode = function (iParent){
		if (iParent == null) iParent = "body";
		$("<pre class='brush: js'></pre>").appendTo($(iParent)).css(defaultDisplayCodeCSS2).text($("body").html());
		//$("<pre class='brush: js'>function foo(){}</pre>").appendTo($(iParent)).css(defaultDisplayCodeCSS2);
		SyntaxHighlighter.all();	
	}
})();