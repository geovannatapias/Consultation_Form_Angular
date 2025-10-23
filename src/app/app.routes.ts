import { Routes } from '@angular/router';
import{ CadastroComponent } from './cadastro/cadastro.component'
import { ConsultaComponent } from './consulta/consulta.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'cadastro', component: CadastroComponent},
    {path: 'consulta', component: ConsultaComponent},
];

