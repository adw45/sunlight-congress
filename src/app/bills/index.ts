import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {BillsComponent} from './bills';
import {BillComponent} from './bill';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    BillsComponent,
    BillComponent
  ],
  exports: [
    BillsComponent
  ]
})
export class BillsModule {}
