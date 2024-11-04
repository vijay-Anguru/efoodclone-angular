import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/model/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
food!:Foods;
  constructor(private route:ActivatedRoute, private fd:FoodService,
    private cartService:CartService, private router:Router ) {
    route.params.subscribe(params=>{
      if(params['id']){
        this.food = fd.getFoodById(params['id'])
      }
    })
   }

  ngOnInit(): void {
  }
addToCart(){
  this.cartService.addToCart(this.food);
  console.log(this.food)
  this.router.navigateByUrl('/Cart-page')
}
}
