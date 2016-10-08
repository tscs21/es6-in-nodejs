//revealing module pattern in es6 object literal notation
function greetingService(name) {             
	return{
		sayHi(){
			//use backtick to construct a template literal string
			console.log(`Hello ${name}!`);   
		},
		sayBye(){
			console.log(`Goodbye ${name}!`);
		}
	}
}
//destructuring objects
//{sayBye} just uses the sayBye function in an object instead of the whole module
let {sayBye:bye} = greetingService('tim');      
bye();
//destructuring arrays
//just pulls the first 3 array items 
let [x,y,z] = [1,2,3,4,5];
console.log(y);