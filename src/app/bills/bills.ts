import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

export class Bill {
  constructor(
    public official_title: string,
    public bill_id: string,
    public chamber: string,
    public introduced_on: string
  ) {}
}

@Component({
  selector: 'sunlight-bills',
  template: require('./bills.html')
})

export class BillsComponent {
  public bills: Bill[];
  public bill: Bill;

  constructor(public http: Http) {
    this.getBills().subscribe(result => this.bills = result);
  }

  getBills(): Observable<Bill[]> {
    return this.http
      .get('app/bills/bills.json')
      .map(response => response.json());
  }
}
