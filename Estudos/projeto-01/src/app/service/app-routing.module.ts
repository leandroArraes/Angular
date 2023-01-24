import { NgModule } from "@angular/core";
import { RouterModule ,Routes} from "@angular/router";
import { PrimeiroComponenteComponent } from "../components/primeiro-componente/primeiro-componente.component";
import { ListRenderComponent } from "../components/list-render/list-render.component";
import { EventosComponent } from "../components/eventos/eventos.component";
import { EmitterComponent } from "../components/emitter/emitter.component";
import { IfRenderComponent } from "../components/if-render/if-render.component";
import { ItemDetailComponent } from "../components/item-detail/item-detail.component";
import { HomeComponent } from "../components/home/home.component";

const routes: Routes = [
    {path:'primeiro',component:PrimeiroComponenteComponent },
    {path:'list',component:ListRenderComponent},
    {path:'eventos',component:EventosComponent},
    {path:'emmiter',component:EmitterComponent},
    {path:'ifrender',component:IfRenderComponent},
    {path:'list/:id',component:ItemDetailComponent},
    {path:'home',component:HomeComponent}
]

@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}    