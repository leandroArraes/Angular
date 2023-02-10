import { NgModule } from "@angular/core";


import { RouterModule ,Routes} from "@angular/router";
import { PrimeiroComponenteComponent } from "./components/primeiro-componente/primeiro-componente.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { HomeComponent } from "./components/home/home.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { FormacaoComponent } from "./components/formacao/formacao.component";
import { ContatoComponent } from "./components/contato/contato.component";
import { DirectivesComponent } from "./components/directives/directives.component"; 
import { PipesComponent } from "./components/pipes/pipes.component";
import { HttpComponent } from "./components/http/http.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";


const routes: Routes = [
    {path:'primeiro',component:PrimeiroComponenteComponent },
    {path:'diretivas',component:DirectivesComponent},
    {path:'list',component:ListRenderComponent},
    {path:'pipe',component:PipesComponent},
    {path:'eventos',component:EventosComponent},
    {path:'emmiter',component:EmitterComponent},
    {path:'ifrender',component:IfRenderComponent},
    {path:'list/:id',component:ItemDetailComponent},
    {path:'',component:HomeComponent},
    {path:'parent',component:ParentDataComponent},
    {path:'formacao',component:FormacaoComponent},
    {path:'contato',component:ContatoComponent},
    {path:'rhttp',component:HttpComponent},
    {path:'twoway',component:TwoWayBindingComponent},


]

@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}    