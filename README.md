Project keywords: Vanilla-JavaScript, AI, HTML, CSS, API, jQuery. 

A JavaScript chatbot and news feed application that uses OpenAI's GPT-3.5 Turbo API to generate responses for the user and Newsapi.org's HTTP REST API to generate a news feed for the user.

The main idea of ​​combining the GPT interface and the news feed is that the user can ask the artificial intelligence for additional information on news topics.

Example image where the search is limited to UK news headlines without a clickable link to the news.

![alt text](newsNoLink.png)

An example image where the search also includes a link to the article's news. the user can select the Show article links check box if the news source link is to be displayed.

![alt text](newsLinks.png)




Example image, where news is searched for from the News API using the keyword (Apple) starting on August 1, 2024.

![alt text](bykeyword-1.png)



CHATBOT

The program has a html interface with an input field where the user can write their question and send it by clicking the submit icon. The question is stored in a variable that the javaScript function sends to the OpenAi API in JSON format. The response from the API is retrieved using the JavaScript Fetch method.

Example picture of the chatbot user interface and asking a question and receiving an answer

![alt text](chatbotApple.png)

NEWS FEED

The news feed function has its own user interface, so you can use the chatbot and the news feed at the same time or separately.

The news feed is retrieved using the newsapi.org Http Rest API. The working principle is very similar to the Chat GPT API described above. The News API response displays the data in a array, so they are looped through in a forEach loop and displayed in a li-element, and each news item gets its own li-element using the JavaScript createElement method.

For now, the news feed is available by country, source, category keyword and date search.
The search condition is selected from the html-select component and the selection is passed as a parameter to the function that implements the api call. The news found using the search criteria are looped in the forEach loop and displayed in readable form in <i> elements.

The keyword search is started by entering the keyword in the input field. the input field has an onChange event handler that displays the hidden button element if at least one character is typed into the input field. The search is started by clicking the button that appears.
The keyword is passed as a parameter to the newsAPI URL.

News with source link

When the user has selected a search condition from the html-select component, a selection box appears, from which you can also select the source link of the news to be displayed.
the news link is received in the news API response as article.url and is wrapped in the a element using the JavaScript create element method.

Date search. The user can enter the start date in the input field. The News API requires a date in the format YYYY-MM-DD. Since form is important, I used two methods to guide the user in spelling.

The first way is to use a placeholder and the second way is the jQuery Masking plugin.
The masking plugin automatically adds a hyphen in the right place, i.e. the first hyphen is added after 4 characters and the remaining hyphens after 2 characters.


TRANSLATE

The application includes the Google Translate API, so you can translate the user interface and the chatbot's response to any language that google translate supports. By default, all answers will be in English.

Normally, the translation API would translate the entire page's texts, but now only the chatbot's response is meant to be translated, so the area to be translated is wrapped in <span class="translate"> tags and the rest of the areas that are not translated are wrapped in <span class="notranslate"> tags .

An example picture of the chatbot's response translated into Finnish using the Google Translate API.
The API integration can be seen in the upper left of the picture, where you can choose the translation language you want.

![alt text](chatbottranslate.png)





