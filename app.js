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
function submitEntry() {
    var btn = document.getElementById('btnGreet');
    btn.addEventListener('click', function () {
        var name = document.getElementById('txtName').value;
        if (name == "pulkit"){
            name = "You are very cool!"
            alert("Welcome Master");
        }
        if (name.length === 0) {
            alert("Please enter a name!");
        }
        else {
            var greeter = new app.Greeter("Hello, " + name + ". Here is your weather");
            greeter.greet();
        }
    });
}
window.addEventListener('DOMContentLoaded', submitEntry());
