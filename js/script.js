
const sendChatBtn = document.querySelector(".chat-input span")
const chatInput = document.querySelector(".chat-input textarea")
const chatbox = document.querySelector(".chatbox")
let usermessage;
var cbClicks = 0
var asked = 0
var additional=0

function hideChatBot(){
    cbClicks+=1
    if (cbClicks % 1 == 0)
    {
        document.getElementById("chatbot").hidden=true

    }
    if (cbClicks % 2 == 0)
    {
        document.getElementById("chatbot").hidden=false

    }
    
}

function showAdditional() {
    additional+=1
    if (additional % 1 == 0)
    {
        document.getElementById("additional").hidden=false
    }
    if (additional % 2 == 0)
    {
        document.getElementById("additional").hidden=true

    }

}

function getApiKey() {
    fetch("/js/apikey.txt")

    .then( r => r.text() )
    .then( t => {

        API_KEY = t;
        
        return API_KEY;
       
  } )
   

}



document.getElementById("qty").innerHTML= asked


const createChatLi = (message,className) => {
    //luodaan <li> elementti jonka sisällä on message muuttujan sisältö
    const chatLi = document.createElement("li")
    chatLi.classList.add("chat-incoming",className)
    //? : notaatio on ternary operaattori eli käytännössä if/else
    let chatContent= className ==="outgoing" ? `<p>${message}</p>`: `<p>${message}</p>`
    chatLi.innerHTML=chatContent
    return chatLi
    
}


const generateResponse = () => {
    getApiKey()
    asked = asked+1
    document.getElementById("qty").innerHTML=asked
    const API_URL="https://api.openai.com/v1/chat/completions"
    

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${API_KEY}`
        },
        body:JSON.stringify({
            model:"gpt-3.5-turbo",
            messages:[{role: "user", content: usermessage}]
        })


    }
    fetch(API_URL,requestOptions).then(res=>res.json()).then(data => {
        console.log(data)
        chatbox.appendChild(createChatLi(data.choices[0].message.content,"chat-incoming"))
       
    }).catch((error)=>{
        console.log(error)
        
    })
}
const handleChat = () =>{
    //textarea sisällön tallennus muuttujaan ja välilyöntien poistos
    usermessage=chatInput.value.trim()
    console.log(usermessage)
    if (!usermessage) return;
//käyttäjän viestin näyttö chatbox elementissä
chatbox.appendChild(createChatLi(usermessage, "outgoing"))

setTimeout(()=>{
    //thinking teksti sijoitetaan incoming elementtiin
    //chatbox.appendChild(createChatLi("Thinking","chat-incoming"))
    generateResponse()
},600)

}

sendChatBtn.addEventListener("click",handleChat)