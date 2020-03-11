import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MarketingComponent } from './marketing/marketing.component';
import { TechnicalComponent } from './technical/technical.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { QuizService } from './shared/quiz.service';
import { CreateviewComponent } from './createview/createview.component';
import { OrgcreateComponent } from './orgcreate/orgcreate.component';
import { JobsComponent } from './jobs/jobs.component';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { SignupComponent } from './signup/signup.component';
import { OrcreateComponent } from './orcreate/orcreate.component';
import { JobformComponent } from './jobform/jobform.component';
import { OrviewComponent } from './orview/orview.component';
import { JobviewComponent } from './jobview/jobview.component';
import { CandiviewComponent } from './candiview/candiview.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { UniversityComponent } from './university/university.component';
import { UniversityReadComponent } from './university-read/university-read.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    NavbarComponent,
    MarketingComponent,
    TechnicalComponent,
    RegisterComponent,
    LoginComponent,
    CreateviewComponent,
    OrgcreateComponent,
    JobsComponent,
    Level1Component,
    Level2Component,
    SignupComponent,
    OrcreateComponent,
    JobformComponent,
    OrviewComponent,
    JobviewComponent,
    CandiviewComponent,
    MultiselectComponent,
    UserComponent,
    UniversityComponent,
    UniversityReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
