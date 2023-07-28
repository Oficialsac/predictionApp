/* eslint-disable */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Values } from '../../schemas/values/values';
import { ValuesBase } from '../../schemas/values/ValuesBase';
import { Textbox } from '../../../shared/utils/textbox';
import { PredictionsBase } from '../../schemas/prediction/predictions';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

const fakeVariables = [
  { key: 'wheelbase', range: [0, 100] },
  { key: 'carlength', range: [0, 100] },
  { key: 'carwidth', range: [0, 100] },
  { key: 'curbweight', range: [0, 100] },
  { key: 'enginesize', range: [0, 100] },
  { key: 'boreratio', range: [0, 100] },
  { key: 'horsepower', range: [0, 100] },
  { key: 'citympg', range: [0, 100] },
  { key: 'highwaympg', range: [0, 100] },
];

@Injectable({
  providedIn: 'root',
})
export class PredictionService {
  baseUrl: string = 'http://127.0.0.1:8080/api/data';

  private results$ = new BehaviorSubject<any>([]);
  selectedResults$ = this.results$.asObservable();

  constructor(private http: HttpClient) {}

  setResults(results: any) {
    this.results$.next(results);
  }

  predictValue(values: Values): Observable<PredictionsBase> {
    return this.http.post<PredictionsBase>(
      this.baseUrl + '/prediction',
      values,
      httpOptions
    );
  }

  getVariables() {
    const vars: ValuesBase<any>[] = [];
    
    fakeVariables.forEach(v => vars.push(
      new Textbox({
        value: 0,
        key: v.key,
        required: true,
        range: v.range,
      })
    ));
    
    return of(vars.sort((a, b) => a.value - b.value));
  }
}
