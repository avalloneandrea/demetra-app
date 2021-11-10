import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'category-tags',
  templateUrl: './category-tags.component.html',
  styleUrls: [ './category-tags.component.scss' ]
})
export class CategoryTagsComponent implements OnInit {

  @Input()
  categories!: Array<string>;

  isCarbie: boolean;
  isFruit: boolean;
  isVegetables: boolean;
  isMeat: boolean;
  isSeafood: boolean;
  isEggs: boolean;
  isLegumes: boolean;
  isDairy: boolean;

  constructor() {
    this.isCarbie = false;
    this.isFruit = false;
    this.isVegetables = false;
    this.isMeat = false;
    this.isSeafood = false;
    this.isEggs = false
    this.isLegumes = false
    this.isDairy = false
  }

  ngOnInit(): void {
    if (this.categories.some(category => category.indexOf('Cereals') >= 0))
      this.isCarbie = true;
    if (this.categories.some(category => category.indexOf('Potatoes') >= 0))
      this.isCarbie = true;
    if (this.categories.some(category => category.indexOf('Fruits') >= 0))
      this.isFruit = true;
    if (this.categories.some(category => category.indexOf('Vegetables') >= 0))
      this.isVegetables = true;
    if (this.categories.some(category => category.indexOf('Meat') >= 0))
      this.isMeat = true;
    if (this.categories.some(category => category.indexOf('Seafood') >= 0))
      this.isSeafood = true;
    if (this.categories.some(category => category.indexOf('Eggs') >= 0))
      this.isEggs = true;
    if (this.categories.some(category => category.indexOf('Legumes') >= 0))
      this.isLegumes = true;
    if (this.categories.some(category => category.indexOf('Dairy') >= 0))
      this.isDairy = true;
  }

}
