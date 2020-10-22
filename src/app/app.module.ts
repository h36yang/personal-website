import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxScrollspyModule } from '@uniprank/ngx-scrollspy';
import { ParallaxModule } from 'ngx-parallax';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationComponent } from './education/education.component';
import { MoreAboutComponent } from './more-about/more-about.component';

import { EASE_IN_OUT_EXPO } from './easing-logic';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    ExperiencesComponent,
    EducationComponent,
    MoreAboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbCollapseModule,
    NgxPageScrollCoreModule.forRoot({ scrollOffset: 80, easingLogic: EASE_IN_OUT_EXPO }),
    NgxPageScrollModule,
    NgxScrollspyModule.forRoot(),
    ParallaxModule,
    FontAwesomeModule,
    TagCloudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
