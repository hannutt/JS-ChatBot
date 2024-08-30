
var newstext = document.querySelector(".newsText")
var ulTitles = document.querySelector('titles')
var apiKey = ""


const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-0${month}-${day}`;
console.log(currentDate); // yyyy-mm--dd






function setVisible(keyword) {
    if (keyword.length>0)
    {
        
        document.getElementById("keywordBtn").hidden=false;
        document.getElementById("searchDate").hidden=false

    }
    else {
        document.getElementById("keywordBtn").hidden=true
        document.getElementById("searchDate").hidden=true


    }
    

}



function selectCountry(country) {
    //alasvetovalikon value
    var selected= country.options[country.selectedIndex].value
    //alasvetovalikon teksti joka näkyy käyttäjälle.
    var selectedtxt= country.options[country.selectedIndex].text
    document.getElementById("headlinesBtn").textContent="Get "+selectedtxt+" headlines"
    
    return selected
}

function getByKeyword() {
    document.getElementById("newsTemplate").hidden=false
    var searchDate=document.getElementById("searchDate").value
    if (searchDate=='')
    {
        searchDate=currentDate
       // console.log(searchDate)
        
        
    }
    
    else if (searchDate!='') {
       // console.log(searchDate)

    }
    console.log(searchDate)
    

    var keyword = document.getElementById("keyword").value
    console.log(keyword)
            
    var url = 'https://newsapi.org/v2/everything?' +
    `q=${keyword}&` +
    `from=${searchDate}` +
    'sortBy=popularity&' +
    `apiKey=${apiKey}`;
    var req = new Request(url);
    
    fetch(req)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        console.log(data)
    

        //articles on apin palauttama lista, joka sisältää uutiset
        data.articles.forEach(article => {
        const li = document.createElement("li")
        li.innerText= article.title
        document.getElementById("newstext").appendChild(li)
            
        });
        
      
    })
    .catch(error=>console.log(error))
    
    }

    function allowDrop(ev) {
        ev.preventDefault();
      }
      
      function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
    
     
      
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.value=document.getElementById(data).innerText;
      }


function getNewsHeadlines() {
 
    var selected = selectCountry(country)
   
    console.log(selected)
  
    var url = 'https://newsapi.org/v2/top-headlines?' +
    `country=${selected}&` +
    `apiKey=${apiKey}`;

var req = new Request(url);
fetch(req)
    .then(res=>{
        return res.json()
    })

    .then(data=>{
        console.log(data)
    

        //articles on apin palauttama lista, joka sisältää uutiset
        data.articles.forEach(article => {
        const li = document.createElement("li")
        li.innerText= article.title
        document.getElementById("newstext").appendChild(li)
      
            
        });
        
      
    })
    .catch(error=>console.log(error))
}



