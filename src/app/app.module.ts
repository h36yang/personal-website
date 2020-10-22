import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxScrollspyModule } from '@uniprank/ngx-scrollspy';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { ParallaxModule } from 'ngx-parallax';
import { NgwWowModule } from 'ngx-wow';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationComponent } from './education/education.component';

import { EASE_IN_OUT_EXPO } from './easing-logic';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    ExperiencesComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbCollapseModule,
    NgbTooltipModule,
    NgxScrollspyModule.forRoot(),
    NgxPageScrollCoreModule.forRoot({ scrollOffset: 50, easingLogic: EASE_IN_OUT_EXPO }),
    NgxPageScrollModule,
    NgwWowModule,
    ParallaxModule,
    FontAwesomeModule,
    TagCloudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
