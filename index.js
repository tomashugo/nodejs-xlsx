const XLSX = require('xlsx');

const workbook = XLSX.readFileSync("Grandes Bilheterias.xlsx", { cellFormula: false, cellHTML: false });
const sheetNames = workbook.SheetNames;

//console.log(sheetNames);

const planilha = sheetNames[0];
const rows = XLSX.utils.sheet_to_json(workbook.Sheets[planilha], { defval: ""});

//console.log(rows);

//rows.forEach(row => {
//    let imprimir = `${row['Filme']} foi dirigido por ${row['Diretor']} em ${row['Ano']}`;
//    console.log(imprimir)
//});

rows.forEach(row => {
    const colunas = Object.keys(row);
    let imprimir = `${row[colunas[0]]} foi dirigido por ${row[colunas[1]]} em ${row[colunas[2]]}`;
    console.log(imprimir)
});

