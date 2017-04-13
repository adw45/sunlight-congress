import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {BillsModule} from './bills';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {FooterComponent} from './footer';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    BillsModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
