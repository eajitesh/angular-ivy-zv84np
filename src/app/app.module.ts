import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KeywordsProcessorComponent } from './keywords-processor/keywords-processor.component';

import { TagCloudComponent } from 'angular-tag-cloud-module';

@NgModule({
  imports: [BrowserModule, FormsModule, TagCloudComponent],
  declarations: [AppComponent, KeywordsProcessorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
