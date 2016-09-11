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
        if (name.length === 0) {
            alert("Please enter a name!");
        }
        else {
            var greeter = new app.Greeter("Hello, " + name + ". Here is your weather");
            greeter.greet();
        }
    });
});
