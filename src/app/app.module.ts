import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {RootComponent} from './component/root/root.component';
import {ServerComponent} from './component/server/server.component';
import {ServersComponent} from './component/servers/servers.component';
import {AddServerComponent} from './component/add-server/add-server.component';
import {BasicHighlightDirective} from './directive/basic-highlight.directive';
import {BetterHighlightDirective} from './directive/better-highlight.directive';
import {NgIfNotDirective} from './directive/ng-if-not.directive';
import {NumberPlayComponent} from './component/number-play/number-play.component';
import {LoggingService} from './service/logging.service';
import {CommonService} from './service/common.service';
import {EditServerComponent} from './component/edit-server/edit-server.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {AuthService} from './service/auth.service';
import {AuthGuard} from './service/auth.guard';
import {MyFormComponent} from './component/my-form/my-form.component';
import {TodoComponent} from './component/todo/todo.component';
import { ShortenPipe } from './pipe/shorten.pipe';
import { FilterServersPipe } from './pipe/filter-servers.pipe';

@NgModule({
  declarations: [
    RootComponent,
    ServerComponent,
    ServersComponent,
    AddServerComponent,
    NumberPlayComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    NgIfNotDirective,
    EditServerComponent,
    NotFoundComponent,
    TodoComponent,
    MyFormComponent,
    ShortenPipe,
    FilterServersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoggingService, CommonService, AuthService, AuthGuard],
  bootstrap: [RootComponent]
})
export class AppModule {
}
