import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { DashJhipsterSharedModule } from 'app/shared/shared.module';
import { DashJhipsterCoreModule } from 'app/core/core.module';
import { DashJhipsterAppRoutingModule } from './app-routing.module';
import { DashJhipsterHomeModule } from './home/home.module';
import { DashJhipsterEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    DashJhipsterSharedModule,
    DashJhipsterCoreModule,
    DashJhipsterHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    DashJhipsterEntityModule,
    DashJhipsterAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class DashJhipsterAppModule {}
