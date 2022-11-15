declare var $: any;

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ENotificationType } from 'app/core/enums/notification-type.enum';
import { IAuthenticateBody } from 'app/core/interfaces/authenticate-body-interface';
import { ILoginResult } from 'app/core/interfaces/login-result';

import { INotificationInfo } from 'app/core/interfaces/notification-info.interface';
import { AuthService } from 'app/core/services/auth.service';
import { UserService } from 'app/core/services/user.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public today: Date = new Date();
  public formGroup: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _userService: UserService,
    private readonly _router: Router
  ) {
    this.formGroup = this._formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() { }

  public login() {
    this.formGroup.markAllAsTouched();

    if (this.formGroup.valid) {
        const parametros: IAuthenticateBody = this.formGroup.value;
        this._authService.login(parametros).subscribe({
          next: (res: ILoginResult) => {
            this._userService.setdataSession(res);
            this._router.navigate(['/']);
          },
          error:  (err: any) => {
            this.showNotification({
              type: ENotificationType.DANGER,
              align: 'right',
              from: 'top',
              icon: "pe-7s-close-circle",
              message: err.error && err.error.error ? err.error.error : "Autenticação inválida"
            });
          }
        });
    } else {
      this.showNotification({
        type: ENotificationType.DANGER,
        align: 'right',
        from: 'top',
        icon: "pe-7s-close-circle",
        message: "Formulário inválido!"
      });
    }
  }

  public showNotification(info: INotificationInfo) {
    $.notify({
      icon: info.icon,
      message: info.message
    }, {
      type: info.type,
      timer: 1000,
      placement: {
        from: info.from,
        align: info.align
      }
    });
  }

  public checkErrorEmail(): boolean {
    if (this.formGroup.get('email').touched) {
      return this.formGroup.get('email').errors?.required ||
        this.formGroup.get('email').errors?.email ? true : false;
    }

    return false;
  }

  public checkErrorPassword(): boolean {
    if (this.formGroup.get('password').touched) {
      return this.formGroup.get('password').errors?.required ||
        this.formGroup.get('password').errors?.minlength ? true : false;
    }

    return false;
  }

}
