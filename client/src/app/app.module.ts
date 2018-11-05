import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

// Services

//Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpellComponent } from './components/spell/spell.component';

const appRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    data: { title: "Dashboard | Spell Manager" }
  },
  {
    path: "spell/:id",
    component: SpellComponent,
    data: { title: "Spell | Spell Manager" }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SpellComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
