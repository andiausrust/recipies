import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";
import {iM} from "@angular/core/src/render3";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
  })
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'Wiener Schnitzel',
      'Vom Kalb, frisch',
      'https://cdn.pixabay.com/photo/2016/11/19/02/22/schnipo-1837703_1280.jpg'
    ),
    new Recipe(
      'Grillhenderl',
      'Vom Spieß',
      'https://get.pxhere.com/photo/dish-food-cooking-meat-barbecue-cuisine-picnic-roasting-skewer-grilled-roasted-grilling-barbecue-grill-grilled-food-outdoor-grill-hendl-lechon-shashlik-churrasco-food-rotisserie-chicken-1132551.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
