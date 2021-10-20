import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NecessaryIngredient } from '../domain/NecessaryIngredient';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit {

  list: Array<NecessaryIngredient> = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.list = this.route.snapshot.data.list;
  }

}
