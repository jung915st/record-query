function doGet(e) {
 
  let params = e.parameters;  
  let url = ScriptApp.getService().getUrl();
//  return HtmlService.createHtmlOutput(url);
   
  return HtmlService.createTemplateFromFile('index')
  .evaluate();
  
}
 
 
 
//function getMsg() {
//  return 'Hello,world';
//}
 
function getItems(name){
  Logger.log("query name:"+name);
  let url = 'https://docs.google.com/spreadsheets/d/1R17xEqsy4bUdWWy7gG9iOh1A/edit?usp=sharing';
  let SpreadSheet = SpreadsheetApp.openByUrl(url);
  let sheet = SpreadSheet.getSheets()[0];
  let lastRow = sheet.getLastRow();
  let items = [];
   
  //init get all items
   
  if(name === "init"){
    for(let i=2; i<lastRow+1; i++){    
      let item = {};
      
      item.name = sheet.getSheetValues(i, 3,1,1)[0][0].toString();
      item.time = sheet.getSheetValues(i, 4,1,1)[0][0].toString();
      item.location = sheet.getSheetValues(i, 5,1,1)[0][0].toString();
      
//      item.time = sheet.getRange(i, 1).getValues()[0][0];
//      item.name = sheet.getRange(i, 3).getValues()[0][0];
//      item.location = sheet.getRange(i, 5).getValues()[0][0];
      
      items.push(item);   
    }
  } else {
    for(let i=2; i<lastRow+1; i++){    
      let item = {};
      //var timestamp = sheet.getSheetValues(i, 4,1,1)[0][0].toString();
      
      item.name = sheet.getSheetValues(i, 3,1,1)[0][0].toString();
      item.time = sheet.getSheetValues(i, 4,1,1)[0][0].toString();
      item.location = sheet.getSheetValues(i, 5,1,1)[0][0].toString();
      
//      item.time = sheet.getRange(i, 1).getValues()[0][0];
//      item.name = sheet.getRange(i, 3).getValues()[0][0];
//      item.location = sheet.getRange(i, 5).getValues()[0][0];
      
      if(name === item.name){
        items.push(item);  
      }
        
    }
  } 
   
 
//  Logger.log(items);
  return items;
}
