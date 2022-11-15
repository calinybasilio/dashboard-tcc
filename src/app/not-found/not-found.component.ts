import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

  constructor(
    private readonly _router: Router
  ) { }

  public goToHome() {
    this._router.navigate(['/dashboard']);
  }

}
