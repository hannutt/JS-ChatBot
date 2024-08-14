
var newstext = document.querySelector(".newsText")
var ulTitles = document.querySelector('titles')


function getNewsApiKey() {
    fetch("/js/newsapikey.txt")

    .then( r => r.text() )
    .then( t => {
        var apikey = t;
        console.log(apikey)
        return apikey;
                  
       
  } )
   

}
function selectCountry(country) {
    var selected= country.options[country.selectedIndex].value
    
    return selected
}
function getNewsHeadlines() {

    var apikeyFinal=getNewsApiKey()
    var selected = selectCountry(country)
    console.log(selected)
    
    var url = 'https://newsapi.org/v2/top-headlines?' +
          `country=${selected}&` +
          `apiKey=${apikeyFinal}`;
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

