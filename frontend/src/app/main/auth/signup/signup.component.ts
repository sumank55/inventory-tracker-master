import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../../@fuse/services/auth.service';
import {AuthGuardService} from '../../../../@fuse/services/auth-guard.service';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    user: any = {};
    submitted: boolean;
    errorMessage = null;
    matcher = new MyErrorStateMatcher();

    constructor(
        private auth: AuthService,
        private authGuard: AuthGuardService,
        private router: Router,
        private _formBuilder: FormBuilder
    ) {
    }

    ngOnInit(): void {
        this.submitted = false;
        this.signupForm = this._formBuilder.group({
            username: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, {validator: this.checkPasswords});
    }

    checkPasswords(group: FormGroup): any {
        const pass = group.get('password').value;
        const confirmPass = group.get('confirmPassword').value;
        return pass === confirmPass ? null : {notSame: true};
    }

    submit(): void {
        this.errorMessage = null;
        this.user = this.signupForm.value;
        this.submitted = true;
        this.auth.signup(this.user)
            .then(() => {
                this.router.navigate(['/auth/login']);
            })
            .catch((e) => {
                if (e.status === 400) {
                    const messages = e.error;
                    // tslint:disable-next-line:forin
                    for (const property in messages) {
                        this.errorMessage = messages[property][0];
                    }
                }
            });
    }

}


export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

        return (invalidCtrl || invalidParent);
    }
}
