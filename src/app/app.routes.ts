import { RouterModule, Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Countdown } from './countdown/countdown';
import { Messange } from './message/messange';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'welcome',component: Welcome},
    {path: 'countdown',component: Countdown},
    {path: 'message/byjon', component: Messange},
    {path: '**', redirectTo: ''},
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', redirectTo: '/welcome' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }