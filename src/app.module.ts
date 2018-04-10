import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            routes,
            { enableTracing: true }
        )
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
