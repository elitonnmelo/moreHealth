//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import * as papa from 'papaparse';
import * as jsPDF from 'jspdf'
import 'jspdf-autotable';



@Injectable()
export class ExportProvider {
  public static EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  public static EXCEL_EXTENSION = '.xlsx';

  public static CSV_TYPE = 'text/plain';
  public static CSV_EXTENSION = '.csv';
  
  public static PDF_TYPE = 'application/pdf';
  public static PDF_EXTENSION = '.pdf';

  constructor() {
    console.log('Hello ExportProvider Provider');
  }
  gerarCSV(jsonArr: any[], nomeArquivo: string) {
    const csv = papa.unparse(jsonArr);
    this.saveAsFile(csv, ExportProvider.CSV_TYPE, nomeArquivo + ExportProvider.CSV_EXTENSION);

  }
  gerarExcel(jsonArr: any[], nomeArquivo: string) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonArr);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsFile(excelBuffer, ExportProvider.EXCEL_TYPE, nomeArquivo + ExportProvider.EXCEL_EXTENSION);

  }


  gerarPDF(jsonArr: any[], nomeArquivo: string) {

    const headerText = `Clinicas`;

    let col = [];
    let rows = [];

    Object.keys(jsonArr[0]).forEach(key => {
      col.push(key);
    });

    for (let i = 0; i < jsonArr.length; i++) {
      const element = jsonArr[i];
      
      let tempArr = [];
      

      Object.keys(element).forEach(key => {
        const value = element[key];
        tempArr.push(value);
      });

      rows.push(tempArr);
    }

    let doc = new jsPDF('landscape', 'pt', 'a4');
    doc.setFontSize(8);

    // HEADER
    doc.setFontSize(16);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
    doc.text(headerText, doc.internal.pageSize.getWidth()/2, 45, { align: "center" });// set your margins


    // CONTEUDO
    doc.autoTable(col, rows, {
      margin: {top: 65}
    });

    // FOOTER - PAGE NUMBERS
    const pages = doc.internal.getNumberOfPages();
    const pageWidth = doc.internal.pageSize.width;  //Optional
    const pageHeight = doc.internal.pageSize.height;  //Optional
    doc.setFontSize(10);  //Optional

    for (let j = 1; j < pages + 1 ; j++) {
      let horizontalPos = pageWidth / 2;  //Can be fixed number
      let verticalPos = pageHeight - 10;  //Can be fixed number
      doc.setPage(j);
      doc.text(`${j} - ${pages}`, horizontalPos, verticalPos, {align: 'center'});
    }

    // GENERATE PDF - BLOB FILE
    const pdfBuffer = doc.output('blob');
    this.saveAsFile(pdfBuffer, ExportProvider.PDF_TYPE, nomeArquivo + ExportProvider.PDF_EXTENSION);
  }


  private saveAsFile(buffer: any, _type, fileName: string) {
    const data: Blob = new Blob([buffer], {type: _type});
    FileSaver.saveAs(data, fileName);
  }

}
