function _console(){};

_console.prototype.consoleExists = typeof(console) == "undefined"? false: true;
_console.prototype.histLog = {};
_console.prototype.logCount = 0;
_console.prototype.verbose = true;
_console.prototype.safeURLs = Array("localhost");
_console.prototype.currentURL = location.href.split('/')[2];

_console.prototype.addSafeURL = function(url)
{
	this.safeURLS.push(url);
}
_console.prototype.saveHistory = function(consoleInput)
{
	try
	{
		var d = new Date()
		//Checks for array / Object input
		if(typeof consoleInput[1] == "undefined")
		{
			this.histLog[this.logCount] = {"output": consoleInput[0],"TimeStamp":d,"epochTime":d.getTime()};
		}
		else
		{
			this.histLog[this.logCount] = {"output": consoleInput,"TimeStamp":d,"epochTime":d.getTime()};
		}
		this.logCount++;
	}
	catch(e)
	{
		this.log(e);
	}
}

_console.prototype.getHistory = function(start,stop)
{
	var argLength = arguments.length;
	if(argLength == 0)
	{
		try
		{
			return this.histLog;
		}
		catch(e)
		{

		}
	}
	else if(argLength == 1)
	{
		try
		{
			if(typeof arguments[0] == "Number")
			{
				return this.histLog[arguments[0]];
			}
			else
			{
				throw Error("Invalid argument type - Type Number required");
			}
		}
		catch(e)
		{
			console.log(e);
		}

	}
	else if(argLength == 2)
	{
	}
	else
	{
	}
}

_console.prototype.log = function()
{
	if(this.consoleExists && this.safeURLs.indexOf(this.currentURL) >= 0)
	{
		size = arguments.length;

		for(i = 0; i < size; i++)
		{
			var variable = arguments[i];

			if(typeof(variable) == "string")
			{
				console.log( (this.verbose)?'String: "' + variable + '" (' + variable.length + ')': variable);
				this.saveHistory(arguments);
			}
			else if(typeof(variable) == "number")
			{
				console.log((this.verbose)?'Number: ' + variable + ' ' + (variable >>>0).toString(2) : variable);
				this.saveHistory(arguments);
			}
			else if(typeof(variable) == "boolean")
			{
				console.log((this.verbose)?'Boolean:' + ' ' + variable : variable);
				this.saveHistory(arguments);
			}
			else if(typeof(variable) == "undefined")
			{
				console.log('Undefined: #');
				this.saveHistory(arguments);
			}
			else if(typeof(variable) == "object")
			{

				if(variable instanceof Array)
				{
					console.log("Array("+ variable.length +") :: " , variable);
				}
				else
				{
					console.log("Object("+ Object.keys(variable).length +" keys) :: " , variable);
				}
				this.saveHistory(arguments);
			}
			else if(typeof(variable) == "function")
			{
				window.func = variable;
				this.saveHistory(arguments);
			}

		}
	}
	else
	{
		this.saveHistory(arugments);
	}
}
_console.prototype.debug = function()
{
	//TODO:Add debug features
	console.log('debug');
}
_console.prototype.warn = function()
{
	//TODO:Add warn features
	console.log('warn');
}
_console.prototype.info = function()
{
	//TODO:Add info features
	console.log('info');
}
_console = new _console();
