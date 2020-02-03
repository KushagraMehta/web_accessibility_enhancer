var parameters = location.search.substring(1).split("=");
var lang = parameters[0];
var final_lang = parameters[1];
chrome.storage.sync.set({ lang: final_lang }, function() {
  console.log("Language is set to " + final_lang);
});
chrome.storage.sync.get([lang], function(result) {
  console.log("Value currently is " + result.key);
});
