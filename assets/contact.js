function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    Email.send({
        Host : "s1.maildns.net",
        Username : "username",
        Password : "password",
        To : 'kazneo213@gmail.com',
        From : email,
        Subject : "Website direct contact from "+name,
        Body :  message
    }).then(
        message => alert(message)
    );
}