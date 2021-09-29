import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../../@fuse/services/auth.service';
import {AuthGuardService} from '../../../../@fuse/services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    user: any = {};
    submitted: boolean;
    errorMessage = null;
    constructor(
        private auth: AuthService,
        private authGuard: AuthGuardService,
        private  router: Router,
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.submitted = false;
        this.loginForm = this._formBuilder.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
    submit(): void {
        this.errorMessage = null;
        this.user = this.loginForm.value;
        this.submitted = true;
        this.auth.login(this.user)
        .then(() => {
          this.submitted = false;
          const failedUrl = this.authGuard.consumeFailedUrl();
          if (failedUrl === null) {
            this.router.navigate(['/pages/inventories']);
          } else {
            this.router.navigate([failedUrl]);
          }
        })
        .catch((resp) => {
            this.errorMessage = resp.error['non_field_errors'];
            this.submitted = false;
        });
    }

}
