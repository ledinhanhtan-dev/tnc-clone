import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildPcComponent } from './components/build-pc/build-pc.component';

const routes: Routes = [
  { path: 'xay-dung-cau-hinh-pc', component: BuildPcComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
