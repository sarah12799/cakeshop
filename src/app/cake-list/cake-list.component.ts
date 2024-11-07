import { Component } from '@angular/core';

interface Cake {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  details: string;
}

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent {
  cakes: Cake[] = [
    {
      id: 1,
      name: 'Cheese cake',
      description: 'Un pur plaisir.',
      price: 12,
      imageUrl: './assets/images/products/cheesecakesmall.jpg',
      details: 'Voir détails'
    },
    {
      id: 2,
      name: 'Apple pie',
      description: 'Notre tarte de pommes vedette',
      price: 14,
      imageUrl: './assets/images/products/applepiesmall.jpg',
      details: 'Voir détails'
    },
    {
      id: 3,
      name: 'Cherry pie',
      description: 'La classique!',
      price: 18,
      imageUrl: './assets/images/products/cherrypiesmall.jpg',
      details: 'Voir détails'
    },
    {
      id: 4,
      name: 'Cranberry pie',
      description: 'En un mot ... Onctueuse !',
      price: 16,
      imageUrl: './assets/images/products/cranberrypiessmall.jpg',
      details: 'Voir détails'
    },
    {
      id: 5,
      name: 'Peach pie',
      description: 'Un délice!',
      price: 18,
      imageUrl: './assets/images/products/peachpiesmall.jpg',
      details: 'Voir détails'
    },
    {
      id: 6,
      name: 'Pumpkin pie',
      description: 'Le sommet du goût !',
      price: 17,
      imageUrl: './assets/images/products/pumpkinpiesmall.jpg',
      details: 'Voir détails'
    },
    {
      id: 7,
      name: 'Strawberry Cheese Cake',
      description: 'L\'authentique',
      price: 13,
      imageUrl: './assets/images/products/strawberrycheesecakesmall.jpg',
      details: 'Voir détails'
    }
  ];
}
