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
import { OrderComponent } from './order/order.component';
import { SingupComponent } from './singup/singup.component';
import { TrainingComponent } from './training/training.component';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { TrainerComponent } from './trainer/trainer.component';
import { CoursetrainComponent } from './coursetrain/coursetrain.component';

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
    OrderComponent,
    SingupComponent,
    TrainingComponent,
    TrainerComponent,
    CoursetrainComponent,

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
    SidebarModule,
    DropdownModule,
    DividerModule,
    ImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
