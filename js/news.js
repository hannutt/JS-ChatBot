
var newstext = document.querySelector(".newsText")
var ulTitles = document.querySelector('titles')
var apiKey=""


function setVisible(keyword) {
    if (keyword.length>0)
    {
        document.getElementById("keywordBtn").hidden=false;

    }
    else {
        document.getElementById("keywordBtn").hidden=true


    }
    

}



function selectCountry(country) {
    var selected= country.options[country.selectedIndex].value
    
    return selected
}

function getByKeyword() {
    var keyword = document.getElementById("keyword").value
    console.log(keyword)
            
    var url = 'https://newsapi.org/v2/everything?' +
    `q=${keyword}&` +
    'from=2024-08-01&' +
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



