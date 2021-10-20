import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../domain/Recipe';

@Component({
  selector: 'plan',
  templateUrl: './plan.component.html',
  styleUrls: [ './plan.component.scss' ]
})
export class PlanComponent implements OnInit {

  plan: Array<Recipe> = [ ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.plan = this.route.snapshot.data.plan;
  }

  list(): void {
    this.router.navigate([ 'list' ], { queryParams: { recipes: this.plan.map(recipe => recipe.id) }});
  }

}
