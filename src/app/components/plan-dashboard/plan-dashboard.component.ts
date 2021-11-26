import { query, transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { fadeIn } from '../../app-animations';

@Component({
  selector: 'plan-dashboard',
  templateUrl: './plan-dashboard.component.html',
  styleUrls: [ './plan-dashboard.component.scss' ],
  animations: [ trigger('animate', [
    transition(':enter',
      query('.field',
        useAnimation(fadeIn))) ]) ]
})
export class PlanDashboardComponent {

  form: FormGroup;

  constructor(private router: Router) {
    this.form = new FormGroup({
      days: new FormControl(7),
      people: new FormControl(2),
    });
  }

  onSubmit(): void {
    this.form.disable();
    this.router.navigate([ 'plan-editor' ], { queryParams: this.form.value });
  }

}
