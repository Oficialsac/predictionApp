/* eslint-disable */
import { OnInit, Component } from '@angular/core';
import { StatisticsService } from '../../../../core/services/statistics/statisticsService.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  data_to_chart: any = [];
  data: any = []
  constructor(private http: StatisticsService) {}

  ngOnInit(): void {
    this.http.getStatistics().subscribe((response) => {
      Object.keys(response).forEach((key) => {
        this.data_to_chart.push(response[key]);
      });

      console.log(this.data_to_chart);
    });
  }

  demo(): void {
    console.log(this.data_to_chart);
  }
}
