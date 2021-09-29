import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Inventory} from '../../../../models/inventory';
import {ApiService} from "../../../../../@fuse/api/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss'],
    encapsulation: ViewEncapsulation.None,

})
export class InventoryComponent implements OnInit {
    inventory: Inventory = null;
    inventoryForm: FormGroup;
    submitted = false;
    id = null;

    constructor(
        private _formBuilder: FormBuilder,
        private apiService: ApiService,
        private router: Router,
        private route: ActivatedRoute,
    ) {
        this.id = this.route.snapshot.params['id'];
    }

    ngOnInit(): void {
        this.inventoryForm = this.createInventoryForm();
        if (this.id) {
            this.getInventory();
        }

    }

    getInventory(): void {
        this.apiService.inventory.getOne(this.id).promise().then(resp => {
            this.inventory = resp;
            this.inventoryForm = this.createInventoryForm();
        });
    }

    /**
     * Create contact form
     * @returns {FormGroup}
     */
    createInventoryForm(): FormGroup {
        return this._formBuilder.group({
            id: [this.inventory ? this.inventory.id : null],
            brand: [this.inventory ? this.inventory.brand : null],
            cost: [this.inventory ? this.inventory.cost : null],
            type: [this.inventory ? this.inventory.type : null],
            description: [this.inventory ? this.inventory.description : null],
            sold: [this.inventory ? this.inventory.sold : false],
            total_order_price: [this.inventory ? this.inventory.total_order_price : null],
            platform_sold_on: [this.inventory ? this.inventory.platform_sold_on : null],
        });
    }

    submit(): void {
        const inventory = this.inventoryForm.value;
        this.submitted = true;
        if (this.inventory) {
            this.apiService.inventory.update(inventory, this.inventory.id).promise().then(resp => {
                this.router.navigate(['/pages/inventories']);
            });
        } else {
            this.apiService.inventory.create(inventory).promise().then(resp => {
                this.router.navigate(['/pages/inventories']);
            });
        }
    }

}
