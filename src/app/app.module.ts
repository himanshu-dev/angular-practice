import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './component/root/app.component';
import {ServerComponent} from './component/server/server.component';
import {ServersComponent} from './component/servers/servers.component';
import {AddServerComponent} from './component/add-server/add-server.component';
import { BasicHighlightDirective } from './directive/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight.directive';
import { NgIfNotDirective } from './directive/ng-if-not.directive';
import { NumberPlayComponent } from './component/number-play/number-play.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AddServerComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    NgIfNotDirective,
    NumberPlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
