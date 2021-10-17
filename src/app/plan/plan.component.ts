import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../domain/Recipe';

@Component({
  selector: 'plan',
  templateUrl: './plan.component.html',
  styleUrls: [ './plan.component.scss' ]
})
export class PlanComponent implements OnInit {

  plan: Array<Recipe> = [ ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.plan = this.route.snapshot.data.plan;
  }

}
