// Reference: Adaptation of tutorial provided by Upamanyu Das on youtube: https://www.youtube.com/watch?v=lpLUx-0t7aE

module app {
	export interface IGreeter {
		greet(): void;
	}
	
	export class Greeter implements IGreeter {
		private greeting: string;
		constructor(greeting: string){
            	this.greeting = greeting;
        }
        greet(): void {
            console.log(this.greeting);
            document.getElementById('content').textContent = this.greeting;
        }
    }
}

window.addEventListener('DOMContentLoaded',() => {
    var btn = document.getElementById('btnGreet');
    btn.addEventListener('click',()=>{
        var name: string = (<HTMLInputElement>document.getElementById('txtName')).value;
        if (name.length===0){
            alert("Please enter a name!");
        } else {
            var greeter: app.IGreeter = new app.Greeter("Hello, " + name +". Here is your weather");
            greeter.greet();
        }
    });
});
