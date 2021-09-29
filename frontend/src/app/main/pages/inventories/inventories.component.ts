import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Inventory} from '../../../models/inventory';
import {ApiService} from '../../../../@fuse/api/api.service';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {Subject} from "rxjs";

@Component({
    selector: 'app-inventories',
    templateUrl: './inventories.component.html',
    styleUrls: ['./inventories.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class InventoriesComponent implements OnInit {
    dataSource: Inventory[] = [];
    inventories: Inventory[] = [];
    displayedColumns = ['brand', 'cost', 'type', 'total_order_price', 'platform_sold_on', 'sold', 'sold_date', 'created_date', 'button'];
    searchInput: FormControl;

    private _unsubscribeAll: Subject<any>;


    constructor(
        private apiService: ApiService,
        private router: Router
    ) {
        this.searchInput = new FormControl('');
    }

    ngOnInit(): void {
        this.getInventories();
        this.searchInput.valueChanges
            .pipe(
                debounceTime(300),
                distinctUntilChanged()
            )
            .subscribe(searchText => {
                const search = searchText.toLowerCase();
                this.dataSource = this.inventories.filter(i => {
                   if (i.brand.toLowerCase().indexOf(search) > -1) {
                       return true;
                   }
                   if (i.type.toLowerCase().indexOf(search) > -1) {
                       return true;
                   }
                });
            });
    }

    getInventories(): void {
        this.apiService.inventory.get().promise().then(resp => {
            this.dataSource = resp;
            this.inventories = Object.assign([], this.dataSource);
        });
    }

    editInventory(inventory): void {
        this.router.navigate([`/pages/inventories/edit/${inventory.id}`]);
    }

    deleteInventory(inventory): void {
        this.apiService.inventory.delete(inventory.id).promise().then(resp => {
            this.dataSource = this.dataSource.filter(d => d.id !== inventory.id);
        });
    }
}
