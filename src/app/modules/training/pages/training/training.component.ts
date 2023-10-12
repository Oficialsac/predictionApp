/* eslint-disable */
import { Component } from '@angular/core';
import { TrainingService } from '../../../../core/services/training/training.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {
  json_content: any = {};
  columns_to_table: any = [];
  rows_to_table: any = [];
  fileName: string = '';
  trainingSuccesfully: boolean = false;
  dataToSee: any = {};
  successMessage: string = "Entrenamiento finalizado";

  constructor(private http: TrainingService ) {}

  seePrevious(jsonData: any){

    this.columns_to_table = Object.keys(jsonData)

    this.columns_to_table.forEach((column: any) => {
      this.rows_to_table.push(Object.values(jsonData[column]))
    });
  }

  loadData(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      if (
        file.type ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        file.type === 'text/csv'
      ) {
        const body: FormData = new FormData();
        body.append('file', file);
        this.http.sendPost(body).subscribe((res: any) => {
          const jsonData = JSON.parse(res.data)         
          this.json_content = jsonData
          this.seePrevious(this.json_content)
          localStorage.setItem('dataSet', JSON.stringify(this.json_content));
          Swal.fire({
            icon: "success", 
            title: "Archivo importado exitosamente", 
          })
        });
      } else {
        Swal.fire({
          icon: "error", 
          title: "Archivo no soportado", 
          text: "Ingrese nuevamente un archivo xlsx o csv"
        })
      }
    }
  }


  trainingData(){
    Swal.fire({
      icon: "success", 
      title: "Entrenamiento finalizado"
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem('dataSet') !== null){
      this.dataToSee = localStorage.getItem('dataSet');
      this.seePrevious(JSON.parse(this.dataToSee));
    }
  }
  
}
