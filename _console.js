function _console(){};

_console.prototype.consoleExists = typeof(console) == "undefined"? false: true;
_console.prototype.histLog = {};
_console.prototype.logCount = 0;
_console.prototype.verbose = true;

_console.prototype.saveHistory = function(consoleInput)
{
	try
	{
		var d = new Date()
		if(typeof consoleInput[1] == "undefined")
		{
			this.histLog[this.logCount] = Array(consoleInput[0],d,d.getTime());
		}
		else
		{
			this.histLog[this.logCount] = Array(consoleInput,d,d.getTime());
		}
		this.logCount++;
	}
	catch(e)
	{
		console.log(e);
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
	if(this.consoleExists)
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
				console.log((this.verbose)?'Number: ' + variable + ' ' + (variable >>>0).toString(2) );
				this.saveHistory(arguments);
			}
			else if(typeof(variable) == "boolean")
			{
				console.log((this.verbose)?'Boolean:' + ' ' + variable);
				this.saveHistory(arguments);
			}
			else if(typeof(variable) == "undefined")
			{
				console.log('Undefined: #');
				this.saveHistory(arguments);
			}
			else if(typeof(variable) == "object")
			{
				console.log(variable);
				this.saveHistory(arguments);
			}
			else if(typeof(variable) == "function")
			{
				console.log(variable);
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
