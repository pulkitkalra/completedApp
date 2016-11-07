// Reference: Adaptation of tutorial provided by Upamanyu Das on youtube: https://www.youtube.com/watch?v=lpLUx-0t7aE
var app;
(function (app) {
    var Greeter = (function () {
        function Greeter(greeting) {
            this.greeting = greeting;
        }
        Greeter.prototype.greet = function () {
            console.log(this.greeting);
            document.getElementById('content').textContent = this.greeting;
        };
        return Greeter;
    }());
    app.Greeter = Greeter;
})(app || (app = {}));
window.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('btnGreet');
    btn.addEventListener('click', function () {
        var name = document.getElementById('txtName').value;
        if (name.equals("Pulkit")){
            name = "You are very cool!"
        }
        if (name.length === 0) {
            alert("Please enter a name!");
        }
        else {
            var greeter = new app.Greeter("Hello, " + name + ". Here is your weather");
            greeter.greet();
        }
    });
});
