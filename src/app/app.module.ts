import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgwWowModule } from 'ngx-wow';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxScrollspyModule } from '@uniprank/ngx-scrollspy';
import { ParallaxModule } from 'ngx-parallax';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { AppComponent } from './app.component';
import { EASE_IN_OUT_EXPO } from './easing-logic';
import { EducationComponent } from './education/education.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ExperiencesComponent,
    FooterComponent,
    HeaderComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbCollapseModule,
    NgbTooltipModule,
    NgwWowModule,
    NgxPageScrollCoreModule.forRoot({ scrollOffset: 50, easingLogic: EASE_IN_OUT_EXPO }),
    NgxPageScrollModule,
    NgxScrollspyModule.forRoot(),
    ParallaxModule,
    TagCloudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
