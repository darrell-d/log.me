function _console(){};

_console.prototype.consoleExists = typeof(console) == "undefined"? false: true;
_console.prototype.histLog = {};
_console.prototype.logCount = 0;
_console.prototype.history = function(consoleInput)
{
	if(arguments.length > 0)
	{
		this.histLog[this.logCount] = consoleInput;
		this.logCount++;
		
	}
	else
	{
		console.log(this.histLog);
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
			console.log('String: "' + variable + '" (' + variable.length + ')');
			this.history(arguments);
			}
			else if(typeof(variable) == "number")
			{
					console.log('Number: ' + variable + ' ' + (variable >>>0).toString(2) );
			}
			else if(typeof(variable) == "boolean")
			{
				console.log('Boolean:' + ' ' + variable);
			}
			else if(typeof(variable) == "undefined")
			{
				console.log('Undefined: #');
			}
			else if(typeof(variable) == "object")
			{
				console.log(variable);
			}
			else if(typeof(variable) == "function")
			{
				console.log(variable);
			}
			
		}
	}
	else
	{
		//TODO:Save console output to memory
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
