import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { HttpClientModule} from '@angular/common/http';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { DadosComponent } from './components/primeiro-componente/dados/dados.component';
import { FormacaoComponent } from './components/formacao/formacao.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HttpComponent } from './components/http/http.component';




@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindingComponent,
    ItemDetailComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    DadosComponent,
    FormacaoComponent,
    ContatoComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
