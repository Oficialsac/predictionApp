/* eslint-disable */
import { Component } from '@angular/core';
import { TrainingService } from '../../../../core/services/training/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {
  html_content: string = '';
  fileName: string = '';
  trainingSuccesfully: boolean = false;
  successMessage: string = "Entrenamiento finalizado";

  constructor(private http: TrainingService ) {}

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

        this.http.sendPost(body).subscribe((res) => {
          this.html_content = res;
          localStorage.setItem('dataSet', JSON.stringify(res));
        });

        
      } else {
        window.alert('This file is not supported');
      }
    }
  }

  trainingData(){
    this.trainingSuccesfully = true;

    setTimeout(() => {
      this.trainingSuccesfully = false;
    }, 5000)
  }

  ngOnInit(): void {
    if(localStorage.getItem('dataSet') !== null){
      this.html_content = JSON.parse(localStorage.getItem('dataSet')!) || '';
    }
  }
}
