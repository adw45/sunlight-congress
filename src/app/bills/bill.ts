import {Component, Input} from '@angular/core';
import {Bill} from './bills';

@Component({
  selector: 'sunlight-bill',
  template: require('./bill.html')
})
export class BillComponent {
  @Input() public bill: Bill;
}
