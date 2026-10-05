function showWelcome() {
alert("Welcome to Angel's Café! We are happy to serve you.");
}

document.addEventListener("DOMContentLoaded", function() {

```
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        alert("Thank you, " + name + "! Your message has been received.");

        form.reset();
    });
}
```

});
