
//this is a function that fires when the webapp receives a GET request
function doGet(e) {
  return HtmlService.createHtmlOutput("request received");
}

//this is a function that fires when the webapp receives a POST request
function doPost(e) {
  var params = JSON.stringify(e.postData.contents);
  params = JSON.parse(params);
  var myData = JSON.parse(e.postData.contents);
  var testRunUrl = myData.test_run_url;
  var testRunName = myData.test_name;
  var testRunEnv = myData.environment_name;
  var testRunResult = myData.result;
  var sheet = SpreadsheetApp.getActiveSheet();
  var timestamp = new Date();
  sheet.appendRow([timestamp, testRunName, testRunEnv, testRunResult, testRunUrl, params])
  SpreadsheetApp.flush();
  return HtmlService.createHtmlOutput("post request received");
}
