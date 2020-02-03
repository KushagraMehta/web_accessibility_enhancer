chrome.runtime.onInstalled.addListener(function(object) {
  chrome.tabs.create({ url: "first.html" }, function(tab) {
    console.log("Let's do some work");
  });
});
