Project keywords: JavaScript, AI, HTML, CSS, API, Google Translate API.

A JavaScript chatbot that uses OpenAI's GPT-3.5 Turbo API to generate responses for the user.

![alt text](chatbot.png)

The program has a html interface with an input field where the user can write their question and send it by clicking the submit icon. The question is stored in a variable that the javaScript function sends to the OpenAi API in JSON format. The response from the API is retrieved using the JavaScript Fetch method.

Translate

The application includes the Google Translate API, so you can translate the user interface and the chatbot's response to any language that google translate supports. By default, all answers will be in English.

Drag & Drop feature

index.html contains a div element with a few sample questions. Questions can be dragged and dropped into the text area and sent as questions to Open AI's API. This feature is made with HTML Drag and Drop API.

Example question div element can also hide on button click and show again on second click. this is done using Jquery's hide and show methods.



