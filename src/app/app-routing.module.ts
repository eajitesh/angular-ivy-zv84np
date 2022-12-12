import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AugmentedKeywordsComponent } from './augmented-keywords/augmented-keywords.component';

const routes: Routes = [
  { path: 'aug-keywords', component: AugmentedKeywordsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
