 // ID of the Google Spreadsheet
 var spreadsheetID = "1qIfiLcAItVaWwO-HRh_nyMR8vi1FZTtCGK9HASWvRvI";

 // Make sure it is public or set to Anyone with link can view 
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
 //Pure Javascript way to read JSON files

 var xmlhttp = new XMLHttpRequest();
 //Use XMLHttpRequest (XHR) objects to interact with servers. 
 //You can retrieve data from a URL without having to do a full page refresh.

 //You can retrieve data from a URL without having to do a full page refresh.
 xmlhttp.open('GET', url, true);
 xmlhttp.onreadystatechange = function () {
     if (xmlhttp.readyState == 4) {
         //Possible Values are:
         //XMLHttpRequest.readyState == 0; UNSENT
         //XMLHttpRequest.readyState == 1; OPENED
         //XMLHttpRequest.readyState == 2; HEADERS_RECEIVED
         //XMLHttpRequest.readyState == 3; LOADING
         //XMLHttpRequest.readyState == 4; DONE

         if (xmlhttp.status == 200) {
             var data = JSON.parse(xmlhttp.responseText);
             var entry = data.feed.entry;
             //Vue.js script to process data
             var googleSheetApp = new Vue({
                 el: '#googleSheetDB',
                 data: {
                     googleSheetItems: entry
                 }
             });
         }
     }
 };
 xmlhttp.send(null);