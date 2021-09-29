import { NgModule } from '@angular/core';

import { VerticalLayout1Module } from 'app/layout/vertical/layout-1/layout-1.module';
import { VerticalLayout2Module } from 'app/layout/vertical/layout-2/layout-2.module';
import { VerticalLayout3Module } from 'app/layout/vertical/layout-3/layout-3.module';

import { HorizontalLayout1Module } from 'app/layout/horizontal/layout-1/layout-1.module';
import { AuthLayoutModule } from './auth-layout/auth-layout.module';
import {LandLayoutModule} from './land-layout/land-layout.module';

@NgModule({
    imports: [
        AuthLayoutModule,
        VerticalLayout1Module,
        VerticalLayout2Module,
        VerticalLayout3Module,
        HorizontalLayout1Module,
        LandLayoutModule,
    ],
    exports: [
        AuthLayoutModule,
        VerticalLayout1Module,
        VerticalLayout2Module,
        VerticalLayout3Module,
        LandLayoutModule,
        HorizontalLayout1Module
    ],
    declarations: [],

})
export class LayoutModule
{
}
