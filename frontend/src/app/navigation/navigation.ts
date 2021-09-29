import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : '',
        title    : '',
        translate: '',
        type     : 'group',
        children : [
            // {
            //     id       : 'dashboard',
            //     title    : 'Dashboard',
            //     translate: 'NAV.DASHBOARD.TITLE',
            //     type     : 'item',
            //     icon     : 'email',
            //     url      : '/pages/dashboard',
            //     badge    : {
            //         title    : '25',
            //         translate: 'NAV.DASHBOARD.BADGE',
            //         bg       : '#F44336',
            //         fg       : '#FFFFFF'
            //     }
            // },
            {
                id: 'inventories',
                title: 'Inventories',
                translate: 'NAV.INVENTORY.TITLE',
                type: 'item',
                icon: 'web_asset',
                url: '/pages/inventories',
            },
        ]
    }
];
