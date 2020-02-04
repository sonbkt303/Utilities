const fs = require('fs');

function readJsonFile() {
    let dataFile = fs.readFileSync('./sample/sample.json');

    let data = JSON.parse(dataFile);   
    
    return data;

}


function writeJsonFile() {
    let data = {
        name: 'sonbkt',
        address: '1K7'
    }
    fs.writeFileSync('./output/output.json', JSON.stringify(data));

    console.log('Write file successfully');
}

writeJsonFile();