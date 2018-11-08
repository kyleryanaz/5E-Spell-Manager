import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';

// Services

//Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpellComponent } from './components/spell/spell.component';
import { SpellFilterPipe } from './pipes/spellFilter/spell-filter.pipe';
import { SpellsComponent } from './components/spells/spells.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { MaterialComponent } from './components/material/material.component';
import { MaterialFilterPipe } from './pipes/materialFilter/material-filter.pipe';

const appRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    data: { title: "Dashboard | Spell Manager" }
  },
  {
    path: "materials",
    component: MaterialsComponent,
    data: { title: "Materials | Spell Manager" }
  },
  {
    path: "material/:id",
    component: MaterialComponent,
    data: { title: "Material | Spell Manager" }
  },
  {
    path: "spells",
    component: SpellsComponent,
    data: { title: "Spells | Spell Manager" }
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
    SpellComponent,
    SpellFilterPipe,
    SpellsComponent,
    MaterialsComponent,
    MaterialComponent,
    MaterialFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
