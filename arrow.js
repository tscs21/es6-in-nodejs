//GreetingService is now a constructor function note has capital 'G'
function GreetingService(name) { 
	this.name = name;
	this.sayHi = () => {
		console.log(`Hello ${this.name}!`);
	};
	this.sayHiAsync = () => {
		setTimeout(()=>{
			console.log(`Hello ${this.name}!`);
		},2000);
	};
	this.sayBye = () => {
		console.log(`Goodbye ${this.name}!`);
	};
}
//destructuring objects
//{sayBye} just uses the sayBye function in an object instead of the whole module
let {sayHiAsync:bye} = new GreetingService('tim');      
bye();
