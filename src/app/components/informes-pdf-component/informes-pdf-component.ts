import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import { autoTable } from 'jspdf-autotable';

@Component({
  selector: 'app-informes-pdf-component',
  standalone: false,
  styleUrl: './informes-pdf-component.css',
  templateUrl: './informes-pdf-component.html',
})
export class InformesPdfComponent {
  generarDocumento(): void{
    let documento = new jsPDF();
    documento.setFontSize(20);
    documento.text('Informe de ejemplo', 20, 20);
    documento.setFontSize(12);
    documento.text('Este es un informe generado con jsPDF.', 20, 30);

    const headers = [["Nombre", "Email", "Edad"]];
    const data = [
      ["Juan Pérez", "juan@example.com", "30"],
      ["María García", "maria@example.com", "25"],
      ["Carlos López", "carlos@example.com", "35"]
    ];
    autoTable(documento, {
      head: headers,
      body: data,
      startY: 40,
    });
        documento.save('informe.pdf');
  }
}
