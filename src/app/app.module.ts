import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectComponent } from './home/connect/connect.component';
import { InscriptionComponent } from './home/inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { InfoUsersComponent } from './home-user/home/info-users/info-users.component';
import { InfoEventComponent } from './home-user/home/info-event/info-event.component';
import { ActuComponent } from './home-user/home/actu/actu.component';
import { HomeNewUserComponent } from './home-new-user/home-new-user.component';
import { UserPageComponent } from './home-user/user/user-page/user-page.component';
import { FormUserComponent } from './home-user/user/form-user/form-user.component';
import { UserSearchComponent } from './home-user/search/user-search/user-search.component';
import { EventSearchComponent } from './home-user/search/event-search/event-search.component';
import { SearchComponent } from './home-user/search/search.component';
import { ConnectService } from './services/connect.service';
import { HeaderComponent } from './home-user/header/header.component';
import { FormNewUserComponent } from './home-new-user/form-new-user/form-new-user.component';
import { UserService } from './services/user.service';

// Création des routes de l'app
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeUserComponent},
  {path: 'new', component: HomeNewUserComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'search', component : SearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    InscriptionComponent,
    HomeComponent,
    HomeUserComponent,
    InfoUsersComponent,
    InfoEventComponent,
    ActuComponent,
    HomeNewUserComponent,
    UserPageComponent,
    FormUserComponent,
    UserSearchComponent,
    EventSearchComponent,
    SearchComponent,
    HeaderComponent,
    FormNewUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes), // importation des routes utilisé
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ConnectService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
