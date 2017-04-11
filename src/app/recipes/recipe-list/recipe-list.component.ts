import { Component, OnInit } from '@angular/core';


import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Apple pie', 'with apples', 'https://images-gmi-pmc.edge-generalmills.com/e1e7fed5-0245-4ef6-9f85-f8f5e0c5ef76.jpg'),
    new Recipe('Apple pie', 'with apples', 'https://images-gmi-pmc.edge-generalmills.com/e1e7fed5-0245-4ef6-9f85-f8f5e0c5ef76.jpg'),
    new Recipe('Apple pie', 'with apples', 'https://images-gmi-pmc.edge-generalmills.com/e1e7fed5-0245-4ef6-9f85-f8f5e0c5ef76.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
