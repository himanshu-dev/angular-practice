import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ServersComponent} from './component/servers/servers.component';
import {NumberPlayComponent} from './component/number-play/number-play.component';
import {ServerComponent} from './component/server/server.component';
import {EditServerComponent} from './component/edit-server/edit-server.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {AuthGuard} from './service/auth.guard';
import {MyFormComponent} from './component/my-form/my-form.component';
import {TodoComponent} from './component/todo/todo.component';

const routes: Routes = [
  {path: '', component: ServersComponent},
  {path: 'servers', component: ServersComponent},
  {path: 'server/:name/:status', component: ServerComponent},
  {path: 'servers/:id/edit', component: EditServerComponent},
  {
    path: 'number-player',
    canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component: NumberPlayComponent
  },
  {path: 'my-form', component: MyFormComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
