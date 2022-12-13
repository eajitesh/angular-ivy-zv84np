import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AugmentedKeywordsComponent } from './augmented-keywords/augmented-keywords.component';
import { KeywordsProcessorComponent } from './keywords-processor/keywords-processor.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'aug-keywords/:id/:keyword', component: AugmentedKeywordsComponent },
  { path: 'home', component: KeywordsProcessorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
