import {Injectable} from '@angular/core';
import * as _ from 'lodash';

import {RequestService} from './request.service';
import {AuthData} from '../../app/models/auth-data';

@Injectable()
export class ApiService {
    authToken = {
        post: (auth: AuthData) => this.request
            .post()
            .url('auth/jwt/create/')
            .payload(auth),
    };
    signup = {
        post: (auth: AuthData) => this.request
            .post()
            .url('auth/users/')
            .payload(auth),
    };
    me = {
        get: () => this.request
            .get()
            .url('auth/users/me/')
            .auth(),
        update: (userObj) => this.request
            .put()
            .url('auth/users/me/update')
            .payload(userObj)
            .auth(),
        resetPwd: (pwdObj) => this.request
            .post()
            .url('auth/password')
            .payload(pwdObj)
            .auth(),
        sendMailForResetPwd: (pwdObj) => this.request
            .post()
            .url('auth/users/reset_password/')
            .payload(pwdObj),
        forgotPwd: (pwdObj) => this.request
            .post()
            .url('auth/users/reset_password_confirm/')
            .payload(pwdObj),
        logout: () => this.request
            .post()
            .url('auth/password')
            .auth(),
    };
    userUpdate = {
        get: () => this.request
            .get()
            .url('auth/me')
            .auth()
    };
    inventory = {
        get: () => this.request
            .get()
            .url('inventory/entry/')
            .auth(),
        getOne: (id) => this.request
            .get()
            .url(`inventory/entry/${id}`)
            .auth(),
        update: (obj, id) => this.request
            .put()
            .url(`inventory/entry/${id}/`)
            .payload(obj)
            .auth(),
        create: (obj) => this.request
            .post()
            .url('inventory/entry/')
            .payload(obj)
            .auth(),
        delete: (id) => this.request
            .delete()
            .url(`inventory/entry/${id}/`)
            .auth(),
    };

    constructor(private request: RequestService) {
    }

}
