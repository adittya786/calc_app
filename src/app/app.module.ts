import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
declarations: [AppComponent, CalculatorComponent],
imports: [
BrowserModule,
MatCardModule,
NoopAnimationsModule,
MatButtonModule,
MatIconModule,
MatToolbarModule,
],
providers: [],
bootstrap: [AppComponent],
})
export class AppModule {}