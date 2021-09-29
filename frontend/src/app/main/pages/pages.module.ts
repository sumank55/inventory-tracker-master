import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent} from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { FuseSharedModule } from '@fuse/shared.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InventoriesComponent } from './inventories/inventories.component';
import {MatTableModule, MatTextColumn} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { InventoryComponent } from './inventories/inventory/inventory.component';
import {MatMenuModule} from "@angular/material/menu";


const routes: Routes = [
    {
        path        : 'dashboard',
        component: DashboardComponent
    },
    {
        path        : 'inventories',
        component: InventoriesComponent
    },
    {
        path        : 'inventories/new',
        component: InventoryComponent
    },
    {
        path        : 'inventories/edit/:id',
        component: InventoryComponent
    },
    {
        path        : 'profile',
        component: ProfileComponent
    },
    {
        path        : '**',
        redirectTo: 'dashboard'
    }
];

@NgModule({
  declarations: [
      DashboardComponent,
      ProfileComponent,
      ChangePasswordComponent,
      InventoriesComponent,
      InventoryComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatSnackBarModule,
        MatCheckboxModule,
        MatTableModule,
        MatMenuModule,
        FuseSharedModule,
        CommonModule,
        ColorPickerModule,
    ]
})
export class PagesModule { }
