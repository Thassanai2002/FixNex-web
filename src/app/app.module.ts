import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from './logo/logo.component';
import { GalleriaModule } from 'primeng/galleria';
import { ProfileComponent } from './profile/profile.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { CalfoodComponent } from './calfood/calfood.component';
import { FoodInformationComponent } from './food-information/food-information.component';
import { ProgramInformationComponent } from './program-information/program-information.component';
import { CalInfoComponent } from './cal-info/cal-info.component';
import { SidebarModule } from 'primeng/sidebar';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoComponent,
    ProfileComponent,
    CalfoodComponent,
    FoodInformationComponent,
    ProgramInformationComponent,
    CalInfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule,
    GalleriaModule,
    RadioButtonModule,
    CheckboxModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
