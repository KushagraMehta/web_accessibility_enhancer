var parameters = location.search.substring(1).split("=");
// Storing Selected language in Chrome Storage
chrome.storage.sync.set({ Language: parameters[1] }, function() {
  console.log("Language is set to " + parameters[1]);
});

// Code For Done Button
document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("final");
  console.log(button);
  // onClick's logic below:
  button.addEventListener("click", function() {
    //-------Add More Code----------//
    var selValue = $("input[name='radioname']:checked").val();
    console.log(selValue);
    chrome.storage.sync.set({ disability: selValue }, function() {
      console.log("Disability is set to " + selValue);
    });
    // window.close();
  });
});
