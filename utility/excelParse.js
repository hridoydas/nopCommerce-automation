const xlsx = require('node-xlsx');
const excelFile = xlsx.parse(`${__dirname}/../resources/dataFile.xlsx`)

const userInfoSheet = excelFile.find(sheets => sheets.name =='user_info');
const userInfoSheetData = userInfoSheet.data;

const headers = userInfoSheetData.shift();
const dataSet = userInfoSheetData.map((row)=>{
    const user = {};
    row.forEach((data, index)=>
    user[headers[index]]= data);
    return user;
})

let orderSheet = excelFile.find(sheets => sheets.name == 'order_info');
const orderSheetData = orderSheet.data;
const orderHeader = orderSheetData.shift();

const orderDataSet = orderSheetData.map((row)=>{
    const orderData = {};
    row.forEach((data, index)=>
    orderData[orderHeader[index]]= data);
    return orderData;
}) 

class excelParse{  
    get excelDataSet() {
        return dataSet;
    }

    get orderDataSet(){
        return orderDataSet;
    }
}

module.exports = new excelParse();
