/* eslint-disable */
import { Component } from '@angular/core';
import { TrainingService } from '../../../../core/services/training/training.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent {
  // Propiedades
  selectedFiles?: FileList;
  fileInfos?: Observable<any>;
  uploadsFiles: any = [];
  json_content: any = {};
  columns_to_table: any = [];
  rows_to_table: any = [];
  fileName: string = '';
  trainingSuccesfully: boolean = false;
  dataToSee: any = {};
  successMessage: string = 'Entrenamiento finalizado';
  selectedModel: string = '';

  // Constructor
  constructor(private http: TrainingService) {}

  // Método para seleccionar archivos
  selectFiles(event: any): void {
    this.selectedFiles = event.target.files;
  }

  // Método para visualizar datos previos cargados
  seePrevious(jsonData: any) {
    this.columns_to_table = Object.keys(jsonData);

    this.columns_to_table.forEach((column: any) => {
      this.rows_to_table.push(Object.values(jsonData[column]));
    });
  }

  // Método para cargar datos
  loadData(event: any) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.uploadFile(i, this.selectedFiles[i]);
      }
    }
  }

  onModelChange(event: any): any{
    this.selectedModel = event.target.value;
  }

  // Método para cargar un archivo
  uploadFile(idx: Number, file: File): void {
    if (file) {
      if (
        file.type ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        file.type === 'text/csv'
      ) {
        Swal.showLoading(Swal.getDenyButton());
        const body: FormData = new FormData();
        body.append('file', file);
        this.http.sendPost(body).subscribe((res: any) => {
          const jsonData = JSON.parse(res.data);
          this.json_content = jsonData;
          this.seePrevious(this.json_content);
          localStorage.setItem(
            'data_set_'.concat(idx.toString()),
            JSON.stringify(this.json_content)
          );
          Swal.fire({
            icon: 'success',
            title: 'Archivos importados exitosamente',
          });
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Archivo no soportado',
          text: 'Ingrese nuevamente un archivo xlsx o csv',
        });
      }
    }
  }

  // Método para entrenar datos
  trainingData() {
    console.log(this.selectedModel);
    if(this.selectedModel !== ''){
      Swal.showLoading(Swal.getDenyButton());
      this.http.trainingData().subscribe((res: any) => {
        
        Swal.fire({
          icon: 'success',
          title: 'Entrenamiento finalizado',
        });
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'No hay ningun modelo de entrenamiento',
        text: 'Seleccione el modelo de entrenamiento que desea utilizar para los datos',
      });
    }
    
  }

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    if (localStorage.getItem('dataSet') !== null) {
      this.dataToSee = localStorage.getItem('dataSet');
      // this.seePrevious(JSON.parse(this.dataToSee));
    }
  }
}
