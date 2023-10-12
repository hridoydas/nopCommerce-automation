const xlsx = require('node-xlsx');
const excelFile = xlsx.parse(`${__dirname}/data/dataFile.xlsx`)

const userInfoSheet = excelFile.find(sheets => sheets.name =='user_info');
const userInfoSheetData = userInfoSheet.data;

const headers = userInfoSheetData.shift();
const dataSet = userInfoSheetData.map((row)=>{
    const user = {};
    row.forEach((data, index)=>
    user[headers[index]]= data);
    return user;
})

class excelParse{  
    get excelDataSet() {
        return dataSet;
    }
}

module.exports = new excelParse();
