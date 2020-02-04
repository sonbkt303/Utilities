const XLSX = require('xlsx');

// './sample/Masterfile.xlsx'
function readXlsxFile(path) {
  const workbook = XLSX.readFile(path);
  const sheet_name_list = workbook.SheetNames;
  let data = [];

  sheet_name_list.forEach(function(y) {
    let worksheet = workbook.Sheets[y];
    let headers = {};
    for (z in worksheet) {
      if (z[0] === '!') continue;
      //parse out the column, row, and value
      let tt = 0;
      for (let i = 0; i < z.length; i++) {
        if (!isNaN(z[i])) {
          tt = i;
          break;
        }
      }
      let col = z.substring(0, tt);
      let row = parseInt(z.substring(tt));
      let value = worksheet[z].v;

      //store header names
      if (row == 1 && value) {
        headers[col] = value;
        continue;
      }

      if (!data[row]) data[row] = {};
      data[row][headers[col]] = value;
    }
    //drop those first two rows which are empty
    data.shift();
    data.shift();
  });

  return data;
}

function writeXlsxFile(data, sheetName, path) {
  var ws = XLSX.utils.json_to_sheet(data);

  /* add to workbook */
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, sheetName);

  /* generate an XLSX file */
  XLSX.writeFile(wb, path);
}

let b = readXlsxFile('./sample/Masterfile.xlsx');

console.log(b);
