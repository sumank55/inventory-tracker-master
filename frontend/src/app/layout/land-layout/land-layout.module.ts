import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '../../../@fuse/shared.module';
import { FuseSidebarModule } from '../../../@fuse/components';
import { ContentModule } from '../components/content/content.module';
import { FooterModule } from '../components/footer/footer.module';
import { NavbarModule } from '../components/navbar/navbar.module';
import { QuickPanelModule } from '../components/quick-panel/quick-panel.module';
import { ToolbarModule } from '../components/toolbar/toolbar.module';
import { A11yModule } from '@angular/cdk/a11y';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {LandLayoutComponent} from './land-layout.component';

@NgModule({
    declarations: [
        LandLayoutComponent,
    ],
    imports: [
        // LockModule,
        CommonModule,
        RouterModule,
        
        FuseSharedModule,
        FuseSidebarModule,
        
        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule,
        A11yModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule,
    ],
    exports     : [
        LandLayoutComponent
    ]
})

export class LandLayoutModule { }
