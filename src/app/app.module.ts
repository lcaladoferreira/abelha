import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { GetUserMediaComponent } from './get-user-media/get-user-media.component';

const routes: Routes = [
  { path: '', redirectTo: 'get-user-media', pathMatch: 'full' },
  { path: 'get-user-media', component: GetUserMediaComponent },
];

@NgModule({
  declarations: [AppComponent, GetUserMediaComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
