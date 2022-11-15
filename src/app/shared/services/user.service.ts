
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { ILoginResult } from '../interfaces/login-result';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    protected static instance: UserService;

    public change: Subject<any> = new Subject();

    constructor() {
        UserService.instance = this;
    }

    private static dadosSession: ILoginResult | any;

    public static observer: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    public static get(): UserService {
        return UserService.instance;
    }

    isLogado() {
        if (!UserService.dadosSession) {
            this.loadDadosSession();
        }
        return UserService.dadosSession && !!UserService.dadosSession.token
            && (new Date(UserService.dadosSession.expiresIn) > new Date()) && !!UserService.dadosSession.usuario;
    }

    setDadosSession(dadosSession: ILoginResult) {
        UserService.dadosSession = dadosSession;
        sessionStorage.setItem('session-information', JSON.stringify(UserService.dadosSession));
        UserService.observer.next(UserService.dadosSession);
    }

    private loadDadosSession() {
        const dados = sessionStorage.getItem('session-information');
        if (dados) {
            UserService.dadosSession = JSON.parse(dados);
        }
    }

    getDadosSession(): ILoginResult | any {
        if (this.isLogado()) {
            return UserService.dadosSession;
        } else {
            this.logout();
        }
    }

    logout() {
        sessionStorage.removeItem('session-information');
        UserService.dadosSession = null;
    }

}
