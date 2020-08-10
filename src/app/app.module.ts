import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LearningResourceComponent } from './components/learning-resource/learning-resource.component';
import { AboutComponent } from './components/about/about.component';
import { ResourceSetAreaComponent } from './components/resource-set-area/resource-set-area.component';
import { ResourceCardComponent } from './components/resource-card/resource-card.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'learning-resource', component: LearningResourceComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LearningResourceComponent,
    AboutComponent,
    ResourceSetAreaComponent,
    ResourceCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
