const fs = require('fs');
const csv = require('csv-parser');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

function readCsvFile() {
    let output = [];
    fs.createReadStream('./sample/sample.csv')
        .pipe(csv())
        .on('data', function (data) {
            try {
                output.push(data);

                // do code here
            } catch (err) {
                //error handler
            }
        })
        .on('end', function () {
            console.log(output);
        });
}


function writeCsvFile() {
    const csvWriter = createCsvWriter({
        path: './output/sample.csv',
        header: [{
                id: 'name',
                title: 'name'
            },
            {
                id: 'grade',
                title: 'grade'
            },
            {
                id: 'city',
                title: 'city'
            },
            {
                id: 'cityCode',
                title: 'cityCode'
            },
            {
                id: 'address',
                title: 'address'
            },
            {
                id: 'district',
                title: 'district'
            },
            {
                id: 'contact',
                title: 'contact'
            },
            {
                id: 'position',
                title: 'position'
            },
            {
                id: 'phone',
                title: 'phone'
            },
            {
                id: 'mobile',
                title: 'mobile'
            },
            {
                id: 'email1',
                title: 'email1'
            },
            {
                id: 'email2',
                title: 'email2'
            },
        ]
    });
    
    let output = [];
    fs.createReadStream('./sample/sample.csv')
        .pipe(csv())
        .on('data', function (o) {
            try {
                let school = {
                    name: o['TÊN TRƯỜNG'].trim(),
                    grade: o['Cấp'].replace('Cấp', '').replace('-', ',').trim(),
                    city: 'Hà Nội',
                    cityCode: 'ha-noi',
                    address: o['ĐỊA CHỈ'].trim(),
                    district: o['QUẬN'].trim(),
                    contact: o['NGƯỜI LIÊN HỆ'].replace(/\s+/g, " ").trim(),
                    position: o['VỊ TRÍ'].replace(/\s+/g, " ").trim(),
                    phone: o['PHONE'].replace(/\s+/g, " ").trim(),
                    mobile: o['MOBILE'].trim(),
                    email1: o['EMAIL 1'].trim(),
                    email2: o['EMAIL 2'].trim()
                };
    
                output.push(school);
    
            } catch (err) {
            }
        })
        .on('end', function () {
            csvWriter
                .writeRecords(output)
                .then(() => console.log('The CSV file was written successfully'));
        });
}

writeCsvFile();