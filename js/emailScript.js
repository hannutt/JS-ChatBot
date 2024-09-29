function SendMail() {
    var news = document.getElementById("newsTemplate").innerHTML
    var address = document.getElementById("emailAdd").value
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "",
        Password : "",
        To : address,
        From : "News app",
        Subject : "News",
        Body : news
    }).then(
      message => console.log(message)
    );

}