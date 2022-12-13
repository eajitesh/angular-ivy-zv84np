import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KeywordsProcessorComponent } from './keywords-processor/keywords-processor.component';

import { TagCloudComponent } from 'angular-tag-cloud-module';
import { KeywordsWordCloudComponent } from './keywords-word-cloud/keywords-word-cloud.component';
import { AppRoutingModule } from './app-routing.module';
import { AugmentedKeywordsComponent } from './augmented-keywords/augmented-keywords.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    TagCloudComponent,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    KeywordsProcessorComponent,
    KeywordsWordCloudComponent,
    AugmentedKeywordsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
