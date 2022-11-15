declare var $: any;

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ENotificationType } from 'app/core/enums/notification-type.enum';

import { INotificationInfo } from 'app/core/interfaces/notification-info.interface';

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
      //   const parametros: Autenticar = this.formGroup.value;
      //   this._autenticacaoService.postAuthenticate(parametros).subscribe((res: any) => {
      //     this._usuarioLogadoService.setDadosSession(res);
      //     this._router.navigate(['/']);
      //   }, (err: any) => {
      //     this._toastService.error(err.error && err.error.message ? err.error.message : 'Dados inválidos!',
      //       err.error && err.error.error ? err.error.error : "Autenticação inválida", {
      //       timeOut: 3000,
      //     });
      //   });
      // } else {
      //   Utilitarios.validateAllFormFields(this.formGroup);
      //   this._toastService.error("Por favor preencha corretamente as informações", 'Formulário inválido!', {
      //     timeOut: 3000
      //   });
      
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
