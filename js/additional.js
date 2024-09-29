function selectPublisher(publisher) {
    var selected = publisher.options[publisher.selectedIndex].value
    //alasvetovalikon teksti joka näkyy käyttäjälle.
    var selectedtxt = publisher.options[publisher.selectedIndex].text
    document.getElementById("additionalBtn").textContent = "Get " + selectedtxt + " headlines"
    document.getElementById("domain").value=selectedtxt
}

function getByPublisher() {
    var apikey = localStorage.getItem("apk")
    document.getElementById("newsTemplate").hidden = false
    var publisher = document.getElementById("domain").value
    var qty=document.getElementById("qty").value
    if (qty=="")
    {
        var url = `https://newsapi.org/v2/everything?domains=${publisher}&apiKey=${apikey}&pageSize=${20}`
    }
    else{
        var url = `https://newsapi.org/v2/everything?domains=${publisher}&apiKey=${apikey}&pageSize=${qty}`
    }
       
    var req = new Request(url);

    fetch(req)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)


            //articles on apin palauttama lista, joka sisältää uutiset
            data.articles.forEach(article => {
                const li = document.createElement("li")
                 li.id="title"
                 li.class="title"
                li.innerText = article.title
                document.getElementById("newstext").appendChild(li)

            });


        })
        .catch(error => console.log(error))
  
    
}
