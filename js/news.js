
var newstext = document.querySelector(".newsText")
var ulTitles = document.querySelector('titles')
var apikey=''


function getApiKey() {
    fetch("/js/newsapikey.txt")

        .then(r => r.text())
        .then(t => {

            API_KEY = t;

            return API_KEY;

        })


}


const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-0${month}-${day}`;
console.log(currentDate); // yyyy-mm--dd






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



function selectCountry(country) {
    //alasvetovalikon value
    var selected = country.options[country.selectedIndex].value
    //alasvetovalikon teksti joka näkyy käyttäjälle.
    var selectedtxt = country.options[country.selectedIndex].text
    document.getElementById("headlinesBtn").textContent = "Get " + selectedtxt + " headlines"

    return selected
}

function getByKeyword() {
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
    

    var selected = selectCountry(country)

    console.log(selected)

    var url = 'https://newsapi.org/v2/top-headlines?' +
        `country=${selected}&` +
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



