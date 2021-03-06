import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaTrapecioComponent } from './area-trapecio/area';
import { AreaCalculatorComponent } from './area-calculator/area-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaTrapecioComponent,
    AreaCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
