
var newstext = document.querySelector(".newsText")
var ulTitles = document.querySelector('titles')

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-0${month}-${day}`;
console.log(currentDate); // yyyy-mm--dd

var links=false

function linkChoice() {
    var cb=document.getElementById("linksCB")
    if (cb.checked == true) {
        links=true
       
    }

}


function setVisible(keyword) {
    if (keyword.length > 0) {

        document.getElementById("keywordBtn").hidden = false;
        document.getElementById("searchDate").hidden = false
        document.getElementById("dateLbl").hidden = false

    }
    else {
        document.getElementById("keywordBtn").hidden = true
        document.getElementById("searchDate").hidden = true
        document.getElementById("dateLbl").hidden = true


    }


}



function selectOption(optparam) {
    //alasvetovalikon value
    var selected = optparam.options[optparam.selectedIndex].value
    //alasvetovalikon teksti joka näkyy käyttäjälle.
    var selectedtxt = optparam.options[optparam.selectedIndex].text
    document.getElementById("headlinesBtn").textContent = "Get " + selectedtxt + " headlines"
    document.getElementById("linksCB").hidden=false
    document.getElementById("linksLbl").hidden=false
    
    //käytetään getnewsheadlines funktiossa.
    return selected
}

function selectSource(source) {
    //alasvetovalikon value
    var selected = source.options[source.selectedIndex].value
    //alasvetovalikon teksti joka näkyy käyttäjälle.
    var selectedtxt = source.options[source.selectedIndex].text
    document.getElementById("headlinesBtn").textContent = "Get " + selectedtxt + " headlines"

    return selected
}

function getByKeyword() {
    var apikey = localStorage.getItem("apk")
    document.getElementById("newsTemplate").hidden = false
    var searchDate = document.getElementById("searchDate").value
    if (searchDate == '') {
        searchDate = currentDate
        // console.log(searchDate)


    }

    else if (searchDate != '') {
        // console.log(searchDate)

    }
    console.log(searchDate)


    var keyword = document.getElementById("keyword").value
    console.log(keyword)

    var url = 'https://newsapi.org/v2/everything?' +
        `q=${keyword}&` +
        `from=${searchDate}` +
        'sortBy=popularity&' +
        `apiKey=${apikey}`;
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
                li.innerText = article.title
                document.getElementById("newstext").appendChild(li)

            });


        })
        .catch(error => console.log(error))

}




const getNewsHeadlines = () => {
    document.getElementById("newsTemplate").hidden = false
    var apikey = localStorage.getItem("apk")
    var selected = selectOption(country)
    console.log(selected.length)
    //maakohtaisessa haussa käytetään 2 kirjaimista maatunnusta, eli jos selectin pituus on 2 merkkiä
    //suoriteaan if-lohko
    if (selected.length==2)
    {
        var url = 'https://newsapi.org/v2/top-headlines?' +
        `country=${selected}&` +
        `apiKey=${apikey}`;

    }
    else if (!selected.includes('-'))
    {
        var url =`https://newsapi.org/v2/top-headlines/?category=${selected}&apiKey=${apikey}`
    }
    //select on pitempi kuin 2 merkkiä, joten silloin sitä käytetään uutisten hakuun nimetystä lähteestä
    //select on tässä tapauksessa muotoa bbc-news
    else {
       
        var url = `https://newsapi.org/v2/top-headlines?sources=${selected}&apiKey=${apikey}`
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
                if (links==true){
                    const linebreak=document.createElement("br")
                    const li = document.createElement("li")
                    li.id="title"
                    li.innerText = article.title
                    
                    
                    const link=document.createElement("a")
                    link.setAttribute("href",article.url)
                   
                    link.textContent=" "+article.url
                    document.getElementById("newstext").appendChild(li)
                    li.appendChild(link)
                    li.appendChild(linebreak)

                }
                else {
                    const li = document.createElement("li")
                    li.id="title"
                    li.draggable=true
                    li.innerText = article.title
                    li.ondragstart=drag(e)
                    document.getElementById("newstext").appendChild(li)

                }
              
            
            });


        })
        .catch(error => console.log(error))
}



