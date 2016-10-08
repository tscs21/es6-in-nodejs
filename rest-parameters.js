function log(level, ...args) {
	console.log(args);
	if (level === 'debug') {
		for (var i = 0; i < args.length; i++) {
			console.log(args[i]);
		}
		//console.log(args[0]);
	}
}
var obj = {a:'a', b:'b'}
log('debug', 'obj: ', obj, 'that was my obj');