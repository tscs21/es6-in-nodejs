function log(level, ...args) {
	console.log(args);
	if (level === 'debug') {
		for (i of args) {   //es6 for loop
			console.log(i);
		}
	}
}
var foo = {bar:'baz'};
var obj = [{a:'a'},{b:'b'}];
obj = [foo, ...obj]; //puts foo object at beginning of array then spreads the obj array into the new obj array

log('debug', ...obj); //spreads array ie { bar: 'baz' }, { a: 'a' }, { b: 'b' } 